import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const DemoProject = () => {
    const projects = [
        {
            title: "Mess Booking Website",
            desc: "Room booking system with details & booking form.",
            tech: ["Next.js", "Tailwind", "MongoDB"],
            live: "#",
            github: "#",
        },
        {
            title: "Portfolio Website",
            desc: "Personal portfolio with modern UI design.",
            tech: ["React", "Tailwind"],
            live: "#",
            github: "#",
        },
        {
            title: "E-commerce UI",
            desc: "Online shop interface with product cards.",
            tech: ["Next.js", "Redux"],
            live: "#",
            github: "#",
        },
        {
            title: "Dashboard UI",
            desc: "Admin dashboard with charts and stats.",
            tech: ["React", "Chart.js"],
            live: "#",
            github: "#",
        },
    ];

    return (
        <section className="py-16 px-4 container mx-auto border-b border-gray-700">

            <h1 className="text-3xl md:text-4xl   font-bold text-white text-center mb-12">
                My Demo Projects
            </h1>

            {/* GRID */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white/5 border border-white/10 backdrop-blur-md 
            rounded-2xl p-6 relative overflow-hidden 
            hover:shadow-xl hover:-translate-y-2 transition duration-300"
                    >

                        {/* Title */}
                        <h2 className="text-white text-xl font-semibold mb-2">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4">
                            {project.desc}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center justify-between">

                            <div className="flex gap-3">
                                <a href={project.github} className="text-gray-300 hover:text-white">
                                    <FaGithub />
                                </a>

                                <a href={project.live} className="text-gray-300 hover:text-white">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>

                            {/* View button */}
                            <div className="flex items-center gap-2 cursor-pointer">
                                <a href={project.live} >
                                    <FaArrowRight className="text-white text-lg" />
                                    <span className="text-sm text-white opacity-0 translate-x-2 
                  group-hover:opacity-100 group-hover:translate-x-0 
                  transition duration-300">
                                        View
                                    </span>
                                </a>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default DemoProject;