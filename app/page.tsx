import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import VisionSection from "./components/sections/VisionSection";
import WhyAulaxSection from "./components/sections/WhyAulaxSection";
import NominateSection from "./components/sections/NominateSection";
import NominateFormSection from "./components/sections/NominateFormSection";
import PartnershipSection from "./components/sections/PartnershipSection";
import AppShowcaseSection from "./components/sections/AppShowcaseSection";
import ForBusinessSection from "./components/sections/ForBusinessSection";
import CTASection from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <WhyAulaxSection />
        <NominateSection />
        <NominateFormSection />
        <PartnershipSection />
        <AppShowcaseSection />
        <ForBusinessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
