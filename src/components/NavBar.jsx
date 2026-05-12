"use client";

import { useState } from "react";
import NavBarImage from "../assets/image/navbar.png";
import Image from "next/image";
import HireMeModal from "@/components/HireModal";
import Link from "next/link";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hireOpen, setHireOpen] = useState(false);

    return (
        <header id="navbar" className="sticky top-0 z-50 bg-base-300 shadow-lg">
            <div className="container mx-auto px-4">

                {/* NAVBAR */}
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={NavBarImage}
                            alt="logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />

                        <h1 className="text-xl font-bold tracking-wide text-white">
                            SUMON
                        </h1>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300">

                        <li>
                            <a
                                href="#home"
                                className="hover:text-primary transition"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#resume"
                                className="hover:text-primary transition"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="hover:text-primary transition"
                            >
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href="#pricing"
                                className="hover:text-primary transition"
                            >
                                Pricing
                            </a>
                        </li>

                    </ul>

                    {/* DESKTOP BUTTON */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => setHireOpen(true)}
                            className="btn btn-primary rounded-full px-6"
                        >
                            Hire Me 🚀
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden btn btn-ghost btn-circle text-2xl text-white"
                    >
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden pb-5">

                        <ul className="flex flex-col gap-4 font-medium text-gray-300 pt-4">

                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setMenuOpen(false)}
                                    className="block hover:text-primary transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setMenuOpen(false)}
                                    className="block hover:text-primary transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#resume"
                                    onClick={() => setMenuOpen(false)}
                                    className="block hover:text-primary transition"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#pricing"
                                    onClick={() => setMenuOpen(false)}
                                    className="block hover:text-primary transition"
                                >
                                    Pricing
                                </a>
                            </li>

                            <button
                                onClick={() => {
                                    setHireOpen(true);
                                    setMenuOpen(false);
                                }}
                                className="btn btn-primary rounded-full w-full mt-2"
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