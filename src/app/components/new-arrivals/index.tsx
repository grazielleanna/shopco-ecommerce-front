import { ProductCard } from "@/components/ui/card-product";
import { Title } from "@/components/ui/title";

export function NewArrivals() {
    return (
        <section>
            <Title className="text-center">NEW ARRIVALS</Title>

            <div>
                <ProductCard />
            </div>
        </section>
    )
}