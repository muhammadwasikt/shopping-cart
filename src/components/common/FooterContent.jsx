

const FooterContent = () => {
    return (
        <div className="mx-auto max-w-[950px] p-6 px-14 bg-black text-primary flex justify-between max-md:flex-col rounded-2xl">
            <h1 className="font-extrabold text-2xl max-w-[400px] w-[100%] max-md:max-w-full mb-3">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <div className="max-w-[300px] w-[100%] max-md:max-w-full max-md:mt-4 flex flex-col gap-2 items-center">
                <input type="text" placeholder="Enter your email address" className="bg-primary max-w-[300px] w-[100%] py-1 px-3 rounded-2xl" />
                <input type="submit" value="Subscribe to Newsletter" className="bg-primary max-w-[300px] w-[100%] py-1 px-3 rounded-2xl text-slate-700" />
            </div>



        </div>
    )
}

export default FooterContent
