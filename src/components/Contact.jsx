import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="min-h-screen flex items-center px-4 py-12">
            <div className="max-w-6xl mx-auto w-full">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold">Get In Touch</h2>
                    <p className="text-base-content/70 mt-3 max-w-2xl mx-auto">
                        Have a project or idea? I’d love to hear from you.
                        I’m available for freelance work, collaboration, or any frontend opportunities.
                    </p>
                    <p className="text-sm text-base-content/60 mt-2">
                        ⏱ Usually reply within 24 hours
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid md:grid-cols-2 gap-10 bg-base-100 shadow-xl rounded-2xl p-8">

                    {/* LEFT SIDE - INFO */}
                    <div className="space-y-6">

                        <h3 className="text-2xl font-bold">Contact Information</h3>

                        <div className="space-y-4 text-base-content/80">

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <span>example@email.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-primary" />
                                <span>+880 1XXX-XXXXXX</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-primary" />
                                <span>Kaliganj, Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h4 className="font-semibold mb-2">Find me on</h4>
                            <div className="flex gap-4 text-xl">
                                <a href="#" className="hover:text-primary">
                                    <FaGithub />
                                </a>
                                <a href="#" className="hover:text-primary">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                        {/* EXTRA CTA */}
                        <div className="pt-4">
                            <p className="text-sm text-base-content/70">
                                Let’s turn your idea into reality 🚀
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div>
                        <h3 className="text-2xl font-bold mb-5">Send Message</h3>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full"
                            ></textarea>

                            <button className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;