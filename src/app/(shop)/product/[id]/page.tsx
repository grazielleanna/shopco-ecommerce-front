import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Star } from "lucide-react";
import { FooterDetail } from "../components/footer-detail";
import { ProductCarousel } from "../components/carousel";

export default function ProductPage({ params }: { params: { id: number } }) {
    return (
        <section className="w-full max-w-screen-xl mx-auto px-2 lg:px-0 py-16">
            <div className="flex items-start justify-between gap-x-10">
                <div className="w-full lg:max-w-[50%]">
                    <ProductCarousel />
                </div>
                <div className="w-full lg:max-w-[50%]">
                    <Title>
                        One life graphic t-shirt
                    </Title>
                    <div className="flex items-center gap-x-2 py-1 my-2">
                        <Star className="w-6 h-6 text-yellow-400" fill="#FFC633" />

                        <p className="text-sm">
                            4.5/
                            <span className="text-black/60">5</span>
                        </p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-bold text-3xl">$260</p>
                        <p className="text-black/30 text-3xl">$300</p>
                        <span className="bg-[#FF3333]/10 text-[#FF3333] px-4 py-1 rounded-[62px]">-40%</span>
                    </div>

                    <p className="text-black/60 mt-4">
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                    </p>

                    <hr className="my-8" />

                    <FooterDetail />
                </div>
            </div>
        </section>
    )
}