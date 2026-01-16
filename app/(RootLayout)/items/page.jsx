"use client";

import ItemCard from "@/components/ItemCard/ItemCard";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
    const {
        data: items = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const res = await fetch("/data.json");

            if (!res.ok) {
                throw new Error("Failed to fetch items");
            }

            return res.json();
        },
    });

    if (isLoading) return <p className="text-white">Loading...</p>;
    if (isError) return <p className="text-red-500">Error loading items</p>;

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {items.map((item, index) => (
                <ItemCard key={item.id ?? index} item={item} />
            ))}
        </div>
    );
};

export default Page;
