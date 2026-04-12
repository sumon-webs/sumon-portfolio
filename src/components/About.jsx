"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
    {
        icon: <FaReact className="text-4xl mx-auto text-cyan-500" />,
        name: "React",
    },
    {
        icon: <SiNextdotjs className="text-4xl mx-auto" />,
        name: "Next.js",
    },
    {
        icon: <SiTailwindcss className="text-4xl mx-auto text-sky-500" />,
        name: "Tailwind",
    },
    {
        icon: <FaNodeJs className="text-4xl mx-auto text-green-500" />,
        name: "Node.js",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const About = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="container mx-auto w-full">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        About Me
                    </h2>
                    <p className="text-base-content/70 mt-3">
                        Get to know me better
                    </p>
                </motion.div>

                {/* MAIN CARD */}
                <div className="grid md:grid-cols-2 gap-10 items-center bg-base-100 shadow-xl rounded-2xl p-6 sm:p-10">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
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
                    </motion.div>

                    {/* RIGHT SIDE - SKILLS */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {skills.map((s, index) => (
                            <motion.div
                                key={index}
                                variants={card}
                                className="bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
                            >
                                {s.icon}
                                <p className="mt-3 font-semibold">{s.name}</p>
                            </motion.div>
                        ))}

                        {/* FULL WIDTH CARD */}
                        <motion.div
                            variants={card}
                            className="col-span-2 bg-base-200 rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
                        >
                            <FaLaptopCode className="text-4xl mx-auto text-primary" />
                            <p className="mt-3 font-semibold">
                                Clean UI & Responsive Design
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;