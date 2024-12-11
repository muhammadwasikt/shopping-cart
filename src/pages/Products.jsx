import { Card, useSelector } from "../utils/imports"

const Products = () => {
  const data = useSelector(state => state?.product?.allProducts?.products)

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full pt-[40px] pb-2 px-3 max-sm:px-8">
      {
        data?.map((item)=>{
          return(
          <Card key={item.id} item={item} />
          )
        })
      }
    </div>
  )
}

export default Products
