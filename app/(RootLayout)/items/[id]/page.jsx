"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";

const Page = () => {
    const { id } = useParams();
    const itemId = Number(id);

    const {
        data: items = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const res = await fetch("/data.json");
            if (!res.ok) throw new Error("Failed to fetch items");
            return res.json();
        },
    });

    if (isLoading) return <p className="text-white p-6">Loading...</p>;
    if (isError) return <p className="text-red-500 p-6">Error loading item</p>;

    const item = items.find((item) => item.id === itemId);
    if (!item) return <p className="text-white p-6">Item not found</p>;

    return (
        <div className="min-h-screen p-6 md:p-12 text-white">
            {/* ================= TOP SECTION ================= */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Image */}
                <div className="relative h-[420px] rounded-2xl bg-white/10 backdrop-blur-xl overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-8"
                        priority
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold">{item.name}</h1>

                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span>{item.ratings} / 5</span>
                        <span className="text-gray-400">(1,248 reviews)</span>
                    </div>

                    <p className="text-3xl font-bold text-emerald-400">
                        ${item.price}
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        {item.description}
                    </p>

                    <div className="flex gap-4 pt-2">
                        <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition">
                            Buy Now
                        </button>
                        <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= FEATURES ================= */}
            <section className="max-w-6xl mx-auto mt-20">
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        "Active Noise Cancellation",
                        "Up to 40 Hours Battery Life",
                        "Premium Build Quality",
                        "Bluetooth 5.3 Connectivity",
                        "Fast Charging Support",
                        "Crystal Clear Microphone",
                    ].map((feature) => (
                        <div
                            key={feature}
                            className="p-5 rounded-xl bg-white/10 backdrop-blur"
                        >
                            ✔ {feature}
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SPECIFICATIONS ================= */}
            <section className="max-w-6xl mx-auto mt-20">
                <h2 className="text-2xl font-semibold mb-6">Specifications</h2>

                <div className="overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-left">
                        <tbody className="divide-y divide-white/10">
                            <tr>
                                <td className="p-4 text-gray-400">Brand</td>
                                <td className="p-4">AudioX</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-gray-400">
                                    Connectivity
                                </td>
                                <td className="p-4">Wireless (Bluetooth)</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-gray-400">Battery</td>
                                <td className="p-4">40 Hours</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-gray-400">Charging</td>
                                <td className="p-4">USB-C Fast Charge</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ================= SHIPPING ================= */}
            <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6">
                {[
                    {
                        title: "Free Shipping",
                        desc: "Delivered within 3–5 business days",
                    },
                    {
                        title: "Easy Returns",
                        desc: "30-day hassle-free returns",
                    },
                    {
                        title: "Warranty",
                        desc: "1-year manufacturer warranty",
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="p-6 rounded-xl bg-white/10 backdrop-blur"
                    >
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                ))}
            </section>

            {/* ================= REVIEWS ================= */}
            <section className="max-w-6xl mx-auto mt-20">
                <h2 className="text-2xl font-semibold mb-6">
                    Customer Reviews
                </h2>

                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-white/10 backdrop-blur"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">John Doe</span>
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Amazing sound quality and battery life. Totally
                                worth the price!
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= RELATED ================= */}
            <section className="max-w-6xl mx-auto mt-20">
                <h2 className="text-2xl font-semibold mb-6">
                    Related Products
                </h2>

                <div className="h-40 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                    Related items will appear here
                </div>
            </section>
        </div>
    );
};

export default Page;
