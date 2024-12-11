import { CiSearch, Drawer, NavLinks, PiSignInThin, ProfileDropdown, SignIn,SearchField , useEffect, useForm, useState } from "../utils/imports"


const Header = () => {

    const [isMobile , setIsMobile] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        if (window.innerWidth < 640 ) {
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    })

    console.log(isMobile);
    
    return (
        <div className="justify-between sticky top-0 z-10 border navbar bg-base-100 h-20">
            <Drawer />
            <div className="flex flex-col justify-center">
                <p className="text-lg font-extrabold tracking-tightest text-textColor ">SHOPPING </p>
                <p className="text-secondary text-sm mt-[-5px] px-2 font-normal text-center tracking-widest">CART</p>
            </div>
            <div>
                <NavLinks />
            </div>
            <div className="max-lg:max-w-[65%]">
                {!isMobile && 
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-between bg-primary rounded-md w-[100%]">
                    <div className="relative">
                        <input type="text" placeholder="Search products" className="outline-none px-3 w-full" {...register("searchValue", { required: true })} />
                        {errors.searchValue && <span className="text-red-500 text-[10px] absolute left-0 top-8">This field is required</span>}
                    </div>
                    <input type="submit" id="submit" className="hidden" />
                    <label htmlFor="submit" className="btn"><CiSearch className="text-xl flex-end" /></label>
                </form>}
            </div>
            <div className="flex justify-center items-center gap-3">
                {isMobile && <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}><CiSearch className="text-xl" /></button> }
                <Drawer addToCart />
                <div className="tooltip tooltip-bottom text-textColor" data-tip="Sign In">
                    <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}><PiSignInThin className="text-2xl text-textColor" /></button>
                </div>
                <ProfileDropdown />
            </div>
            <SignIn />
            <SearchField />
        </div>
    )
}

export default Header
