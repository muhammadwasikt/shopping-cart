import { CartData, HiBars3, Link, MdAddShoppingCart, useNavigate, useSelector } from '../../utils/imports'

const Drawer = ({ category, addToCart }) => {

    const cart = useSelector(item => item?.addToCart.addToCart)
    const data = useSelector(state => state?.product?.allProducts?.products)
    const cat = [...new Set(data?.map(item => item.category))]
    const navigate = useNavigate()

    const handleClick = (cat) => {
        navigate(`/products/${cat}`)
    }
    return (
        <div className={category ? 'drawer-end' : addToCart ? 'drawer-end' : null}>
            {category ?
                <>
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button">Categories</label>
                    </div>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
                            <h1 className='text-2xl font-bold pb-3 mb-3 border-b-2'>CATEGORIES</h1>
                            {cat?.map((item, index) => (
                                <label htmlFor="my-drawer-4" key={index} aria-label="close sidebar" onClick={() => handleClick(item)} className='text-lg py-1 border-b-2 flex items-center gap-3'>
                                    <input type="radio" name='check' />
                                    {item.toUpperCase()}
                                </label>
                            ))}
                        </ul>
                    </div>
                </>
                : addToCart ?
                    <>
                        <input id="my-drawers" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <div className="indicator">
                                {cart.length > 0 ? <span className="indicator-item badge badge-error cursor-pointer">{cart.length}</span> : null}
                                <div className="tooltip tooltip-bottom text-textColor" data-tip="Add to cart">
                                    <label htmlFor="my-drawers" className="btn drawer-button">
                                        <MdAddShoppingCart className="text-2xl text-textColor " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawers" aria-label="close sidebar" className="drawer-overlay"></label>
                            <CartData />
                        </div>
                    </>
                    :
                    <>
                        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate hidden max-lg:inline-flex">
                                <HiBars3 className="text-3xl" />
                            </label>
                        </div>
                        <div className="drawer-side mt-[72px]">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 leading-7">
                                <label htmlFor="my-drawer" aria-label="close sidebar" ><Link to='/home'>Home</Link></label>
                                <label htmlFor="my-drawer" aria-label="close sidebar" ><Link to='/products'>Products</Link></label>
                                <label htmlFor="my-drawer" aria-label="close sidebar" ><Link to='/new-arrivals'>New Arrivals</Link></label>
                                <label htmlFor="my-drawer" aria-label="close sidebar" >
                                    <div className='drawer-end'>
                                    <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer-5" className="drawer-button">Categories</label>
                                    </div>
                                    <div className="drawer-side z-10">
                                        <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
                                            <h1 className='text-2xl font-bold pb-3 mb-3 border-b-2'>CATEGORIES</h1>
                                            {cat?.map((item, index) => (
                                                <label htmlFor="my-drawer-5" key={index} aria-label="close sidebar" onClick={() => handleClick(item)} className='text-lg py-1 border-b-2 flex items-center gap-3'>
                                                    <input type="radio" name='check' />
                                                    {item.toUpperCase()}
                                                </label>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                </label>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Drawer
