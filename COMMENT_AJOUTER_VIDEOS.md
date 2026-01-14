# Comment ajouter tes vidéos YouTube au carrousel

## Étape 1: Trouver l'ID de ta vidéo YouTube

### Méthode simple - Sur YouTube:

1. **Ouvre une vidéo YouTube** dans ton navigateur
2. **Regarde l'URL** en haut du navigateur, tu verras quelque chose comme:
   ```
   https://www.youtube.com/watch?v=4dVbEoPTieg
   ```
3. **L'ID est après `v=`** → `4dVbEoPTieg` ← Voilà, c'est cet ID qu'il faut!

### Exemple avec différentes URLs:

| URL complète | ID à copier |
|---|---|
| `https://www.youtube.com/watch?v=dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| `https://www.youtube.com/watch?v=jNQXAC9IVRw` | `jNQXAC9IVRw` |
| `https://www.youtube.com/watch?v=9bZkp7q19f0` | `9bZkp7q19f0` |

---

## Étape 2: Modifier la liste des vidéos dans le code

### Où modifier?

Dans `index.html`, cherche cette section (vers la fin du fichier):

```javascript
const videos = [
  "4dVbEoPTieg",
  "dQw4w9WgXcQ",
  "jNQXAC9IVRw",
  "9bZkp7q19f0",
  "kJQP7kiw9Fk"
];
```

### Comment modifier?

Tu peux:

**Ajouter une vidéo** (elle apparaîtra avec les flèches):
```javascript
const videos = [
  "4dVbEoPTieg",        // Ta première vidéo
  "dQw4w9WgXcQ",        // Deuxième vidéo
  "ton_nouvel_ID_ici",  // Ajoute ton ID ici
  "9bZkp7q19f0",
  "kJQP7kiw9Fk"
];
```

**Remplacer une vidéo existante**:
```javascript
const videos = [
  "4dVbEoPTieg",        // Garde celle-ci
  "MA_VIDEO_ID_1",      // Remplace cette ligne par ton ID
  "MA_VIDEO_ID_2",      // Remplace celle-ci aussi
  "9bZkp7q19f0",        // Etc...
  "MA_VIDEO_ID_3"
];
```

**Garder que tes vidéos**:
```javascript
const videos = [
  "ID_VIDEO_1",
  "ID_VIDEO_2",
  "ID_VIDEO_3"
];
```

---

## Exemple complet

Si tu as ces vidéos:
- `https://www.youtube.com/watch?v=abc123`
- `https://www.youtube.com/watch?v=def456`
- `https://www.youtube.com/watch?v=ghi789`

Tu vas modifier le code comme ça:

```javascript
const videos = [
  "abc123",
  "def456",
  "ghi789"
];
```

Et voilà! Tu auras 3 vidéos dans le carrousel, avec les flèches pour naviguer entre elles.

---

## Pourquoi tu vois "1 / 5"?

Le compteur en bas à droite de chaque vidéo affiche:
- **1** = vidéo numéro 1
- **5** = il y a 5 vidéos au total

Si tu ajoutes 10 vidéos, tu verras "1 / 10", "2 / 10", etc.

---

## Astuce: Comment copier/coller dans VS Code

1. **Dans `index.html`**, appuie sur `Ctrl+F` (ou `Cmd+F` sur Mac)
2. Cherche: `const videos = [`
3. Trouve la section et modifie les IDs
4. Sauvegarde avec `Ctrl+S`

C'est tout! 🎬
