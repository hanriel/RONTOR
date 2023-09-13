

async function getData(decimalID : number) {
    const res = await fetch('https://api.rontor.hanriel.ru/computers/' + decimalID)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Info({ params }: { params: { id: string } }) {

    const decimalID = parseInt(params.id, 16);

    const data = await getData(decimalID)

    return <div>My INV: {decimalID}</div>
}