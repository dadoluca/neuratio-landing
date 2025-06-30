import { useState } from "react";
import { ChevronDown, ChevronUp, Bot, CheckCircle, MapPin, Database, Hash, Users, Languages, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import neuratoLogoVertical from "@assets/NEURATIOLOGOVERTICALE.svg";
import smistatoreSvg from "@assets/smistatore.svg";
import infoMancantiSvg from "@assets/infoMancanti.svg";
import flowSvg from "@assets/flow_svg.svg";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  isPrimary: boolean;
}

export default function FeatureAccordion() {
  const { t } = useLanguage();
  const [expandedFeature, setExpandedFeature] = useState<string | null>("routing");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features: FeatureItem[] = [
    // Funzionalità Principali
    {
      id: "routing",
      icon: <Bot className="h-6 w-6" />,
      title: t('features.routing.title'),
      subtitle: t('features.routing.subtitle'),
      description: t('features.routing.description'),
      isPrimary: true
    },
    {
      id: "simple-requests",
      icon: <CheckCircle className="h-6 w-6" />,
      title: t('features.simpleRequests.title'),
      subtitle: t('features.simpleRequests.subtitle'),
      description: t('features.simpleRequests.description'),
      isPrimary: true
    },
    {
      id: "suggestions",
      icon: <MapPin className="h-6 w-6" />,
      title: t('features.suggestions.title'),
      subtitle: t('features.suggestions.subtitle'),
      description: t('features.suggestions.description'),
      isPrimary: true
    },
    {
      id: "knowledge-base",
      icon: <Database className="h-6 w-6" />,
      title: t('features.knowledgeBase.title'),
      description: t('features.knowledgeBase.description'),
      isPrimary: true
    },
    // Funzionalità Secondarie
    {
      id: "ticket-priority",
      icon: <Hash className="h-6 w-6" />,
      title: t('features.ticketPriority.title'),
      description: t('features.ticketPriority.description'),
      isPrimary: false
    },
    {
      id: "customer-identification",
      icon: <Users className="h-6 w-6" />,
      title: t('features.customerIdentification.title'),
      description: t('features.customerIdentification.description'),
      isPrimary: false
    },
    {
      id: "auto-translation",
      icon: <Languages className="h-6 w-6" />,
      title: t('features.autoTranslation.title'),
      description: t('features.autoTranslation.description'),
      isPrimary: false
    }
  ];

  const primaryFeatures = features.filter(f => f.isPrimary);
  const secondaryFeatures = features.filter(f => !f.isPrimary);

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  const getFeatureSvg = (featureId: string): string | undefined => {
    switch (featureId) {
      case "routing":
        return smistatoreSvg;
      case "simple-requests":
        return infoMancantiSvg;
      case "suggestions":
        return flowSvg;
      default:
        return undefined; // Nessun SVG per gli altri blocchetti
    }
  };

  const FeatureCard = ({ feature, isFirst, isLast }: { feature: FeatureItem; isFirst?: boolean; isLast?: boolean }) => {
    const isExpanded = expandedFeature === feature.id;
    
    const borderRadius = isFirst 
      ? "rounded-t-lg" 
      : isLast 
        ? "rounded-b-lg" 
        : "rounded-none";
    
    return (
      <div className={`border-x border-gray-200 ${isFirst ? 'border-t' : ''} border-b bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md ${borderRadius} overflow-hidden`} style={{backgroundColor: '#ffffff'}}>
        <button
          onClick={() => toggleFeature(feature.id)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center space-x-4">
            <div className="text-primary text-xl">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className="text-base text-muted-foreground mt-2">
                  {feature.subtitle}
                </p>
              )}
            </div>
          </div>
          <div className="text-muted-foreground">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>
        </button>
        
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-200 bg-white" style={{backgroundColor: '#ffffff'}}>
            {getFeatureSvg(feature.id) ? (
              // Layout per blocchetti CON SVG - testo sopra, SVG sotto grande
              <div className="space-y-6 mt-4">
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center">
                  <img 
                    src={getFeatureSvg(feature.id)} 
                    alt="Feature Diagram" 
                    className="h-48 w-auto max-w-full"
                  />
                </div>
              </div>
            ) : (
              // Layout per blocchetti SENZA SVG - testo che riempie tutto
              <div className="mt-4">
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Funzionalità Principali */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
            <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
            {t('features.primaryTitle')}
          </h3>
          <div className="space-y-0">
            {primaryFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.id} 
                feature={feature} 
                isFirst={index === 0}
                isLast={index === primaryFeatures.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Funzionalità Secondarie */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center">
            <span className="w-2 h-6 bg-primary/60 rounded-full mr-3"></span>
            {t('features.secondaryTitle')}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            {t('features.secondarySubtitle')}
          </p>
          <div className="space-y-0">
            {secondaryFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.id} 
                feature={feature} 
                isFirst={index === 0}
                isLast={index === secondaryFeatures.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => scrollToSection("contact")}
            className="glow-button text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center space-x-2"
          >
            <span>{t('features.discoverAll')}</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}