'use client'

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type QuantityAction = 'add' | 'minus';

export function FooterDetail() {
    const [quantity, setQuantity] = useState(1);

    const minusButtonBlocked = quantity === 1;

    function handleQuantity(action: QuantityAction) {
        switch (action) {
            case 'add':
                setQuantity(oldQuantity => oldQuantity + 1);
                break;
            default:
                setQuantity(oldQuantity => oldQuantity - 1);
                break;
        }
    }

    return (
        <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-between px-8 h-[52px] max-w-[170px] w-full gap-x-4 rounded-[62px] bg-[#F0F0F0]">
                <button disabled={minusButtonBlocked} className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30" onClick={() => handleQuantity('minus')}>
                    <Minus />
                </button>
                <p className="text-xl">{quantity}</p>
                <button className="cursor-pointer" onClick={() => handleQuantity('add')}>
                    <Plus />
                </button>
            </div>
            <Button className="w-full">
                Add to Cart
            </Button>
        </div>
    )
}