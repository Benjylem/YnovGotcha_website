# 📹 Guide Complet - Gestion des Vidéos

## 1️⃣ PAGE PRINCIPALE (index.html)

### 📍 Où sont les vidéos?

**Dans le code HTML:**
```html
<div class="video-carousel">
  <button class="carousel-btn prev" onclick="changeVideo(-1)">‹</button>
  <div class="video-container" id="videoContainer">
    <iframe id="videoFrame" ... src="https://www.youtube.com/embed/4dVbEoPTieg" ...></iframe>
  </div>
  <button class="carousel-btn next" onclick="changeVideo(1)">›</button>
  <div class="video-counter" id="videoCounter">1 / 5</div>
</div>
```

Il y a **2 carousels** sur la page principale (gauche et droite du texte).

### 🎬 Actuellement: 5 vidéos en boucle

**Fichier:** `index.html` - Dans la balise `<script>`

```javascript
const videos = [
  "4dVbEoPTieg",        // Vidéo 1
  "dQw4w9WgXcQ",        // Vidéo 2
  "jNQXAC9IVRw",        // Vidéo 3
  "9bZkp7q19f0",        // Vidéo 4
  "kJQP7kiw9Fk"         // Vidéo 5
];
```

### ✏️ Comment changer une vidéo?

**Étape 1:** Récupère l'ID YouTube de ta vidéo
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ` ← **C'est cet ID qu'il faut**

**Étape 2:** Remplace dans le tableau `videos`

**Exemple - Remplacer la vidéo 1:**
```javascript
// AVANT
const videos = [
  "4dVbEoPTieg",  ← Ancienne vidéo
  "dQw4w9WgXcQ",
  ...
];

// APRÈS
const videos = [
  "TA_NOUVELLE_VIDEO_ID",  ← Nouvelle vidéo
  "dQw4w9WgXcQ",
  ...
];
```

### ➕ Ajouter plus de 5 vidéos

Tu peux ajouter **autant de vidéos que tu veux** (10, 20, 100...).

**Exemple avec 8 vidéos:**
```javascript
const videos = [
  "4dVbEoPTieg",      // 1
  "dQw4w9WgXcQ",      // 2
  "jNQXAC9IVRw",      // 3
  "9bZkp7q19f0",      // 4
  "kJQP7kiw9Fk",      // 5
  "NOUVELLE_VIDEO_1", // 6
  "NOUVELLE_VIDEO_2", // 7
  "NOUVELLE_VIDEO_3"  // 8
];
```

**Résultat:** 
- Clique sur `›` → Affiche vidéo 2, puis 3, 4... jusqu'à 8, puis revient à 1
- Le compteur affichera `1 / 8`, `2 / 8`, etc.

### 🔄 Les 2 carousels fonctionnent-ils indépendamment?

**OUI!** Chaque carousel a son propre index:
```javascript
let currentVideoIndex1 = 0;  // Carousel gauche
let currentVideoIndex2 = 0;  // Carousel droite
```

Tu peux naviguer dans le carousel gauche sans affecter le droit.

### 📌 Pour avoir des vidéos DIFFÉRENTES dans chaque carousel

Tu dois modifier le code pour avoir **2 tableaux distincts**:

```javascript
// Carousel gauche
const videosLeft = [
  "VIDEO_GAUCHE_1",
  "VIDEO_GAUCHE_2",
  "VIDEO_GAUCHE_3"
];

// Carousel droit
const videosRight = [
  "VIDEO_DROITE_1",
  "VIDEO_DROITE_2",
  "VIDEO_DROITE_3"
];

// Puis dans la fonction changeVideo():
// Pour le carousel gauche → utilise videosLeft
// Pour le carousel droit → utilise videosRight
```

**Demande-moi si tu veux que je fasse ça!**

---

## 2️⃣ PAGE VIDÉO (pages/video.html)

### 📍 Structure actuelle

La page vidéo a **2 sections** (blocs):
1. **"VIDÉOS ON EST DES BÂTARDS"** (gauche)
2. **"VIDÉOS MICRO-TROTTOIR"** (droite)

### 🔍 Comment ajouter des vidéos dans chaque bloc?

**Ouvre:** `pages/video.html`

**Cherche:**
```html
<div class="video-slot">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <!-- C'EST ICI QU'IL FAUT AJOUTER LES VIDÉOS -->
  </div>
</div>
```

### ✏️ Ajouter une vidéo dans un bloc

**Format simple (1 vidéo):**
```html
<div class="video-slot">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <iframe width="100%" height="300" 
      src="https://www.youtube.com/embed/ID_VIDEO_ICI" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen style="margin:16px 0; border-radius:8px;"></iframe>
  </div>
