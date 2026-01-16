import { useLanguage } from "@/contexts/LanguageContext";
import mgLogo from "@/assets/MG_LOGO_NUOVO.png";
import dynachemLogo from "@/assets/dynachem-logo-registered.png";
import caffiniLogo from "@/assets/logo_caffini.jpg";

export default function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mb-2 sm:mb-3">
            {t('clients.trusted')}
          </p>
          <h2 className="mb-3 sm:mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t('clients.subtitle')}
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 sm:gap-12 lg:gap-20 flex-wrap">
          <div className="group transition-all duration-300 transform hover:scale-110">
            <img
              src={mgLogo}
              alt="MG Client"
              className="h-12 sm:h-16 lg:h-20 w-auto grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="group transition-all duration-300 transform hover:scale-110">
            <img
              src={dynachemLogo}
              alt="Dynachem Client"
              className="h-12 sm:h-16 lg:h-20 w-auto grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="group transition-all duration-300 transform hover:scale-110">
            <img
              src={caffiniLogo}
              alt="Caffini Client"
              className="h-12 sm:h-16 lg:h-20 w-auto grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
