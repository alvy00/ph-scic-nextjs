import HeroSection from "../components/HBanner/HeroSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import FeaturesSection from "../components/Features/FeaturesSection";
import StatsSection from "../components/Stats/StatsSection";
import TestSection from "../components/Testimonials/TestSection";
import NewsletterSection from "../components/Newsletter/NewsletterSection";
import AboutSection from "../components/About/AboutSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="min-h-[80vh] flex flex-col justify-center items-center">
                <HeroSection />
                <FeaturesSection />
                <StatsSection />
                <TestSection />
                <NewsletterSection />
                <AboutSection />
            </div>

            <Footer />
        </>
    );
}
