"use client";

import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
    const stats = [
        { label: "Items Managed", value: "1000+" },
        { label: "Active Users", value: "500+" },
        { label: "API Uptime", value: "99.9%" },
        { label: "Performance", value: "Fast" },
    ];

    return (
        <section className="py-20 text-white px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="
                            text-center
                            bg-white/5
                            backdrop-blur-lg
                            border border-white/10
                            rounded-xl
                            py-6
                        "
                    >
                        <p className="text-4xl font-semibold text-white">
                            {stat.value}
                        </p>
                        <p className="text-neutral-400 mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
