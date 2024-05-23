'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react';
import { Menu } from './menu';
import { Menu as MenuIcon } from 'lucide-react'

export function SidebarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <MenuIcon className="xl:hidden min-w-6 h-6" onClick={toggleMenu} />

            <motion.div
                className="xl:hidden h-screen w-full absolute bg-black top-0 left-0 z-50 p-4"
                animate={{
                    transform: !menuOpen ? `translateX(-100%)` : `translateX(0%)`
                }}
            >
                {menuOpen && (
                    <>
                        <h1 className="uppercase font-extrabold text-white text-3xl">shop.co</h1>

                        <X
                            className="absolute top-4 right-4 text-white z-50"
                            onClick={toggleMenu}
                        />
                        <div className='text-white flex flex-col mt-10 gap-y-3'>
                            <Menu />
                        </div>
                    </>
                )}
            </motion.div>
        </>
    )
}