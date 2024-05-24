import { Button } from "@/components/ui/button";
import { SlidersVertical } from "lucide-react";
import Link from "next/link";

export function ProductFilter() {
    return (
        <div className="flex flex-col gap-y-5 border border-black/10 p-6 lg:max-w-80 rounded-[20px]">
            <div className="flex items-center justify-between">
                <h5 className="font-semibold text-xl">Filters</h5>

                <SlidersVertical className="text-black/40" />
            </div>

            <hr />

            <div>
                <h6 className="font-semibold text-xl">Price</h6>
                <input type="range" name="range" className="out-of-range:border-red-50" value={50} min={50} max={500} />
            </div>

            <hr />

            <div>
                <h6 className="font-semibold text-xl">Dress Style</h6>

                <div className="mt-5">
                    <Link href="/category/1">
                        Casual
                    </Link>
                </div>
            </div>
            
            <Button className="w-full">
                Apply Filter
            </Button>
        </div>
    )
}