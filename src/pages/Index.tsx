import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { PathwaySection } from "@/components/home/PathwaySection";
import { BlueprintPreviewSection } from "@/components/home/BlueprintPreviewSection";
import { WhatIsSection } from "@/components/home/WhatIsSection";
import { GovernanceSection } from "@/components/home/GovernanceSection";
import { DocumentsSection } from "@/components/home/DocumentsSection";
import { ClosingSection } from "@/components/home/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PillarsSection />
        <PathwaySection />
        <BlueprintPreviewSection />
        <WhatIsSection />
        <GovernanceSection />
        <DocumentsSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
