import { AlertCircle, Clock, User, Book, DollarSign, Database, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Problems() {
  const { t } = useLanguage();
  
  const problems = [
    {
      icon: <AlertCircle className="h-12 w-12" />,
      title: t('problems.emailChains'),
      description: t('problems.emailChainsDesc')
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: t('problems.timeZones'),
      description: t('problems.timeZonesDesc')
    },
    {
      icon: <User className="h-12 w-12" />,
      title: t('problems.bottlenecks'),
      description: t('problems.bottlenecksDesc')
    },
    {
      icon: <Book className="h-12 w-12" />,
      title: t('problems.manuals'),
      description: t('problems.manualsDesc')
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: t('problems.costs'),
      description: t('problems.costsDesc')
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: t('problems.knowledge'),
      description: t('problems.knowledgeDesc')
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            {t('problems.title')}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('problems.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="card-gradient p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group border border-red-500/20"
            >
              <div className="mb-6 text-red-400 group-hover:text-red-300 transition-colors duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-red-200 transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                {problem.description}
              </p>
              
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-red-500/0 group-hover:border-red-500/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/problemi-soluzioni">
            <Button size="lg" className="glow-button text-primary-foreground px-12 py-6 text-xl font-bold rounded-2xl transform transition-all duration-300 hover:scale-105">
              Scopri le Nostre Soluzioni
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
