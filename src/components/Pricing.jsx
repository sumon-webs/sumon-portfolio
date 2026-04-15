"use client";

import { FaCheck, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Basic",
        price: "$19",
        description: "For simple landing pages",
        features: ["1 Page Website", "Responsive Design", "Basic Support"],
        popular: false,
    },
    {
        name: "Standard",
        price: "$49",
        description: "Best for small business",
        features: [
            "5 Pages Website",
            "Responsive Design",
            "API Integration",
            "Priority Support",
        ],
        popular: true,
    },
    {
        name: "Premium",
        price: "$99",
        description: "For full-scale web apps",
        features: [
            "Full Website",
            "Admin Dashboard",
            "Authentication System",
            "24/7 Support",
        ],
        popular: false,
    },
];

// container animation
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

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="bg-base-200 py-20 px-4"
        >
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        Pricing
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Pricing Plans
                    </h2>

                    <p className="text-base-content/70 mt-4 max-w-2xl mx-auto">
                        Choose a plan that fits your needs. Flexible pricing for
                        different types of web development projects.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={card}
                            className={`
                relative
                rounded-3xl
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition duration-300
                border
                ${plan.popular
                                    ? "bg-primary text-primary-content border-primary"
                                    : "bg-base-300 border-transparent"
                                }
              `}
                        >

                            {/* POPULAR BADGE */}
                            {plan.popular && (
                                <div className="absolute top-4 right-4">
                                    <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-secondary text-white">
                                        <FaCrown /> Popular
                                    </span>
                                </div>
                            )}

                            <div className="p-8 text-center">

                                {/* TITLE */}
                                <h3 className="text-2xl font-bold">
                                    {plan.name}
                                </h3>

                                <p className="text-sm opacity-70 mt-2">
                                    {plan.description}
                                </p>

                                {/* PRICE */}
                                <p className="text-4xl font-extrabold my-6">
                                    {plan.price}
                                </p>

                                {/* FEATURES */}
                                <ul className="space-y-3 text-left text-sm md:text-base">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3"
                                        >
                                            <FaCheck className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* BUTTON */}
                                <button
                                    className={`
                    mt-8 w-full py-3 rounded-xl font-medium transition
                    ${plan.popular
                                            ? "bg-white text-primary hover:opacity-90"
                                            : "bg-primary text-white hover:bg-primary/90"
                                        }
                  `}
                                >
                                    Choose Plan
                                </button>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Pricing;