"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
    {
        icon: <FaGraduationCap />,
        title: "Diploma in Computer Science & Engineering",
        institute: "Polytechnic Institute",
        description:
            "Currently studying Computer Science & Engineering with focus on programming, web development, database management, and software engineering fundamentals.",
        status: "Running",
        year: "2023 - Present",
    },

    {
        icon: <FaSchool />,
        title: "Secondary School Certificate (SSC)",
        institute: "Arts Background",
        description:
            "Completed SSC from Arts group while building strong communication, analytical, and problem-solving skills.",
        status: "Completed",
        year: "Completed",
    },
];

const Education = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        Education
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        My Academic Journey
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
                        My educational background and continuous learning journey
                        in technology and software development.
                    </p>
                </div>

                {/* TIMELINE */}
                <div className="relative max-w-4xl mx-auto">

                    {/* LINE */}
                    <div
                        className="
              absolute left-4 md:left-1/2
              top-0
              h-full
              w-[2px]
              bg-primary/30
              md:-translate-x-1/2
            "
                    />

                    <div className="space-y-12">

                        {educationData.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`
                  relative flex items-center
                  ${index % 2 === 0
                                        ? "md:justify-start"
                                        : "md:justify-end"
                                    }
                `}
                            >

                                {/* DOT */}
                                <div
                                    className="
                    absolute left-4 md:left-1/2
                    w-8 h-8
                    bg-primary
                    rounded-full
                    border-4 border-base-200
                    flex items-center justify-center
                    text-white text-sm
                    z-10
                    md:-translate-x-1/2
                  "
                                >
                                    {item.icon}
                                </div>

                                {/* CARD */}
                                <div
                                    className="
                    ml-16 md:ml-0
                    w-full md:w-[45%]
                    bg-base-300
                    rounded-3xl
                    p-6 md:p-8
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition duration-300
                    border border-transparent
                    hover:border-primary/30
                  "
                                >

                                    <div className="flex items-center justify-between gap-4 mb-3">
                                        <span
                                            className="
                        px-3 py-1
                        rounded-full
                        bg-primary/10
                        text-primary
                        text-xs font-medium
                      "
                                        >
                                            {item.status}
                                        </span>

                                        <span className="text-sm text-base-content/60">
                                            {item.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-base-content/60 mb-4">
                                        {item.institute}
                                    </p>

                                    <p className="text-base-content/70 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>

                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;