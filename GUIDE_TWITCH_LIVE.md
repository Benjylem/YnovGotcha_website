# Guide - Intégration Twitch Live

## 🎬 Comment ça fonctionne?

Le site GOTCHA affiche automatiquement:
- 🔴 **Quand tu es EN DIRECT sur Twitch** → Affiche le player Twitch en direct
- 📺 **Quand tu n'es PAS en direct** → Affiche une vidéo YouTube en fallback

---

## ⚙️ Configuration

### 1. Chaîne Twitch utilisée
```
https://twitch.tv/gotcha_media
```

### 2. Emplacement du code
Fichier: `index.html`
- Section: `.live-section` (avant les explications)
- Volet Twitch: `#twitchLiveContainer`
- Fallback YouTube: `#youtubeFallback`

### 3. Logique JavaScript
Fichier: `index.html` (dans le script)

```javascript
checkTwitchLiveStatus()  // Vérifie toutes les 60 secondes
```

---

## 📊 Détection du statut

### Vérification automatique
- ✅ Au chargement de la page
- ✅ Toutes les 60 secondes (refresh auto)
- ✅ Affichage du statut en temps réel

### Affichage du statut
```
🔴 EN DIRECT MAINTENANT!         → Live actif
⏹️ Le live n'est pas actif...     → Offline
📺 Regardez nos vidéos           → API indisponible (fallback)
```

---

## 🎨 Mise en page

### Section Live
- **Titre**: 🔴 EN DIRECT TWITCH (rouge)
- **Statut**: Message dynamique qui change selon l'état
- **Player**: 
  - Twitch (si en direct)
  - YouTube (si offline)

### Style CSS
Fichier: `css/styles.css`
```css
.live-section        /* Conteneur principal */
.live-header         /* Titre + statut */
.live-container      /* Wrapper des players */
.live-embed          /* Player Twitch/YouTube */
```

---

## 🔧 Personnalisation

### Changer la chaîne Twitch
1. Ouvre `index.html`
2. Cherche: `channel=gotcha_media`
3. Remplace `gotcha_media` par ta chaîne

**Exemple:**
```html
<!-- Avant -->
<iframe src="https://player.twitch.tv/?channel=gotcha_media&parent=gotcha2026.netlify.app"

<!-- Après (nouvelle chaîne) -->
<iframe src="https://player.twitch.tv/?channel=ma_nouvelle_chaine&parent=gotcha2026.netlify.app"
```

### Changer le intervalle de vérification
1. Ouvre `index.html`
2. Cherche: `setInterval(checkTwitchLiveStatus, 60000);`
3. Remplace `60000` (60 secondes) par ta valeur en millisecondes

**Exemples:**
```javascript
30000   // 30 secondes
120000  // 2 minutes
300000  // 5 minutes
```

### Changer la vidéo YouTube fallback
1. Ouvre `index.html`
2. Cherche: `id="fallbackVideoFrame"`
3. Remplace l'URL YouTube par ta vidéo:
```html
src="https://www.youtube.com/embed/TON_VIDEO_ID"
```

---

## 📱 Hébergement

### Ajouter ton domaine à Twitch
Si tu héberges le site, ajoute ton domaine à la liste des domaines autorisés:

1. Ouvre l'iframe Twitch dans `index.html`
2. Vérifies les `parent=` autorisés:
```html
<!-- Localhost (développement) -->
parent=localhost

<!-- Netlify (production) -->
parent=gotcha2026.netlify.app

<!-- Ton serveur perso -->
parent=tondomaine.com
```

Pour ajouter plusieurs domaines:
```html
<iframe src="https://player.twitch.tv/?channel=gotcha_media&parent=localhost&parent=gotcha2026.netlify.app&parent=tondomaine.com"
```

---

## 🐛 Dépannage

### Le live Twitch ne s'affiche pas
- ✅ Vérifie que tu es vraiment en direct sur Twitch
- ✅ Attends 10-15 secondes (délai de vérification)
- ✅ Actualise la page (F5)

### Erreur "Player Offline"
- ✅ C'est normal si tu n'es pas en direct
- ✅ La vidéo YouTube s'affiche automatiquement

### Le statut ne met pas à jour
- ✅ Actualise la page
- ✅ Attends que la vérification auto s'exécute (60 sec)

---

## 📝 Notes techniques

### API utilisée
- API: `https://api.twitch.tv/kraken/streams/{channel}`
- Authentification: Client-ID public (limité mais fonctionnel)
- Limite: ~100 requêtes/min

### Fallback
Si l'API Twitch n'est pas disponible:
- Affiche automatiquement la vidéo YouTube
- Pas d'erreur - l'utilisateur voit quand même du contenu

### Parent domain
Twitch exige que le site soit listé dans les `parent` domains autorisés.
C'est pour la sécurité (CORS).

---

## ✅ Checklist

- [ ] Chaîne Twitch correcte: `gotcha_media`
- [ ] Domaine Twitch configuré: `gotcha2026.netlify.app`
- [ ] Vérification toutes les 60 secondes
- [ ] Fallback YouTube actif
- [ ] Statut affiche correctement
