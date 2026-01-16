"use client";

import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
    return (
        <section className="py-20 px-6   text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                    max-w-3xl mx-auto text-center
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-10
                "
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Stay in the Loop
                </h2>

                <p className="text-neutral-400 mb-8">
                    Get updates on new items, features, and platform
                    improvements.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="
                            flex-1
                            px-4 py-3
                            rounded-lg
                            bg-black/40
                            border border-white/10
                            text-white
                            placeholder-neutral-500
                            focus:outline-none
                            focus:ring-2 focus:ring-white/20
                        "
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="
                            px-6 py-3
                            rounded-lg
                            font-medium
                            bg-white
                            text-black
                            transition
                        "
                    >
                        Subscribe
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default NewsletterSection;
