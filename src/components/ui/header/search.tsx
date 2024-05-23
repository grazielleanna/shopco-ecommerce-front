import { Search } from "lucide-react";

export function HeaderSearch() {
    return (
        <div className="flex w-auto xl:w-full xl:bg-[#F0F0F0] items-center h-14 xl:gap-x-3 xl:px-4 rounded-[62px]">
            <Search className="xl:text-black/40 h-6 w-6" />
            <input
                type="text"
                placeholder="Search for products..."
                className="hidden xl:block bg-transparent placeholder:font-light "
            />
        </div>
    )
}