import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Interfaces from "@/components/Interfaces";
import Benefits from "@/components/Benefits";
import Certifications from "@/components/Certifications";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <Features />
      <Interfaces />
      <Benefits />
      <Certifications />
      <Screenshots />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
