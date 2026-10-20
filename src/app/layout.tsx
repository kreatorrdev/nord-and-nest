import type { Metadata } from 'next';
import { Shell } from '@/components/shell';
import './globals.css';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://nord-nest-living.rollacatfull.chatgpt.site');
export const metadata: Metadata = {metadataBase:new URL(siteUrl),title:{default:'Nord & Nest — Thoughtful pieces for everyday living',template:'%s · Nord & Nest'},description:'A considered collection of ceramics, soft textiles and warm light. Explore Nord & Nest, an interactive home décor portfolio concept.',openGraph:{title:'Nord & Nest — A slower pace. A softer space.',description:'Thoughtful pieces for everyday living. A home décor portfolio concept.',images:['/images/interior.png']},icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><Shell>{children}</Shell></body></html>;}
