import { Button } from "@/components/ui/button";
import { ArrowRight, Tag } from "lucide-react";

export function OrderSummary() {
    return (
        <div className="border border-black/10 rounded-[20px] px-8 py-4 mt-8">
            <h6 className="font-semibold text-xl">Order Summary</h6>

            <div className="flex flex-col gap-y-2 mt-5">
                <div className="flex items-center justify-between">
                    <p className="text-black/60 text-xl font-light">Subtotal</p>
                    <span className="font-medium text-xl">$565</span>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-black/60 text-xl font-light">Discount</p>
                    <span className="font-medium text-xl text-[#FF3333]">-$565</span>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-black/60 text-xl font-light">Subtotal</p>
                    <span className="font-medium text-xl">$565</span>
                </div>

                <hr className="my-4" />

                <div className="flex items-center justify-between">
                    <p className="text-black text-xl font-medium">Total</p>
                    <span className="font-medium text-2xl">$565</span>
                </div>
            </div>

            <div className="my-6 flex items-start gap-x-4 flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0">
                <div className="flex w-full bg-[#F0F0F0] items-center h-14 gap-x-3 px-4 rounded-[62px]">
                    <Tag className="xl:text-black/40 h-6 w-6" />
                    <input
                        type="text"
                        placeholder="Add promo code"
                        className="block bg-transparent placeholder:font-light "
                    />
                </div>

                <Button className="w-full min-w-28">
                    Apply
                </Button>
            </div>

            <hr className="lg:hidden mb-4" />

            <Button className="group w-full flex items-center justify-center gap-x-2">
                Go to checkout
                <ArrowRight className="group-hover:translate-x-1.5 duration-200" />
            </Button>
        </div>
    )
}