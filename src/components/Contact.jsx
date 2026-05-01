import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className=" flex items-center py-12 px-4 bg-base-200">

            <div className="container mx-auto w-full border-b border-gray-700 pb-20">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Get In Touch
                    </h2>

                    <p className="text-base-content/70 mt-4 max-w-2xl mx-auto">
                        Have a project or idea? I’d love to hear from you.
                        I’m available for freelance work, collaboration, or frontend opportunities.
                    </p>

                    <p className="text-sm text-base-content/60 mt-2">
                        ⏱ Usually reply within 24 hours
                    </p>
                </div>

                {/* CARD */}
                <div className="grid md:grid-cols-2 gap-10 bg-base-100 rounded-2xl shadow-xl p-6 sm:p-10">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">

                        <div>
                            <h3 className="text-2xl font-bold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-5 text-base-content/80">

                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-primary" />
                                    <span>sumon01333581557@gmail.com</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-primary" />
                                    <span>+880 01333581557</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <span>Thakurgoan, Dhaka, Bangladesh</span>
                                </div>

                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h4 className="font-semibold mb-3">Find me on</h4>

                            <div className="flex gap-5 text-2xl text-base-content/70">
                                <a href="https://github.com/sumon-webs" target="blank" className="hover:text-primary transition">
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/md-sumon-ali1557/" target="blank"
                                    className="hover:text-primary transition">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-2">
                            <p className="text-sm text-base-content/60">
                                Let’s build something amazing together 🚀
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Send Message
                        </h3>

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

                            <button className="btn btn-primary w-full hover:scale-[1.02] transition">
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