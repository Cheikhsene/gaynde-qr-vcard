# Gaynde Qr Vcard

> Generateur de QR Code vCard professionnel - Creez et partagez vos coordonnees en un scan.

## Presentation

Gaynde Qr Vcard est une application web moderne qui vous permet de creer des QR codes contenant vos informations de contact au format vCard. Scannez le QR code avec n'importe quel smartphone pour ajouter instantanement le contact.

## Fonctionnalites

- **Securise** - Vos donnees ne quittent jamais votre appareil
- **Hors-ligne** - Fonctionne meme sans connexion internet grace aux Service Workers
- **Multi-plateforme** - Compatible iPhone, Android et tous les navigateurs modernes
- **Sauvegarde locale** - Vos informations sont sauvegardees automatiquement dans le navigateur
- **Export PNG** - Telechargez votre QR code en haute qualite
- **Format vCard** - Standard universel compatible avec tous les gestionnaires de contacts

## Technologies

- **SvelteKit** - Framework web moderne
- **TailwindCSS** - Styling utilitaire
- **TypeScript** - Typage statique
- **qrcode** - Generation de QR codes

## Installation

```bash
# Installation des dependances
npm install

# Demarrage en mode developpement
npm run dev

# Build pour la production
npm run build

# Preview du build
npm run preview
```

## Structure du projet

```
src/
├── app.html           # Template HTML principal
├── app.postcss        # Styles globaux
├── lib/
│   ├── components/    # Composants reutilisables
│   │   ├── CloseIcon.svelte
│   │   ├── Footer.svelte
│   │   ├── GayndeLogo.svelte
│   │   ├── Header.svelte
│   │   └── QRCodeIcon.svelte
│   └── stores/        # Stores Svelte
│       ├── contact.ts
│       └── localstorage.ts
└── routes/
    ├── +layout.svelte
    ├── +page.svelte   # Page d'accueil
    └── create/
        ├── +page.svelte  # Page de creation
        └── QRCode.svelte
```

## Licence

MIT

---

Fait avec passion au Senegal
