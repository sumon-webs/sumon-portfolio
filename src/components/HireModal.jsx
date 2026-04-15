"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HireMeModal = ({ open, onClose }) => {

    useEffect(() => {
        if (!open) return;

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open, onClose]);

    const handleContact = async (e) => {
        e.preventDefault();

        const form = e.target;

        const data = {
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            service: form.service.value,
            message: form.message.value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                alert("Message sent 🚀");
                form.reset();
                onClose?.();
            } else {
                alert("Failed to send ❌");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong ❌");
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
                    onClick={() => onClose?.()}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className="bg-base-100 w-full max-w-lg rounded-2xl shadow-xl p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* CLOSE */}
                        <button
                            onClick={() => onClose?.()}
                            className="btn btn-sm btn-circle absolute right-3 top-3"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-2">
                            Hire Me 🚀
                        </h2>

                        <p className="text-base-content/70 mb-6 text-sm">
                            Fill up the form and I’ll get back to you within 24 hours.
                        </p>

                        {/* FORM */}
                        <form className="space-y-4" onSubmit={handleContact}>

                            <input
                                name="from_name"
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                name="from_email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                required
                            />

                            <select
                                name="service"
                                className="select select-bordered w-full"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Service
                                </option>
                                <option value="landing">Landing Page</option>
                                <option value="website">Full Website</option>
                                <option value="bug">Bug Fix</option>
                                <option value="api">API Integration</option>
                            </select>

                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Project Details"
                                className="textarea textarea-bordered w-full"
                                required
                            />

                            <button type="submit" className="btn btn-primary w-full">
                                Send Request
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default HireMeModal;