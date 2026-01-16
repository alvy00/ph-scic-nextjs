import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="min-h-[80vh] flex justify-center items-center">
                {children}
            </div>

            <Footer />
        </>
    );
};

export default layout;
