import {Button} from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {DataTable} from "@/components/ui/data-table";
import { columns } from "@/components/columns";
import Image from 'next/image'

async function getTasks() {
    const res = await fetch('https://api.rontor.hanriel.ru/computers', { cache: "no-cache" })
    if (!res.ok) { throw new Error('Failed to fetch data') }

    return res.json()
}

export default async function Home() {
    const tasks = await getTasks()

    return (
    <>
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
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Таблицы</h2>
                <div className="flex items-center space-x-2">
                    <Button>Скачать</Button>
                </div>
            </div>
            <Tabs defaultValue="computers" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="computers">Компьютеры</TabsTrigger>
                    <TabsTrigger value="monitors">Мониторы</TabsTrigger>
                    <TabsTrigger value="projectors">Проекторы</TabsTrigger>
                    <TabsTrigger value="printers">Принтеры</TabsTrigger>
                    <TabsTrigger value="network">Сетевое оборудование</TabsTrigger>
                </TabsList>
                <TabsContent value="computers" className="space-y-4">
                    <DataTable data={tasks} columns={columns} />
                </TabsContent>
                <TabsContent value="monitors" className="space-y-4">
                    <DataTable data={tasks} columns={columns} />
                </TabsContent>
                <TabsContent value="projectors" className="space-y-4">
                    <DataTable data={tasks} columns={columns} />
                </TabsContent>
                <TabsContent value="printers" className="space-y-4">
                    <DataTable data={tasks} columns={columns} />
                </TabsContent>
                <TabsContent value="network" className="space-y-4">
                    <DataTable data={tasks} columns={columns} />
                </TabsContent>
            </Tabs>
        </div>
    </>
  )
}
