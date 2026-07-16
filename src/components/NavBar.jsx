"use client";

import { useState } from "react";
import NavBarImage from "../assets/image/navbar.png";
import Image from "next/image";
import HireMeModal from "@/components/HireModal";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

            <span className="text-xl font-bold tracking-wide text-white">
              SUMON
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 font-medium text-gray-300">
            <li>
              <a
                href="#home"
                className="hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 rounded-md px-2 py-1 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#resume"
                className="hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 rounded-md px-2 py-1 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#project"
                className="hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 rounded-md px-2 py-1 transition duration-300"
              >
                Project
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 rounded-md px-2 py-1 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">
            <button
              onClick={() => setHireOpen(true)}
              className="btn btn-primary rounded-full px-6 transition duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 focus-visible:outline-none"
            >
              Hire Me 🚀
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden btn btn-ghost btn-circle text-2xl text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-4 font-medium text-gray-300 pt-2 pb-5 border-t border-white/5">
                <li>
                  <a
                    href="#home"
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-1 transition duration-300"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#resume"
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-1 transition duration-300"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#project"
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-1 transition duration-300"
                  >
                    Project
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-primary focus-visible:text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-1 transition duration-300"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setHireOpen(true);
                      setMenuOpen(false);
                    }}
                    className="btn btn-primary rounded-full w-full mt-2 transition duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    Hire Me 🚀
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL */}
        <HireMeModal open={hireOpen} onClose={() => setHireOpen(false)} />
      </div>
    </header>
  );
};

export default NavBar;
