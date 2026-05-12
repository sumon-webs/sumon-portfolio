"use client";

import HeroImage from "../assets/image/hero.png";
import Image from "next/image";
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiHeroui, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <div id="home" className="bg-base-200 px-4 sm:px-6 lg:px-8">

            <div className="container mx-auto py-12 grid md:grid-cols-2 gap-10 items-center border-b border-gray-700">

                {/* LEFT SIDE */}
                <div className="flex flex-col justify-center">

                    <p className="text-amber-500 mb-2">
                        Welcome to my world
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
                        Hi, I am Sumon <br />

                        <span className="text-primary font-semibold">
                            <Typewriter
                                words={[
                                    "MERN Stack Developer",
                                    "Frontend Developer",
                                    "React & Next.js Expert",
                                    "Backend Developer",
                                    "Node.js & Express.js",
                                    "MongoDB Database Expert",
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

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-gray-400 max-w-xl">
                        I build modern, responsive, and user-friendly web
                        applications. My focus is on clean UI, smooth user
                        experience, and performance.
                    </p>

                    {/* SOCIAL + SKILLS */}
                    <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-8">

                        {/* Social */}
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-400">
                                Find with me
                            </h3>

                            <div className="flex gap-4 text-2xl text-gray-400">
                                <a href="https://github.com/sumon-webs" target="blank">
                                    <FaGithub className="hover:text-white cursor-pointer transition" />
                                </a>
                                <a href="https://x.com/sumon_ali1557" target="blank">
                                    <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
                                </a>
                                <a href="https://www.linkedin.com/in/md-sumon-ali1557/" target="blank">
                                    <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
                                </a>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="space-y-6">

                            {/* FRONTEND */}
                            <div>
                                <h3 className="font-semibold mb-3 text-gray-400">
                                    Frontend Skills
                                </h3>

                                <div className="flex flex-wrap gap-4 text-3xl text-gray-400">

                                    <FaHtml5 className="hover:text-orange-500 transition duration-300" />

                                    <FaCss3Alt className="hover:text-blue-500 transition duration-300" />

                                    <IoLogoJavascript className="hover:text-yellow-400 transition duration-300" />

                                    <FaReact className="hover:text-cyan-400 transition duration-300" />

                                    <SiNextdotjs className="hover:text-white transition duration-300" />

                                    <SiTailwindcss className="hover:text-sky-400 transition duration-300" />
                                    <SiHeroui className="hover:text-sky-400 transition duration-300" />

                                </div>
                            </div>

                            {/* BACKEND */}
                            <div>
                                <h3 className="font-semibold mb-3 text-gray-400">
                                    Backend Skills
                                </h3>

                                <div className="flex flex-wrap gap-4 text-3xl text-gray-400">

                                    <FaNodeJs className="hover:text-green-500 transition duration-300" />

                                    <SiExpress className="hover:text-white transition duration-300" />

                                    <SiMongodb className="hover:text-green-400 transition duration-300" />

                                    <SiFirebase className="hover:text-yellow-500 transition duration-300" />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-auto object-contain rounded-xl shadow-2xl"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;