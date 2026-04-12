"use client";

import HeroImage from "../assets/image/hero.png";
import Image from "next/image";
import { FaGithub, FaReact, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <div className="bg-base-200 px-4 sm:px-6 lg:px-8">

            <div className="container mx-auto py-12 grid md:grid-cols-2 gap-10 items-center border-b border-gray-700">

                {/* LEFT SIDE */}
                <div className="flex flex-col justify-center">

                    <p className="text-amber-500 mb-2">
                        Welcome to my world
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
                        Hi, I am Sumon <br />

                        <span className="text-primary">
                            <Typewriter
                                words={[
                                    "a Web Developer",
                                    "a Web Designer",
                                    "HTML, CSS, JavaScript",
                                    "React & Next.js"
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={1500}
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
                                <FaGithub className="hover:text-white cursor-pointer transition" />
                                <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
                                <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-400">
                                Best skills on
                            </h3>

                            <div className="flex gap-4 text-2xl text-gray-400">
                                <FaReact className="hover:text-cyan-400 transition" />
                                <FaReact className="hover:text-cyan-400 transition" />
                                <FaReact className="hover:text-cyan-400 transition" />
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