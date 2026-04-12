"use client";

import { useState } from "react";
import NavLinkActive from "@/Ui/NavLinkActive";
import NavBarImage from "../assets/image/navbar.png";
import Image from "next/image";
import HireMeModal from "@/components/HireModal";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hireOpen, setHireOpen] = useState(false);

    return (
        <div className="bg-base-100 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto text-gray-300">

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
                        <h1 className="text-xl font-bold tracking-wide">
                            SUMON
                        </h1>
                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-6 font-medium">
                        <NavLinkActive href="/">Home</NavLinkActive>
                        <NavLinkActive href="/about">About</NavLinkActive>
                        <NavLinkActive href="/contact">Contact</NavLinkActive>
                        <NavLinkActive href="/pricing">Pricing</NavLinkActive>
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

                    {/* MOBILE BUTTON */}
                    <div className="md:hidden flex gap-2">
                        <button
                            onClick={() => setHireOpen(true)}
                            className="btn btn-primary btn-sm"
                        >
                            Hire Me
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="btn btn-ghost btn-circle text-xl"
                        >
                            {menuOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden mt-2 pb-4">
                        <ul className="flex flex-col gap-4 font-medium">
                            <NavLinkActive href="/">Home</NavLinkActive>
                            <NavLinkActive href="/about">About</NavLinkActive>
                            <NavLinkActive href="/contact">Contact</NavLinkActive>
                            <NavLinkActive href="/pricing">Pricing</NavLinkActive>
                        </ul>
                    </div>
                )}

                {/* MODAL */}
                <HireMeModal
                    open={hireOpen}
                    onClose={() => setHireOpen(false)}
                />

            </div>
        </div>
    );
};

export default NavBar;