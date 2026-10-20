'use client';
import Link from 'next/link';
import {ArrowUpRight,Heart} from 'lucide-react';
import {products} from '@/data/products';
import {useShop} from '@/lib/store';
import {ProductCard} from './product';
export function Wishlist(){const wishlist=useShop(s=>s.wishlist),ready=useShop(s=>s.ready);const list=products.filter(p=>wishlist.includes(p.id));return <div className="section wishlist-page"><div className="page-intro"><p className="eyebrow">A LITTLE COLLECTION OF YOUR OWN</p><h1>Close to <em>heart.</em></h1><p>Keep the pieces you love here. Come back whenever it feels right.</p></div>{!ready?<p role="status">Finding your saved pieces…</p>:list.length?<div className="product-grid">{list.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>:<div className="empty"><Heart size={42} strokeWidth={1}/><h2>Something will catch your eye.</h2><p>Tap the heart on any piece to save it for later.</p><Link className="button dark" href="/shop/">Find a favourite <ArrowUpRight size={18}/></Link></div>}</div>;}
