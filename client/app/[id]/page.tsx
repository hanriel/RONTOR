import Image from 'next/image'

async function getData(decimalID : number) {
    const res = await fetch('https://api.rontor.hanriel.ru/computers/' + decimalID, { cache: "no-cache" })
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Info({ params }: { params: { id: string } }) {

    const decimalID = parseInt(params.id, 16)

    const data = await getData(decimalID)

    // {"id":2,"inv":"10104000001","hostname":"z341-1","type":1,"model":"HUAWEI MateBook 14S HKF-X","os":0,"cpu":"Intel Core i7-12700H","cpu_cores":12,"cpu_base":230,"ram_slots":2,"ram_type":5,"ram_modules":1,"ram_size":16,"disk_type":true,"disk_space":1000,"speak":true,"mic":false,"usb":4,"hdmi":1,"vga":false,"dvi":0,"wan":true,"psu":0,"photo":"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"}

    return(
      <>
        <p>{ JSON.stringify(data) }</p>
        <h1>{data.hostname}</h1>
        <h2>{data.model}</h2>
        <p>{data.inv}</p>
      </>
    )
}