'use client'

import dynamic from "next/dynamic";
import {Sidebar} from "@/components/sidebar";

const Canvas = dynamic(() => import('@/components/canvas'), {
    ssr: false,
});

async function getTasks() {
    const res = await fetch('https://rontor-api.hanriel.ru/computers', { cache: "no-cache" })
    if (!res.ok) { throw new Error('Failed to fetch data') }
    return res.json();
}

export default async function Home() {

    const props = {
        className: 'hidden lg:block',
        comps: await getTasks(),
    };

    return (
        <>
            <div className="grid lg:grid-cols-5 h-[90vh]">
                <Sidebar {...props} className="hidden lg:block" />
                <Canvas {...props} className='col-span-3 lg:col-span-4 lg:border-l' />
            </div>
        </>

    );
}
