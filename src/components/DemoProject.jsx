"use client";

import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce | Summer Store",
        desc: "Room booking system with details & booking form.",
        tech: ["JavaScript", "Next.js", "HeroUI", "MongoDB"],
        live: "https://a-08-summer-store.vercel.app/",
        github: "https://github.com/sumon-webs/A-08-Summer-Store",
    },
    {
        title: "Portfolio Website",
        desc: "Personal portfolio with modern UI design.",
        tech: ["JavaScript", "React", "Tailwind"],
        live: "https://sumon-portfolio-mu.vercel.app/",
        github: "https://github.com/sumon-webs/sumon-portfolio",
    },
    {
        title: "AI Image Creator",
        desc: "AI image generation web app with modern UI.",
        tech: ["JavaScript", "Next.js", "HeroUI", "MongoDB"],
        live: "https://ai-image-creator-six.vercel.app/",
        github: "https://github.com/sumon-webs/Ai-Image-Creator",
    },
    {
        title: "Friend Find | KenKeeper",
        desc: "Find friends with video, audio and text features.",
        tech: ["React", "JavaScript", "DaisyUI"],
        live: "https://ai-image-creator-six.vercel.app/",
        github: "https://github.com/sumon-webs/KenKeeper",
    },
];

// container animation
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
        <section id="projects" className="py-16 px-4 bg-base-200">
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
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
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={card}
                            className="
                group
                bg-base-300
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition duration-300
                flex flex-col justify-between
                border border-transparent
                hover:border-primary/30
              "
                        >

                            {/* CONTENT */}
                            <div>

                                <h2 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition">
                                    {project.title}
                                </h2>

                                <p className="text-sm text-base-content/70 mb-4">
                                    {project.desc}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 rounded-full bg-base-100 text-base-content/70"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* FOOTER */}
                            <div className="flex items-center justify-between mt-auto">

                                {/* GITHUB */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-lg hover:text-primary transition"
                                >
                                    <FaGithub />
                                    <span className="text-sm">Code</span>
                                </a>

                                {/* LIVE */}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm font-medium group hover:text-primary transition"
                                >
                                    <span className="opacity-0 group-hover:opacity-100 transition">
                                        Live
                                    </span>
                                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition" />
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