# 🦁 Gaynde QR Vcard

<div align="center">

![Sénégal](https://img.shields.io/badge/Made%20in-S%C3%A9n%C3%A9gal-00853F?style=for-the-badge&labelColor=FDEF42)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

<br />

🇸🇳 **Générateur de QR Code vCard professionnel** 🇸🇳

*Créez et partagez vos coordonnées en un scan*

[Démo en ligne](https://gaynde-qr-vcard.vercel.app) · [Signaler un bug](https://github.com/Cheikhsene/gaynde-qr-vcard/issues) · [Proposer une fonctionnalité](https://github.com/Cheikhsene/gaynde-qr-vcard/issues)

</div>

---

## ✨ Présentation

**Gaynde** (Lion en Wolof 🦁) QR Vcard est une application web moderne qui vous permet de créer des QR codes personnalisés contenant vos informations de contact au format vCard. 

Scannez le QR code avec n'importe quel smartphone pour ajouter instantanément le contact !

<div align="center">

| 🟢 Vert | 🟡 Jaune | 🔴 Rouge |
|:-------:|:--------:|:--------:|
| Espoir  | Richesse | Sacrifice |

*Les couleurs du drapeau sénégalais 🇸🇳*

</div>

---

## 🎯 Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| 🔒 **100% Sécurisé** | Vos données ne quittent jamais votre appareil |
| 📴 **Hors-ligne** | Fonctionne même sans connexion internet |
| 📱 **Multi-plateforme** | Compatible iPhone, Android et tous les navigateurs |
| 💾 **Sauvegarde locale** | Informations sauvegardées automatiquement |
| 🎨 **Personnalisation** | Couleurs, logo et texte personnalisables |
| 📥 **Export PNG** | Téléchargez votre QR code en haute qualité |
| 📇 **Format vCard** | Standard universel pour tous les gestionnaires de contacts |

---

## 🎨 Personnalisation du QR Code

- 🎨 **Couleurs** : Choisissez la couleur du QR code et du fond
- 🦁 **Logo Gaynde** : Logo intégré avec l'étoile sénégalaise
- 📤 **Logo personnalisé** : Uploadez votre propre logo
- ✍️ **Texte** : Ajoutez "SCANNEZ-MOI" ou un texte personnalisé
- 🖋️ **Typographie** : Choisissez la police, taille et style

### Styles rapides

| Style | Description |
|-------|-------------|
| 🇸🇳 **Sénégal** | Vert avec logo Gaynde et étoile dorée |
| ⚫ **Minimal** | Noir et blanc, sans logo |
| 💼 **Pro** | Bleu marine professionnel |
| ✨ **Élégant** | Doré avec police Georgia |

---

## 🛠️ Technologies

<div align="center">

| Technologie | Utilisation |
|-------------|-------------|
| ![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white) | Framework web |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Styling |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Typage |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build tool |

</div>

---

## 🚀 Installation

```bash
# 📦 Installation des dépendances
npm install

# 🔧 Démarrage en mode développement
npm run dev

# 🏗️ Build pour la production
npm run build

# 👀 Preview du build
npm run preview
```

---

## 📁 Structure du projet

```
src/
├── 📄 app.html              # Template HTML principal
├── 🎨 app.postcss           # Styles globaux (thème sénégalais)
├── 📚 lib/
│   ├── 🧩 components/       # Composants réutilisables
│   │   ├── CloseIcon.svelte
│   │   ├── Footer.svelte
│   │   ├── GayndeLogo.svelte  # 🦁 Logo avec étoile
│   │   ├── Header.svelte
│   │   └── QRCodeIcon.svelte
│   └── 🗃️ stores/           # Stores Svelte
│       ├── contact.ts       # Gestion des contacts
│       └── localstorage.ts  # Persistance locale
└── 🛤️ routes/
    ├── +layout.svelte
    ├── +page.svelte         # 🏠 Page d'accueil
    └── create/
        ├── +page.svelte     # ✏️ Page de création
        └── QRCode.svelte    # 📱 Composant QR Code
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! 

1. 🍴 Forkez le projet
2. 🌿 Créez une branche (`git checkout -b feature/AmazingFeature`)
3. 💾 Committez (`git commit -m 'Add AmazingFeature'`)
4. 📤 Pushez (`git push origin feature/AmazingFeature`)
5. 🔃 Ouvrez une Pull Request

---

## 📜 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

### 🇸🇳 Teranga Numérique 🇸🇳

**Fait avec ❤️ au Sénégal**

*"Gaynde" signifie "Lion" en Wolof - symbole de force et de fierté*

![Senegal Flag](https://flagcdn.com/w80/sn.png)

---

⭐ **Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !** ⭐

</div>
