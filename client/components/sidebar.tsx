import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {Button} from "@/components/ui/button";
import {DotFilledIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Computer} from "@/components/columns";

interface ISidebarProps {className : string, comps : Computer[] }

export function Sidebar(props: ISidebarProps) {

    return (
        <ScrollArea className="h-full">
        <div className={cn("pb-12", props.className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Компьютеры
                    </h2>
                    <div className="space-y-1">
                        {props.comps.map(comp =>
                            <Card>
                                <Button className='float-right' variant="ghost" size="icon"><DotsVerticalIcon/></Button>
                                <CardHeader>
                                    <CardTitle>
                                        <DotFilledIcon width='1.5rem' height='1.5rem' className='float-left'
                                                       color='lime'/>{comp.model}
                                    </CardTitle>
                                    <CardDescription>36 кабинет</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Badge className='mr-1'>{comp.inv}</Badge>
                                    <Badge
                                        className='mr-1'>{comp.cpu + " " + comp.cpu_cores + "@" + (comp.cpu_base / 100) + "ГГц"}</Badge>
                                    <Badge className='mr-1'>{" DDR" + comp.ram_type}</Badge>
                                    <Badge className='mr-1'>{comp.ram_size + "Гб"}</Badge>
                                    <Badge>{comp.disk_space + "Гб"}</Badge>
                                    {/*{comp.cpu + " " + comp.cpu_cores + "@" + (comp.cpu_base/100) + "ГГц"}*/}
                                    {/*<br/>*/}
                                    {/*{" DDR" + comp.ram_type + "-" +comp.ram_size + "Гб / " + comp.disk_space + "Гб" }*/}
                                </CardContent>
                            </Card>)}

                        {/* COMPACT VARIOATION */}
                        {/*<div className='flex items-center space-x-4 rounded-md border p-4'>*/}
                        {/*    <DotFilledIcon color='lime'/>*/}
                        {/*    <div className="flex-1 space-y-1">*/}
                        {/*        <p className="text-sm font-medium leading-none">*/}
                        {/*            {comp.model}*/}
                        {/*        </p>*/}
                        {/*        <p className="text-xs text-muted-foreground">*/}
                        {/*            {comp.cpu + " " + comp.cpu_cores + "@" + (comp.cpu_base/100) + "ГГц"}*/}
                        {/*            <br/>*/}
                        {/*            {*/}
                        {/*                " DDR" + comp.ram_type + "-" +comp.ram_size + "Гб / " +*/}
                        {/*                comp.disk_space + "Гб"*/}
                        {/*            }*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*    <Button variant="outline" size="icon"><DotsVerticalIcon /></Button>*/}
                        {/*</div>*/}

                    </div>

                </div>
            </div>
        </div>
        </ScrollArea>
    )
}
