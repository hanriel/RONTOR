"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import {DataTableRowActions} from "@/components/ui/data-table-row-actions";
import {DataTableColumnHeader} from "@/components/ui/data-table-column-header";

export type Computer = {
    id: number
    inv: number
    floor: number
    type: number
    model: string
    os: number
    cpu: string
    cpu_cores: number
    cpu_base: number
    ram_slots: number
    ram_type: number
    ram_modules: number
    ram_size: number
    disk_type: boolean
    disk_space: number
    speak: boolean
    mic: boolean
    usb: number
    hdmi: number
    vga: boolean
    dvi: number
    wan: boolean
    psu: number
    photo: string
}

export const columns: ColumnDef<Computer>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "inv",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Инв. №" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'hostname',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Имя" />
        ),
        cell: ({ row }) => <div className="w-[40px]">{row.getValue("hostname")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Тип" />
        ), },
    {
        accessorKey: "model",
        header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Модель" />
        ),
    },
    {
        accessorKey: "os",
        header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ОС" />
        ),
    },
    {
        accessorKey: "cpu",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ЦПУ" />
        ),
        cell: ({ row }) => <div className="w-[200px]">{
            row.getValue("cpu") } @ { row.getValue("cpu_cores") }x{
            row.getValue('cpu_base') / 100}ГГц </div>,
    },
    {
        accessorKey: "ram_size",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ОЗУ" />
        ),
        cell: ({ row }) => <div className="w-[40px]">DDR{
            row.getValue("ram_type") } {
            row.getValue("ram_size") }Гб</div>,
    },
    {
        accessorKey: "disk_space",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ПЗУ" />
        ),
        cell: ({ row }) => <div className="w-[40px]">{
            row.getValue("disk_space") }Гб</div>,
    },
    { id: "actions", cell: ({ row }) => <DataTableRowActions row={row} />, },
    { accessorKey: "ram_type", },
    { accessorKey: "cpu_cores", },
    { accessorKey: "cpu_base", },
]