import React from "react";
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const About = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="container mx-auto w-full">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        About Me
                    </h2>
                    <p className="text-base-content/70 mt-3">
                        Get to know me better
                    </p>
                </div>

                {/* MAIN CARD */}
                <div className="grid md:grid-cols-2 gap-10 items-center bg-base-100 shadow-xl rounded-2xl p-6 sm:p-10">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        <h3 className="text-2xl md:text-3xl font-bold">
                            Hi, I’m Sumon 👋
                        </h3>

                        <p className="text-base-content/70 leading-relaxed">
                            I am a passionate Frontend Developer specializing in
                            building modern, responsive, and user-friendly web
                            applications using React.js and Next.js.
                        </p>

                        <p className="text-base-content/70">
                            I love turning ideas into real-world digital products
                            with clean UI and smooth user experience.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="btn btn-primary">
                                Download CV
                            </button>

                            <button className="btn btn-outline">
                                Hire Me
                            </button>
                        </div>

                    </div>

                    {/* RIGHT SIDE - SKILLS */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
                            <FaReact className="text-4xl mx-auto text-cyan-500" />
                            <p className="mt-3 font-semibold">React</p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
                            <SiNextdotjs className="text-4xl mx-auto" />
                            <p className="mt-3 font-semibold">Next.js</p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
                            <SiTailwindcss className="text-4xl mx-auto text-sky-500" />
                            <p className="mt-3 font-semibold">Tailwind</p>
                        </div>

                        <div className="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
                            <FaNodeJs className="text-4xl mx-auto text-green-500" />
                            <p className="mt-3 font-semibold">Node.js</p>
                        </div>

                        {/* FULL WIDTH CARD */}
                        <div className="col-span-2 bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
                            <FaLaptopCode className="text-4xl mx-auto text-primary" />
                            <p className="mt-3 font-semibold">
                                Clean UI & Responsive Design
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;