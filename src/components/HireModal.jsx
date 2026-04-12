"use client";

import React from "react";

const HireMeModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            <div className="bg-base-100 w-full max-w-lg rounded-2xl shadow-xl p-6 relative">

                {/* CLOSE */}
                <button
                    onClick={onClose}
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
                <form className="space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        required
                    />

                    <select defaultValue="" className="select select-bordered w-full">
                        <option value="" disabled>
                            Select Service
                        </option>
                        <option value="landing">Landing Page</option>
                        <option value="website">Full Website</option>
                        <option value="bug">Frontend Bug Fix</option>
                        <option value="api">API Integration</option>
                    </select>

                    <textarea
                        rows="4"
                        placeholder="Project Details"
                        className="textarea textarea-bordered w-full"
                    ></textarea>

                    <button className="btn btn-primary w-full">
                        Send Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HireMeModal;