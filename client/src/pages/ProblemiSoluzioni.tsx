import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, CheckCircle, Zap, Clock, Globe, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function ProblemiSoluzioni() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: t('problems.title1'),
      description: t('problems.desc1')
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t('problems.title2'),
      description: t('problems.desc2')
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: t('problems.title3'),
      description: t('problems.desc3')
    },
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      title: t('problems.title4'),
      description: t('problems.desc4')
    }
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('problemsPage.solution1Title'),
      description: t('problemsPage.solution1Desc')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: t('problemsPage.solution2Title'),
      description: t('problemsPage.solution2Desc')
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: t('problemsPage.solution3Title'),
      description: t('problemsPage.solution3Desc')
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('problemsPage.solution4Title'),
      description: t('problemsPage.solution4Desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('problemsPage.backToHome')}
            </Button>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('problemsPage.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {t('problemsPage.subtitle')}
          </p>
        </div>
      </div>

      {/* Problems Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t('problemsPage.problemsTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('problemsPage.problemsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="card-gradient rounded-2xl p-8 border border-red-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 rounded-full p-3">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('problemsPage.solutionsTitle')}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('problemsPage.solutionsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/#contact">
              <Button size="lg" className="glow-button text-primary-foreground px-12 py-6 text-xl font-bold rounded-2xl">
                {t('problemsPage.implementSolutions')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}