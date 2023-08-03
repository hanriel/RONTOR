import {Button} from "@/components/ui/button";
import {DataTable} from "@/components/ui/data-table";
import { columns } from "@/components/columns";
import Image from 'next/image'
import {UserNav} from "@/components/user-nav";
import {ThemeToggle} from "@/components/theme-toggle";

async function getTasks() {
    const res = await fetch('http://localhost:7777/computers', { cache: "no-cache" })
    if (!res.ok) { throw new Error('Failed to fetch data') }

    return res.json()
}

export default async function Home() {
    const tasks = await getTasks()

    return (
    <>
        <div className="container relative">
            <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                <div className="md:hidden">
                    <Image
                        src="/examples/tasks-light.png"
                        width={1280}
                        height={998}
                        alt="Playground"
                        className="block dark:hidden"
                    />
                    <Image
                        src="/examples/tasks-dark.png"
                        width={1280}
                        height={998}
                        alt="Playground"
                        className="hidden dark:block"
                    />
                </div>
                <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                    <div className="flex items-center justify-between space-y-2">
                        <Image src='/Logo_Dark_Badge.png' alt='Logo' width={120} height={40} className='space-x-2'/>
                        <div className="flex items-center space-x-2">
                            <UserNav />
                            <ThemeToggle />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">С возвращением!</h2>
                        <p className="text-muted-foreground">
                            Сдесь список АРМ учреждения!
                        </p>
                    </div>
                  <DataTable data={tasks} columns={columns} />
                </div>
            </div>
        </div>
    </>
  )
}
