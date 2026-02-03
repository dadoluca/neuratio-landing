import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load HubSpot Meetings script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    t('contact.benefit1'),
    t('contact.benefit2'), 
    t('contact.benefit3'),
    t('contact.benefit4')
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-gray-900 mb-6 sm:mb-8">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* HubSpot Booking Calendar */}
          <div className="p-10 lg:p-12 rounded-3xl border border-gray-200">
            <div
              className="meetings-iframe-container"
              data-src="https://meetings-eu1.hubspot.com/luca-dadone/neuratio-demo?embed=true"
            ></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div className="rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                {t('contact.readyTitle')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {t('contact.readyDesc')}
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="bg-primary/20 rounded-full p-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}