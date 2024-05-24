'use client';
import { Dispatch, SetStateAction, useState } from "react";
import { Minus, Plus } from "lucide-react";

type QuantityAction = 'add' | 'minus';

interface QuantityProps {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

export function Quantity({ quantity, setQuantity }: QuantityProps) {
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
        <div className="flex items-center justify-between px-8 h-[31px] lg:h-[52px] max-w-[140px] lg:max-w-[170px] w-full gap-x-4 rounded-[62px] bg-[#F0F0F0]">
            <button disabled={minusButtonBlocked} className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-30" onClick={() => handleQuantity('minus')}>
                <Minus className="w-4 h-4 lg:w-auto lg:h-auto" />
            </button>
            <p className="text-base lg:text-xl">{quantity}</p>
            <button className="cursor-pointer" onClick={() => handleQuantity('add')}>
                <Plus className="w-4 h-4 lg:w-auto lg:h-auto" />
            </button>
        </div>
    )
}