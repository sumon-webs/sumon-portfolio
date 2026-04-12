const Education = () => {
    return (
        <section className="py-10 px-4">
            <div className="container mx-auto relative">

                {/* LINE */}
                <div className="absolute left-3 top-0 w-[2px] h-full bg-primary/30"></div>

                <div className="space-y-10">

                    {/* ITEM 1 */}
                    <div className="relative pl-10">
                        {/* DOT */}
                        <span className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-base-200"></span>

                        <div className="bg-base-300 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h2 className="text-lg md:text-xl font-semibold text-primary mb-2">
                                Diploma in Computer Science & Engineering
                            </h2>

                            <p className="text-base-content/70 text-sm md:text-base">
                                Currently studying CSE diploma with focus on programming, web development, and software fundamentals.
                            </p>

                            <span className="text-sm text-gray-400 block mt-2">
                                Running...
                            </span>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="relative pl-10">
                        {/* DOT */}
                        <span className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-base-200"></span>

                        <div className="bg-base-300 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h2 className="text-lg md:text-xl font-semibold text-primary mb-2">
                                SSC (Arts Background)
                            </h2>

                            <p className="text-base-content/70 text-sm md:text-base">
                                Completed Secondary School Certificate from Arts group. Built strong foundation in general studies.
                            </p>

                            <span className="text-sm text-gray-400 block mt-2">
                                Completed
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;