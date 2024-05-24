import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProductPagination() {
    return (
        <div className="flex items-center justify-between">
            <button className="border border-black/10 flex items-center justify-around gap-x-2 px-1 lg:px-4 py-2 text-sm lg:text-base rounded-lg">
                <ArrowLeft className="w-4 h-4 lg:w-8 lg:h-8" />

                Previous
            </button>

            <div className="flex items-center gap-x-2">
                <span
                    data-active={true}
                    className="data-[active=true]:bg-black/10 data-[active=true]:text-black data-[active=true]:rounded-lg hover:bg-black/10 hover:text-black rounded-lg ease-in duration-150 flex items-center justify-center text-black/50 w-10 h-10 cursor-pointer"
                >
                    1
                </span>
                <span
                    data-active={false}
                    className="data-[active=true]:bg-black/10 data-[active=true]:text-black data-[active=true]:rounded-lg hover:bg-black/10 hover:text-black rounded-lg ease-in duration-150 flex items-center justify-center text-black/50 w-10 h-10 cursor-pointer"
                >
                    2
                </span>
                <span
                    data-active={false}
                    className="data-[active=true]:bg-black/10 data-[active=true]:text-black data-[active=true]:rounded-lg hover:bg-black/10 hover:text-black rounded-lg ease-in duration-150 flex items-center justify-center text-black/50 w-10 h-10 cursor-pointer"
                >
                    3
                </span>
                <span
                    data-active={false}
                    className="data-[active=true]:bg-black/10 data-[active=true]:text-black data-[active=true]:rounded-lg hover:bg-black/10 hover:text-black rounded-lg ease-in duration-150 flex items-center justify-center text-black/50 w-10 h-10 cursor-pointer"
                >
                    4
                </span>
            </div>

            <button className="border border-black/10 flex items-center justify-around gap-x-2 px-1 lg:px-4 py-2 text-sm lg:text-base rounded-lg">
                Next
                <ArrowRight className="w-4 h-4 lg:w-8 lg:h-8" />
            </button>
        </div>
    )
}