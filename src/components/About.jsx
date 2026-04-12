import React from "react";
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const About = () => {
    return (
        <section className="  flex items-center px-4 py-21">
            <div className="max-w-6xl mx-auto w-full">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-base-content">
                        About Me
                    </h2>
                    <p className="text-base-content/70 mt-2">
                        Get to know me better
                    </p>
                </div>

                {/* MAIN CARD */}
                <div className="grid md:grid-cols-2 gap-10 items-center bg-base-100 shadow-xl rounded-2xl p-8">

                    {/* LEFT SIDE */}
                    <div className="space-y-5">
                        <h3 className="text-2xl font-bold">
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
                        <div className="flex gap-3 flex-wrap">
                            <button className="btn btn-primary">Download CV</button>
                            <button className="btn btn-outline">Hire Me</button>
                        </div>
                    </div>

                    {/* RIGHT SIDE - SKILLS */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="card bg-base-200 p-5 text-center hover:shadow-xl transition">
                            <FaReact className="text-4xl mx-auto text-cyan-500" />
                            <p className="mt-2 font-semibold">React</p>
                        </div>

                        <div className="card bg-base-200 p-5 text-center hover:shadow-xl transition">
                            <SiNextdotjs className="text-4xl mx-auto" />
                            <p className="mt-2 font-semibold">Next.js</p>
                        </div>

                        <div className="card bg-base-200 p-5 text-center hover:shadow-xl transition">
                            <SiTailwindcss className="text-4xl mx-auto text-sky-500" />
                            <p className="mt-2 font-semibold">Tailwind</p>
                        </div>

                        <div className="card bg-base-200 p-5 text-center hover:shadow-xl transition">
                            <FaNodeJs className="text-4xl mx-auto text-green-500" />
                            <p className="mt-2 font-semibold">Node.js</p>
                        </div>

                        <div className="card bg-base-200 p-5 text-center col-span-2 hover:shadow-xl transition">
                            <FaLaptopCode className="text-4xl mx-auto text-primary" />
                            <p className="mt-2 font-semibold">
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