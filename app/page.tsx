import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Problem from "@/components/Problem";
import SolutionHub from "@/components/SolutionHub";
import FeatureTabs from "@/components/FeatureTabs";
import AppShowcase from "@/components/AppShowcase";
import Compliance from "@/components/Compliance";
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
      <Problem />
      <SolutionHub />
      <FeatureTabs />
      <AppShowcase />
      <Compliance />
      <Modules />
      <Onboarding />
      <Integrations />
      <FinalCTA />
      <Footer />
    </main>
  );
}
