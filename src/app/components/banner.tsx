import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HomeBanner() {
    return (
        <>
            <section className="bg-[url('/images/home/banner.png')] bg-[#F2F0F1] bg-bottom-80 bg-no-repeat lg:bg-center h-[1056px] md:h-[922px] lg:h-[663px]">
                <div className="w-11/12 max-w-screen-xl mx-auto pt-4 lg:pt-12 py-12">
                    <div className="max-w-xl w-full flex flex-col gap-y-3 lg:gap-y-6">
                        <h2 className="uppercase font-extrabold lg:text-[64px] text-4xl lg:leading-[4rem] tracking-wider">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h2>

                        <p className="text-black/60 text-light text-sm lg:text-base">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <Button className="w-full lg:max-w-52">
                            Shop Now
                        </Button>

                        <div className="flex items-center justify-center lg:justify-normal gap-x-6 gap-y-2 lg:gap-y-0 mt-4 flex-wrap">
                            <div className="lg:border-r lg:border-r-black/10 lg:pr-8">
                                <span className="text-4xl font-medium">
                                    200+
                                </span>
                                <p className="text-black/60">Internationl Brands</p>
                            </div>
                            <div className="lg:border-r lg:border-r-black/10 lg:pr-8">
                                <span className="text-4xl font-medium">
                                    2,000+
                                </span>
                                <p className="text-black/60">High-Quality Products</p>
                            </div>
                            <div>
                                <span className="text-4xl font-medium">
                                    30,000+
                                </span>
                                <p className="text-black/60">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="bg-black py-[35px] lg:py-[61px]">
                <div className="w-11/12 max-w-screen-xl mx-auto flex items-center justify-center lg:justify-between flex-wrap gap-5">
                    <Image src="/images/home/versace.png" width={164} height={34} alt="Versace logo" className="w-2/6 lg:w-auto" />
                    <Image src="/images/home/zara-logo.png" width={92} height={38} alt="Zara logo" className="w-1/5 lg:w-auto" />
                    <Image src="/images/home/gucci-logo.png" width={157} height={36} alt="Gucci logo" className="w-2/6 lg:w-auto" />
                    <Image src="/images/home/prada-logo.png" width={195} height={32} alt="Prada logo" className="w-2/6 lg:w-auto" />
                    <Image src="/images/home/calvin-klein.png" width={208} height={34} alt="Calvin klein logo" className="w-2/6 lg:w-auto" />
                </div>
            </div>
        </>
    )
}