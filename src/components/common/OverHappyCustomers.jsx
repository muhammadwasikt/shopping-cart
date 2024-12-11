import { Card, userReveiws } from "../../utils/imports"



const OverHappyCustomers = () => {
  return (
    <div className="py-10 text-center">
            <h1 className="text-3xl font-bold mb-7 tracking-tighte">OUR HAPPY CUSTOMERS</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3 max-sm:px-8'>
      {
        userReveiws.map((data)=> <Card item={data} key={data.id} badge/>)
      }
    </div>
    </div>
  )
}

export default OverHappyCustomers

