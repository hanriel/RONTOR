"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//import { taskSchema } from "../data/schema"

const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
]

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({ row, }: DataTableRowActionsProps<TData>) {
    //const task = taskSchema.parse(row.original)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Открыть меню</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>Изменить</DropdownMenuItem>
                <DropdownMenuItem>Дублировать</DropdownMenuItem>
                <DropdownMenuItem>Избранное</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Метки</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        {/*value={task.label}*/}
                        <DropdownMenuRadioGroup>
                            {labels.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Удалить
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}