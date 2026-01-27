import { ExternalLink, Bot, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import neuratoLogoHorizontal from "@assets/NEURATIOLOGOacqua.svg";
import i3pLogo from "@/assets/i3P-logo-bianco.svg";
import poloIctLogo from "@/assets/Polo-ICT_Member_LOGO.png";
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
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {t('footer.description')}
            </p>

            {/* I3P Incubator Logo - Enhanced */}
            <a
              href="https://www.i3p.it/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8"
            >
              <div className="p-5 bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-white p-2 rounded-lg">
                    <img
                      src={i3pLogo}
                      alt="I3P - Incubatore Politecnico di Torino"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                      Startup Incubata
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      I3P - Politecnico di Torino
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Incubatore certificato dal 2000
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Polo ICT Member Logo */}
            <a
              href="https://poloinnovazioneict.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6"
            >
              <div className="p-5 bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-white p-2 rounded-lg">
                    <img
                      src={poloIctLogo}
                      alt="Polo Innovazione ICT - Member"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                      Member
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      Polo Innovazione ICT
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cluster per l'innovazione digitale
                    </p>
                  </div>
                </div>
              </div>
            </a>
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
              <li>
                <Link to="/cookie-policy">
                  <span className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg relative group cursor-pointer">
                    {t('cookiePolicy.title')}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">{t('footer.connect')}</h4>

            {/* Company LinkedIn */}
            <a
              href="https://www.linkedin.com/company/neuratioai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-semibold">Seguici su LinkedIn</span>
            </a>

            <h5 className="text-sm font-semibold text-foreground mb-3 mt-6">Team</h5>
            <div className="flex space-x-6 mb-6">
              <a
                href="https://www.linkedin.com/in/luca-dadone-8858a41a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink className="h-8 w-8" />
                <span className="sr-only">Luca</span>
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-bioddo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink className="h-8 w-8" />
                <span className="sr-only">Andrea</span>
              </a>
            </div>

            <a
              href="mailto:info@neuratio.ai"
              className="text-muted-foreground hover:text-primary transition-all duration-300 inline-block"
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