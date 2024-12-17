import { useSelector , useParams, UserLertModal, useDispatch, MdAddShoppingCart } from "../../utils/imports"


const ProductModal = () => {

    const {id} = useParams()
    const data = useSelector(state => state?.product?.allProducts?.products)
    const product = data?.find(item => item.id == id)
    const isUser = useSelector(item => item?.users.user)
    const dispatch = useDispatch()

    if (!product) {
        return null
    }
        const { brand, category, color, description, discount, image, model, popular, price, title } = product

    return (
        <div className="w-full">
            <div className="w-full p-3">
                <div className="w-full flex justify-center">
            <div className="indicator">
            {popular && <span className="indicator-item badge badge-secondary">Popular</span>}
            <img src={image} className="object-contain h-[20rem] w-full"/>
            </div>
            </div>
            <div className="flex flex-col gap-5 p-3 px-4">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center justify-between gap-2">
            <h2 className="text-xl font-bold cursor-pointer">Price: $<span>{price}</span></h2>
            <button className="flex items-center gap-1 btn" onClick={() => { isUser.length > 0 ? dispatch(setAddToCart(item)) : document.getElementById('user_modal').showModal() }}><MdAddShoppingCart className="text-xl"/> Add To Cart</button>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 w-full p-2 px-3 max-sm:px-8">
            <p className="text-lg p-2 font-bold px-4 shadow-lg border flex flex-wrap gap-1 items-center cursor-pointer">Brand: <span className="font-normal">{brand}</span></p>
            <p className="text-lg p-2 font-bold px-4 shadow-lg border flex flex-wrap gap-1 items-center cursor-pointer">Color: <span className="font-normal">{color}</span></p>
            <p className="text-lg p-2 font-bold px-4 shadow-lg border flex flex-wrap gap-1 items-center cursor-pointer">Model: <span className="font-normal">{model}</span></p>
            {discount && <p className="text-lg p-2 font-bold px-4 shadow-lg border flex flex-wrap gap-1 items-center cursor-pointer">Discount: <span className="font-normal">{discount}%</span></p>}
            </div>
            </div>
            <UserLertModal isUser/>
        </div>
    )
}

export default ProductModal
