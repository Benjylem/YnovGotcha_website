# 📚 Exemples Pratiques - Comment modifier vos vidéos

## 🎯 AVANT DE COMMENCER

1. **Ouvre ton code avec VS Code** ou ton éditeur préféré
2. **Actualise toujours la page** (F5) après chaque modification
3. **Les IDs YouTube** doivent être exacts (copie bien)

---

## 🔴 EXEMPLE 1 - Changer une vidéo sur la page principale

### Situation actuelle
Fichier: `index.html`
```javascript
const videos = [
  "4dVbEoPTieg",   // ← C'est cet ID qu'on va changer
  "dQw4w9WgXcQ",
  "jNQXAC9IVRw",
  "9bZkp7q19f0",
  "kJQP7kiw9Fk"
];
```

### Pas à pas

**Étape 1:** Trouve une vidéo GOTCHA sur YouTube
- Par exemple: https://www.youtube.com/watch?v=xxxxxYYYYYzzzzz
- L'ID est: `xxxxxYYYYYzzzzz`

**Étape 2:** Ouvre `index.html` dans VS Code

**Étape 3:** Cherche `const videos = [`

**Étape 4:** Remplace le premier ID
```javascript
// AVANT
const videos = [
  "4dVbEoPTieg",
  
// APRÈS
const videos = [
  "xxxxxYYYYYzzzzz",  ← Ta nouvelle vidéo
```

**Étape 5:** Sauvegarde (Ctrl+S) et rafraîchis le navigateur (F5)

✅ **Résultat:** La carousel affiche ta vidéo!

---

## ➕ EXEMPLE 2 - Ajouter 3 nouvelles vidéos (total 8)

### Code à modifier
Fichier: `index.html`

### Avant (5 vidéos)
```javascript
const videos = [
  "4dVbEoPTieg",
  "dQw4w9WgXcQ",
  "jNQXAC9IVRw",
  "9bZkp7q19f0",
  "kJQP7kiw9Fk"
];
```

### Après (8 vidéos)
```javascript
const videos = [
  "4dVbEoPTieg",
  "dQw4w9WgXcQ",
  "jNQXAC9IVRw",
  "9bZkp7q19f0",
  "kJQP7kiw9Fk",
  "ID_VIDEO_6",      // ← Nouvelle
  "ID_VIDEO_7",      // ← Nouvelle
  "ID_VIDEO_8"       // ← Nouvelle
];
```

### Résultat
- Le compteur affichera `1 / 8`, `2 / 8`, etc.
- Les flèches `‹` et `›` tourneront dans 8 vidéos

---

## 🎬 EXEMPLE 3 - Page Vidéo: Changer vidéos "ON EST DES BÂTARDS"

### Fichier: `pages/video.html`

### Situation actuelle
```html
<div class="video-slot video-slot-top">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <!-- Les vidéos sont ici -->
  </div>
</div>
```

### Avant (cherche le bloc)
```html
<div class="video-slot video-slot-top">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/VIDEO_ACTUELLE"></iframe>
  </div>
</div>
```

### Après (ajouter 2 vidéos différentes)
```html
<div class="video-slot video-slot-top">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <!-- Vidéo 1 -->
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/BATARDS_VIDEO_1" frameborder="0" allowfullscreen style="margin:16px 0; border-radius:8px;"></iframe>
    
    <!-- Vidéo 2 -->
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/BATARDS_VIDEO_2" frameborder="0" allowfullscreen style="margin:16px 0; border-radius:8px;"></iframe>
    
    <!-- Vidéo 3 -->
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/BATARDS_VIDEO_3" frameborder="0" allowfullscreen style="margin:16px 0; border-radius:8px;"></iframe>
  </div>
</div>
```

### Résultat
- 3 vidéos s'affichent **l'une après l'autre** (scroll)
- Chacune bien visible avec ses contrôles YouTube

---

## 🎯 EXEMPLE 4 - Vidéos complètement différentes par bloc

### Fichier: `pages/video.html`

