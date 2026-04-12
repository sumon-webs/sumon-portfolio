"use client";

import TestimonialImage from "@/assets/image/testimonial.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sumon Ali",
        role: "Web Developer",
        text: "Very professional and talented developer. The project was completed on time with excellent quality. Highly recommended!",
    },
    {
        name: "Client Name",
        role: "UI/UX Designer",
        text: "Amazing experience! Clean UI design and smooth performance. Will definitely work again.",
    },
];

// container stagger
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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

const Testimonial = () => {
    return (
        <section className="bg-base-200 py-16 px-4">
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-12"
                >
                    Testimonials
                </motion.h1>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-8"
                >

                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            className="bg-base-300 rounded-2xl p-6 shadow-md
                            hover:shadow-2xl hover:-translate-y-2
                            transition duration-300"
                        >

                            {/* HEADER */}
                            <div className="flex items-center gap-4 mb-4">

                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src={TestimonialImage}
                                        alt="testimonial"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-base-content/70">
                                        {item.role}
                                    </p>
                                </div>

                            </div>

                            {/* TEXT */}
                            <p className="text-sm text-base-content/70 leading-relaxed">
                                “{item.text}”
                            </p>

                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
};

export default Testimonial;