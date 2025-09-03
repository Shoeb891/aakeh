"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { title: "About us", href: "/about" },
  { title: "Research and innovation", href: "/research" },
  { title: "Services", href: "/services" },
  { title: "Our Services", href: "/our-services" },
  { title: "Location", href: "/location" }
] as const;

function Navbar() {
  return (
    <header>
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-300">
        <div className="flex items-center justify-around w-full max-w-8xl mx-auto">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/2.svg" 
              alt="Company Logo" 
              width={360} 
              height={360} 
              className="w-[230px] sm:w-[300px] lg:w-[360px] h-auto" 
              priority
              sizes="(max-width: 640px) 230px, (max-width: 1024px) 300px, 360px"
            />
          </Link>
          
          <div className="flex items-center">
            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              className="hidden xl:block px-4 py-2 bg-pink-800 text-white text-lg lg:text-xl xl:text-2xl rounded-full hover:bg-pink-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
            
            {/* Mobile Menu Toggle (CSS Only) */}
            <div className="xl:hidden relative group">
              <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
              <label 
                htmlFor="mobile-menu-toggle" 
                className="text-3xl cursor-pointer p-2 rounded-lg hover:bg-gray-400/80 hover:scale-105 transition-all duration-150 ease-out select-none active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <span className="block peer-checked:hidden transition-all duration-150">☰</span>
                <span className="hidden peer-checked:block transition-all duration-150">✕</span>
              </label>
              
              {/* Mobile Dropdown Menu */}
              <div className="absolute right-0 top-full mt-1 w-64 bg-gray-900 text-white rounded-lg shadow-lg opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 z-50">
                <div className="py-2">
                  {NAV_ITEMS.map((item, index) => (
                    <React.Fragment key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-6 py-3 text-lg hover:bg-gray-800 transition-colors duration-200"
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
                  <div className="w-4/5 h-px bg-gray-600 mx-auto my-2" />
                  <div className="px-4 pb-2">
                    <Link
                      href="/contact"
                      className="block w-full px-4 py-2 bg-pink-800 text-white text-lg rounded-full hover:bg-pink-700 transition-colors duration-200 text-center"
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
              className="px-6 xl:px-10 py-3 hover:bg-gray-800 transition-colors duration-200"
            >
              {item.title}
            </Link>
            {index < NAV_ITEMS.length - 1 && (
              <span className="h-6 w-px bg-gray-600 mx-1 xl:mx-2" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;