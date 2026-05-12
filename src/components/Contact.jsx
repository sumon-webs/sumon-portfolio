"use client";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-base-200 py-20 px-4"
        >
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* HEADER */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-14"
                >
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold">
                        Contact
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Get In Touch
                    </h2>

                    <p className="text-base-content/70 mt-4 max-w-2xl mx-auto">
                        Have a project or idea? I’m available for freelance work,
                        collaboration, or frontend opportunities.
                    </p>

                    <p className="text-sm text-base-content/60 mt-2">
                        ⏱ Usually reply within 24 hours
                    </p>
                </motion.div>

                {/* CARD */}
                <div className="grid md:grid-cols-2 gap-10 bg-base-100 rounded-3xl shadow-xl p-6 sm:p-10">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-10"
                    >

                        {/* CONTACT INFO */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Contact Info
                            </h3>

                            <div className="space-y-5 text-base-content/80">

                                <div className="flex items-center gap-3 hover:text-primary transition">
                                    <FaEnvelope className="text-primary" />
                                    <span className="text-sm">
                                        sumon01333581557@gmail.com
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 hover:text-primary transition">
                                    <FaPhone className="text-primary" />
                                    <span className="text-sm">
                                        +880 01333581557
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 hover:text-primary transition">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <span className="text-sm">
                                        Thakurgoan, Dhaka, Bangladesh
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h4 className="font-semibold mb-3">
                                Social Links
                            </h4>

                            <div className="flex gap-5 text-2xl text-base-content/70">

                                <a
                                    href="https://github.com/sumon-webs"
                                    target="_blank"
                                    className="hover:text-primary hover:scale-110 transition"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/md-sumon-ali1557/"
                                    target="_blank"
                                    className="hover:text-primary hover:scale-110 transition"
                                >
                                    <FaLinkedin />
                                </a>

                            </div>
                        </div>

                        <p className="text-sm text-base-content/60">
                            Let’s build something amazing together 🚀
                        </p>

                    </motion.div>

                    {/* RIGHT SIDE FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >

                        <h3 className="text-2xl font-bold mb-6">
                            Send Message
                        </h3>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary"
                            />

                            <button
                                type="submit"
                                className="
                  btn btn-primary w-full
                  hover:scale-[1.02]
                  transition
                "
                            >
                                Send Message
                            </button>

                        </form>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;