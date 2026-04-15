"use client";

import Education from "@/Ui/Education";
import Skills from "@/Ui/Skills";

import {
    Tab,
    Tabs,
    TabList,
    TabPanel,
} from "react-tabs";

import "react-tabs/style/react-tabs.css";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
        },
    },
};

const Resume = () => {
    return (
        <section
            id="resume"
            className="bg-base-200 py-16 px-4"
        >
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
                        Resume
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        My Resume
                    </h1>

                    <p className="max-w-2xl mx-auto text-base-content/70 mt-4">
                        Explore my educational background and technical skills
                        that help me build modern and scalable web applications.
                    </p>

                </motion.div>

                {/* TABS */}
                <Tabs>

                    {/* TAB LIST */}
                    <TabList
                        className="
              flex flex-wrap
              justify-center
              gap-4
              mb-10
            "
                    >

                        <Tab
                            className="
                px-6 sm:px-10
                py-3
                rounded-2xl
                bg-base-300
                border border-transparent
                shadow-md
                cursor-pointer
                transition duration-300
                hover:border-primary/40
                hover:-translate-y-1
                outline-none
              "
                            selectedClassName="
                !bg-primary
                !text-white
                shadow-xl
              "
                        >
                            🎓 Education
                        </Tab>

                        <Tab
                            className="
                px-6 sm:px-10
                py-3
                rounded-2xl
                bg-base-300
                border border-transparent
                shadow-md
                cursor-pointer
                transition duration-300
                hover:border-primary/40
                hover:-translate-y-1
                outline-none
              "
                            selectedClassName="
                !bg-primary
                !text-white
                shadow-xl
              "
                        >
                            💼 Skills
                        </Tab>

                    </TabList>

                    {/* TAB PANELS */}
                    <div
                        className="
              bg-base-100
              rounded-3xl
              shadow-xl
              overflow-hidden
            "
                    >

                        {/* EDUCATION */}
                        <TabPanel>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Education />
                            </motion.div>
                        </TabPanel>

                        {/* SKILLS */}
                        <TabPanel>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Skills />
                            </motion.div>
                        </TabPanel>

                    </div>

                </Tabs>

            </div>
        </section>
    );
};

export default Resume;