import AccessibilityWidget from "@/components/AccessibilityWidget";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import BeliefSection from "@/components/landing/BeliefSection";
import MechanismSection from "@/components/landing/MechanismSection";
import MythSection from "@/components/landing/MythSection";
import MethodSection from "@/components/landing/MethodSection";
import SimplerWaySection from "@/components/landing/SimplerWaySection";
import ExposureSection from "@/components/landing/ExposureSection";
import AboutSection from "@/components/landing/AboutSection";

import NumbersSection from "@/components/landing/NumbersSection";
import ModelSection from "@/components/landing/ModelSection";
import AfterSalesSection from "@/components/landing/AfterSalesSection";

import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import VideoPreviewSection from "@/components/landing/VideoPreviewSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div dir="rtl" className="bg-background">
      <AccessibilityWidget />
      <HeroSection />
      <PainSection />
      <BeliefSection />
      <MechanismSection />
      <MethodSection />
      
      <SimplerWaySection />
      <ExposureSection />
      
      <NumbersSection />
      <ModelSection />
      <AfterSalesSection />
      
      <VideoPreviewSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
