import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import VideoSection from "@/components/VideoSection";
import Problem from "@/components/Problem";
import SolutionHub from "@/components/SolutionHub";
import AppShowcase from "@/components/AppShowcase";
import FeatureTabs from "@/components/FeatureTabs";
import Compliance from "@/components/Compliance";
import Comparison from "@/components/Comparison";
import Modules from "@/components/Modules";
import Onboarding from "@/components/Onboarding";
import Integrations from "@/components/Integrations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <VideoSection />
      <Problem />
      <SolutionHub />
      {/* Capter : d'où vient l'information */}
      <AppShowcase />
      {/* Exploiter : ce que vous en faites */}
      <FeatureTabs />
      {/* Prouver */}
      <Compliance />
      <Comparison />
      <Modules />
      <Onboarding />
      <Integrations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
