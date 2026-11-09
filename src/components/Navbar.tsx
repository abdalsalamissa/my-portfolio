"use client";

import { useState } from "react";
import Link from "next/link";

const navigationLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="w-full border-b border-white/10">
            <nav className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Abdelsalam<span className="text-blue-500">.</span>
                    </Link>

                    {/* navigation links */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navigationLinks.map((link) => (
                            <Link key={link.label} href={link.href} className="text-sm text-slate-400 transition-colors hover:text-blue-400">{link.label}</Link>
                        ))}
                    </div>

                    {/* contact button */}
                    <Link href="/contact" className="hidden rounded-full border border-blue-500/50 px-5 py-2 text-sm text-blue-400 transition-all hover:bg-blue-500 hover:text-white md:inline-flex">
                        Let&apos;s Talk
                    </Link>

                    {/* mobile menu */}
                    <button 
                    type="button"
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl text-white md:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        id="mobile-navigation"
                        className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 md:hidden"
                    >
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-medium text-blue-400"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}