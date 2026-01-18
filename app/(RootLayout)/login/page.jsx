"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@example.com" && password === "123456") {
            document.cookie = "auth=true; path=/";
            toast.success("Logged in");
            router.push("/items");
        } else {
            toast.error("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="input"
                    placeholder="Email"
                />

                <label className="label">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="input"
                    placeholder="Password"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                    Login
                </button>
            </fieldset>
        </form>
    );
};

export default Page;
