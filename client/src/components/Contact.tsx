import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink, CheckCircle, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('toast.success'),
        description: t('toast.successDesc'),
      });
      setFormData({ name: "", company: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: t('toast.error'),
        description: t('toast.errorDesc'),
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.email) {
      toast({
        title: t('toast.missingFields'),
        description: t('toast.missingFieldsDesc'),
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('toast.invalidEmail'),
        description: t('toast.invalidEmailDesc'),
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const benefits = [
    t('contact.benefit1'),
    t('contact.benefit2'), 
    t('contact.benefit3'),
    t('contact.benefit4')
  ];

  return (
    <section id="contact" className="py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            {t('contact.title')}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="p-10 lg:p-12 rounded-3xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold text-gray-900">
                  {t('contact.name')} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  className="input-glow h-14 text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-lg font-semibold text-gray-900">
                  {t('contact.company')} *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder={t('contact.companyPlaceholder')}
                  value={formData.company}
                  onChange={handleInputChange('company')}
                  className="input-glow h-14 text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold text-gray-900">
                  {t('contact.email')} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  className="input-glow h-14 text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-semibold text-gray-900">
                  {t('contact.message')}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t('contact.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  className="input-glow min-h-32 text-lg resize-none"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitContactForm.isPending}
                className="w-full glow-button text-primary-foreground h-16 text-xl font-bold rounded-2xl transform transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-3 h-6 w-6" />
                {submitContactForm.isPending ? t('contact.sending') : t('contact.submit')}
              </Button>
            </form>
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
            
            {/* Demo Simulation */}
            <div className="rounded-2xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-primary mb-6">Come Funziona Neuratio</h4>
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-xl p-4 border-l-4 border-primary">
                  <p className="text-sm text-gray-600">Richiesta Cliente</p>
                  <p className="text-gray-900 font-medium">"Errore macchina codice E-4429, serve aiuto immediato"</p>
                </div>
                <div className="bg-primary/20 rounded-xl p-4 border-l-4 border-primary animate-pulse">
                  <p className="text-sm text-gray-600">Risposta AI (2.3s)</p>
                  <p className="text-gray-900 font-medium">"Errore E-4429 indica problema pressione idraulica. Invio guida risoluzione e programmo tecnico."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-700 mb-6 text-lg">{t('contact.connectDirect')}</p>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/luca-dadone-8858a41a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrea-bioddo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}