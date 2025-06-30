import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import neuratoLogoHorizontal from "@assets/NEURATIOLOGOacqua.svg";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <nav className="bg-background/95 backdrop-blur-xl sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={neuratoLogoHorizontal} 
              alt="Neuratio Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {t('nav.home')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {t('nav.about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {t('nav.contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></span>
              </button>
              <Link href="/problemi-soluzioni">
                <span className="text-muted-foreground hover:text-primary transition-all duration-300 relative group cursor-pointer">
                  {t('nav.problemsSolutions')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="glow-button text-primary-foreground px-6 py-2 rounded-xl font-semibold"
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
              className="text-muted-foreground hover:text-primary"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
              >
                {t('nav.contact')}
              </button>
              <Link href="/problemi-soluzioni">
                <button className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left w-full">
                  {t('nav.problemsSolutions')}
                </button>
              </Link>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="glow-button text-primary-foreground rounded-xl font-semibold w-full"
              >
                {t('nav.bookDemo')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
