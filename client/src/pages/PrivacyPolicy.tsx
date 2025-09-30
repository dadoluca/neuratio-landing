import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Shield, Eye, Database, Users, Mail, Calendar
} from 'lucide-react';
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
            {t('privacyPolicy.lastUpdated')}: 30 Settembre 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          {/* 1. Chi siamo */}
          <Section icon={<Eye className="h-6 w-6 text-primary mr-3" />} title={t('privacyPolicy.section1Title')}>
            <p>{t('privacyPolicy.section1Content')}</p>
          </Section>

          {/* 2. Titolare e Responsabile */}
          <Section icon={<Users className="h-6 w-6 text-primary mr-3" />} title={t('privacyPolicy.section2Title')}>
            <p>{t('privacyPolicy.section2Content')}</p>
          </Section>

          {/* 3. Tipologie di dati */}
          <Section icon={<Database className="h-6 w-6 text-primary mr-3" />} title={t('privacyPolicy.section3Title')}>
            <p>{t('privacyPolicy.section3Content')}</p>
            <h4 className="mt-4 font-semibold">{t('privacyPolicy.section3Sub1')}</h4>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicy.dataType1')}</li>
              <li>{t('privacyPolicy.dataType2')}</li>
              <li>{t('privacyPolicy.dataType3')}</li>
            </ul>
            <h4 className="mt-4 font-semibold">{t('privacyPolicy.section3Sub2')}</h4>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicy.dataType4')}</li>
              <li>{t('privacyPolicy.dataType5')}</li>
              <li>{t('privacyPolicy.dataType6')}</li>
              <li>{t('privacyPolicy.dataType7')}</li>
            </ul>
            <h4 className="mt-4 font-semibold">{t('privacyPolicy.section3Sub3')}</h4>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicy.dataType8')}</li>
              <li>{t('privacyPolicy.dataType9')}</li>
              <li>{t('privacyPolicy.dataType10')}</li>
            </ul>
            <p className="mt-2 italic">{t('privacyPolicy.section3Note')}</p>
          </Section>

          {/* 4. Finalità */}
          <Section icon={<Mail className="h-6 w-6 text-primary mr-3" />} title={t('privacyPolicy.section4Title')}>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicy.purpose1')}</li>
              <li>{t('privacyPolicy.purpose2')}</li>
              <li>{t('privacyPolicy.purpose3')}</li>
              <li>{t('privacyPolicy.purpose4')}</li>
              <li>{t('privacyPolicy.purpose5')}</li>
              <li>{t('privacyPolicy.purpose6')}</li>
              <li>{t('privacyPolicy.purpose7')}</li>
            </ul>
          </Section>

          {/* 5. Base giuridica */}
          <Section icon={<Shield className="h-6 w-6 text-primary mr-3" />} title={t('privacyPolicy.section5Title')}>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicy.legal1')}</li>
              <li>{t('privacyPolicy.legal2')}</li>
              <li>{t('privacyPolicy.legal3')}</li>
              <li>{t('privacyPolicy.legal4')}</li>
            </ul>
          </Section>

          {/* 6. Modalità e luogo */}
          <Section title={t('privacyPolicy.section6Title')}>
            <p>{t('privacyPolicy.section6Content')}</p>
          </Section>

          {/* 7. Conservazione */}
          <Section title={t('privacyPolicy.section7Title')}>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicy.retention1')}</li>
              <li>{t('privacyPolicy.retention2')}</li>
              <li>{t('privacyPolicy.retention3')}</li>
            </ul>
            <p className="mt-2 italic">{t('privacyPolicy.section7Note')}</p>
          </Section>

          {/* 8. Condivisione */}
          <Section title={t('privacyPolicy.section8Title')}>
            <p>{t('privacyPolicy.section8Content')}</p>
          </Section>

          {/* 9. Sicurezza */}
          <Section title={t('privacyPolicy.section9Title')}>
            <p>{t('privacyPolicy.section9Content')}</p>
          </Section>

          {/* 10. Diritti */}
          <Section title={t('privacyPolicy.section10Title')}>
            <p>{t('privacyPolicy.section10Content')}</p>
          </Section>

          {/* 11. Difesa in giudizio */}
          <Section title={t('privacyPolicy.section11Title')}>
            <p>{t('privacyPolicy.section11Content')}</p>
          </Section>

          {/* 12. Log di sistema */}
          <Section title={t('privacyPolicy.section12Title')}>
            <p>{t('privacyPolicy.section12Content')}</p>
          </Section>

          {/* 13. Modifiche */}
          <Section title={t('privacyPolicy.section13Title')}>
            <p>{t('privacyPolicy.section13Content')}</p>
          </Section>

          {/* Contatti */}
          <Section title={t('privacyPolicy.contactTitle')}>
            <p>{t('privacyPolicy.contactContent')}</p>
            <div className="space-y-2">
              <p><strong>{t('privacyPolicy.contactEmail')}</strong></p>
              <p>{t('privacyPolicy.contactAddress')}</p>
              <p>{t('privacyPolicy.contactVAT')}</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

// Reusable section wrapper
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
