"use client";

import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
    const features = [
        "Mock Authentication",
        "Public & Protected Routes",
        "Item Listing & Details",
        "Express.js API",
        "Next.js App Router",
        "Responsive UI",
    ];

    return (
        <section className="py-20 px-6 text-white">
            <h2 className="text-3xl font-semibold text-center mb-12">
                Features
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="
                            p-6
                            text-center
                            bg-white/5
                            backdrop-blur-lg
                            border border-white/10
                            rounded-xl
                            shadow-lg
                        "
                    >
                        <h3 className="font-medium text-lg text-neutral-200">
                            {feature}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
