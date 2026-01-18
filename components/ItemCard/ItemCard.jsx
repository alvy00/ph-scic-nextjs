"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemCard = ({ item }) => {
    const { id, name, description, price, image, ratings } = item;
    const router = useRouter();

    const handleDetails = (id) => {
        router.push(`/items/${id}`);
    };

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                overflow-hidden
                shadow-lg
                flex
                flex-col
                justify-center items-center
            "
        >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6 text-white">
                <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                    {name}
                </h3>

                <p className="text-sm text-neutral-400 line-clamp-2 mb-4">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <span className="text-xl font-medium">${price}</span>

                    <div className="flex items-center gap-1 text-sm text-neutral-300">
                        <span>⭐</span>
                        <span>{ratings}</span>
                    </div>
                </div>
            </div>
            <button
                onClick={() => handleDetails(id)}
                className="text-center border p-1 my-4 rounded-2xl hover:bg-gray-600 w-[50%] transition duration-300 cursor-pointer"
            >
                View Details
            </button>
        </motion.div>
    );
};

export default ItemCard;
