import { useLanguage } from "@/contexts/LanguageContext";
import mgLogo from "@/assets/MG_LOGO_NUOVO.png";
import dynachemLogo from "@/assets/dynachem-logo-registered.png";
import caffiniLogo from "@/assets/logo_caffini.jpg";
import emiambienteLogo from "@/assets/logo_emiambiente.png";
import ravizzaLogo from "@/assets/ravizza_packaging.png";

const logos = [
  { src: mgLogo, alt: "MG Client", className: "h-9 sm:h-16" },
  { src: dynachemLogo, alt: "Dynachem Client", className: "h-8 sm:h-14" },
  { src: caffiniLogo, alt: "Caffini Client", className: "h-8 sm:h-14" },
  { src: emiambienteLogo, alt: "Emiambiente Client", className: "h-6 sm:h-9" },
  { src: ravizzaLogo, alt: "Ravizza Packaging Client", className: "h-9 sm:h-16" },
];

export default function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
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
      </div>

      {/* Full-width marquee outside padding container */}
      <div className="overflow-hidden relative w-full">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[hsl(var(--muted)/0.3)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[hsl(var(--muted)/0.3)] to-transparent pointer-events-none" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 sm:mx-14 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} w-auto grayscale`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
