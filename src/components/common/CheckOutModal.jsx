import { MdDeleteOutline, setAddToCart, setDeleteCart, setLessToCart, useDispatch, useNavigate, useSelector } from "../../utils/imports"

const CheckOutModal = () => {

    const cart = useSelector(item => item?.addToCart.addToCart)
    const product = useSelector(item => item?.product?.allProducts?.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toatalAmount = cart.reduce((acc, current) => {
        return acc + current.price
    }, 0)
    const toatalQty = cart.reduce((acc, current) => {
        return acc + current.quantity
    }, 0)

    return (
        <div>
            {cart.length > 0 &&
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box max-w-[600px] flex flex-col gap-3">
                        <h3 className="font-bold text-2xl text-center">YOUR CART</h3>
                        <div className="w-full h-[130px] max-sm:h-[190px] overflow-scroll flex flex-col gap-3">
                            {
                                cart?.map(item => {
                                    return (
                                        <div key={item.id} className="flex items-center border gap-3 relative max-sm:flex-col" >
                                            <div className="flex items-center w-full">
                                                <img src={item.image} className="h-28 object-contain border-r" />
                                                <div className="w-full flex flex-col gap-1">
                                                    <h4 className="font-bold">{item.title.slice(0, 30).toUpperCase()}...</h4>
                                                    <p className="text-sm">QUANTITY: <span className="text-lg font-bold">{item.quantity}</span></p>
                                                    <p className="text-sm">TOTAL PRICE: <span className="text-lg font-bold">{item.price}</span></p>
                                                </div>
                                            </div>
                                            <div className="flex self-end p-2">
                                                {product?.map((data) => {
                                                    if (data.id == item.id) {
                                                        return (
                                                            <div key={data.id} className="flex gap-2">
                                                                <button className="btn" onClick={() => dispatch(setLessToCart(data))}>-</button>
                                                                <button className="btn ml-2" onClick={() => dispatch(setAddToCart(data))}>+</button>
                                                            </div>
                                                        )
                                                    }
                                                })
                                                }
                                            </div>
                                            <MdDeleteOutline className="absolute top-1 right-2 text-red-600 text-xl" onClick={() => dispatch(setDeleteCart(item))} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="my-2">
                            <p className="text-lg font-bold">Total Quantity: {toatalQty}</p>
                            <p className="text-lg font-bold">Total Amount: $ {toatalAmount}</p>
                        </div>
                        <div className="modal-action bottom-3 w-full flex px-4 justify-between">
                            <button className="btn" onClick={() => navigate('/payment-form')}>Buy Now</button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    )
}

export default CheckOutModal
