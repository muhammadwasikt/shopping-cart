import { Card, useParams, useSelector } from "../utils/imports"


const Categories = () => {

  const { category } = useParams()
  const data = useSelector(state => state?.product?.allProducts?.products)
  const filterData = data?.filter((item) => item.category === category);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3 max-sm:px-8 mt-5">
      {
        filterData?.map((data) => <Card item={data} key={data.id} badge />)
      }

    </div>
  )
}

export default Categories
