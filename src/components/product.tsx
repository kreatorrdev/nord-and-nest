'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Plus, ArrowUpRight, Package } from 'lucide-react';
import { useState } from 'react';
import { type Product, money } from '@/data/products';
import { useShop } from '@/lib/store';
export function ProductVisual({product,className='',zoom=false,priority=false}:{product:Product;className?:string;zoom?:boolean;priority?:boolean}) {
  const [failed,setFailed]=useState(false);
  return <div className={`product-art ${className} ${zoom?'zoomed':''}`}><div className="art-inner">{failed?<div className="image-fallback"><Package/><span>{product.name}</span></div>:<Image src={product.images[0]} alt={product.name} width={1254} height={1254} priority={priority} draggable={false} onError={()=>setFailed(true)} style={{left:`-${(product.tile%4)*100}%`,top:`-${Math.floor(product.tile/4)*100}%`}}/>}</div></div>;
}
export function ProductCard({product,index=0}:{product:Product;index?:number}) {const wish=useShop(s=>s.wishlist.includes(product.id)),toggle=useShop(s=>s.toggleWish),add=useShop(s=>s.add);return <article className="product-card reveal" style={{'--delay':`${(index%4)*70}ms`} as React.CSSProperties}>
  <div className="product-picture"><Link href={`/shop/${product.slug}/`} aria-label={`View ${product.name}`}><ProductVisual product={product}/></Link><span className="product-tag">{product.stockStatus==='sold-out'?'Resting for now':product.featured?'The considered edit':null}</span><button className={`wish-button ${wish?'saved':''}`} onClick={()=>toggle(product.id)} aria-label={`${wish?'Remove':'Save'} ${product.name} ${wish?'from':'to'} wishlist`} aria-pressed={wish}><Heart size={18} fill={wish?'currentColor':'none'}/></button><button className="quick-add" disabled={product.stockStatus==='sold-out'} onClick={()=>add(product.id)} aria-label={`Add ${product.name} to bag`}><span>{product.stockStatus==='sold-out'?'Out of stock':'Add to bag'}</span><Plus size={18}/></button></div>
  <div className="product-info"><div><span className="product-category">{product.category}</span><Link href={`/shop/${product.slug}/`}><h3>{product.name}</h3></Link></div><span className="price">{money(product.price)}</span></div><div className="swatches"><i style={{background:product.variants[0].color}}/><span>{product.material.split(',')[0]}</span><ArrowUpRight size={14}/></div>
  </article>;}
