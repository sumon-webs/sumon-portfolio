"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import TestimonialImage from "@/assets/image/testimonial.png";

const testimonials = [
    {
        name: "Sojib Bhuiya",
        role: "Business Owner",
        text: "Outstanding work quality and excellent communication throughout the project. The website looks modern, fast, and fully responsive.",
    },

    {
        name: "Sarah Williams",
        role: "UI/UX Designer",
        text: "Amazing experience working together. Clean code structure, beautiful UI implementation, and smooth overall performance.",
    },

    {
        name: "Michael Brown",
        role: "Startup Founder",
        text: "Delivered the project on time with professional quality. Highly recommended for modern MERN stack web applications.",
    },
];

// container animation
const container = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.2,
        },
    },
};

// card animation
const card = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const Testimonial = () => {
    return (
        <section
            id="testimonial"
            className="bg-base-200 py-16 px-4"
        >
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >

                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        Testimonials
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        What Clients Say
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-base-content/70">
                        Feedback from clients and collaborators about my
                        development skills, professionalism, and project quality.
                    </p>

                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                    {testimonials.map((item) => (
                        <motion.div
                            key={item.name}
                            variants={card}
                            className="
                group
                bg-base-300
                rounded-3xl
                p-7
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition duration-300
                border border-transparent
                hover:border-primary/30
                flex flex-col
                justify-between
              "
                        >

                            {/* QUOTE */}
                            <div className="mb-6">
                                <span className="text-5xl text-primary leading-none">
                                    “
                                </span>

                                <p
                                    className="
                    text-sm md:text-base
                    text-base-content/70
                    leading-relaxed
                    mt-2
                  "
                                >
                                    {item.text}
                                </p>
                            </div>

                            {/* USER */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/10">

                                <div
                                    className="
                    w-14 h-14
                    rounded-full
                    overflow-hidden
                    border-2 border-primary
                    shrink-0
                  "
                                >
                                    <Image
                                        src={TestimonialImage}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-base-content/60">
                                        {item.role}
                                    </p>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
};

export default Testimonial;