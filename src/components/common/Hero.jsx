import { heroImage } from "../../utils/imagesimport"



const Hero = () => {


    return (
        <div className="hero min-h-screen pr-3 pl-10 py-4 lg:py-0 bg-accent">
            <div className="hero-content flex-col lg:flex-row p-2">
                <div>
                    <p className="text-5xl font-bold tracking-tighte text-textColor font-Integral CF leading-22 max-sm:text-2xl">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                    <p className="py-6 pr-1 text-[16px] max-sm:text-[14px]">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className="text-primary bg-black py-[16px] px-[54px] rounded-full">Shop Now</button>
                    <div className="stats flex gap-1 bg-accent max-sm:flex-wrap">
                        <div className="stat place-items-center bg-accent border-none max-w-[200px] justify-center items-center">
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center bg-accent border-none max-w-[200px] justify-center items-center">
                            <div className="stat-title">Users</div>
                            <div className="stat-value text-secondary">4,200</div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center bg-accent border-none max-w-[200px] justify-center items-center">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
                <img
                    src={heroImage}
                    className=" h-[500px] object-fill" />
            </div>
        </div>
    )
}

export default Hero
