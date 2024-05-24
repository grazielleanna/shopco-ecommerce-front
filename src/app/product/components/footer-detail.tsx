'use client'

import { Button } from "@/components/ui/button";
import { Quantity } from "@/components/ui/quantity";
import { useState } from "react";

export function FooterDetail() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex items-center gap-x-2">
            <Quantity
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <Button className="w-full">
                Add to Cart
            </Button>
        </div>
    )
}