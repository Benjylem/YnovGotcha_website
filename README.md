# GOTCHA Website

Site officiel du groupe GOTCHA avec navigation fluide et présentation des équipes.

## Structure du projet

- `index.html` — page d'accueil avec hero, explications et équipes
- `pages/video.html` — section Vidéo
- `pages/histoire.html` — section Histoire
- `pages/carte.html` — section Carte et localisations
- `pages/contact.html` — section Contact et IA Chatbot
- `pages/pole-*.html` — pages détaillées des 6 pôles
- `css/styles.css` — styles principaux (thème dark moderne)
- `img/` — images et logos
- `svg/` — fichiers vectoriels (Logo.svg)
- `js/chatbot.js` — chatbot IA local (10 réponses pré-configurées)

## Démarrer avec GitHub

### Cloner le projet

```bash
git clone https://github.com/Benjylem/YnovGotcha_website.git
cd YnovGotcha_website
```

### Ouvrir le site localement

1. **Avec un serveur local** (recommandé pour éviter les problèmes CORS):
   ```bash
   python3 -m http.server 8000
   ```
   Puis ouvrir `http://localhost:8000` dans le navigateur.

2. **Direct dans le navigateur** (simple mais peut avoir des limitations):
   - Double-cliquez sur `index.html` ou faites clic droit → "Ouvrir avec le navigateur"

## Personnaliser le site

### Changer le logo

1. Remplacez `svg/Logo.svg` par votre logo (format SVG de préférence)
2. Si vous utilisez PNG/JPG, modifiez les balises `<img>` dans les fichiers HTML

### Modifier le texte des sections

- **Explications centrales**: Éditez la classe `.explainer-text` dans `index.html`
- **Texte des équipes**: Remplacez `Team` dans la section `.team-text` (classe `.team-card`)
- **Chaque page**: Ouvrez `pages/video.html`, `pages/actualite.html`, etc., et modifiez la zone `<div class="edit-area">`

### Ajouter des vidéos

Dans `index.html`, remplacez les `<div class="media-box">` par des iframes YouTube ou Vimeo:
```html
<iframe width="100%" height="220" src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen></iframe>
```

### Configurer le Twitch Live

La page d'accueil affiche automatiquement:
- 🔴 **Quand en direct**: La section Live Twitch (canal `@gotcha_media`)
- 🚫 **Quand offline**: Rien (section masquée)

Pour changer la chaîne Twitch, voir [GUIDE_TWITCH_LIVE.md](GUIDE_TWITCH_LIVE.md)

### Ajouter/modifier les vidéos

Les vidéos sont faciles à gérer:
- **Page principale:** Jusqu'à 100+ vidéos en carousel (2 carousels indépendants)
- **Page Vidéo:** Ajouter différentes vidéos par bloc

**Guides:**
- 📖 [GUIDE_VIDEOS.md](GUIDE_VIDEOS.md) - Guide détaillé complet
- 📚 [GUIDE_VIDEOS_PRATIQUE.md](GUIDE_VIDEOS_PRATIQUE.md) - Exemples concrets pas à pas

### Changer les couleurs du thème

Ouvrez `css/styles.css` et modifiez les variables CSS dans `:root`:
```css
:root {
  --primary: #0f172a;      /* Fond sombre principal */
  --surface: #101a2e;      /* Cartes et sections */
  --card: #16233d;         /* Éléments de contenu */
  --accent: #7dd3fc;       /* Accent lumineux (cyan) */
  --text: #e8ecf7;         /* Texte principal */
  --muted: #9fb2d3;        /* Texte secondaire */
}
```

## Navigation du site

- **Logo GOTCHA**: Cliquable de n'importe quelle page → retour à l'accueil
- **Barre de navigation**: Vidéo, Histoire, Carte, Contact (visible sur toutes les pages)
- **Scrollable**: Le contenu défile naturellement avec la molette/trackpad

## Contact & Réseaux sociaux

### Page Contact simplifiée
La page `pages/contact.html` affiche désormais:
- **Chatbot IA** - Assistant local pour répondre aux questions
- **Linktree** - Tous les liens centralisés: [linktr.ee/mediagotchaproductions](https://linktr.ee/mediagotchaproductions)

### Réseaux disponibles
- 📱 Instagram: @gotcha_media
- 🎵 TikTok: @gotcha_media
- 📺 YouTube: Chaîne GOTCHA
- 🔴 Twitch: @gotcha_media (livestreams)
- 🔗 Linktree: linktr.ee/mediagotchaproductions

### Avec GitHub Pages

1. Allez dans les paramètres du repository (`Settings` → `Pages`)
2. Sélectionnez `Deploy from a branch` → `main` → `/root`
3. Votre site sera accessible à `https://Benjylem.github.io/YnovGotcha_website/`

### Avec un serveur/hébergeur

Transférez les fichiers via SFTP ou Git sur votre serveur.

## Notes techniques

- Pas de backend requis (HTML/CSS/JS pur)
- Responsive sur mobile, tablette et desktop
- Navigation fluide avec logo cliquable depuis toutes les pages
- Thème dark moderne avec accents cyan
- **Intégration Twitch Live** - Détection automatique du statut de la chaîne
- **Chatbot IA local** - 12 réponses pré-configurées, aucune API externe payante