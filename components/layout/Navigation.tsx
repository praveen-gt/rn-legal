"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full ${scrolled ? "py-2" : "py-4"} transition-all duration-300`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="relative"
          >
            <span className={`text-lg font-medium hover:text-primary transition-colors ${
              pathname === item.href ? "text-primary" : "text-gray-700"
            }`}>
              {item.name}
            </span>
            {pathname === item.href && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                layoutId="navigation-underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
      
      {/* Mobile Navigation Button */}
      <div className="lg:hidden flex justify-end">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden absolute top-16 right-0 left-0 bg-white shadow-lg z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-6 text-lg font-medium transition-colors ${
                  pathname === item.href ? "text-primary bg-gray-50" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;