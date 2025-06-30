import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle, Globe, Users, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Risposta Automatica Intelligente",
      description: "L'AI analizza le richieste e fornisce risposte immediate basate sulla documentazione tecnica e sulle best practices.",
      stat: "80% più veloce"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Escalation Automatica",
      description: "I problemi complessi vengono automaticamente inoltrati al tecnico specializzato con tutte le informazioni necessarie.",
      stat: "70% automazione"
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Supporto Multilingue 24/7",
      description: "Assistenza continua in più lingue, permettendo ai clienti di ricevere aiuto nel loro fuso orario.",
      stat: "24/7 disponibile"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Base di Conoscenza Centralizzata",
      description: "Tutte le informazioni tecniche, manuali e procedure sono centralizzate e sempre aggiornate.",
      stat: "100% accuratezza"
    }
  ];

  return (
    <section className="py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Le Nostre Soluzioni
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Neuratio trasforma ogni problema in un'opportunità di eccellenza nel servizio clienti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 rounded-full p-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <span className="text-primary font-bold text-lg">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/problemi-soluzioni">
            <Button size="lg" className="glow-button text-primary-foreground px-12 py-6 text-xl font-bold rounded-2xl transform transition-all duration-300 hover:scale-105">
              Scopri Tutti i Dettagli
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}