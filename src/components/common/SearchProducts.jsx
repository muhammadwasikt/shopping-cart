import { Card, useParams, useSelector } from "../../utils/imports"

const noProductFound = "/assets/images/product-not-found.jpeg"
const SearchProducts = () => {

    const { title } = useParams()
    const products = useSelector(item => item?.product?.allProducts?.products)
    const searchProduct = products?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))

    return (
        <>
            {searchProduct.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center gap-3 w-full pt-[40px] pb-2 px-3 max-sm:px-8">
                    {
                        searchProduct?.map((item) => {
                            return (
                                <Card key={item.id} item={item} />
                            )
                        })
                    }
                </div>
                :
                <div className="flex justify-center">
                    <img src={noProductFound} alt="" />
                </div>
            }
        </>
    )
}

export default SearchProducts

