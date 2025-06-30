import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Database, Users, Mail, Calendar } from 'lucide-react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('privacyPolicy.backToHome')}
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              {t('privacyPolicy.title')}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {t('privacyPolicy.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t('privacyPolicy.lastUpdated')}: 28 Giugno 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Introduzione */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t('privacyPolicy.section1Title')}
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                {t('privacyPolicy.section1Content')}
              </p>
            </div>
          </section>

          {/* Section 2: Dati Raccolti */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t('privacyPolicy.section2Title')}
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacyPolicy.section2Content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t('privacyPolicy.dataType1')}</li>
                <li>{t('privacyPolicy.dataType2')}</li>
                <li>{t('privacyPolicy.dataType3')}</li>
                <li>{t('privacyPolicy.dataType4')}</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Utilizzo dei Dati */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t('privacyPolicy.section3Title')}
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacyPolicy.section3Content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t('privacyPolicy.usage1')}</li>
                <li>{t('privacyPolicy.usage2')}</li>
                <li>{t('privacyPolicy.usage3')}</li>
                <li>{t('privacyPolicy.usage4')}</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Condivisione dei Dati */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t('privacyPolicy.section4Title')}
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                {t('privacyPolicy.section4Content')}
              </p>
            </div>
          </section>

          {/* Section 5: Sicurezza */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t('privacyPolicy.section5Title')}
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed">
                {t('privacyPolicy.section5Content')}
              </p>
            </div>
          </section>

          {/* Section 6: I Tuoi Diritti */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold text-foreground">
                {t('privacyPolicy.section6Title')}
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacyPolicy.section6Content')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>{t('privacyPolicy.right1')}</li>
                <li>{t('privacyPolicy.right2')}</li>
                <li>{t('privacyPolicy.right3')}</li>
                <li>{t('privacyPolicy.right4')}</li>
              </ul>
            </div>
          </section>

          {/* Contatti */}
          <section className="mb-12">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t('privacyPolicy.contactTitle')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t('privacyPolicy.contactContent')}
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> info@neuratio.ai</p>
                <p><strong>Partita IVA:</strong> 04170290045</p>
                <p><strong>Data di fondazione:</strong> 10 Giugno 2025</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}