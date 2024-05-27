import { ReactNode } from "react";

import { Title } from "@/components/ui/title";
import { AccountSidebarItem } from "./components/sidebar-item";

export default function AccountLayout({ children }: { children: ReactNode }) {
    return (
        <section className="w-full max-w-screen-xl mx-auto px-2 lg:px-0 py-2 lg:py-16">
            <Title className="text-left">
                My Account
            </Title>

            <div className="flex gap-8 mt-8">
                <aside
                    className="w-full bg-[#F0F0F0] pr-4 py-6 rounded flex flex-col items-start justify-start gap-y-4 max-w-full lg:max-w-80"
                >
                    <AccountSidebarItem href="/account/profile">
                        My Profile
                    </AccountSidebarItem>
                    <AccountSidebarItem href="/account/orders">
                        My Orders
                    </AccountSidebarItem>
                </aside>

                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>

    )

}