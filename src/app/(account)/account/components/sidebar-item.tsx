'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface AccountSidebarItemProps extends ComponentProps<typeof Link> { }

export function AccountSidebarItem({ children, className, href, ...rest }: AccountSidebarItemProps) {
    const pathname = usePathname();

    const linkActive = pathname === href;

    return (
        <Link
            href={href}
            className={twMerge(
                'text-black/60 data-[active=true]:text-black data-[active=true]:text-bold data-[active=true]:border-l-4 data-[active=true]:border-l-black text-xl pl-2 duration-300 border-l-4 border-l-transparent hover:border-l-4 hover:border-l-black',
                className
            )}
            data-active={linkActive}
            {...rest}
        >
            {children}
        </Link>
    )
}