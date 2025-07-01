import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Book a Demo',
    'nav.problemsSolutions': 'Problems & Solutions',
    
    // Hero Section
    'hero.title': 'Revolutionizing Customer Service for',
    'hero.titleHighlight': 'Machinery Manufacturers',
    'hero.subtitle': 'Resolve requests in seconds with an AI assistant that knows every detail about your machinery.',
    'hero.bookDemo': 'Book a Demo!',
    'hero.learnMore': 'Learn More',
    'hero.flowTitle': 'How Neuratio Works',
    'hero.flowSubtitle': 'Discover how our comprehensive AI-powered platform transforms customer inquiries into instant, accurate solutions with advanced features',
    
    // Problems Section
    'problems.title': 'The Problems Manufacturers Face Daily',
    'problems.subtitle': 'Traditional customer service approaches create bottlenecks, inefficiencies, and frustrated customers',
    'problems.emailChains': 'Endless Email Chains',
    'problems.emailChainsDesc': 'Repetitive requests handled manually lead to disorganized communication and slow resolution times.',
    'problems.timeZones': 'Time Zone Challenges',
    'problems.timeZonesDesc': 'Customers need support 24/7, but dedicated staff aren\'t always available across different time zones.',
    'problems.bottlenecks': 'Expert Bottlenecks',
    'problems.bottlenecksDesc': 'Over-reliance on expert technicians creates bottlenecks and prevents knowledge centralization.',
    'problems.manuals': 'Ignored Manuals',
    'problems.manualsDesc': 'Customers bypass documentation and ask the same questions repeatedly, wasting valuable time.',
    'problems.costs': 'High Operational Costs',
    'problems.costsDesc': 'Manual processes and inefficient workflows lead to increased operational costs and reduced productivity.',
    'problems.knowledge': 'Knowledge Fragmentation',
    'problems.knowledgeDesc': 'Lack of centralized knowledge base makes it difficult to maintain consistency and learn from past cases.',
    
    // Benefits Section
    'benefits.title': 'How Neuratio Transforms Your Customer Service',
    'benefits.subtitle': 'Our AI-powered platform addresses every pain point with intelligent, automated solutions',
    'benefits.resolutionTime': 'Reduced Average Resolution Time',
    'benefits.resolutionTimeDesc': 'AI-powered responses and automated workflows dramatically cut down response and resolution times.',
    'benefits.automation': 'Automated Responses for Repetitive Issues',
    'benefits.automationDesc': 'Smart automation handles common questions instantly, freeing up your team for complex issues.',
    'benefits.emails': 'Minimized Back-and-Forth Emails',
    'benefits.emailsDesc': 'Intelligent context understanding reduces unnecessary communication rounds.',
    'benefits.multilingual': '24/7 Multilingual Support',
    'benefits.multilingualDesc': 'Round-the-clock availability with support in multiple languages for global operations.',
    'benefits.knowledge': 'AI-Powered Knowledge Base',
    'benefits.knowledgeDesc': 'Centralized, intelligent knowledge management that learns and improves over time.',
    'benefits.priority': 'Priority Support for Warranty Cases',
    'benefits.priorityDesc': 'Intelligent request prioritization ensures warranty customers receive immediate attention.',
    'benefits.bookDemoToday': 'Book a Demo Today',
    
    // About Section
    'about.title': 'Meet the Founders',
    'about.subtitle': 'Born in Fossano (Italy), we listened to the real needs of machinery manufacturers and set to work to make their customer service easier.',
    'about.cofounder': 'Co-founder',
    'about.linkedin': 'Connect on LinkedIn',
    'about.storyTitle': 'Our Story',
    'about.story1': 'Growing up in the heart of Italy\'s industrial region, Luca and Andrea witnessed firsthand the daily struggles of machinery manufacturers. They saw companies losing countless hours to repetitive customer inquiries, expert technicians overwhelmed by basic questions, and customers frustrated by slow response times.',
    'about.story2': 'The turning point came when they realized that artificial intelligence could transform this landscape entirely. By combining their deep understanding of industrial operations with cutting-edge AI technology, they envisioned a platform that would not just solve problems, but revolutionize how manufacturers approach customer service.',
    'about.story3': 'Today, Neuratio represents their commitment to empowering manufacturers with intelligent, efficient, and scalable customer service solutions. Their mission is simple: to give every machinery manufacturer the tools they need to provide exceptional support while optimizing their operational efficiency.',
    
    // Contact Section
    'contact.title': 'Interested in Seeing Neuratio in Action?',
    'contact.subtitle': 'Let\'s connect! Book a personalized demo to see how Neuratio can simplify your customer service. We’ll reach out for a short 30-minute demo with no obligation.',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your full name',
    'contact.companyPlaceholder': 'Your company name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.messagePlaceholder': 'Tell us about your current customer service challenges or any questions you have about Neuratio...',
    'contact.submit': 'Send Message & Book Demo',
    'contact.sending': 'Sending...',
    'contact.readyTitle': 'Ready to Transform Your Customer Service?',
    'contact.readyDesc': 'Join leading machinery manufacturers who have already revolutionized their customer support with Neuratio\'s AI-powered platform. Let\'s discuss how we can help you:',
    'contact.benefit1': 'Reduce response times by up to 80%',
    'contact.benefit2': 'Automate 70% of repetitive requests',
    'contact.benefit3': 'Provide 24/7 multilingual support',
    'contact.benefit4': 'Centralize and scale expert knowledge',
    'contact.connectDirect': 'Or connect with us directly:',
    
    // Footer
    'footer.description': 'Revolutionizing customer service for machinery manufacturers with AI-powered solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2025 Neuratio S.r.l. All rights reserved. | P.IVA: 04170290045 | Founded June 10, 2025',
    
    // Toast Messages
    'toast.success': 'Demo request submitted!',
    'toast.successDesc': 'We\'ll be in touch soon to schedule your personalized demo.',
    'toast.error': 'Error',
    'toast.errorDesc': 'Failed to submit your request. Please try again.',
    'toast.missingFields': 'Missing required fields',
    'toast.missingFieldsDesc': 'Please fill in all required fields.',
    'toast.invalidEmail': 'Invalid email',
    'toast.invalidEmailDesc': 'Please enter a valid email address.',
    
    // Problems & Solutions Page
    'problemsPage.title': 'Challenges & AI Solutions',
    'problemsPage.subtitle': 'Discover how Neuratio solves the most common customer service challenges for machinery manufacturers',
    'problemsPage.backToHome': 'Back to Home',
    'problemsPage.problemsTitle': 'Daily Challenges Manufacturers Face',
    'problemsPage.problemsSubtitle': 'Traditional customer service approaches create bottlenecks, inefficiencies, and frustrated customers',
    'problemsPage.solutionsTitle': 'Our AI-Powered Solutions',
    'problemsPage.solutionsSubtitle': 'Neuratio transforms every problem into an opportunity for customer service excellence',
    'problemsPage.implementSolutions': 'Discover How to Implement These Solutions',
    'problemsPage.solution1Title': 'Intelligent Auto-Response',
    'problemsPage.solution1Desc': 'AI analyzes requests and provides immediate responses based on technical documentation and best practices.',
    'problemsPage.solution2Title': 'Smart Escalation',
    'problemsPage.solution2Desc': 'Complex issues are automatically forwarded to specialized technicians with all necessary information.',
    'problemsPage.solution3Title': '24/7 Multilingual Support',
    'problemsPage.solution3Desc': 'Continuous assistance in multiple languages, allowing customers to receive help in their timezone.',
    'problemsPage.solution4Title': 'Centralized Knowledge Base',
    'problemsPage.solution4Desc': 'All technical information, manuals and procedures are centralized and always up to date.',
    'problems.title1': 'Endless Email Chains',
    'problems.desc1': 'Repetitive requests handled manually lead to disorganized communications and slow resolution times.',
    'problems.title2': 'Timezone Challenges',
    'problems.desc2': 'Customers need 24/7 support, but dedicated staff isn\'t always available across different timezones.',
    'problems.title3': 'Expert Bottlenecks',
    'problems.desc3': 'Over-reliance on expert technicians creates bottlenecks and prevents knowledge centralization.',
    'problems.title4': 'Ignored Manuals',
    'problems.desc4': 'Customers bypass documentation and repeatedly ask the same questions, wasting valuable time.',

    // Features Section
    'features.title': 'What Neuratio Does',
    'features.subtitle': 'Explore the comprehensive AI-powered features that transform your customer service operations',
    'features.primaryTitle': 'Core Features',
    'features.secondaryTitle': 'Additional Features',
    'features.secondarySubtitle': 'And many other capabilities to discover...',
    'features.discoverAll': 'Discover All Features',

    // Feature Details
    'features.routing.title': 'Intelligent Request Routing',
    'features.routing.subtitle': 'for any request',
    'features.routing.description': 'Neuratio automatically analyzes incoming requests and routes them to the appropriate specialist or automated system, ensuring efficient handling of every customer inquiry.',

    'features.simpleRequests.title': 'Management of Simple or Incomplete Requests',
    'features.simpleRequests.subtitle': 'automatic responses for common problems and incomplete requests',
    'features.simpleRequests.description': 'The AI system automatically identifies and responds to routine requests and incomplete requests, such as when the machine serial number or problem description is missing, providing immediate answers and lightening the workload for your team.',

    'features.suggestions.title': 'Generative Answer Suggestions',
    'features.suggestions.subtitle': 'for complex requests',
    'features.suggestions.description': 'The AI ​​analyzes the machine\'s technical manuals and similar tickets already resolved in the past, generating draft solutions, ready to be sent with a click.',

    'features.knowledgeBase.title': 'Intelligent Knowledge Storage',
    'features.knowledgeBase.description': 'CAn intelligent memory that stores problems and solutions, learning from each request and transferring the experience of technicians to a centralized knowledge base that supports AI. An intelligent memory that stores problems and solutions, improving request after request and transferring the experience of technicians to a centralized knowledge base that supports AI.',

    'features.ticketPriority.title': 'Ticket Prioritization',
    'features.ticketPriority.description': 'Automatic priority assignment based on urgency, customer type, warranty status, and business impact to ensure critical issues receive immediate attention.',

    'features.customerIdentification.title': 'Customer Identification',
    'features.customerIdentification.description': 'Intelligent system that recognizes customers and machines based on company criteria, providing information on warranties and previous interactions for increasingly personalized support.',

    'features.autoTranslation.title': 'Automatic Translation',
    'features.autoTranslation.description': 'Real-time translation to ensure smooth communication with customers around the world, overcoming any language barriers in technical support.',
  
    // Privacy Policy
    'privacyPolicy.title': 'Privacy Policy',
    'privacyPolicy.subtitle': 'How we collect, use, and protect your personal data',
    'privacyPolicy.lastUpdated': 'Last updated',
    'privacyPolicy.backToHome': 'Back to Home',
    'privacyPolicy.section1Title': 'Who We Are and Why This Policy',
    'privacyPolicy.section1Content': 'Neuratio S.r.l. (VAT: 04170290045) is an Italian company founded on June 10, 2025, specializing in artificial intelligence solutions for customer service. This privacy policy explains how we collect, use, and protect your personal data when you use our website and services.',
    'privacyPolicy.section2Title': 'What Data We Collect',
    'privacyPolicy.section2Content': 'We collect the following types of information when you interact with our website:',
    'privacyPolicy.dataType1': 'Contact information: first name, last name, business email, and company name',
    'privacyPolicy.dataType2': 'Messages and communications: content of demo requests and messages sent',
    'privacyPolicy.dataType3': 'Technical data: IP address, browser type, operating system, and device information',
    'privacyPolicy.dataType4': 'Usage data: pages visited, time spent on site, and navigation paths',
    'privacyPolicy.section3Title': 'How We Use Your Data',
    'privacyPolicy.section3Content': 'We use your personal data for the following purposes:',
    'privacyPolicy.usage1': 'Respond to your demo requests and provide information about our services',
    'privacyPolicy.usage2': 'Contact you to schedule personalized demos and technical consultations',
    'privacyPolicy.usage3': 'Improve website functionality and user experience',
    'privacyPolicy.usage4': 'Send you marketing communications (only with your explicit consent)',
    'privacyPolicy.section4Title': 'Data Sharing',
    'privacyPolicy.section4Content': 'We do not sell, rent, or share your personal data with third parties for commercial purposes. Your data may only be shared with trusted service providers who help us operate our website and provide our services, always in compliance with privacy regulations.',
    'privacyPolicy.section5Title': 'Data Security',
    'privacyPolicy.section5Content': 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use SSL encryption for all communications and secure storage systems for sensitive data.',
    'privacyPolicy.section6Title': 'Your Rights',
    'privacyPolicy.section6Content': 'In accordance with GDPR, you have the following rights regarding your personal data:',
    'privacyPolicy.right1': 'Right of access: you can request a copy of the personal data we hold about you',
    'privacyPolicy.right2': 'Right of rectification: you can request correction of inaccurate or incomplete personal data',
    'privacyPolicy.right3': 'Right of erasure: you can request deletion of your personal data',
    'privacyPolicy.right4': 'Right of portability: you can request to receive your data in a machine-readable format',
    'privacyPolicy.contactTitle': 'Contact Us for Privacy Matters',
    'privacyPolicy.contactContent': 'If you have questions about this privacy policy or want to exercise your data rights, contact us:',
  },
  
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.contact': 'Contatti',
    'nav.bookDemo': 'Prenota Demo',
    'nav.problemsSolutions': 'Problemi e Soluzioni',
    
    // Hero Section
    'hero.title': 'Rivoluzioniamo il Servizio Clienti per i',
    'hero.titleHighlight': 'Produttori di Macchinari',
    'hero.subtitle': 'Risolvi le richieste in pochi secondi grazie a un assistente AI che conosce ogni dettaglio dei tuoi macchinari.',
    'hero.bookDemo': 'Prenota una demo!',
    'hero.learnMore': 'Scopri di Più',
    'hero.flowTitle': 'Come Funziona Neuratio',
    'hero.flowSubtitle': 'Scopri come la nostra piattaforma AI completa trasforma le richieste dei clienti in soluzioni istantanee e accurate con funzionalità avanzate',
    
    // Problems Section
    'problems.title': 'I Problemi che i Produttori Affrontano Quotidianamente',
    'problems.subtitle': 'Gli approcci tradizionali al servizio clienti creano colli di bottiglia, inefficienze e clienti frustrati',
    'problems.emailChains': 'Catene di Email Infinite',
    'problems.emailChainsDesc': 'Le richieste ripetitive gestite manualmente portano a comunicazioni disorganizzate e tempi di risoluzione lenti.',
    'problems.timeZones': 'Sfide dei Fusi Orari',
    'problems.timeZonesDesc': 'I clienti hanno bisogno di supporto 24/7, ma il personale dedicato non è sempre disponibile in diversi fusi orari.',
    'problems.bottlenecks': 'Colli di Bottiglia degli Esperti',
    'problems.bottlenecksDesc': 'L\'eccessiva dipendenza dai tecnici esperti crea colli di bottiglia e impedisce la centralizzazione della conoscenza.',
    'problems.manuals': 'Manuali Ignorati',
    'problems.manualsDesc': 'I clienti bypassano la documentazione e fanno ripetutamente le stesse domande, sprecando tempo prezioso.',
    'problems.costs': 'Alti Costi Operativi',
    'problems.costsDesc': 'I processi manuali e i flussi di lavoro inefficienti portano ad aumenti dei costi operativi e ridotta produttività.',
    'problems.knowledge': 'Frammentazione della Conoscenza',
    'problems.knowledgeDesc': 'La mancanza di una base di conoscenza centralizzata rende difficile mantenere la coerenza e imparare dai casi passati.',
    
    // Benefits Section
    'benefits.title': 'Come Neuratio Trasforma il Tuo Servizio Clienti',
    'benefits.subtitle': 'La nostra piattaforma basata su AI affronta ogni punto dolore con soluzioni intelligenti e automatizzate',
    'benefits.resolutionTime': '📈 Tempo di Risoluzione Medio Ridotto',
    'benefits.resolutionTimeDesc': 'Le risposte basate su AI e i flussi di lavoro automatizzati riducono drasticamente i tempi di risposta e risoluzione.',
    'benefits.automation': '🔄 Risposte Automatizzate per Problemi Ripetitivi',
    'benefits.automationDesc': 'L\'automazione intelligente gestisce istantaneamente le domande comuni, liberando il tuo team per problemi complessi.',
    'benefits.emails': '⏰ Email Botta e Risposta Minimizzate',
    'benefits.emailsDesc': 'La comprensione intelligente del contesto riduce i giri di comunicazione non necessari.',
    'benefits.multilingual': '🌍 Supporto Multilingue 24/7',
    'benefits.multilingualDesc': 'Disponibilità 24 ore su 24 con supporto in più lingue per operazioni globali.',
    'benefits.knowledge': '🧠 Base di Conoscenza Basata su AI',
    'benefits.knowledgeDesc': 'Gestione della conoscenza centralizzata e intelligente che impara e migliora nel tempo.',
    'benefits.priority': 'Supporto Prioritario per Casi in Garanzia',
    'benefits.priorityDesc': 'La prioritizzazione intelligente delle richieste assicura che i clienti in garanzia ricevano attenzione immediata.',
    'benefits.bookDemoToday': 'Prenota una Demo Oggi',
    
    // About Section
    'about.title': 'Incontra i Fondatori',
    'about.subtitle': 'Nati a Fossano (Italia), abbiamo ascoltato i bisogni reali dei produttori di macchinari e ci siamo messi al lavoro per rendere più semplice il loro servizio clienti.',
    'about.cofounder': 'Co-fondatore',
    'about.linkedin': 'Connettiti su LinkedIn',
    'about.storyTitle': 'La Nostra Storia',
    'about.story1': 'Crescendo nel cuore della regione industriale italiana, Luca e Andrea hanno assistito in prima persona alle lotte quotidiane dei produttori di macchinari. Hanno visto aziende perdere innumerevoli ore per richieste ripetitive dei clienti, tecnici esperti sopraffatti da domande basilari e clienti frustrati dai tempi di risposta lenti.',
    'about.story2': 'Il punto di svolta è arrivato quando si sono resi conto che l\'intelligenza artificiale poteva trasformare completamente questo panorama. Combinando la loro profonda comprensione delle operazioni industriali con la tecnologia AI all\'avanguardia, hanno immaginato una piattaforma che non solo avrebbe risolto i problemi, ma rivoluzionato il modo in cui i produttori si approcciano al servizio clienti.',
    'about.story3': 'Oggi, Neuratio rappresenta il loro impegno nel dare potere ai produttori con soluzioni di servizio clienti intelligenti, efficienti e scalabili. La loro missione è semplice: dare a ogni produttore di macchinari gli strumenti di cui hanno bisogno per fornire supporto eccezionale ottimizzando al contempo la loro efficienza operativa.',
    
    // Contact Section
    'contact.title': 'Interessato a Vedere Neuratio in Azione?',
    'contact.subtitle': 'Mettiamoci in contatto! Prenota una demo personalizzata per scoprire come Neuratio può semplificare il tuo servizio clienti. Ti contatteremo per una breve demo di 30 minuti senza alcun impegno.',
    'contact.name': 'Nome',
    'contact.company': 'Azienda',
    'contact.email': 'Email',
    'contact.message': 'Messaggio',
    'contact.namePlaceholder': 'Il tuo nome completo',
    'contact.companyPlaceholder': 'Nome della tua azienda',
    'contact.emailPlaceholder': 'tua@email.com',
    'contact.messagePlaceholder': 'Raccontaci delle tue attuali sfide nel servizio clienti o qualsiasi domanda su Neuratio...',
    'contact.submit': 'Invia Messaggio e Prenota Demo',
    'contact.sending': 'Invio in corso...',
    'contact.readyTitle': 'Pronto a Trasformare il Tuo Servizio Clienti?',
    'contact.readyDesc': 'Unisciti ai principali produttori di macchinari che hanno già rivoluzionato il loro supporto clienti con la piattaforma basata su AI di Neuratio. Discutiamo di come possiamo aiutarti:',
    'contact.benefit1': 'Ridurre i tempi di risposta fino all\'80%',
    'contact.benefit2': 'Automatizzare il 70% delle richieste ripetitive',
    'contact.benefit3': 'Fornire supporto multilingue 24/7',
    'contact.benefit4': 'Centralizzare e scalare la conoscenza degli esperti',
    'contact.connectDirect': 'O connettiti direttamente con noi:',
    
    // Footer
    'footer.description': 'Rivoluzioniamo il servizio clienti per i produttori di macchinari con soluzioni basate su AI.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.connect': 'Connetti',
    'footer.copyright': '© 2025 Neuratio S.r.l. Tutti i diritti riservati. | P.IVA: 04170290045 | Fondata il 10 giugno 2025',
    
    // Toast Messages
    'toast.success': 'Richiesta demo inviata!',
    'toast.successDesc': 'Ti contatteremo presto per programmare la tua demo personalizzata.',
    'toast.error': 'Errore',
    'toast.errorDesc': 'Impossibile inviare la tua richiesta. Riprova.',
    'toast.missingFields': 'Campi obbligatori mancanti',
    'toast.missingFieldsDesc': 'Compila tutti i campi obbligatori.',
    'toast.invalidEmail': 'Email non valida',
    'toast.invalidEmailDesc': 'Inserisci un indirizzo email valido.',
    
    // Problems & Solutions Page
    'problemsPage.title': 'Sfide e Soluzioni AI',
    'problemsPage.subtitle': 'Scopri come Neuratio risolve le sfide più comuni nel customer service per i produttori di macchinari',
    'problemsPage.backToHome': 'Torna alla Home',
    'problemsPage.problemsTitle': 'Sfide Quotidiane dei Produttori',
    'problemsPage.problemsSubtitle': 'Gli approcci tradizionali al servizio clienti creano colli di bottiglia, inefficienze e clienti frustrati',
    'problemsPage.solutionsTitle': 'Le Nostre Soluzioni AI',
    'problemsPage.solutionsSubtitle': 'Neuratio trasforma ogni problema in un\'opportunità di eccellenza nel servizio clienti',
    'problemsPage.implementSolutions': 'Scopri Come Implementare Queste Soluzioni',
    'problemsPage.solution1Title': 'Risposta Automatica Intelligente',
    'problemsPage.solution1Desc': 'L\'AI analizza le richieste e fornisce risposte immediate basate sulla documentazione tecnica e sulle best practices.',
    'problemsPage.solution2Title': 'Escalation Automatica',
    'problemsPage.solution2Desc': 'I problemi complessi vengono automaticamente inoltrati al tecnico specializzato con tutte le informazioni necessarie.',
    'problemsPage.solution3Title': 'Supporto Multilingue 24/7',
    'problemsPage.solution3Desc': 'Assistenza continua in più lingue, permettendo ai clienti di ricevere aiuto nel loro fuso orario.',
    'problemsPage.solution4Title': 'Base di Conoscenza Centralizzata',
    'problemsPage.solution4Desc': 'Tutte le informazioni tecniche, manuali e procedure sono centralizzate e sempre aggiornate.',
    'problems.title1': 'Catene di Email Infinite',
    'problems.desc1': 'Le richieste ripetitive gestite manualmente portano a comunicazioni disorganizzate e tempi di risoluzione lenti.',
    'problems.title2': 'Sfide dei Fusi Orari',
    'problems.desc2': 'I clienti hanno bisogno di supporto 24/7, ma il personale dedicato non è sempre disponibile in diversi fusi orari.',
    'problems.title3': 'Colli di Bottiglia degli Esperti',
    'problems.desc3': 'L\'eccessiva dipendenza dai tecnici esperti crea colli di bottiglia e impedisce la centralizzazione della conoscenza.',
    'problems.title4': 'Manuali Ignorati',
    'problems.desc4': 'I clienti bypassano la documentazione e fanno ripetutamente le stesse domande, sprecando tempo prezioso.',

    // Features Section
    'features.title': 'Cosa fa Neuratio',
    'features.subtitle': 'Esplora le funzionalità complete basate su AI che trasformano le tue operazioni di customer service',
    'features.primaryTitle': 'Funzionalità Principali',
    'features.secondaryTitle': 'Funzionalità Aggiuntive',
    'features.secondarySubtitle': 'E tante altre funzionalità da scoprire...',
    'features.discoverAll': 'Scopri Tutte le Funzionalità',

    // Feature Details
    'features.routing.title': 'Smistamento Richieste Intelligente',
    'features.routing.subtitle': 'per qualsiaisi richiesta',
    'features.routing.description': 'Neuratio analizza automaticamente le richieste in arrivo e le indirizza allo specialista appropriato o al sistema automatico, garantendo una gestione efficiente di ogni richiesta del cliente.',

    'features.simpleRequests.title': 'Gestione Richieste Semplici o Incomplete',
    'features.simpleRequests.subtitle': 'risposte automatiche per problemi comuni e richieste incomplete',
    'features.simpleRequests.description': 'Il sistema AI identifica e risponde automaticamente alle richieste di routine e alle richieste incomplete, ad esempio quando manca la matricola del macchinario o la descrizione del problema, fornendo risposte immediate e alleggerendo il lavoro del tuo team.',

    'features.suggestions.title': 'Risposte suggerite dall’AI per problematiche complesse',
    'features.suggestions.subtitle': 'bozza di soluzione per richieste complesse',
    'features.suggestions.description': 'L\'AI analizza i manuali tecnici della macchina e i ticket simili già risolti in passato, generando bozze di soluzioni, pronte da inviare con un click.',

    'features.knowledgeBase.title': 'Storicizzazione Intelligente',
    'features.knowledgeBase.description': 'Una memoria intelligente che archivia problemi e soluzioni, migliorando richiesta dopo richiesta e trasferendo l’esperienza dei tecnici in una knowledge base centralizzata e a supporto dell’AI.',

    'features.ticketPriority.title': 'Prioritizzazione dei Ticket',
    'features.ticketPriority.description': 'Assegnazione automatica delle priorità basata su urgenza, tipo di cliente, stato della garanzia e impatto aziendale per garantire che i problemi critici ricevano attenzione immediata.',

    'features.customerIdentification.title': 'Identificazione Cliente',
    'features.customerIdentification.description': 'Sistema intelligente che riconosce clienti e macchinari in base a criteri aziendali, offrendo informazioni su garanzia e interazioni precedenti per un supporto sempre più personalizzato.',

    'features.autoTranslation.title': 'Traduzione Automatica',
    'features.autoTranslation.description': 'Traduzione in tempo reale per garantire una comunicazione fluida con clienti in tutto il mondo, superando ogni barriera linguistica nel supporto tecnico.',
  
    // Privacy Policy
    'privacyPolicy.title': 'Informativa sulla Privacy',
    'privacyPolicy.subtitle': 'Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali',
    'privacyPolicy.lastUpdated': 'Ultimo aggiornamento',
    'privacyPolicy.backToHome': 'Torna alla Home',
    'privacyPolicy.section1Title': 'Chi Siamo e Perché Questa Informativa',
    'privacyPolicy.section1Content': 'Neuratio S.r.l. (P.IVA: 04170290045) è un\'azienda italiana fondata il 10 giugno 2025, specializzata in soluzioni di intelligenza artificiale per il customer service. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando utilizzi il nostro sito web e i nostri servizi.',
    'privacyPolicy.section2Title': 'Quali Dati Raccogliamo',
    'privacyPolicy.section2Content': 'Raccogliamo i seguenti tipi di informazioni quando interagisci con il nostro sito web:',
    'privacyPolicy.dataType1': 'Informazioni di contatto: nome, cognome, email aziendale e nome dell\'azienda',
    'privacyPolicy.dataType2': 'Messaggi e comunicazioni: contenuto delle richieste di demo e messaggi inviati',
    'privacyPolicy.dataType3': 'Dati tecnici: indirizzo IP, tipo di browser, sistema operativo e informazioni sul dispositivo',
    'privacyPolicy.dataType4': 'Dati di utilizzo: pagine visitate, tempo trascorso sul sito e percorsi di navigazione',
    'privacyPolicy.section3Title': 'Come Utilizziamo i Tuoi Dati',
    'privacyPolicy.section3Content': 'Utilizziamo i tuoi dati personali per le seguenti finalità:',
    'privacyPolicy.usage1': 'Rispondere alle tue richieste di demo e fornirti informazioni sui nostri servizi',
    'privacyPolicy.usage2': 'Contattarti per programmare demo personalizzate e consulenze tecniche',
    'privacyPolicy.usage3': 'Migliorare la funzionalità e l\'esperienza utente del nostro sito web',
    'privacyPolicy.usage4': 'Inviarti comunicazioni marketing (solo con il tuo consenso esplicito)',
    'privacyPolicy.section4Title': 'Condivisione dei Dati',
    'privacyPolicy.section4Content': 'Non vendiamo, affittiamo o condividiamo i tuoi dati personali con terze parti per scopi commerciali. I tuoi dati possono essere condivisi solo con fornitori di servizi fidati che ci aiutano a operare il nostro sito web e fornire i nostri servizi, sempre nel rispetto delle normative sulla privacy.',
    'privacyPolicy.section5Title': 'Sicurezza dei Dati',
    'privacyPolicy.section5Content': 'Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali contro accesso non autorizzato, alterazione, divulgazione o distruzione. Utilizziamo crittografia SSL per tutte le comunicazioni e sistemi di archiviazione sicuri per i dati sensibili.',
    'privacyPolicy.section6Title': 'I Tuoi Diritti',
    'privacyPolicy.section6Content': 'In conformità con il GDPR, hai i seguenti diritti riguardo ai tuoi dati personali:',
    'privacyPolicy.right1': 'Diritto di accesso: puoi richiedere una copia dei dati personali che conserviamo su di te',
    'privacyPolicy.right2': 'Diritto di rettifica: puoi richiedere la correzione di dati personali inesatti o incompleti',
    'privacyPolicy.right3': 'Diritto di cancellazione: puoi richiedere la cancellazione dei tuoi dati personali',
    'privacyPolicy.right4': 'Diritto di portabilità: puoi richiedere di ricevere i tuoi dati in un formato leggibile da macchina',
    'privacyPolicy.contactTitle': 'Contattaci per Questioni sulla Privacy',
    'privacyPolicy.contactContent': 'Se hai domande su questa informativa sulla privacy o vuoi esercitare i tuoi diritti sui dati, contattaci:',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}