import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#F0F0F0]">
            <div className="w-11/12 max-w-screen-xl mx-auto py-12">
                <div className="flex items-start justify-between flex-wrap gap-y-6 gap-x-2">
                    <div className="w-full lg:max-w-[248px]">
                        <h2 className="uppercase font-extrabold text-3xl">shop.co</h2>
                        <p className="text-black/60 text-sm mt-5">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

                        <div className="mt-5 flex items-center gap-x-4">
                            <Link href="/" className="bg-white flex items-center justify-center rounded-full w-7 h-7">
                                <Twitter fill="#000" className="w-4 h-4" />
                            </Link>
                            <Link href="/" className="bg-black flex items-center justify-center rounded-full w-7 h-7">
                                <Facebook fill="#FFF" className="w-4 h-4" />
                            </Link>
                            <Link href="/" className="bg-white flex items-center justify-center rounded-full w-7 h-7">
                                <Instagram className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://github.com/grazielleanna"
                                target="_blank"
                                className="bg-white flex items-center justify-center rounded-full w-7 h-7"
                            >
                                <Github className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>

                    <div className="w-1/3 lg:w-auto">
                        <h4 className="font-medium uppercase">Company</h4>

                        <div className="flex flex-col gap-y-2 mt-6">
                            <Link href="/" className="text-black/60">
                                About
                            </Link>
                            <Link href="/" className="text-black/60">
                                Features
                            </Link>
                            <Link href="/" className="text-black/60">
                                Works
                            </Link>
                            <Link href="/" className="text-black/60">
                                Career
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/3 lg:w-auto">
                        <h4 className="font-medium uppercase">help</h4>

                        <div className="flex flex-col gap-y-2 mt-6">
                            <Link href="/" className="text-black/60">
                                Customer Support
                            </Link>
                            <Link href="/" className="text-black/60">
                                Delivery Details
                            </Link>
                            <Link href="/" className="text-black/60">
                                Terms & Conditions
                            </Link>
                            <Link href="/" className="text-black/60">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/3 lg:w-auto">
                        <h4 className="font-medium uppercase">FAQ</h4>

                        <div className="flex flex-col gap-y-2 mt-6">
                            <Link href="/" className="text-black/60">
                                Account
                            </Link>
                            <Link href="/" className="text-black/60">
                                Manage Deliveries
                            </Link>
                            <Link href="/" className="text-black/60">
                                Orders
                            </Link>
                            <Link href="/" className="text-black/60">
                                Payments
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/3 lg:w-auto">
                        <h4 className="font-medium uppercase">Resources</h4>

                        <div className="flex flex-col gap-y-2 mt-6">
                            <Link href="/" className="text-black/60">
                                Free eBooks
                            </Link>
                            <Link href="/" className="text-black/60">
                                Development Tutorial
                            </Link>
                            <Link href="/" className="text-black/60">
                                How to - Blog
                            </Link>
                            <Link href="/" className="text-black/60">
                                Youtube Playlist
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-8" />

                <div className="flex items-center justify-center lg:justify-between flex-wrap text-center">
                    <p className="text-black/60">Shop.co © 2000-2023, All Rights Reserved</p>

                    <div className="flex items-center gap-x-4 mt-5 lg:mt-0">
                        <span className="bg-white w-12 py-2 rounded-[5px]">
                            <Image src="/images/card/visa.png" width={32} height={12} alt="Logo visa" className="mx-auto" />
                        </span>
                        <span className="bg-white w-12 py-2 rounded-[5px]">
                            <Image src="/images/card/mastercard.png" width={26} height={16} alt="Logo mastercard" className="mx-auto" />
                        </span>
                        <span className="bg-white w-12 py-2 rounded-[5px]">
                            <Image src="/images/card/paypal.png" width={35} height={10} alt="Logo paypal" className="mx-auto" />
                        </span>
                        <span className="bg-white w-12 py-2 rounded-[5px]">
                            <Image src="/images/card/apple-pay.png" width={28} height={12} alt="Logo apple pay" className="mx-auto" />
                        </span>
                        <span className="bg-white w-12 py-2 rounded-[5px]">
                            <Image src="/images/card/g-pay.png" width={29} height={13} alt="Logo g pay" className="mx-auto" />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}