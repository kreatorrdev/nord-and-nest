'use client';
import { create } from 'zustand';
import { addItem, keyOf, sanitizeCart, type CartItem } from './catalog';
import { products } from '../data/products';
type State = {cart:CartItem[];wishlist:string[];ready:boolean;drawer:boolean;toast:string;storageWarning:boolean;hydrate:()=>void;add:(id:string,variant?:string,qty?:number)=>void;quantity:(key:string,qty:number)=>void;remove:(key:string)=>void;toggleWish:(id:string)=>void;clear:()=>void;setDrawer:(open:boolean)=>void;notify:(message:string)=>void};
let timer: ReturnType<typeof setTimeout>;
const persist = (cart:CartItem[],wishlist:string[]) => {try {localStorage.setItem('nord-nest-v1', JSON.stringify({cart,wishlist}));return true;}catch{return false;}};
export const useShop = create<State>((set,get)=>({
  cart:[],wishlist:[],ready:false,drawer:false,toast:'',storageWarning:false,
  hydrate:()=> {if(get().ready)return;try {const raw=JSON.parse(localStorage.getItem('nord-nest-v1')||'{}');set({cart:sanitizeCart(raw?.cart),wishlist:Array.isArray(raw?.wishlist)?[...new Set<string>(raw.wishlist.filter((id:unknown)=>typeof id==='string' && products.some(p=>p.id===id)))]:[],ready:true});}catch{set({ready:true});}},
  add:(id,variant='original',qty=1)=>{const previous=get().cart;const cart=addItem(previous,id,variant,qty);if(cart.reduce((n,i)=>n+i.quantity,0)===previous.reduce((n,i)=>n+i.quantity,0)){get().notify('Your bag has reached the limit of 10 for this option.');return;}set({cart,storageWarning:!persist(cart,get().wishlist)});get().notify('A little lovely, added to your bag.');},
  quantity:(key,qty)=>{if(!Number.isInteger(qty))return;const cart=get().cart.map(i=>keyOf(i)===key?{...i,quantity:Math.max(1,Math.min(10,qty))}:i);set({cart,storageWarning:!persist(cart,get().wishlist)});},
  remove:key=>{const cart=get().cart.filter(i=>keyOf(i)!==key);set({cart,storageWarning:!persist(cart,get().wishlist)});},
  toggleWish:id=>{if(!products.some(p=>p.id===id))return;const wishlist=get().wishlist.includes(id)?get().wishlist.filter(x=>x!==id):[...get().wishlist,id];set({wishlist,storageWarning:!persist(get().cart,wishlist)});},
  clear:()=>{set({cart:[],storageWarning:!persist([],get().wishlist)});},
  setDrawer:drawer=>set({drawer}),
  notify:toast=>{clearTimeout(timer);set({toast});timer=setTimeout(()=>set({toast:''}),3500);},
}));
