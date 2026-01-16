"use client";

import React from "react";
import { motion } from "framer-motion";

const TestSection = () => {
    const testimonials = [
        { name: "John Doe", text: "Very clean UI and simple to use." },
        { name: "Jane Smith", text: "Perfect demo for learning Next.js." },
        { name: "Alex Brown", text: "Authentication flow works smoothly." },
    ];

    return (
        <section className="py-20px-6 text-white">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold text-center mb-14"
            >
                What People Say
            </motion.h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="
                            bg-white/5
                            backdrop-blur-lg
                            border border-white/10
                            rounded-xl
                            p-6
                            transition
                        "
                    >
                        <p className="text-neutral-300 italic leading-relaxed mb-4">
                            “{t.text}”
                        </p>
                        <p className="text-sm font-medium text-neutral-400">
                            — {t.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TestSection;
