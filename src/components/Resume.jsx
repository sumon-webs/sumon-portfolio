"use client";

import Education from "@/Ui/Education";
import Skills from "@/Ui/Skills";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Resume = () => {
    return (
        <section className="bg-base-200">
            <div className="container mx-auto lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-700">

                {/* HEADER */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        My Resume
                    </h1>
                    <p className="text-base-content/70 mt-3">
                        Education & Professional Skills
                    </p>
                </motion.div>

                {/* TABS */}
                <Tabs>

                    {/* TAB LIST */}
                    <TabList className="flex flex-wrap justify-center gap-4 mb-10">

                        <Tab
                            className="px-6 sm:px-10 py-3 rounded-full bg-base-100 shadow 
                            cursor-pointer transition hover:bg-primary hover:text-white"
                            selectedClassName="bg-primary text-white shadow-lg"
                        >
                            🎓 Education
                        </Tab>

                        <Tab
                            className="px-6 sm:px-10 py-3 rounded-full bg-base-100 shadow 
                            cursor-pointer transition hover:bg-primary hover:text-white"
                            selectedClassName="bg-primary text-white shadow-lg"
                        >
                            💼 Skills
                        </Tab>

                    </TabList>

                    {/* TAB PANELS */}
                    <div className="bg-base-100 rounded-2xl shadow-xl p-6 sm:p-8">

                        <TabPanel key="education">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Education />
                            </motion.div>
                        </TabPanel>

                        <TabPanel key="skills">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
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