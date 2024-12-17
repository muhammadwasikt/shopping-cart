import { useNavigate } from "react-router"
import { CiSearch, Drawer, NavLinks, PiSignInThin, ProfileDropdown, SignIn, SearchField, useEffect, useForm, useState, useSelector } from "../utils/imports"


const Header = () => {

    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()
    const [isOpen , setIsOpen] = useState(false)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { searchValue } = data;
        if (searchValue.length > 1) {
            navigate(`/products/search/${searchValue}`)
        }
    }

    useEffect(() => {
        if (window.innerWidth < 640) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    })

    const isUser = useSelector(item => item.users.user)


    return (
        <div className="justify-between sticky top-0 z-10 border navbar bg-base-100 h-20 w-full">
            <Drawer />
            <div className="flex flex-col justify-center max-sm:w-full sm:px-4 px-1">
                <p className="text-lg font-extrabold tracking-tightest text-textColor max-sm:text-[16px]">SHOPPING </p>
                <p className="text-secondary text-sm mt-[-5px] px-2 font-normal text-center tracking-widest">CART</p>
            </div>
            <div className="w-full">
                <NavLinks />
            </div>
            <SearchField open={isOpen} setOpen={setIsOpen}/>
            <div className="w-full ">
                {!isMobile &&
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-between bg-primary rounded-md w-[100%]">
                        <div className="relative w-full">
                            <input type="text" placeholder="Search products" className="outline-none px-3 w-full" {...register("searchValue", { required: true })}/>
                            {errors.searchValue && <span className="text-red-500 text-[10px] absolute left-0 top-8">This field is required</span>}
                        </div>
                        <input type="submit" id="submit" className="hidden" />
                        <label htmlFor="submit" className="btn"><CiSearch className="text-xl flex-end" /></label>
                    </form>}
            </div>
            <div className="flex justify-end items-center gap-3 max-sm:w-full pl-5">
                {isMobile && <button className="btn" onClick={()=>setIsOpen(true)}><CiSearch className="text-xl" /></button>}
                <Drawer addToCart />
                {isUser.length > 0 ?
                    <ProfileDropdown />
                    :
                    <div className="tooltip tooltip-bottom text-textColor" data-tip="Sign In">
                        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}><PiSignInThin className="text-2xl text-textColor" /></button>
                    </div>
                }
            </div>
            <SignIn />
        </div>
    )
}

export default Header
