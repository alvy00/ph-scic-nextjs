"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center text-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                    text-center max-w-4xl
                    bg-white/5
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-12
                "
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-neutral-300"
                >
                    Introducing ItemsVerse
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                    Manage Items
                    <span className="block text-neutral-400">
                        Smarter. Faster. Better.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
                    ItemsVerse is a modern platform for browsing, organizing,
                    and managing items through a clean, secure, and scalable
                    interface.
                </p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="/items"
                        className="
                            px-8 py-3
                            bg-white
                            text-black
                            rounded-lg
                            font-medium
                            transition
                        "
                    >
                        Explore Items
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="/login"
                        className="
                            px-8 py-3
                            bg-white/10
                            border border-white/20
                            rounded-lg
                            font-medium
                            hover:bg-white/20
                            transition
                        "
                    >
                        Get Started
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
