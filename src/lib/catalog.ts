import { products, type Product } from '../data/products';
export type CartItem = { productId: string; variantId: string; quantity: number; unitPriceSnapshot: number };
export const keyOf = (item: Pick<CartItem, 'productId' | 'variantId'>) => `${item.productId}:${item.variantId}`;
export function sanitizeCart(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];
  const result: CartItem[] = [];
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue;
    const p = products.find(p => p.id === item.productId && p.stockStatus === 'in-stock');
    if (!p || !p.variants.some(v => v.id === item.variantId) || !Number.isInteger(item.quantity) || item.quantity <= 0) continue;
    const previous = result.find(row => keyOf(row) === keyOf(item));
    if (previous) previous.quantity = Math.min(10, previous.quantity + item.quantity);
    else result.push({productId:p.id, variantId:item.variantId, quantity:Math.min(10,item.quantity), unitPriceSnapshot:p.price});
  }
  return result;
}
export function addItem(cart: CartItem[], productId: string, variantId='original', quantity=1): CartItem[] {
  const product = products.find(p => p.id === productId && p.stockStatus === 'in-stock');
  if (!product || !product.variants.some(v => v.id === variantId) || !Number.isInteger(quantity) || quantity < 1) return cart;
  return sanitizeCart([...cart, {productId,variantId,quantity,unitPriceSnapshot:product.price}]);
}
export const subtotal = (cart: CartItem[]) => Math.round(cart.reduce((sum,item)=>sum + item.quantity * (products.find(p=>p.id===item.productId)?.price ?? 0), 0)*100)/100;
export function filterProducts(list: Product[], options: {query?:string;category?:string;maxPrice?:number;inStock?:boolean;sort?:string}) {
  const q = (options.query || '').trim().toLowerCase();
  const filtered = list.filter(p => (!q || `${p.name} ${p.category} ${p.material}`.toLowerCase().includes(q)) && (!options.category || options.category === 'All objects' || p.category === options.category) && p.price <= (options.maxPrice ?? Infinity) && (!options.inStock || p.stockStatus === 'in-stock'));
  if (options.sort === 'price-low') filtered.sort((a,b)=>a.price-b.price);
  if (options.sort === 'price-high') filtered.sort((a,b)=>b.price-a.price);
  if (options.sort === 'name') filtered.sort((a,b)=>a.name.localeCompare(b.name));
  return filtered;
}
