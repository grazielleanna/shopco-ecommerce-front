import { Star } from "lucide-react";
import Image from "next/image";

export function ProductCard() {
    return (
        <div className="max-w-[295px]">
            <div className="bg-[#F0EEED] rounded-[20px]">
                <Image src="/images/home/camisa.png"
                    width={295}
                    height={298}
                    alt="Camisa"
                    className="w-11/12 mx-auto"
                />
            </div>

            <div className="mt-2">
                <h6 className="font-bold text-xl">T-shirt with tape details</h6>
                <div className="flex items-center gap-x-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400" fill="#FFC633" />

                    <p className="text-sm">
                        4.5/
                        <span className="text-black/60">5</span>
                    </p>
                </div>
                <p className="font-bold text-2xl">$120</p>
            </div>
        </div>
    )
}