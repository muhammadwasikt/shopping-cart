import { Link } from "../../utils/imports"

const MergProducts = () => {
    return (
        <div className="px-4">
            <div className='max-w-[950px] w-full h-auto bg-[#dfdfdf] mx-auto rounded-3xl mt-[40px] mb-9 flex flex-col justify-center items-center '>
                <h1 className="text-5xl font-bold text-center py-6 text-textColor max-sm:text-xl">Browse By Categories</h1>
                <div className=" w-[100%] h-[60%] flex justify-between flex-wrap gap-4 p-9 pt-0 ">

                    <div className="w-[38%] max-lg:w-[100%] h-[250px] max-[480px]:h-[256px] bg-white rounded-lg flex overflow-hidden cursor-pointer max-[480px]:flex-col max-[480px]:items-center ">
                        <h2 className="text-3xl m-8 font-bold w-[38%] max-[480px]:w-full max-[480px]:m-1 max-[480px]:p-1 max-[480px]:text-center">Head Phone</h2>
                        <Link to='/products/audio'>
                            <img src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg" className="h-52 object-cover " />
                        </Link>
                    </div>

                    <div className="w-[60%] max-lg:w-[100%] h-[250px] max-[480px]:h-[256px] bg-white rounded-lg flex overflow-hidden cursor-pointer max-[480px]:flex-col max-[480px]:items-center">
                        <h2 className="text-3xl m-8 font-bold w-[40%] max-[480px]:w-full max-[480px]:m-1 max-[480px]:p-1 max-[480px]:text-center">Mobile</h2>
                        <Link to='/products/mobile'>    
                            <img src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691078463674-poco f1.jpg" className="h-52 object-cover"
                            />
                        </Link>
                    </div>
                    <div className="w-[60%] h-[250px] max-lg:w-[100%] max-[480px]:h-[256px] bg-white rounded-lg flex overflow-hidden cursor-pointer max-[480px]:flex-col max-[480px]:items-center">
                        <h2 className="text-3xl m-8 font-bold w-[40%] max-[480px]:w-full max-[480px]:m-1 max-[480px]:p-1 max-[480px]:text-center">TV</h2>
                        <Link to='/products/tv' className="w-full p-4">
                            <img src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694165291672-511DmhAgHAL._SL1073_.jpg" className="w-full h-52 object-cover rounded-md" />
                        </Link>
                    </div>
                    <div className="w-[38%] h-[250px] max-lg:w-[100%] max-[480px]:h-[256px] bg-white rounded-lg flex overflow-hidden cursor-pointer max-[480px]:flex-col max-[480px]:items-center">

                        <h2 className="text-3xl m-8 font-bold w-[40%] max-[480px]:w-full max-[480px]:m-1 max-[480px]:p-1 max-[480px]:text-center">Gaming</h2>
                        <Link to='/products/gaming'>
                            <img src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694241552001-61-jjE67uqL._SL1500_.jpg" className="w-full h-52 object-cover rounded-md" />
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default MergProducts
