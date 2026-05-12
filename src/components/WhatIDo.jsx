"use client";

import { motion } from "framer-motion";

import {
    FaCode,
    FaRocket,
    FaServer,
    FaDatabase,
} from "react-icons/fa";

import {
    SiMongodb,
    SiNextdotjs,
} from "react-icons/si";

import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";

const services = [
    {
        icon: <CgWebsite />,
        title: "Modern Web Design",
        desc: "Create clean, modern, and visually attractive websites with smooth user experience.",
    },

    {
        icon: <SiNextdotjs />,
        title: "Frontend Development",
        desc: "Build fast and interactive frontend applications using React.js and Next.js.",
    },

    {
        icon: <FaServer />,
        title: "Backend Development",
        desc: "Develop secure and scalable backend systems using Node.js and Express.js.",
    },

    {
        icon: <SiMongodb />,
        title: "Database Integration",
        desc: "Manage dynamic data efficiently with MongoDB and modern NoSQL solutions.",
    },

    {
        icon: <DiResponsive />,
        title: "Responsive Design",
        desc: "Ensure websites look perfect on mobile, tablet, and desktop devices.",
    },

    {
        icon: <FaRocket />,
        title: "Performance Optimization",
        desc: "Improve website speed, SEO, and overall performance for better user experience.",
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
const cardVariant = {
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

const WhatIDo = () => {
    return (
        <section className="bg-base-200">
            <div className="container mx-auto border-b border-gray-700 py-16 px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        Services
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        What I Do
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
                        I build modern, scalable, and responsive web applications
                        with clean UI and high performance using the MERN stack.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariant}
                            className="
                group
                p-7
                rounded-3xl
                bg-neutral
                text-neutral-content
                border border-white/5
                hover:border-primary/40
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition duration-300
                flex flex-col gap-5
              "
                        >
                            <div
                                className="
                  w-14 h-14
                  rounded-2xl
                  bg-primary/10
                  text-primary
                  flex items-center justify-center
                  text-3xl
                  group-hover:scale-110
                  transition duration-300
                "
                            >
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {service.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-base-content/70">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhatIDo;