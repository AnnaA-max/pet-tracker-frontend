import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";





export default function LandingPage() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Features />
            <HowItWorks />
            <CTA />
            <Footer/>
        </>
    );
}

