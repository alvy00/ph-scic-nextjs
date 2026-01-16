"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="py-20 px-6 text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                    max-w-4xl mx-auto text-center
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-10
                "
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    About the Platform
                </h2>

                <p className="text-neutral-400 leading-relaxed">
                    This project is a modern full-stack web application built to
                    demonstrate best practices in frontend architecture, API
                    integration, and authentication workflows. It leverages the
                    Next.js App Router for scalable routing and rendering, along
                    with an Express.js backend for data management and business
                    logic.
                </p>

                <p className="text-neutral-400 leading-relaxed mt-4">
                    The application includes publicly accessible pages,
                    protected routes secured by authentication, and a structured
                    item management system. It is designed with performance,
                    maintainability, and user experience in mind, following
                    patterns commonly used in production-ready applications.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutSection;
