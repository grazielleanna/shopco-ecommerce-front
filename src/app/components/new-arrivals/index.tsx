import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/card-product";
import { Title } from "@/components/ui/title";

export function NewArrivals() {
    return (
        <section>
            <Title className="text-center">NEW ARRIVALS</Title>

            <div>
                <ProductCard />
            </div>

            <div className="text-center mt-5">
                <Button outlined>
                    View All
                </Button>
            </div>
        </section>
    )
}