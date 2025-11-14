import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import neuratoLogoHorizontal from "@assets/NEURATIOLOGOacqua.svg";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  return (
    <nav className="bg-background/98 backdrop-blur-xl sticky top-0 z-50 border-b border-border/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16 lg:h-18">
          <div className="flex items-center relative">
            {!logoLoaded && (
              <div className="h-8 lg:h-10 w-32 lg:w-40 bg-muted/30 animate-pulse rounded-md" />
            )}
            <img
              src={neuratoLogoHorizontal}
              alt="Neuratio Logo"
              className={`h-8 lg:h-10 w-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-110 ${
                logoLoaded ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              onClick={() => scrollToSection("home")}
              onLoad={() => setLogoLoaded(true)}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <button
                onClick={() => scrollToSection("home")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200"
              >
                {t('nav.contact')}
              </button>
              <Link href="/problemi-soluzioni">
                <span className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200 cursor-pointer inline-block">
                  {t('nav.problemsSolutions')}
                </span>
              </Link>

              <div className="h-6 w-px bg-border/60 mx-2"></div>

              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-muted/60 font-medium px-3 py-2 text-sm"
              >
                <Globe className="h-4 w-4 mr-1.5" />
                {language.toUpperCase()}
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                className="glow-button text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm ml-2 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {t('nav.bookDemo')}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary p-2"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200"
              >
                {t('nav.contact')}
              </button>
              <Link href="/problemi-soluzioni">
                <button className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-all duration-200 w-full">
                  {t('nav.problemsSolutions')}
                </button>
              </Link>
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="glow-button text-primary-foreground rounded-lg font-semibold w-full shadow-md py-3 text-sm"
                >
                  {t('nav.bookDemo')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
