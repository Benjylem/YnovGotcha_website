# GOTCHA — Médias & Productions

Site officiel du média étudiant GOTCHA, dédié aux Ydays de l'école Ynov.

---

## Hébergement

Le site est déployé sur **Netlify** à l'adresse :
**[gotcha2026.netlify.app](https://gotcha2026.netlify.app)**

Chaque push sur la branche `main` déclenche un redéploiement automatique — pas besoin d'action manuelle.

---

## Lancer le site en local

> Netlify gère la prod. Pour développer en local, utilise `npm start`.

**Prérequis** : Node.js installé (n'importe quelle version récente).

```bash
git clone git@github.com:Benjylem/YnovGotcha_website.git
cd YnovGotcha_website
npm start
```

Le site s'ouvre sur `http://localhost:3000`.

Pourquoi un serveur local plutôt qu'ouvrir `index.html` directement ? Les iframes Instagram/Twitch et les ressources CSS/JS entre dossiers ont des restrictions CORS qui cassent le rendu si le fichier est ouvert via `file://`.

---

## Technologies utilisées

| Technologie | Rôle |
|---|---|
| HTML5 | Structure de toutes les pages |
| CSS3 (variables, flexbox, grid) | Thème dark, responsive |
| JavaScript vanilla | Carousels, chatbot, détection live Twitch |
| Twitch Embed SDK | Player live avec détection ON/OFF automatique |
| Instagram oEmbed | Intégration des vidéos Focus et Trottoir |
| YouTube iFrame | Vidéos sur la page d'accueil |
| Netlify | Hébergement statique + déploiement continu depuis GitHub |

Pas de framework, pas de bundler, pas de backend — site 100% statique.

---

## Architecture

```
YnovGotcha_website/
├── index.html                  # Page d'accueil (live Twitch + carousels YouTube + teams)
├── css/
│   └── styles.css              # Tous les styles (thème dark, variables CSS, responsive)
├── js/
│   └── chatbot.js              # Chatbot local (réponses pré-configurées, aucune API externe)
├── pages/
│   ├── video.html              # Carousels vidéo (Focus ×3, Trottoir ×2, Bâtards)
│   ├── histoire.html           # Histoire de GOTCHA
│   ├── carte.html              # Carte des localisations
│   ├── contact.html            # Page contact + chatbot
│   ├── pole-cheffes.html       # Page pôle Cheffes
│   ├── pole-informatique.html  # Page pôle Informatique
│   ├── pole-explicatif.html    # Page pôle Explicatif / Focus
│   ├── pole-micro-trottoir.html# Page pôle Micro-trottoir
│   ├── pole-batards.html       # Page pôle ON EST DES BÂTARDS
│   └── pole-Market-Com.html    # Page pôle Market-Com
├── img/                        # Photos des membres et visuels des pôles
├── svg/                        # Logo et icônes vectoriels
└── package.json                # Script npm start pour serveur local
```

---

## Organisation du code

### Ce qui fonctionne bien

- **Détection live Twitch** : la section s'affiche/se cache automatiquement selon le statut de la chaîne `gotcha_media`. Utilise le Twitch Embed SDK avec les événements `PLAYING`, `ONLINE` et `OFFLINE`.
- **Carousels vidéo** : Focus (3 vidéos), Trottoir (2 vidéos), indépendants avec compteur et navigation ‹ ›. Les URLs sont regroupées dans un objet JS facile à modifier.
- **Chatbot local** : aucune dépendance externe, 0€ de coût, fonctionne sans connexion API.
- **Thème CSS** : tout repose sur des variables CSS dans `:root` — changer une couleur ou une police se fait en une ligne.
- **Déploiement continu** : push → Netlify redéploie en ~30 secondes.
- **Responsive** : le site s'adapte mobile/tablette/desktop via flexbox et media queries.

### Ce qui pourrait être amélioré

- **Ajouter des vidéos** : les URLs des vidéos sont en dur dans le HTML/JS. Un petit fichier `data/videos.json` centralisé éviterait de fouiller dans le code à chaque nouvelle vidéo.
- **Pages pôles** : certaines pages (`rubrique1.html`, `presentation.html`, `team.html`) sont des vestiges non reliés à la navigation — à nettoyer ou supprimer.
- **Chatbot** : les réponses sont hardcodées dans `chatbot.js`. Les centraliser dans un fichier JSON séparé faciliterait la mise à jour par quelqu'un qui ne code pas.
- **Images** : pas d'optimisation (compression, format WebP). Des images lourdes ralentissent le chargement mobile.
- **Pas de `netlify.toml`** : sans fichier de config Netlify, les headers de cache, les redirects et les règles de sécurité (CSP) ne sont pas configurés.

---

## Données sensibles

Aucune clé API, token ou credential dans le code. Le site est 100% public :
- Chatbot : réponses hardcodées, pas d'API IA externe
- Twitch : Twitch Embed SDK public, aucun token requis
- Instagram : oEmbed public, aucun token requis

---

## Modifier les vidéos

**Page d'accueil** (`index.html`) — tableau `videos` dans le script :
```js
const videos = ["ID_YOUTUBE_1", "ID_YOUTUBE_2"];
```

**Page Vidéo** (`pages/video.html`) — objet `slotVideos` dans le script :
```js
const slotVideos = {
  focus: [
    "https://www.instagram.com/p/XXXXX/embed",
    // ajoute ici
  ],
  trottoir: [
    "https://www.instagram.com/p/XXXXX/embed",
    // ajoute ici
  ]
};
```

---

## Réseaux

- Instagram : [@gotcha_media](https://instagram.com/gotcha_media)
- TikTok : @gotcha_media
- Twitch : [gotcha_media](https://twitch.tv/gotcha_media)
- Linktree : [linktr.ee/mediagotchaproductions](https://linktr.ee/mediagotchaproductions)
