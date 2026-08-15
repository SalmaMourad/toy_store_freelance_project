"use client";

import { useEffect, useState } from "react";
import { FaStore } from "react-icons/fa";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav
            className={`fixed left-0 top-0 z-50 w-full h-16  transition-all duration-300
            ${
                scrolled
                    ? "bg-white/10 backdrop-blur-md shadow-md"
                    : "bg-transparent"
            }`}
        >

            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

                {/* Logo */}

                <a
                    href="#"
                    className={`flex items-center gap-3 text-2xl font-bold transition
                    ${
                        scrolled
                            ? "text-gray-800"
                            : "text-white"
                    }`}
                >

                    <FaStore className="text-pink-500" />

                    BATATES

                </a>

                {/* Links */}

                <div className="hidden items-center gap-10 md:flex">

                    <a
                        href="#"
                        className={`transition hover:text-pink-500
                        ${
                            scrolled
                                ? "text-gray-700"
                                : "text-white"
                        }`}
                    >
                        Home
                    </a>

                    <a
                        href="#products"
                        className={`transition hover:text-pink-500
                        ${
                            scrolled
                                ? "text-gray-700"
                                : "text-white"
                        }`}
                    >
                        Products
                    </a>

                    <a
                        href="#footer"
                        className={`transition hover:text-pink-500
                        ${
                            scrolled
                                ? "text-gray-700"
                                : "text-white"
                        }`}
                    >
                        Contact
                    </a>

                </div>

                {/* Admin */}

                <a
                    href="/admin"
                    className="rounded-full border border-pink-500 px-5 py-2 text-pink-500 transition hover:bg-pink-500 hover:text-white"
                >
                    Admin
                </a>

            </div>

        </nav>

    );

}