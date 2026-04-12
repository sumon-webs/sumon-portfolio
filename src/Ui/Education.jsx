const Education = () => {
    return (
        <section className="py-10 px-4 ">

            <div className=" mx-auto space-y-6 ">

                {/* Card 1 */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:shadow-xl transition duration-300">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                        Diploma in Computer Science & Engineering
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        Currently studying CSE diploma with focus on programming, web development, and software fundamentals.
                    </p>
                    <span className="text-gray-400 text-sm block mt-2">
                        Running...
                    </span>
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:shadow-xl transition duration-300">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                        SSC (Arts Background)
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                        Completed Secondary School Certificate from Arts group. Built strong foundation in general studies.
                    </p>
                    <span className="text-gray-400 text-sm block mt-2">
                        Completed
                    </span>
                </div>

            </div>

        </section>
    );
};

export default Education;