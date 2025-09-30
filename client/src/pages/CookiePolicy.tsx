import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Cookie, Database, Settings, XCircle, FileText } from 'lucide-react';
import { Link } from 'wouter';

export default function CookiePolicy() {
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
            <Cookie className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">
              {t('cookiePolicy.title')}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {t('cookiePolicy.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t('cookiePolicy.lastUpdated')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          {/* 1. Introduzione */}
          <Section icon={<FileText className="h-6 w-6 text-primary mr-3" />} title={t('cookiePolicy.section1Title')}>
            <p>{t('cookiePolicy.section1Content')}</p>
          </Section>

          {/* 2. Strumenti di Tracciamento */}
          <Section icon={<Database className="h-6 w-6 text-primary mr-3" />} title={t('cookiePolicy.section2Title')}>
            <p>{t('cookiePolicy.section2Content')}</p>
            <div className="bg-muted p-4 rounded-md mt-4">
              <h4 className="font-semibold">{t('cookiePolicy.section2TableHeader')}</h4>
              <p className="text-sm text-muted-foreground">{t('cookiePolicy.section2Table')}</p>
            </div>
          </Section>

          {/* 3. Finalità e Funzionamento */}
          <Section title={t('cookiePolicy.section3Title')}>
            <p>{t('cookiePolicy.section3Content')}</p>
          </Section>

          {/* 4. Gestione del Consenso */}
          <Section title={t('cookiePolicy.section4Title')}>
            <p>{t('cookiePolicy.section4Content')}</p>
          </Section>

          {/* 5. Gestione tramite Dispositivo */}
          <Section icon={<Settings className="h-6 w-6 text-primary mr-3" />} title={t('cookiePolicy.section5Title')}>
            <p>{t('cookiePolicy.section5Content')}</p>
          </Section>

          {/* 6. Conseguenze del Rifiuto */}
          <Section icon={<XCircle className="h-6 w-6 text-primary mr-3" />} title={t('cookiePolicy.section6Title')}>
            <p>{t('cookiePolicy.section6Content')}</p>
          </Section>

          {/* 7. Titolare */}
          <Section icon={<Shield className="h-6 w-6 text-primary mr-3" />} title={t('cookiePolicy.section7Title')}>
            <p>{t('cookiePolicy.section7Content')}</p>
          </Section>

          {/* 8. Definizioni */}
          <Section title={t('cookiePolicy.section8Title')}>
            <p>{t('cookiePolicy.section8Content')}</p>
          </Section>

          {/* 9. Modifiche */}
          <Section title={t('cookiePolicy.section9Title')}>
            <p>{t('cookiePolicy.section9Content')}</p>
          </Section>

        </div>
      </div>
    </div>
  );
}

// Reusable Section wrapper
function Section({ icon, title, children }: { icon?: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        {icon}
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="bg-card p-6 rounded-lg border border-border">
        {children}
      </div>
    </section>
  );
}
