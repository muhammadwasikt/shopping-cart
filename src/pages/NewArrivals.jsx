import { Card, useSelector } from "../utils/imports"


const NewArrivals = () => {

  const data = useSelector(state => state?.product?.allProducts?.products)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3 pt-10 max-sm:px-8">
      {
        data?.slice(0,50).map((data) => <Card item={data} key={data.id} badge />)
      }

    </div>
  )
}

export default NewArrivals
