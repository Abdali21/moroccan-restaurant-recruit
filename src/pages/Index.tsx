import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Statistics from "@/components/Statistics";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import MobileStickyCTA from "@/components/MobileStickyCTA";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <Process />
      <Benefits />
      <Statistics />
      <FinalCTA />
      <MobileStickyCTA />
    </main>
  );
};

export default Index;
