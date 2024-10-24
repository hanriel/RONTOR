import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

async function getData(decimalID : number) {
    const res = await fetch('https://rontor-api.hanriel.ru/computers/' + decimalID, { cache: "no-cache" })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    if(res.status == 400) return null;
    return res.json()
  }

export default async function Info({ params }: { params: { id: string } }) {

    const decimalID = parseInt(params.id, 16)

    const data = await getData(decimalID)    
    if(data == null) {
      return(<h1>400 / Bad Request!</h1>)
    }
    
    return(
      <>
        <Image
        src={data.photo}
        width={512}
        height={512}
        alt='comp'/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow>
                <TableCell className="font-medium">Инвентарный номер</TableCell>
                <TableCell>{data.inv}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Имя в сети</TableCell>
                <TableCell>{data.hostname}</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="font-medium">Тип</TableCell>
                <TableCell>{data.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Модель</TableCell>
                <TableCell>{data.model}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Год релиза</TableCell>
                <TableCell>{data.os}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Операционная система</TableCell>
                <TableCell>{data.os == 0 ? "Windows" : "Linux" }</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Модель процессора</TableCell>
                <TableCell>{data.cpu}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Общее количество ядер </TableCell>
                <TableCell>{data.cpu_cores}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Частота процессора</TableCell>
                <TableCell>{data.cpu_base / 100} ГГц</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Тип оперативной памяти</TableCell>
                <TableCell>DDR{data.ram_type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Объем оперативной памяти</TableCell>
                <TableCell>{data.ram_size}ГБ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Количество слотов под модули памяти</TableCell>
                <TableCell>{data.ram_slots}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Свободные слоты для оперативной памяти</TableCell>
                <TableCell>{data.ram_slots - data.ram_modules}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Тип накопителя</TableCell>
                <TableCell>{data.disk_type ? "SSD" : "HDD"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Общий объем накопителей</TableCell>
                <TableCell>{data.disk_space}ГБ</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Беспроводной интерфейс</TableCell>
                <TableCell>Bluetooth 5.1, WI-FI 5 (802.11ac)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Порт Ethernet</TableCell>
                <TableCell>{data.wan ? "есть" : "нет"}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Видеоразъемы</TableCell>
                <TableCell>{(data.hdmi ? "HDMI":"") + (data.vga ? "VGA":"") + (data.dvi ? "DVI" : "")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Аудиоразъемы</TableCell>
                <TableCell>3.5 мм jack ({data.mic ? "аудио) + (микрофон)" : "микрофон/аудио)"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Разъемы USB Type-A</TableCell>
                <TableCell>{data.usb} шт.</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Мощность блока питания</TableCell>
                <TableCell>{data.psu}</TableCell>
              </TableRow>

          </TableBody>
        </Table>
      </>
    )
}