# Guida Completa: Setup Locale, Git e Deploy su Vercel

## 📋 Prerequisiti

- Node.js 20 o superiore
- npm o yarn
- Git
- Account GitHub
- Account Vercel
- Account SendGrid con dominio verificato

## 🚀 Setup Locale

### 1. Clona o scarica il progetto
```bash
# Se hai il link del repository
git clone [URL_REPOSITORY]
cd neuratio-landing

# Oppure scarica e decomprimi il progetto
```

### 2. Installa le dipendenze
```bash
npm install
```

### 3. Configura le variabili d'ambiente
Crea un file `.env` nella root del progetto:

```env
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Database (opzionale per sviluppo locale)
DATABASE_URL=your_database_url_here
```

### 4. Avvia il server di sviluppo
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5000`

## 📁 Struttura del Progetto

```
neuratio-landing/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/     # Componenti UI
│   │   ├── pages/         # Pagine
│   │   └── contexts/      # Context (linguaggi)
├── server/                # Backend Express
│   ├── index.ts          # Server principale
│   ├── routes.ts         # API routes
│   ├── email.ts          # Gestione email
│   └── storage.ts        # Storage in memoria
├── shared/               # Schemi condivisi
├── attached_assets/      # Immagini e assets
└── package.json
```

## 🔧 Git Setup e Push

### 1. Inizializza Git (se non già fatto)
```bash
git init
```

### 2. Crea repository su GitHub
1. Vai su [GitHub](https://github.com)
2. Clicca "New repository"
3. Nome: `neuratio-landing`
4. Impostalo come pubblico
5. Non aggiungere README (già presente)

### 3. Aggiungi remote e push
```bash
# Aggiungi tutti i file
git add .

# Commit iniziale
git commit -m "Initial commit: Neuratio AI landing page"

# Aggiungi remote GitHub
git remote add origin https://github.com/TUO_USERNAME/neuratio-landing.git

# Push del codice
git push -u origin main
```

## 🌐 Deploy su Vercel

### 1. Installa Vercel CLI (opzionale)
```bash
npm install -g vercel
```

### 2. Deploy via GitHub (Raccomandato)

#### Opzione A: Dashboard Vercel
1. Vai su [vercel.com](https://vercel.com)
2. Login con GitHub
3. Clicca "New Project"
4. Importa il repository `neuratio-landing`
5. Configura il progetto:

**Build Settings:**
- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `dist/public`
- Install Command: `npm install`

**Environment Variables:**
Aggiungi le variabili d'ambiente:
```
SENDGRID_API_KEY = your_sendgrid_api_key
NODE_ENV = production
```

#### Opzione B: CLI Vercel
```bash
# Login
vercel login

# Deploy
vercel --prod

# Segui le istruzioni e configura:
# - Set up and deploy: Y
# - Which scope: seleziona il tuo account
# - Link to existing project: N
# - Project name: neuratio-landing
# - Directory: ./
# - Override settings: N
```

### 3. Configura le variabili d'ambiente su Vercel

**Via Dashboard:**
1. Vai al progetto su Vercel
2. Settings → Environment Variables
3. Aggiungi:
   - `SENDGRID_API_KEY`: la tua chiave SendGrid
   - `NODE_ENV`: `production`

**Via CLI:**
```bash
vercel env add SENDGRID_API_KEY
# Inserisci il valore quando richiesto

vercel env add NODE_ENV
# Inserisci: production
```

### 4. Deploy finale
```bash
vercel --prod
```

## 🔧 Configurazione SendGrid per Produzione

### 1. Verifica dominio su SendGrid
1. Dashboard SendGrid → Settings → Sender Authentication
2. Domain Authentication → Add Domain
3. Dominio: `neuratio.ai`
4. Aggiungi i record DNS forniti da SendGrid al tuo provider DNS (Aruba)

### 2. Record DNS da aggiungere su Aruba
SendGrid fornirà record simili a questi:
```
Type: CNAME
Name: s1._domainkey
Value: s1.domainkey.u123456.wl.sendgrid.net

Type: CNAME  
Name: s2._domainkey
Value: s2.domainkey.u123456.wl.sendgrid.net
```

## 📝 File di Configurazione Vercel

Crea `vercel.json` nella root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/**/*",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "../dist/public"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

## 🚨 Troubleshooting

### Errori comuni:

**1. Email non funzionano:**
- Verifica che SENDGRID_API_KEY sia configurato
- Controlla che il dominio sia verificato su SendGrid

**2. Build fallisce:**
- Verifica che tutte le dipendenze siano installate
- Controlla che i tipi TypeScript siano corretti

**3. Assets non si caricano:**
- Verifica che le immagini siano in `attached_assets/`
- Controlla i path degli import

### Comandi utili:

```bash
# Test locale
npm run dev

# Build per produzione
npm run build

# Verifica build
npm start

# Deploy veloce
vercel --prod

# Logs Vercel
vercel logs [deployment-url]
```

## 🔄 Workflow di Sviluppo

1. **Sviluppo locale:**
   ```bash
   git checkout -b feature/nuova-funzionalita
   npm run dev
   # Sviluppa...
   ```

2. **Test e commit:**
   ```bash
   git add .
   git commit -m "feat: descrizione modifiche"
   git push origin feature/nuova-funzionalita
   ```

3. **Deploy:**
   ```bash
   git checkout main
   git merge feature/nuova-funzionalita
   git push origin main
   # Auto-deploy su Vercel
   ```

## 📞 Supporto

Per problemi:
- Vercel: [Documentazione](https://vercel.com/docs)
- SendGrid: [Documentazione](https://docs.sendgrid.com/)
- GitHub: [Documentazione](https://docs.github.com/)

## ✅ Checklist Deploy

- [ ] Progetto clonato/scaricato
- [ ] Dipendenze installate (`npm install`)
- [ ] File `.env` configurato
- [ ] Test locale funzionante (`npm run dev`)
- [ ] Repository GitHub creato
- [ ] Codice pushato su GitHub
- [ ] Progetto importato su Vercel
- [ ] Variabili d'ambiente configurate su Vercel
- [ ] Dominio verificato su SendGrid
- [ ] DNS configurato su Aruba
- [ ] Deploy completato e testato
- [ ] Email funzionanti in produzione

Il tuo sito sarà disponibile su un URL come: `https://neuratio-landing.vercel.app`