import Link from "next/link";

export function Menu() {
    return (
        <>
            <Link href="/categories">
                Categories
            </Link>
            <Link href="/products">
                Products
            </Link>
        </>
    )
}