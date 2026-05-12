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

    const handleContact = async (e) => {
        e.preventDefault();

        const form = e.target;

        const data = {
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            subject: form.subject.value,
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
            } else {
                alert("Failed to send ❌");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong ❌");
        }
    };
    // re_Ka2hApYS_fLhw6ADszG9BfwWY4JDNzFuZ

    return (
        <section id="contact" className="bg-base-200 py-20 px-4">
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
                        Have a project or idea? I’m available for freelance work.
                    </p>
                </motion.div>

                {/* CARD */}
                <div className="grid md:grid-cols-2 gap-10 bg-base-100 rounded-3xl shadow-xl p-6 sm:p-10">

                    {/* LEFT SIDE */}
                    <div className="space-y-10">

                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Contact Info
                            </h3>

                            <div className="space-y-5 text-base-content/80">

                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-primary" />
                                    <span className="text-sm">
                                        sumon01333581557@gmail.com
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-primary" />
                                    <span className="text-sm">
                                        +880 01333581557
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <span className="text-sm">
                                        Thakurgoan, Dhaka, Bangladesh
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Social Links</h4>

                            <div className="flex gap-5 text-2xl text-base-content/70">

                                <a href="https://github.com/sumon-webs" target="_blank">
                                    <FaGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/md-sumon-ali1557/" target="_blank">
                                    <FaLinkedin />
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >

                        <h3 className="text-2xl font-bold mb-6">
                            Send Message
                        </h3>

                        <form onSubmit={handleContact} className="space-y-4">

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

                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full"
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full"
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-primary w-full"
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