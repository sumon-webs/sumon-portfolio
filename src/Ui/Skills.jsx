"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const frontendSkills = [
    {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
];

const backendSkills = [
    {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Firebase",
        logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
];

const cardVariant = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const Skills = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        My Skills
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Technologies I Use
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
                        I work with modern frontend and backend technologies
                        to build scalable and responsive web applications.
                    </p>
                </div>

                {/* FRONTEND */}
                <div className="mb-14">
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Frontend Development
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                        {frontendSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="
                  group
                  bg-base-300
                  rounded-3xl
                  p-6
                  flex flex-col items-center justify-center
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition duration-300
                  border border-transparent
                  hover:border-primary/40
                "
                            >

                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    width={60}
                                    height={60}
                                    className="mb-4 group-hover:scale-110 transition duration-300"
                                />

                                <h2
                                    className="
                    text-sm md:text-base
                    font-semibold
                    group-hover:text-primary
                    transition
                  "
                                >
                                    {skill.name}
                                </h2>

                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* BACKEND */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Backend Development
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {backendSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="
                  group
                  bg-base-300
                  rounded-3xl
                  p-6
                  flex flex-col items-center justify-center
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition duration-300
                  border border-transparent
                  hover:border-primary/40
                "
                            >

                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    width={60}
                                    height={60}
                                    className="mb-4 group-hover:scale-110 transition duration-300"
                                />

                                <h2
                                    className="
                    text-sm md:text-base
                    font-semibold
                    group-hover:text-primary
                    transition
                  "
                                >
                                    {skill.name}
                                </h2>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;