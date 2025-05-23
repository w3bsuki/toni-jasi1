"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
}

const navItems: NavItem[] = [
  {
    label: "New",
    href: "/new",
    children: [
      { label: "New Arrivals", href: "/new/arrivals" },
      { label: "Best Sellers", href: "/new/best-sellers" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Summer Collection", href: "/collections/summer" },
      { label: "Winter Collection", href: "/collections/winter" },
      { label: "Limited Edition", href: "/collections/limited-edition" },
    ],
  },
  {
    label: "Styles",
    href: "/styles",
    children: [
      { label: "Snapback", href: "/styles/snapback" },
      { label: "Fitted", href: "/styles/fitted" },
      { label: "Dad Hats", href: "/styles/dad-hats" },
      { label: "Beanies", href: "/styles/beanies" },
    ],
  },
  { label: "Sale", href: "/sale" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm dark:bg-[#0a0a0a] dark:border-[#171717]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold dark:text-white">
            NoCapLLC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  {item.label}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 dark:bg-[#171717]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#262626]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search, Theme Toggle, Shop Button and Cart */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <ThemeToggle />
            
            <Link href="/collections" className="hidden md:block">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-black bg-black text-white hover:bg-white hover:text-black min-w-16 font-medium dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white"
              >
                SHOP
              </Button>
            </Link>
            
            <Link href="/cart" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              <ShoppingBag size={20} />
            </Link>
            <button
              className="md:hidden text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}

export default Navbar; 