import { Card, useSelector } from "../utils/imports"


const Sales = () => {

  const data = useSelector(state => state?.product?.allProducts?.products)
  const discountedProducts = data?.filter(item => item?.discount > 0)
  return (
    <>
    <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wider text-center p-3">Sale</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3 pt-10 max-sm:px-8">
      {
        discountedProducts?.map((data) => <Card item={data} key={data.id} badge />)
      }

    </div>
    </>
  )
}

export default Sales
