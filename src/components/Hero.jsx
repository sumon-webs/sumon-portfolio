"use client";

import Image from "next/image";
import HeroImage from "../assets/image/hero.png";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiHeroui,
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-base-200 px-4 sm:px-6 lg:px-8"
        >
            <div className="container mx-auto py-16 grid md:grid-cols-2 gap-12 items-center border-b border-gray-700">

                {/* LEFT SIDE */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center"
                >

                    <p className="text-primary font-medium mb-3 tracking-wider">
                        Welcome to my world
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

                        Hi, I am <span className="text-primary">Sumon</span>

                        <br />

                        <span className="text-primary font-semibold">
                            <Typewriter
                                words={[
                                    "MERN Stack Developer",
                                    "Frontend Developer",
                                    "React & Next.js Expert",
                                    "Backend Developer",
                                    "Node.js & Express.js",
                                    "MongoDB Expert",
                                    "Responsive Web Designer",
                                    "JavaScript Enthusiast",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1800}
                            />
                        </span>

                    </h1>

                    <p className="mt-6 text-base-content/70 max-w-xl leading-relaxed">
                        I build modern, responsive, and high-performance web applications
                        with clean UI and smooth user experience using MERN stack & Next.js.
                    </p>

                    {/* SOCIAL */}
                    <div className="mt-8">

                        <h3 className="font-semibold mb-4 text-base-content/60">
                            Find me on
                        </h3>

                        <div className="flex gap-5 text-2xl">

                            <motion.a
                                href="https://github.com/sumon-webs"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                                className="hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200 rounded-lg p-1 transition"
                            >
                                <FaGithub />
                            </motion.a>

                            <motion.a
                                href="https://x.com/sumon_ali1557"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter Profile"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                                className="hover:text-sky-400 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200 rounded-lg p-1 transition"
                            >
                                <FaTwitter />
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/md-sumon-ali1557/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                                className="hover:text-blue-500 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-200 rounded-lg p-1 transition"
                            >
                                <FaLinkedin />
                            </motion.a>

                        </div>

                    </div>

                    {/* SKILLS */}
                    <div className="mt-10 space-y-6">

                        {/* FRONTEND */}
                        <div>
                            <h3 className="font-semibold mb-3 text-base-content/60">
                                Frontend Skills
                            </h3>

                            <div className="flex flex-wrap gap-5 text-3xl text-base-content/60">

                                <FaHtml5 className="hover:text-orange-500 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <FaCss3Alt className="hover:text-blue-500 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <IoLogoJavascript className="hover:text-yellow-400 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <FaReact className="hover:text-cyan-400 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <SiNextdotjs className="hover:text-white hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <SiTailwindcss className="hover:text-sky-400 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <SiHeroui className="hover:text-indigo-400 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />

                            </div>
                        </div>

                        {/* BACKEND */}
                        <div>
                            <h3 className="font-semibold mb-3 text-base-content/60">
                                Backend Skills
                            </h3>

                            <div className="flex flex-wrap gap-5 text-3xl text-base-content/60">

                                <FaNodeJs className="hover:text-green-500 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <SiExpress className="hover:text-white hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <SiMongodb className="hover:text-green-400 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
                                <SiFirebase className="hover:text-yellow-500 hover:scale-120 hover:rotate-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />

                            </div>
                        </div>

                    </div>

                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center md:justify-end"
                >

                    <div className="relative">

                        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full"></div>

                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src={HeroImage}
                                alt="hero image"
                                className="relative z-10 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[520px] object-contain rounded-2xl shadow-2xl"
                            />
                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
