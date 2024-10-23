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
    eth_mac: string
    wifi_mac: string
    ip_reserv: number
    security_soft: boolean
    vipnet_license: string
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
        accessorKey: "inv",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Инв. №" />
        ),
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
            row.getValue('cpu_base') as number / 100}ГГц </div>,
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
    {
        accessorKey: "eth_mac",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ETH MAC" />
        ),
    },
    { 
        accessorKey: "wifi_mac",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="WIFI MAC" />
        ),
    },
    {
        accessorKey: "ip_reserv",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="IP-адресс" />
        ),
    },
    {
        accessorKey: "vipnet_license",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="VipNet" />
        ),
    },
    { accessorKey: "cpu_cores", },
    { accessorKey: "cpu_base", },
    { accessorKey: "ram_type", },
    { id: "actions", cell: ({ row }) => <DataTableRowActions row={row} />, },
]