const Skills = () => {
    const skills = [
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Next.js",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "HTML5",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "Tailwind",
            logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
    ];

    return (
        <section className="py-10 px-4">
            <div className="max-w-5xl mx-auto">

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-base-300 rounded-2xl p-6 flex flex-col items-center justify-center
                            shadow-md hover:shadow-2xl hover:-translate-y-2
                            transition duration-300 border border-transparent hover:border-primary"
                        >

                            {/* ICON */}
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-14 h-14 mb-4 group-hover:scale-110 transition"
                            />

                            {/* NAME */}
                            <h2 className="text-base-content text-sm md:text-base font-semibold group-hover:text-primary transition">
                                {skill.name}
                            </h2>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills;