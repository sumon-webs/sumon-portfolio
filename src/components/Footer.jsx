"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content border-t border-gray-800 pt-14">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">SUMON</h2>

                    <p className="text-sm text-base-content/70 leading-relaxed">
                        Building modern, responsive and user-friendly web applications
                        using MERN stack and Next.js.
                    </p>

                    {/* SOCIAL */}
                    <div className="flex gap-5 mt-5 text-xl">

                        <a
                            href="https://github.com/sumon-webs"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://x.com/sumon_ali1557"
                            target="_blank"
                            className="hover:text-sky-400 transition"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/md-sumon-ali1557/"
                            target="_blank"
                            className="hover:text-blue-500 transition"
                        >
                            <FaLinkedin />
                        </a>

                    </div>
                </div>

                {/* SERVICES */}
                <div>
                    <h6 className="font-semibold mb-4">Services</h6>

                    <ul className="space-y-2 text-sm text-base-content/70">

                        <li className="hover:text-primary cursor-pointer transition">
                            Web Design
                        </li>

                        <li className="hover:text-primary cursor-pointer transition">
                            Frontend Development
                        </li>

                        <li className="hover:text-primary cursor-pointer transition">
                            Backend Development
                        </li>

                        <li className="hover:text-primary cursor-pointer transition">
                            API Integration
                        </li>

                    </ul>
                </div>

                {/* COMPANY */}
                <div>
                    <h6 className="font-semibold mb-4">Navigation</h6>

                    <ul className="space-y-2 text-sm">

                        <li>
                            <a href="#resume" className="hover:text-primary transition">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#projects" className="hover:text-primary transition">
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="#pricing" className="hover:text-primary transition">
                                Pricing
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className="hover:text-primary transition">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h6 className="font-semibold mb-4">Contact</h6>

                    <ul className="space-y-2 text-sm text-base-content/70">

                        <li>
                            Email:
                            <a
                                href="mailto:sumon01333581557@gmail.com"
                                className="hover:text-primary ml-1 transition"
                            >
                                sumon01333581557@gmail.com
                            </a>
                        </li>

                        <li>
                            Phone:
                            <a
                                href="tel:+8801333581557"
                                className="hover:text-primary ml-1 transition"
                            >
                                +880 1333581557
                            </a>
                        </li>

                        <li>Location: Dhaka, Bangladesh</li>

                    </ul>
                </div>

            </div>

            {/* SCROLL TOP BUTTON */}
            <button
                onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="
          fixed bottom-6 right-6
          p-3 rounded-full
          bg-primary text-white
          shadow-lg
          hover:-translate-y-1
          transition
          z-50
        "
            >
                <FaArrowUp />
            </button>

            {/* BOTTOM */}
            <div className="border-t border-gray-800 text-center py-4 text-sm text-base-content/60">
                © {new Date().getFullYear()} Sumon. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;