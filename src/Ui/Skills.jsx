
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

            <div className=" mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 backdrop-blur-md 
            rounded-2xl p-6 flex flex-col items-center justify-center 
            hover:shadow-xl hover:-translate-y-2 transition duration-300"
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-12 h-12 mb-4"
                        />

                        <h2 className="text-white text-sm md:text-base font-semibold">
                            {skill.name}
                        </h2>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Skills;