### Structure complète
```html
<!-- Bloc 1: ON EST DES BÂTARDS (haut) -->
<div class="video-slot video-slot-top">
  <h3>VIDÉOS ON EST DES BÂTARDS</h3>
  <div class="video-carousel-slot">
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/BATARDS_1"></iframe>
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/BATARDS_2"></iframe>
  </div>
</div>

<!-- Bloc 2: MICRO-TROTTOIR (bas gauche) -->
<div class="video-slot video-slot-left">
  <h3>VIDÉOS MICRO-TROTTOIR</h3>
  <div class="video-carousel-slot">
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/TROTTOIR_1"></iframe>
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/TROTTOIR_2"></iframe>
  </div>
</div>

<!-- Bloc 3: EXPLICATIONS (bas droite) - OPTIONNEL -->
<div class="video-slot video-slot-right">
  <h3>VIDÉOS EXPLICATIONS</h3>
  <div class="video-carousel-slot">
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/EXPLICATIONS_1"></iframe>
    <iframe width="100%" height="300" src="https://www.youtube.com/embed/EXPLICATIONS_2"></iframe>
  </div>
</div>
```

### Résultat
```
┌─────────────────────────────────┐
│    VIDÉOS ON EST DES BÂTARDS    │  2 vidéos Bâtards
├──────────────────┬──────────────┤
│  MICRO-TROTTOIR  │ EXPLICATIONS │  2 vidéos Trottoir
│  (2 vidéos)      │ (2 vidéos)   │
└──────────────────┴──────────────┘
```

---

## 🔍 Comment trouver les IDs YouTube de GOTCHA?

### Étape 1: Cherche les vidéos
- Va sur https://www.youtube.com/@gotcha_media
- Ouvre une vidéo

### Étape 2: Récupère l'ID
```
URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                        ↑ Cet ID
ID: dQw4w9WgXcQ
```

### Étape 3: Utilise-le
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

---

## ⚠️ ERREURS COURANTES

### ❌ Erreur 1: Mauvais ID
```javascript
const videos = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"  // ❌ FAUX
];

// À la place:
const videos = [
  "dQw4w9WgXcQ"  // ✅ BON
];
```

### ❌ Erreur 2: ID en double
```javascript
const videos = [
  "VIDEO_1",
  "VIDEO_1",  // ❌ Même vidéo 2x
  "VIDEO_2"
];

// À la place:
const videos = [
  "VIDEO_1",
  "VIDEO_2",  // ✅ Différent
  "VIDEO_3"
];
```

### ❌ Erreur 3: Iframe mal fermée
```html
<iframe src="...">  <!-- ❌ Pas fermée -->
```

À la place:
```html
<iframe src="..." ...></iframe>  <!-- ✅ Fermée correctement -->
```

---

## ✅ CHECKLIST AVANT PUBLICATION

- [ ] J'ai récupéré les bons IDs YouTube
- [ ] J'ai sauvegardé mes fichiers (Ctrl+S)
- [ ] J'ai rafraîchi le navigateur (F5)
- [ ] Les vidéos s'affichent
- [ ] Le compteur affiche le bon nombre (ex: "1 / 8")
- [ ] Les boutons ‹ › fonctionnent

---

## 🎓 Récapitulatif

**Page principale:**
1. Ouvre `index.html`
2. Cherche `const videos = [`
3. Remplace/ajoute les IDs YouTube
4. Sauvegarde et rafraîchis (F5)

**Page Vidéo:**
1. Ouvre `pages/video.html`
2. Cherche le bloc vidéo (h3 "VIDÉOS...")
3. Ajoute/modifie les `<iframe>`
4. Sauvegarde et rafraîchis (F5)

**Format iframe:**
```html
<iframe src="https://www.youtube.com/embed/ID_ICI" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
```

---

## 💬 Questions?

**Les vidéos ne changent pas?**
- Vérifies que tu as bien sauvegardé
- Actualise avec Ctrl+F5 (hard refresh)
- Vérifie l'ID YouTube

**J'ai trop de vidéos et c'est lent?**
- C'est normal! YouTube les charge à la demande
- Limite à 10-15 par carousel pour la fluidité

**Je veux un carousel sur la page vidéo aussi?**
- Dis-moi! Je peux te coder ça
