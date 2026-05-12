"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import NavBarImage from "../assets/image/navbar.png";
import HireMeModal from "@/components/HireModal";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hireOpen, setHireOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#resume" },
        { name: "Projects", href: "#projects" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-base-300/90 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-4">

                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={NavBarImage}
                            alt="logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />

                        <h1 className="text-xl font-bold tracking-wide text-primary">
                            SUMON
                        </h1>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-8 font-medium text-base-content/70">

                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="hover:text-primary transition"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                    </ul>

                    {/* DESKTOP BUTTON */}
                    <button
                        onClick={() => setHireOpen(true)}
                        className="
              hidden md:block
              btn btn-primary
              rounded-full
              px-6
              hover:scale-105
              transition
            "
                    >
                        Hire Me 🚀
                    </button>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl text-base-content"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden pb-6">

                        <ul className="flex flex-col gap-4 font-medium text-base-content/70 pt-4">

                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block hover:text-primary transition"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}

                            <button
                                onClick={() => {
                                    setHireOpen(true);
                                    setMenuOpen(false);
                                }}
                                className="
                  btn btn-primary
                  rounded-full
                  w-full mt-3
                  hover:scale-105
                  transition
                "
                            >
                                Hire Me 🚀
                            </button>

                        </ul>

                    </div>
                )}

                {/* MODAL */}
                <HireMeModal
                    open={hireOpen}
                    onClose={() => setHireOpen(false)}
                />

            </div>
        </header>
    );
};

export default NavBar;