</div>
```

### ➕ Ajouter PLUSIEURS vidéos dans un bloc

```html
<div class="video-slot">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <!-- Vidéo 1 -->
    <iframe width="100%" height="300" 
      src="https://www.youtube.com/embed/VIDEO_1" 
      frameborder="0" allowfullscreen 
      style="margin:16px 0; border-radius:8px;"></iframe>
    
    <!-- Vidéo 2 -->
    <iframe width="100%" height="300" 
      src="https://www.youtube.com/embed/VIDEO_2" 
      frameborder="0" allowfullscreen 
      style="margin:16px 0; border-radius:8px;"></iframe>
    
    <!-- Vidéo 3 -->
    <iframe width="100%" height="300" 
      src="https://www.youtube.com/embed/VIDEO_3" 
      frameborder="0" allowfullscreen 
      style="margin:16px 0; border-radius:8px;"></iframe>
  </div>
</div>
```

**Résultat:** 3 vidéos s'affichent **l'une après l'autre** (scroll vertical).

### 🎯 Avoir des vidéos COMPLÈTEMENT différentes par bloc

**Bloc 1 - "ON EST DES BÂTARDS":**
```html
<div class="video-slot-left">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <iframe src="https://www.youtube.com/embed/BATARDS_VIDEO_1"></iframe>
  <iframe src="https://www.youtube.com/embed/BATARDS_VIDEO_2"></iframe>
</div>
```

**Bloc 2 - "MICRO-TROTTOIR":**
```html
<div class="video-slot-right">
  <h3>VIDÉOS MICRO-TROTTOIR</h3>
  <iframe src="https://www.youtube.com/embed/TROTTOIR_VIDEO_1"></iframe>
  <iframe src="https://www.youtube.com/embed/TROTTOIR_VIDEO_2"></iframe>
</div>
```

✅ **Chaque bloc a ses propres vidéos!**

---

## 📝 Résumé - Checkliste

### Page Principale (index.html)
- [ ] Ouvre `index.html`
- [ ] Cherche `const videos = [`
- [ ] Remplace les IDs YouTube
- [ ] Ajoute plus de vidéos si besoin
- [ ] Rafraîchis la page (F5)

### Page Vidéo (pages/video.html)
- [ ] Ouvre `pages/video.html`
- [ ] Cherche chaque bloc vidéo
- [ ] Remplace/ajoute les iframes YouTube
- [ ] Rafraîchis la page (F5)

### Format d'une iframe YouTube
```html
<iframe width="100%" height="300" 
  src="https://www.youtube.com/embed/TON_ID_ICI" 
  frameborder="0" allowfullscreen></iframe>
```

**À remplacer:** `TON_ID_ICI` par l'ID de ta vidéo YouTube

---

## 🔗 Comment obtenir l'ID d'une vidéo YouTube?

**Méthode 1:** Depuis l'URL
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                      ↑
                            ID = dQw4w9WgXcQ
```

**Méthode 2:** Depuis le bouton "Partager"
- Clique sur "Partager" sur YouTube
- Copie le code d'intégration
- Récupère l'ID entre `/embed/` et `"`

---

## 💡 Exemples complets

### Exemple 1 - Changer page principale (8 vidéos)
```javascript
const videos = [
  "VIDEO_GOTCHA_1",
  "VIDEO_GOTCHA_2",
  "VIDEO_GOTCHA_3",
  "VIDEO_GOTCHA_4",
  "VIDEO_GOTCHA_5",
  "VIDEO_GOTCHA_6",
  "VIDEO_GOTCHA_7",
  "VIDEO_GOTCHA_8"
];
```

### Exemple 2 - Page vidéo (3 vidéos par bloc)
```html
<!-- Bloc ON EST DES BÂTARDS -->
<div class="video-slot video-slot-left">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <iframe src="https://www.youtube.com/embed/BATARDS_1"></iframe>
  <iframe src="https://www.youtube.com/embed/BATARDS_2"></iframe>
  <iframe src="https://www.youtube.com/embed/BATARDS_3"></iframe>
</div>

<!-- Bloc MICRO-TROTTOIR -->
<div class="video-slot video-slot-right">
  <h3>VIDÉOS MICRO-TROTTOIR</h3>
  <iframe src="https://www.youtube.com/embed/TROTTOIR_1"></iframe>
  <iframe src="https://www.youtube.com/embed/TROTTOIR_2"></iframe>
  <iframe src="https://www.youtube.com/embed/TROTTOIR_3"></iframe>
</div>
```

---

## ❓ Questions fréquentes

**Q: Combien de vidéos max je peux ajouter?**
A: Autant que tu veux! Pas de limite.

**Q: Les vidéos en carousel se règlent automatiquement?**
A: Oui! Le compteur s'adapte (ex: `1 / 10` si 10 vidéos).

**Q: Je peux utiliser Vimeo au lieu de YouTube?**
A: Oui! Change l'URL d'intégration.

**Q: Comment faire un carrousel sur la page vidéo aussi?**
A: Je peux te coder un JavaScript spécial! Demande-moi.

**Q: Les vidéos se chargent lentement?**
A: C'est normal si tu en as beaucoup. YouTube les charge à la demande.

---

## 🚀 Besoin d'aide?

Pour des configurations avancées:
- Carrousel sur page vidéo
- Différentes vidéos par carousel (gauche/droite)
- Playlists YouTube
- Autres plateformes vidéo

**Dis-moi et je te l'implémenterai!**
