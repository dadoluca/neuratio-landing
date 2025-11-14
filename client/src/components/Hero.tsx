import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import FlowDiagram from "./FlowDiagram";
import ParticlesBackground from "./ParticlesBackground";
import styles from "./Hero.module.css";
import neuratoLogoVertical from "@assets/NEURATIOLOGOVERTICALE.svg";

export default function Hero() {
  const { t } = useLanguage();
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setShowContent(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient py-20 sm:py-28 lg:py-40 relative overflow-hidden">
      <ParticlesBackground />
      <div className="ai-grid absolute inset-0 opacity-20"></div>

      {/* Professional Loading Animation */}
      {showAnimation && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
          <ParticlesBackground />
          <div className="relative z-10 flex items-center justify-center">
            {/* Clean Spinning Circle */}
            <div className="w-32 h-32 rounded-full custom-spinner"></div>
            {/* Logo in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={neuratoLogoVertical}
                alt="Neuratio Logo"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: "6s" }}></div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="mb-6 sm:mb-8">
              {t('hero.title')}{" "}
              <span className="text-primary">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
              {t('hero.subtitle')}
            </p>
            <div className="flex justify-center items-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="glow-button animate-breath text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl transform transition-all duration-300 hover:scale-105"
              >

                {t('hero.bookDemo')}
              </Button>
            </div>
          </div>

          {/* Application Flow Visualization */}
          <div className="mt-12 sm:mt-16 lg:mt-20 animate-slide-up">
            <div className="relative">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4">
                  {t('hero.flowTitle')}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground px-4">
                  {t('hero.flowSubtitle')}
                </p>
              </div>
              <div className="flex justify-center px-2">
                <FlowDiagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
