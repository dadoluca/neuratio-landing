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
    'hero.titleSuffix': 'with Artificial Intelligence',
    'hero.subtitle': 'AI-powered ticketing platform that knows your machines, intercepts customer requests, and suggests what to respond.',
    'hero.bookDemo': 'Book a Demo!',
    'hero.learnMore': 'Learn More',
    'hero.flowTitle': 'How Neuratio Works',
    
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
    'contact.benefit1': 'Reduce response times by up to 70%',
    'contact.benefit2': 'Automate 95% of repetitive requests',
    'contact.benefit3': 'Provide 24/7 multilingual support',
    'contact.benefit4': 'Centralize and scale expert knowledge',
    'contact.connectDirect': 'Or connect with us directly:',
    
    // Client Logos Section
    'clients.trusted': 'Trusted by',
    'clients.title': 'Leading Companies Choose Neuratio',
    'clients.subtitle': 'We reduce response times by 65% for manufacturing companies',

    // Stats Section
    'stats.title': 'Results That Matter',
    'stats.subtitle': 'Real numbers from real implementations',
    'stats.reduction': 'Response Time Reduction',
    'stats.responseTime': 'Average Response Time',
    'stats.availability': 'Always Available',

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
  
    // Privacy Policy - ENGLISH
    'privacyPolicy.title': 'Privacy Policy',
    'privacyPolicy.subtitle': 'How we collect, use, and protect your personal data',
    'privacyPolicy.lastUpdated': 'Last updated',
    'privacyPolicy.backToHome': 'Back to Home',
    // Section 1: Who we are
    'privacyPolicy.section1Title': 'Who We Are and Why This Policy',
    'privacyPolicy.section1Content': 'Neuratio S.r.l. (VAT: 04170290045), with registered office at Piazza Beppe Manfredi 9, 12045 Fossano (CN), Italy, is a company specialized in SaaS artificial intelligence solutions for after-sales support of industrial machinery manufacturers. This policy describes how we collect, use, and protect personal data when you visit our website, when you interact with us to request demos or information, when you use our services as a customer, and when you send email or WhatsApp messages that are managed by our customers through the Neuratio platform.',
    // Section 2: Data Controller and Processor
    'privacyPolicy.section2Title': 'Data Controller and Processor',
    'privacyPolicy.section2Content': 'For data collected through the website and direct relationships with Neuratio, the Data Controller is Neuratio S.r.l. When our customers use the platform to manage communications and documentation with their users, they are Data Controllers. Neuratio acts as a Data Processor (art. 28 GDPR), processing data only on behalf of customers and according to their instructions.',
    // Section 3: Types of data collected
    'privacyPolicy.section3Title': 'Types of Data Collected',
    'privacyPolicy.section3Content': 'We collect different types of data depending on the type of interaction:',
    'privacyPolicy.section3Sub1': 'Website visitors',
    'privacyPolicy.dataType1': 'Contact data entered in forms (first name, last name, business email, company)',
    'privacyPolicy.dataType2': 'Messages and communications sent (e.g., demo requests)',
    'privacyPolicy.dataType3': 'Technical and usage data (IP address, browser type, operating system, pages visited, cookies)',
    'privacyPolicy.section3Sub2': 'Customers (companies using the platform)',
    'privacyPolicy.dataType4': 'Identification and contact data of company representatives',
    'privacyPolicy.dataType5': 'Contractual, administrative and billing data',
    'privacyPolicy.dataType6': 'Access and platform usage logs',
    'privacyPolicy.dataType7': 'Data, documents and content uploaded by customers to the platform',
    'privacyPolicy.section3Sub3': 'Messages managed through the platform',
    'privacyPolicy.dataType8': 'Contents of emails and WhatsApp messages sent by end users to customers',
    'privacyPolicy.dataType9': 'Phone numbers and email addresses used in communications',
    'privacyPolicy.dataType10': 'Any technical attachments (manuals, images, documents)',
    'privacyPolicy.section3Note': 'Neuratio does not establish direct relationships with the end customers of our Customers: message data is processed exclusively on behalf of the Customer Controller.',
    // Section 4: Processing purposes
    'privacyPolicy.section4Title': 'Processing Purposes',
    'privacyPolicy.section4Content': 'Data is processed to:',
    'privacyPolicy.purpose1': 'Provide Neuratio platform services (ticket and message management)',
    'privacyPolicy.purpose2': 'Send and receive messages on behalf of customers via WhatsApp Business API (Meta Platforms)',
    'privacyPolicy.purpose3': 'Execute contractual obligations and legal compliance (e.g., administration and billing)',
    'privacyPolicy.purpose4': 'Respond to demo requests and provide information about our services',
    'privacyPolicy.purpose5': 'Statistical analysis and service improvement',
    'privacyPolicy.purpose6': 'IT security and abuse prevention',
    'privacyPolicy.purpose7': 'Technical and operational communications necessary for service delivery',
    // Section 5: Legal basis
    'privacyPolicy.section5Title': 'Legal Basis for Processing',
    'privacyPolicy.section5Content': 'Processing takes place under GDPR on bases such as:',
    'privacyPolicy.legal1': 'Performance of a contract or pre-contractual measures (art. 6.1.b)',
    'privacyPolicy.legal2': 'Compliance with legal obligations (art. 6.1.c)',
    'privacyPolicy.legal3': 'Legitimate interest of the controller (art. 6.1.f) for security and service improvement',
    'privacyPolicy.legal4': 'Explicit consent (art. 6.1.a), for example for sending marketing communications',
    // Section 6: Methods and location
    'privacyPolicy.section6Title': 'Methods and Location of Processing',
    'privacyPolicy.section6Content': 'Processing takes place using IT/telematic tools, adopting adequate technical and organizational measures. Data may be accessed by: authorized internal personnel, external processors (e.g., cloud providers, legal consultants), and Meta Platforms for the use of WhatsApp Business API. Data is processed in the EU and, where necessary, transferred to non-EU countries in compliance with GDPR (e.g., Standard Contractual Clauses).',
    // Section 7: Retention
    'privacyPolicy.section7Title': 'Retention Period',
    'privacyPolicy.section7Content': 'Retention periods vary based on data type:',
    'privacyPolicy.retention1': 'Messaging and ticket data: retained for the entire duration of the contractual relationship with the Customer Controller and deleted within 60 days from contract termination, unless different legal obligations or specific Customer request',
    'privacyPolicy.retention2': 'Contractual/billing data: retained for 10 years (tax obligations)',
    'privacyPolicy.retention3': 'Marketing/contact data: retained until consent withdrawal',
    'privacyPolicy.section7Note': 'At the end, data is deleted or anonymized.',
    // Section 8: Data sharing
    'privacyPolicy.section8Title': 'Data Sharing and Communication',
    'privacyPolicy.section8Content': 'We do not sell or transfer data to third parties for commercial purposes. Data may be shared with trusted service providers necessary for service delivery, including: Meta Platforms (WhatsApp Business API), Google Cloud / Firebase (hosting and storage), and authorized IT providers and consultants. All operate as data processors or sub-processors.',
    // Section 9: Security
    'privacyPolicy.section9Title': 'Data Security',
    'privacyPolicy.section9Content': 'We adopt adequate technical and organizational measures to protect personal data, including access controls, backup systems and the use of secure channels provided by the providers used (e.g., Meta WhatsApp Business API, email and cloud services).',
    // Section 10: Rights
    'privacyPolicy.section10Title': 'Rights of Data Subjects',
    'privacyPolicy.section10Content': 'Data subjects (visitors, customers, end users of customers) have the right to: access, rectification, erasure, restriction, objection, portability, withdrawal of consent. Requests should be sent to privacy@neuratio.ai and will be handled within 30 days. It is also possible to lodge a complaint with the Data Protection Authority.',
    // Section 11: Legal defense
    'privacyPolicy.section11Title': 'Legal Defense',
    'privacyPolicy.section11Content': 'Data may be used to defend the Controller\'s rights in court or in pre-litigation phase.',
    // Section 12: System logs
    'privacyPolicy.section12Title': 'System Logs and Maintenance',
    'privacyPolicy.section12Content': 'For operational and security reasons, system logs are collected (e.g., IP addresses, errors, operations performed).',
    // Section 13: Changes
    'privacyPolicy.section13Title': 'Changes to This Policy',
    'privacyPolicy.section13Content': 'The Controller may modify this policy at any time. The updated version is always available on this page.',
    // Contacts
    'privacyPolicy.contactTitle': 'Privacy Contacts',
    'privacyPolicy.contactContent': 'For any questions or to exercise your data rights, contact us:',
    'privacyPolicy.contactEmail': 'Email: privacy@neuratio.ai',
    'privacyPolicy.contactAddress': 'Address: Piazza Beppe Manfredi 9, 12045 Fossano (CN), Italia',
    'privacyPolicy.contactVAT': 'VAT: 04170290045',
  
    "cookiePolicy.title": "Cookie Policy",
    "cookiePolicy.subtitle": "How we use Cookies and other Tracking Tools",
    "cookiePolicy.lastUpdated": "Last updated: September 30, 2025",

    "cookiePolicy.section1Title": "Introduction",
    "cookiePolicy.section1Content": "This document describes the technologies (“Tracking Tools”) used by neuratio.ai. These tools allow the Controller to collect and store information (e.g., through Cookies) or use resources (e.g., scripts) on the User’s device when interacting with the Application. Some purposes may require the User’s consent, which can be withdrawn at any time.",

    "cookiePolicy.section2Title": "Tracking Tools Used",
    "cookiePolicy.section2Content": "This Application only uses third-party Tracking Tools, specifically Google Fonts.",
    "cookiePolicy.section2TableHeader": "Details of cookies used",
    "cookiePolicy.section2Table": "Name: Google Fonts | Provider: Google LLC | Purpose: Font display | Duration: Session | Type: Third-party technical",

    "cookiePolicy.section3Title": "Purpose and Functioning",
    "cookiePolicy.section3Content": "Technical Cookies or similar tools are used to ensure the Application functions properly. Google Fonts enables the display of font styles provided by Google LLC.",

    "cookiePolicy.section4Title": "Managing Consent",
    "cookiePolicy.section4Content": "Where the use of Tracking Tools is based on consent, the User may grant or revoke consent at any time via the privacy preferences panel or by contacting the third party directly.",

    "cookiePolicy.section5Title": "Managing via Device Settings",
    "cookiePolicy.section5Content": "Users can manage Cookies and similar technologies through browser settings (view, block, or delete). Instructions are available for major browsers: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Brave, Opera. For mobile apps, tracking can be disabled through the device’s advertising or privacy settings.",

    "cookiePolicy.section6Title": "Consequences of Refusal",
    "cookiePolicy.section6Content": "Users may decide whether to allow the use of Tracking Tools. However, blocking them may reduce functionality and the quality of the service provided.",

    "cookiePolicy.section7Title": "Data Controller",
    "cookiePolicy.section7Content": "Neuratio S.r.l., Piazza Beppe Manfredi 9, 12045 Fossano (CN), Italy. Email: privacy@neuratio.ai",

    "cookiePolicy.section8Title": "Definitions",
    "cookiePolicy.section8Content": "Personal Data: information identifying a natural person. Usage Data: information collected automatically (IP, technical logs). User: the individual using the Application. Data Subject: the natural person to whom the Data refers. Processor: entity processing data on behalf of the Controller. Controller: entity determining purposes and means of processing. Cookie: small files stored in the User’s browser. Tracking Tool: technologies enabling user tracking.",

    "cookiePolicy.section9Title": "Changes to the Cookie Policy",
    "cookiePolicy.section9Content": "The Controller may update this Cookie Policy at any time. Changes will be announced on this page and, if possible, through a site notification."
  },
  
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.contact': 'Contatti',
    'nav.bookDemo': 'Prenota Demo',
    'nav.problemsSolutions': 'Problemi e Soluzioni',
    
    // Hero Section
    'hero.title': 'Rivoluzioniamo il Servizio Clienti dei',
    'hero.titleHighlight': 'Produttori di Macchinari',
    'hero.titleSuffix': 'con l\'Intelligenza Artificiale',
    'hero.subtitle': 'Piattaforma di ticketing AI che conosce le tue macchine, intercetta le richieste dei clienti e ti suggerisce cosa rispondere.',
    'hero.bookDemo': 'Prenota una demo!',
    'hero.learnMore': 'Scopri di Più',
    'hero.flowTitle': 'Come Funziona Neuratio',
    
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
    'about.subtitle': 'Partiti da una tesi di ricerca accademica in intelligenza artificiale, abbiamo ascoltato i bisogni reali dei produttori di macchinari con oltre 75 interviste e ci siamo messi al lavoro per rendere più semplice il loro servizio clienti.',
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
    'contact.benefit1': 'Ridurre i tempi di risposta fino all\'70%',
    'contact.benefit2': 'Automatizzare il 95% delle richieste ripetitive',
    'contact.benefit3': 'Fornire supporto multilingue 24/7',
    'contact.benefit4': 'Centralizzare e scalare la conoscenza degli esperti',
    'contact.connectDirect': 'O connettiti direttamente con noi:',
    
    // Client Logos Section
    'clients.trusted': 'Si fidano di noi',
    'clients.title': 'Aziende Leader Scelgono Neuratio',
    'clients.subtitle': 'Riduciamo i tempi di risposta del 65% per le aziende manifatturiere',

    // Stats Section
    'stats.title': 'Risultati Concreti',
    'stats.subtitle': 'Numeri reali da implementazioni reali',
    'stats.reduction': 'Riduzione Tempi di Risposta',
    'stats.responseTime': 'Tempo Medio di Risposta',
    'stats.availability': 'Sempre Disponibile',

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
  
    // Privacy Policy - ITALIANO
    'privacyPolicy.title': 'Informativa sulla Privacy',
    'privacyPolicy.subtitle': 'Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali',
    'privacyPolicy.lastUpdated': 'Ultimo aggiornamento',
    'privacyPolicy.backToHome': 'Torna alla Home',
    // Sezione 1: Chi siamo
    'privacyPolicy.section1Title': 'Chi Siamo e Perché Questa Informativa',
    'privacyPolicy.section1Content': 'Neuratio S.r.l. (P.IVA: 04170290045), con sede legale in Piazza Beppe Manfredi 9, 12045 Fossano (CN), Italia, è una società specializzata in soluzioni SaaS di intelligenza artificiale per l\'assistenza post-vendita di produttori di macchinari industriali. La presente informativa descrive come raccogliamo, utilizziamo e proteggiamo i dati personali quando visiti il nostro sito web, quando interagisci con noi per richiedere demo o informazioni, quando utilizzi i nostri servizi come cliente, e quando invii messaggi email o WhatsApp che vengono gestiti dai nostri clienti tramite la piattaforma Neuratio.',
    // Sezione 2: Titolare e Responsabile
    'privacyPolicy.section2Title': 'Titolare e Responsabile del Trattamento',
    'privacyPolicy.section2Content': 'Per i dati raccolti tramite il sito web e i rapporti diretti con Neuratio, il Titolare del trattamento è Neuratio S.r.l. Quando i nostri clienti usano la piattaforma per gestire comunicazioni e documentazione con i propri utenti, essi sono Titolari del trattamento. Neuratio agisce come Responsabile del trattamento (art. 28 GDPR), trattando i dati solo per conto dei clienti e secondo le loro istruzioni.',
    // Sezione 3: Tipologie di dati raccolti
    'privacyPolicy.section3Title': 'Tipologie di Dati Raccolti',
    'privacyPolicy.section3Content': 'Raccogliamo diverse tipologie di dati a seconda del tipo di interazione:',
    'privacyPolicy.section3Sub1': 'Visitatori del sito',
    'privacyPolicy.dataType1': 'Dati di contatto inseriti nei form (nome, cognome, email aziendale, azienda)',
    'privacyPolicy.dataType2': 'Messaggi e comunicazioni inviati (es. richieste demo)',
    'privacyPolicy.dataType3': 'Dati tecnici e di utilizzo (indirizzo IP, tipo di browser, sistema operativo, pagine visitate, cookie)',
    'privacyPolicy.section3Sub2': 'Clienti (aziende che utilizzano la piattaforma)',
    'privacyPolicy.dataType4': 'Dati identificativi e di contatto dei referenti aziendali',
    'privacyPolicy.dataType5': 'Dati contrattuali, amministrativi e di fatturazione',
    'privacyPolicy.dataType6': 'Log di accesso e utilizzo della piattaforma',
    'privacyPolicy.dataType7': 'Dati, documenti e contenuti caricati dai clienti sulla piattaforma',
    'privacyPolicy.section3Sub3': 'Messaggi gestiti tramite la piattaforma',
    'privacyPolicy.dataType8': 'Contenuti delle email e dei messaggi WhatsApp inviati dagli utenti finali ai clienti',
    'privacyPolicy.dataType9': 'Numeri di telefono e indirizzi email usati nelle comunicazioni',
    'privacyPolicy.dataType10': 'Eventuali allegati tecnici (manuali, immagini, documenti)',
    'privacyPolicy.section3Note': 'Neuratio non instaura rapporti diretti con i clienti finali dei nostri Clienti: i dati dei messaggi sono trattati esclusivamente per conto del Cliente Titolare.',
    // Sezione 4: Finalità del trattamento
    'privacyPolicy.section4Title': 'Finalità del Trattamento',
    'privacyPolicy.section4Content': 'I dati sono trattati per:',
    'privacyPolicy.purpose1': 'Fornire i servizi della piattaforma Neuratio (gestione ticket e messaggi)',
    'privacyPolicy.purpose2': 'Inviare e ricevere messaggi per conto dei clienti tramite WhatsApp Business API (Meta Platforms)',
    'privacyPolicy.purpose3': 'Eseguire obblighi contrattuali e adempimenti di legge (ad es. amministrazione e fatturazione)',
    'privacyPolicy.purpose4': 'Rispondere a richieste demo e fornire informazioni sui nostri servizi',
    'privacyPolicy.purpose5': 'Analisi statistiche e miglioramento del servizio',
    'privacyPolicy.purpose6': 'Sicurezza IT e prevenzione abusi',
    'privacyPolicy.purpose7': 'Comunicazioni tecniche e operative necessarie all\'erogazione del servizio',
    // Sezione 5: Base giuridica
    'privacyPolicy.section5Title': 'Base Giuridica del Trattamento',
    'privacyPolicy.section5Content': 'Il trattamento avviene ai sensi del GDPR su basi quali:',
    'privacyPolicy.legal1': 'Esecuzione di un contratto o misure precontrattuali (art. 6.1.b)',
    'privacyPolicy.legal2': 'Adempimento di obblighi legali (art. 6.1.c)',
    'privacyPolicy.legal3': 'Legittimo interesse del titolare (art. 6.1.f) per sicurezza e miglioramento servizi',
    'privacyPolicy.legal4': 'Consenso esplicito (art. 6.1.a), ad esempio per invio di comunicazioni marketing',
    // Sezione 6: Modalità e luogo
    'privacyPolicy.section6Title': 'Modalità e Luogo del Trattamento',
    'privacyPolicy.section6Content': 'Il trattamento avviene con strumenti informatici/telematici, adottando misure tecniche e organizzative adeguate. Possono accedere ai dati: personale interno autorizzato, responsabili esterni (es. fornitori cloud, consulenti legali), e Meta Platforms per l\'utilizzo delle WhatsApp Business API. I dati sono trattati in UE e, ove necessario, trasferiti in Paesi extra-UE nel rispetto del GDPR (es. Clausole Contrattuali Standard).',
    // Sezione 7: Conservazione
    'privacyPolicy.section7Title': 'Periodo di Conservazione',
    'privacyPolicy.section7Content': 'I periodi di conservazione variano in base alla tipologia di dati:',
    'privacyPolicy.retention1': 'Dati di messaggistica e ticket: conservati per tutta la durata del rapporto contrattuale con il Cliente Titolare e cancellati entro 60 giorni dalla cessazione del contratto, salvo obblighi legali diversi o richiesta specifica del Cliente',
    'privacyPolicy.retention2': 'Dati contrattuali/fatturazione: conservati per 10 anni (obblighi fiscali)',
    'privacyPolicy.retention3': 'Dati marketing/contatto: conservati fino a revoca del consenso',
    'privacyPolicy.section7Note': 'Al termine, i dati vengono cancellati o anonimizzati.',
    // Sezione 8: Condivisione
    'privacyPolicy.section8Title': 'Condivisione e Comunicazione dei Dati',
    'privacyPolicy.section8Content': 'Non vendiamo né cediamo i dati a terzi per fini commerciali. I dati possono essere condivisi con fornitori di servizi fidati necessari all\'erogazione del servizio, tra cui: Meta Platforms (WhatsApp Business API), Google Cloud / Firebase (hosting e storage), e fornitori IT e consulenti autorizzati. Tutti operano come responsabili del trattamento o sub-responsabili.',
    // Sezione 9: Sicurezza
    'privacyPolicy.section9Title': 'Sicurezza dei Dati',
    'privacyPolicy.section9Content': 'Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali, inclusi controlli di accesso, sistemi di backup e l\'utilizzo di canali sicuri messi a disposizione dai provider utilizzati (ad es. Meta WhatsApp Business API, servizi email e cloud).',
    // Sezione 10: Diritti
    'privacyPolicy.section10Title': 'Diritti degli Interessati',
    'privacyPolicy.section10Content': 'Gli interessati (visitatori, clienti, utenti finali dei clienti) hanno diritto a: accesso, rettifica, cancellazione, limitazione, opposizione, portabilità, revoca del consenso. Le richieste vanno inviate a privacy@neuratio.ai e saranno gestite entro 30 giorni. È inoltre possibile proporre reclamo al Garante per la Protezione dei Dati Personali.',
    // Sezione 11: Difesa in giudizio
    'privacyPolicy.section11Title': 'Difesa in Giudizio',
    'privacyPolicy.section11Content': 'I dati possono essere utilizzati per difendere i diritti del Titolare in giudizio o in fase pre-contenziosa.',
    // Sezione 12: Log di sistema
    'privacyPolicy.section12Title': 'Log di Sistema e Manutenzione',
    'privacyPolicy.section12Content': 'Per motivi di funzionamento e sicurezza, vengono raccolti log di sistema (es. indirizzi IP, errori, operazioni svolte).',
    // Sezione 13: Modifiche
    'privacyPolicy.section13Title': 'Modifiche alla Presente Policy',
    'privacyPolicy.section13Content': 'Il Titolare può modificare la presente informativa in qualunque momento. La versione aggiornata è sempre disponibile su questa pagina.',
    // Contatti
    'privacyPolicy.contactTitle': 'Contatti Privacy',
    'privacyPolicy.contactContent': 'Per qualsiasi domanda o per esercitare i tuoi diritti sui dati, contattaci:',
    'privacyPolicy.contactEmail': 'Email: privacy@neuratio.ai',
    'privacyPolicy.contactAddress': 'Sede: Piazza Beppe Manfredi 9, 12045 Fossano (CN), Italia',
    'privacyPolicy.contactVAT': 'P.IVA 04170290045',
   "cookiePolicy.title": "Cookie Policy",
    "cookiePolicy.subtitle": "Come utilizziamo Cookie e altri Strumenti di Tracciamento",
    "cookiePolicy.lastUpdated": "Ultimo aggiornamento: 30 settembre 2025",

    "cookiePolicy.section1Title": "Introduzione",
    "cookiePolicy.section1Content": "Questo documento descrive le tecnologie (\"Strumenti di Tracciamento\") utilizzate da neuratio.ai. Tali strumenti consentono al Titolare di raccogliere e salvare informazioni (ad esempio tramite Cookie) o di utilizzare risorse (ad esempio script) sul dispositivo dell’Utente quando interagisce con l’Applicazione. Alcune finalità possono richiedere il consenso dell’Utente, che può essere revocato in qualsiasi momento.",

    "cookiePolicy.section2Title": "Strumenti di Tracciamento Utilizzati",
    "cookiePolicy.section2Content": "Questa Applicazione utilizza esclusivamente Strumenti di Tracciamento di terze parti, limitatamente al servizio Google Fonts.",
    "cookiePolicy.section2TableHeader": "Dettaglio dei Cookie utilizzati",
    "cookiePolicy.section2Table": "Nome: Google Fonts | Fornitore: Google LLC | Finalità: Visualizzazione font | Durata: Sessione | Tipologia: Tecnico di terza parte",

    "cookiePolicy.section3Title": "Finalità e Funzionamento",
    "cookiePolicy.section3Content": "I Cookie tecnici o altri strumenti analoghi sono utilizzati per garantire il funzionamento dell’Applicazione e la corretta erogazione del Servizio. Google Fonts consente la visualizzazione di stili di carattere gestiti da Google LLC.",

    "cookiePolicy.section4Title": "Gestione del Consenso",
    "cookiePolicy.section4Content": "Quando l’utilizzo di Strumenti di Tracciamento si basa sul consenso, l’Utente può fornire o revocare il consenso in qualsiasi momento tramite il pannello privacy o contattando direttamente la terza parte.",

    "cookiePolicy.section5Title": "Gestione tramite Dispositivo",
    "cookiePolicy.section5Content": "Gli Utenti possono gestire Cookie e tecnologie simili tramite le impostazioni del browser (visualizzare, bloccare o cancellare). Informazioni utili sono disponibili per i principali browser: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Brave, Opera. Per applicazioni mobili, è possibile disattivare il tracciamento tramite le impostazioni del dispositivo.",

    "cookiePolicy.section6Title": "Conseguenze del Rifiuto",
    "cookiePolicy.section6Content": "Gli Utenti possono scegliere se permettere o meno l’utilizzo di Strumenti di Tracciamento. Tuttavia, il blocco può ridurre funzionalità e qualità del servizio.",

    "cookiePolicy.section7Title": "Titolare del Trattamento",
    "cookiePolicy.section7Content": "Neuratio S.r.l., Piazza Beppe Manfredi 9, 12045 Fossano (CN), Italia. Email: privacy@neuratio.ai",

    "cookiePolicy.section8Title": "Definizioni",
    "cookiePolicy.section8Content": "Dati Personali: informazioni che identificano una persona fisica. Dati di Utilizzo: informazioni raccolte automaticamente (IP, log tecnici). Utente: l’individuo che utilizza l’Applicazione. Interessato: la persona fisica cui si riferiscono i Dati. Responsabile: chi tratta dati per conto del Titolare. Titolare: chi determina finalità e mezzi del trattamento. Cookie: file salvati nel browser. Strumento di Tracciamento: tecnologie che consentono di tracciare gli Utenti.",

    "cookiePolicy.section9Title": "Modifiche alla Cookie Policy",
    "cookiePolicy.section9Content": "Il Titolare può modificare la presente Cookie Policy in qualsiasi momento. Le modifiche saranno comunicate su questa pagina e, se possibile, tramite notifica sul sito."
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