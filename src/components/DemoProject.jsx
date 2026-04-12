"use client";

import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Mess Booking Website",
        desc: "Room booking system with details & booking form.",
        tech: ["Next.js", "Tailwind", "MongoDB"],
        live: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        desc: "Personal portfolio with modern UI design.",
        tech: ["React", "Tailwind"],
        live: "#",
        github: "#",
    },
    {
        title: "E-commerce UI",
        desc: "Online shop interface with product cards.",
        tech: ["Next.js", "Redux"],
        live: "#",
        github: "#",
    },
    {
        title: "Dashboard UI",
        desc: "Admin dashboard with charts and stats.",
        tech: ["React", "Chart.js"],
        live: "#",
        github: "#",
    },
];

// container stagger
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// card animation
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

const DemoProject = () => {
    return (
        <section className="py-16 px-4 bg-base-200">
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                >
                    My Demo Projects
                </motion.h1>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            className="group bg-base-300 rounded-2xl p-6 relative overflow-hidden
                            shadow-md hover:shadow-2xl hover:-translate-y-2
                            transition duration-300 flex flex-col justify-between"
                        >

                            {/* CONTENT */}
                            <div>

                                {/* TITLE */}
                                <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition">
                                    {project.title}
                                </h2>

                                {/* DESCRIPTION */}
                                <p className="text-sm text-base-content/70 mb-4">
                                    {project.desc}
                                </p>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-base-100 text-base-content/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* FOOTER */}
                            <div className="flex items-center justify-between mt-auto">

                                {/* LINKS */}
                                <div className="flex gap-4 text-lg">
                                    <a href={project.github} className="hover:text-primary transition">
                                        <FaGithub />
                                    </a>

                                    <a href={project.live} className="hover:text-primary transition">
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>

                                {/* VIEW BUTTON */}
                                <a
                                    href={project.live}
                                    className="flex items-center gap-2 text-sm font-medium group"
                                >
                                    <span className="opacity-0 group-hover:opacity-100 transition">
                                        View
                                    </span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                                </a>

                            </div>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
};

export default DemoProject;