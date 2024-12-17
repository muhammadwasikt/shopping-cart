import { CheckOutModal, MdDeleteOutline, setDeleteCart, useDispatch, useSelector } from "../../utils/imports";


const CartData = () => {

    const cart = useSelector(item => item?.addToCart.addToCart)
    const dispatch = useDispatch()

    const handleRemoveItem = (id) => {
        dispatch(setDeleteCart(id))
    }

    const toatalAmount = cart.reduce((acc , current)=>{
        return acc + current.price
    },0)

    return (
        <>
            <ul className="menu text-base-content min-h-full w-80 p-4 bg-white">
                {/* Sidebar content here */}
                <h1 className='text-2xl font-bold pb-3 mb-3 border-b-2'>CART PRODUCTS</h1>
                <div className='flex flex-col gap-6 '>
                    {cart.length > 0 ?
                        <div className="flex flex-col gap-6 h-[70vh] overflow-scroll">
                            {cart.map((item) => {
                                const { id, title, price, image, quantity } = item
                                return (
                                    <div key={id} className='flex gap-3 border'>
                                        <img src={image} className='h-[110px] object-contain w-[110px]' />
                                        <div className='flex flex-col'>
                                            <h1 className='text-[16px] font-bold h-[65px]'>{title?.slice(0, 45)}...</h1>
                                            <p>Quantity: {quantity}</p>
                                            <div className='flex justify-between items-center pr-2'>
                                                <p className='text-lg font-extrabold'>Price: $ {price}</p>
                                                <MdDeleteOutline className='text-2xl font-extrabold text-red-600' onClick={() => handleRemoveItem({ id })} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> : <p className='text-lg font-bold text-center py-3'>No Data Found</p>
                    }
                </div>
                {
                    cart.length > 0 && <div className="flex justify-between items-center absolute bottom-3 w-72">
                        <p className="text-lg font">Total Price: {toatalAmount}</p>
                        <button className="btn " onClick={() => document.getElementById('my_modal_1').showModal()}>Check Out</button>
                    </div> 
                }
            </ul>
            <CheckOutModal />
        </>
    )
}

export default CartData
