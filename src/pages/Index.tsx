import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InstrumentsSection from "@/components/InstrumentsSection";
import CoursesSection from "@/components/CoursesSection";
import TrinitySection from "@/components/TrinitySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TeachingSection from "@/components/TeachingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <InstrumentsSection />
        <CoursesSection />
        <TrinitySection />
        <WhyChooseSection />
        <TeachingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
