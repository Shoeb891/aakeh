"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Our Services", href: "/services" },
    { title: "Location", href: "/location" },
        { title: "Contact Us", href: "/contact" },

] as const;

function Navbar() {
    return (
        <header>
            {/* Top Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#e9eff7]">
                <div className="flex items-center justify-between md:justify-around w-full max-w-8xl mx-auto">
                    <Link href="/" className="flex-shrink-0">
                        <Image

                            src="/1.svg"
                            alt="Next.js logo"
                            width={320}
                            height={320}
                            priority
                            className="w-[240px] h-auto md:w-[300px] lg:w-[320px]"
                        />
                    </Link>


                    <div className="flex items-center">
                        {/* Desktop Contact Button */}
                        <Link
                            href="/contact"
                            className="hidden xl:block px-5 py-3 bg-pink-800 text-white text-xl lg:text-2xl xl:text-3xl rounded-full hover:bg-pink-700 transition-colors duration-200"
                        >
                            Contact Us
                        </Link>

                        {/* Mobile Menu Toggle (CSS Only) */}
                        <div className="xl:hidden relative group">
                            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
                            <label
                                htmlFor="mobile-menu-toggle"
                                className="text-4xl cursor-pointer p-3 rounded-lg hover:bg-gray-400/80 hover:scale-105 transition-all duration-150 ease-out select-none active:scale-95"
                                aria-label="Toggle mobile menu"
                            >
                                <span className="block peer-checked:hidden transition-all duration-150 text-black">☰</span>
                                <span className="hidden peer-checked:block transition-all duration-150 text-amber-950">✕</span>
                            </label>

                            {/* Mobile Dropdown Menu */}
                            <div className="absolute right-0 top-full mt-2 w-72 bg-gray-900 text-white rounded-lg shadow-lg opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 z-50">
                                <div className="py-3">
                                    {NAV_ITEMS.map((item, index) => (
                                        <React.Fragment key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="block px-7 py-4 text-xl hover:bg-gray-800 transition-colors duration-200"
                                                onClick={() => {
                                                    // Reset checkbox when clicking a link
                                                    const checkbox = document.getElementById('mobile-menu-toggle') as HTMLInputElement;
                                                    if (checkbox) checkbox.checked = false;
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                            {index < NAV_ITEMS.length - 1 && (
                                                <div className="w-4/5 h-px bg-gray-600 mx-auto" />
                                            )}
                                        </React.Fragment>
                                    ))}

                                    {/* Mobile Contact Button */}
                                    <div className="w-4/5 h-px bg-gray-600 mx-auto my-3" />
                                    <div className="px-5 pb-3">
                                        <Link
                                            href="/contact"
                                            className="block w-full px-5 py-3 bg-pink-800 text-white text-xl rounded-full hover:bg-pink-700 transition-colors duration-200 text-center"
                                            onClick={() => {
                                                const checkbox = document.getElementById('mobile-menu-toggle') as HTMLInputElement;
                                                if (checkbox) checkbox.checked = false;
                                            }}
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center justify-center bg-gray-900 text-white text-xl xl:text-2xl">
                {NAV_ITEMS.map((item, index) => (
                    <React.Fragment key={item.href}>
                        <Link
                            href={item.href}
                            className="px-7 xl:px-12 py-4 hover:bg-gray-800 transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                        {index < NAV_ITEMS.length - 1 && (
                            <span className="h-7 w-px bg-gray-600 mx-2 xl:mx-3" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;