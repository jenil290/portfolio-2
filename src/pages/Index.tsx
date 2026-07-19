import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <SkillsPreview />
      <PortfolioPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
