import { ExternalLink, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import neuratoLogoHorizontal from "@assets/NEURATIOLOGOacqua.svg";
import { Link } from "wouter"; // Changed from "react-router-dom" to "wouter"

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={neuratoLogoHorizontal} 
                alt="Neuratio Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg relative group"
                >
                  {t('nav.home')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg relative group"
                >
                  {t('nav.about')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg relative group"
                >
                  {t('nav.contact')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <Link to="/privacy-policy">
                  <span className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg relative group cursor-pointer">
                    {t('privacyPolicy.title')}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">{t('footer.connect')}</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/luca-dadone-8858a41a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >Luca
                <ExternalLink className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-bioddo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >Andrea<ExternalLink className="h-8 w-8" />
              </a>              
            </div>
            <br />
            <a
                href="mailto:info@neuratio.ai"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                info@neuratio.ai
              </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-lg">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}