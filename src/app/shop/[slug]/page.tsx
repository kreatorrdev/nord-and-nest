import {products} from '@/data/products';
import {Details} from '@/components/details';
import {notFound} from 'next/navigation';
export const dynamicParams=false;
export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);return {title:p?.name||'Piece not found',description:p?.description};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(p=>p.slug===slug);if(!p)notFound();return <Details product={p}/>;}
