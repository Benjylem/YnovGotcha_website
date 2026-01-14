# Guide d'Installation - GOTCHA Website

## Comment ajouter des vidéos

### Sur la page d'accueil (2 vidéos côté des explications)

Ouvre `index.html` et cherche les balises avec le texte `Vidéo à placer ici`.

Remplace-les par ceci pour YouTube/Vimeo:

```html
<iframe width="100%" height="240" src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>
```

Remplace `VIDEO_ID` par l'ID de ta vidéo YouTube (exemple: si l'URL est `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, l'ID est `dQw4w9WgXcQ`).

### Sur la page Vidéo

Ouvre `pages/video.html` et remplis la zone `<div class="edit-area">` avec tes vidéos:

```html
<div class="edit-area">
  <h3>Vidéos du groupe GOTCHA</h3>
  
  <iframe width="100%" height="300" src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen style="margin:16px 0; border-radius:8px;"></iframe>
  
  <iframe width="100%" height="300" src="https://www.youtube.com/embed/VIDEO_ID_2" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen style="margin:16px 0; border-radius:8px;"></iframe>
</div>
```

---

## Comment ajouter des photos aux cercles des équipes

### Sur la page d'accueil (4 groupes)

Les cercles bleus dans la section Teams acceptent des images de fond.

Modifie les `.team-avatar` dans `index.html`:

```html
<div class="team-avatar" style="background-image: url('img/groupe1.jpg'); background-size: cover; background-position: center;"></div>
```

Remplace `'img/groupe1.jpg'` par le chemin de ta photo (place tes photos dans le dossier `img/`).

### Alternative simple: Ajouter du texte

Si tu n'as pas de photo, tu peux aussi écrire du texte dans les cercles:

```html
<div class="team-avatar" style="font-size:18px; line-height:140px;">GROUPE 1</div>
```

---

## Dossiers importants

- **img/** → Place tes photos ici (groupe1.jpg, groupe2.jpg, etc.)
- **svg/** → Logo GOTCHA (Logo.svg)
- **pages/** → Toutes les pages du site

---

## Comment modifier le texte des équipes

Dans `index.html`, chaque équipe a cette structure:

```html
<div class="team-card">
  <div class="team-avatar"></div>
  <div class="team-text">
    <strong>Groupe 1</strong><br>
    Remplace ce texte avec la présentation de ton équipe
  </div>
</div>
```

Modifie simplement le texte entre `<strong>` et dans `<div class="team-text">`.

---

## Conseils pour les images

- Utilise des **photos carrées** ou presque carrées (ex: 400x400px)
- Formats acceptés: JPG, PNG
- Optimise tes images pour le web (moins de 200KB chacune)
- Place-les dans le dossier `img/`

---

## Contacter pour support

Si tu as besoin d'aide, vérifie:
1. Les chemins des images (img/nomfichier.jpg)
2. Les IDs YouTube sont corrects
3. Les fichiers HTML ne sont pas mal formatés
