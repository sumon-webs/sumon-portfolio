"use client";

import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Basic",
        price: "$19",
        features: ["1 Page Website", "Responsive Design", "Basic Support"],
        popular: false,
    },
    {
        name: "Standard",
        price: "$49",
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
        features: [
            "Full Website",
            "Admin Dashboard",
            "Authentication System",
            "24/7 Support",
        ],
        popular: false,
    },
];

// container (stagger effect)
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
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Pricing = () => {
    return (
        <section className="bg-base-200 flex items-center px-4 py-20">
            <div className="max-w-6xl mx-auto w-full">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold">Pricing Plans</h2>
                    <p className="text-base-content/70 mt-3">
                        Choose a plan that fits your needs
                    </p>
                </motion.div>

                {/* PRICING GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            className={`card shadow-xl transition hover:shadow-2xl
                                ${plan.popular
                                    ? "bg-primary text-primary-content scale-105"
                                    : "bg-base-100"
                                }`}
                        >
                            <div className="card-body text-center">

                                {/* POPULAR BADGE */}
                                {plan.popular && (
                                    <div className="badge badge-secondary mb-2">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold">
                                    {plan.name}
                                </h3>

                                <p className="text-4xl font-extrabold my-4">
                                    {plan.price}
                                </p>

                                {/* FEATURES */}
                                <ul className="space-y-2 text-left text-base-content/80">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <FaCheck />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* BUTTON */}
                                <div className="card-actions justify-center mt-6">
                                    <button
                                        className={`btn w-full ${plan.popular
                                                ? "btn-secondary"
                                                : "btn-outline btn-primary"
                                            }`}
                                    >
                                        Choose Plan
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Pricing;