import { ProductFilter } from "@/app/product/components/filter";
import { ProductPagination } from "@/app/product/components/pagination";
import { ProductCard } from "@/components/ui/card-product";
import { Title } from "@/components/ui/title";

export function CategoryPageDetail() {
    return (
        <>
            <div className="flex items-start gap-x-8 gap-y-8 lg:gap-y-0 flex-wrap lg:flex-nowrap">
                <div className="max-w-full lg:max-w-[295px] w-full">
                    <ProductFilter />
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <Title className="capitalize lg:text-3xl">
                            Casual
                        </Title>

                        <p className="text-black/60">Showing 1-10 of 100 Products</p>
                    </div>

                    <div className="mt-4">
                        <ProductCard />
                    </div>

                    <hr className="my-8" />

                    <ProductPagination />
                </div>
            </div>

        </>
    )
}