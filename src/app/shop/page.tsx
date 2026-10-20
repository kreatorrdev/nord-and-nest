import {Suspense} from 'react';
import {Shop} from '@/components/shop';
export const metadata={title:'The collection'};
export default function Page(){return <Suspense fallback={<div className="section page-intro"><h1>The collection.</h1><p>Finding your thoughtful pieces…</p></div>}><Shop/></Suspense>;}
