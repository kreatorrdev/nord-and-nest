import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
export default function NotFound(){return <div className="section empty not-found"><p className="eyebrow">404 / A LITTLE OFF THE BEATEN PATH</p><h1>This corner is<br/><em>still empty.</em></h1><p>Let’s find you something lovely somewhere else.</p><Link href="/shop/" className="button dark">Back to the collection <ArrowRight size={18}/></Link></div>;}
