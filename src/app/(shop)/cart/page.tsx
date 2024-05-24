import { Title } from "@/components/ui/title";
import { CartItem } from "./components/cart-item";
import { OrderSummary } from "./components/order-summary";

export default function CartPage() {
    return (
        <section className="w-full max-w-screen-xl mx-auto px-2 lg:px-0 py-2 lg:py-16">
            <Title>
                Your cart
            </Title>

            <div className="flex items-stretch  flex-wrap lg:flex-nowrap gap-x-6 justify-between">
                <div className="w-full border flex-2 border-black/10 rounded-[20px] px-4 lg:px-8 py-4 mt-8">
                    <CartItem />
                    <hr />
                    <CartItem />
                    <hr />
                    <CartItem />
                </div>
                <div className="w-full flex-1">
                    <OrderSummary />
                </div>
            </div>
        </section>
    )
}