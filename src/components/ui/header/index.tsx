import Link from "next/link";
import { HeaderSearch } from "./search";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import { Menu } from "./menu";
import { SidebarMobile } from "./sidebar";

export function Header() {
    return (
        <>
            <div className="bg-black h-[38px] text-sm xl:text-base w-full text-white font-thin text-center flex items-center justify-center">
                Sign up and get 20% off to your first order. <Link href="/" className="font-normal underline underline-offset-2 ml-1">Sign Up Now</Link>
            </div>
            <header className="w-11/12 max-w-screen-xl mx-auto py-4 flex items-center gap-x-8">
                <SidebarMobile />
                <Link href="/">
                    <h1 className="uppercase font-extrabold text-3xl">shop.co</h1>
                </Link>

                <div className="w-full flex items-center justify-end gap-x-6">
                    <div className="hidden xl:flex items-center gap-x-4">
                        <Menu />
                    </div>

                    <HeaderSearch />

                    <div className="flex items-center  gap-x-4">
                        <Link href="/cart">
                            <ShoppingCart className="h-6 w-6" />
                        </Link>
                        <Link href="/login">
                            <CircleUserRound className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}