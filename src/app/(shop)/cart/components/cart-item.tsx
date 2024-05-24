'use client'

import { Quantity } from "@/components/ui/quantity";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function CartItem() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex items-stretch gap-x-4 py-4">
            <div className="bg-[#F0EEED] max-w-[99px] lg:max-w-[124px] w-full rounded-lg">
                <Image
                    src="/images/cart/camisa.png"
                    className="rounded-lg max-w-[124px] w-full object-cover object-center"
                    width={124}
                    height={124}
                    alt=""
                />
            </div>
            <div className="w-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-base lg:text-xl">Gradient Graphic T-shirt</h6>
                    <Trash2 className="text-red-700" />
                </div>

                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl lg:text-2xl">$180</p>

                    <Quantity
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </div>
            </div>
        </div>
    )
}