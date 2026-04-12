import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { FaCode, FaRegUserCircle, FaRocket } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const services = [
    {
        icon: <IoMdMenu />,
        title: "E-Commerce",
        desc: "Build modern online stores with secure checkout and smooth user experience.",
    },
    {
        icon: <CgWebsite />,
        title: "Web Design",
        desc: "Create modern, clean, and user-friendly website designs for all devices.",
    },
    {
        icon: <FaRegUserCircle />,
        title: "Portfolio",
        desc: "Showcase your personal or business projects in a professional way.",
    },
    {
        icon: <DiResponsive />,
        title: "Responsive Design",
        desc: "Ensure your website looks perfect on mobile, tablet, and desktop screens.",
    },
    {
        icon: <FaCode />,
        title: "Clean Code",
        desc: "Write scalable, reusable, and maintainable code for long-term projects.",
    },
    {
        icon: <FaRocket />,
        title: "Performance",
        desc: "Optimize websites for speed, SEO, and better user experience.",
    },
];

const WhatIDo = () => {
    return (
        <section className=" bg-base-200  ">
            <div className="container mx-auto border-b border-gray-700 py-16 px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-12">
                    <p className="text-sm text-primary">Features</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                        What I Do
                    </h2>
                </div>

                {/* GRID */}
                <div className=" bg-base-400 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-neutral text-neutral-content shadow-md 
                            hover:shadow-2xl hover:-translate-y-2 
                            transition duration-300 flex flex-col gap-4"
                        >
                            <div className="text-3xl text-primary">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-sm text-base-content/70">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WhatIDo;