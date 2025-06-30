# Neuratio AI - Landing Page

Una landing page moderna per la piattaforma di customer service AI di Neuratio, targettizzata per produttori di macchinari.

## 🚀 Avvio Rapido

```bash
# Installa le dipendenze
npm install

# Configura le variabili d'ambiente
cp .env.example .env
# Modifica .env con i tuoi valori

# Avvia in sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:5000`

## 🛠️ Stack Tecnologico

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Email**: SendGrid
- **Deployment**: Vercel
- **Form Handling**: React Hook Form + Zod

## 📁 Struttura Progetto

```
├── client/           # Frontend React
├── server/           # Backend Express
├── shared/           # Tipi condivisi
├── attached_assets/  # Immagini e asset
└── DEPLOYMENT_GUIDE.md # Guida completa deployment
```

## 🔧 Comandi Disponibili

```bash
npm run dev     # Sviluppo locale
npm run build   # Build produzione
npm run start   # Avvia produzione
npm run check   # Controllo TypeScript
```

## 🌍 Funzionalità

- ✅ Design responsive e moderno
- ✅ Supporto multilingua (IT/EN)
- ✅ Form di contatto con validazione
- ✅ Invio email automatico via SendGrid
- ✅ Sezioni: Hero, About, Problems, Benefits, Contact
- ✅ Profili founders con foto
- ✅ Ottimizzato per SEO

## 📧 Configurazione Email

Il sistema utilizza SendGrid per l'invio di email. È necessario:

1. Account SendGrid attivo
2. Dominio neuratio.ai verificato
3. API Key configurata nelle variabili d'ambiente

## 🚀 Deployment

Per il deployment completo su Vercel, consulta [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📞 Contatti

- **Website**: [neuratio.ai](https://neuratio.ai)
- **LinkedIn**: [Luca Dadone](https://linkedin.com/in/luca-dadone-8858a41a9/), [Andrea Bioddo](https://linkedin.com/in/andrea-bioddo/)