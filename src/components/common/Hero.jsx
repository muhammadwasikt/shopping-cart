import { heroImage } from "../../utils/imagesimport"



const Hero = () => {

     
    return (
        <div className="hero min-h-screen pr-3 pl-10 py-4 lg:py-0 bg-accent">
            <div className="hero-content flex-col lg:flex-row ">
                <div>
                    <p className="text-5xl font-bold tracking-tighte text-textColor font-Integral CF leading-22">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                    <p className="py-6 text-[16px]">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className="text-primary bg-black py-[16px] px-[54px] rounded-full">Shop Now</button>
                </div>
                <img
                    src={heroImage}
                    className=" h-[450px] object-fill" />
            </div>
        </div>
    )
}

export default Hero
