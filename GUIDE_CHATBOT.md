# Guide du Chatbot GOTCHA

## 🤖 Qu'est-ce que c'est?

Le chatbot GOTCHA est un assistant intelligent **100% local** qui répond aux questions sur ton projet sans utiliser d'API externe payante. Tout fonctionne directement dans le navigateur!

**Avantages:**
✅ Aucun coût (pas d'API payante)
✅ Aucune donnée envoyée à l'extérieur
✅ Réponses instantanées
✅ Facile à personnaliser
✅ Respecte la confidentialité

---

## 📍 Où accéder au chatbot?

**Option 1:** Page Contact
- Clique sur le bouton "🤖 Chatbot" depuis `pages/contact.html`

**Option 2:** URL directe
- Va sur `pages/chatbot.html`

---

## 🎯 Comment ça fonctionne?

### L'utilisateur pose une question
```
"Quels sont les pôles de GOTCHA?"
```

### Le chatbot cherche une correspondance
1. Cherche une correspondance exacte avec les mots-clés
2. Attribue un score de pertinence
3. Retourne la meilleure réponse

### Réponse
```
"GOTCHA a 5 pôles principaux:
• Les CHEFFES - Direction du projet
• Pôle Informatique...
```

---

## 🛠️ Comment personnaliser le chatbot?

### Ajouter une nouvelle réponse

**Fichier:** `js/chatbot.js`

**Cherche la section `knowledgeBase`** (c'est la base de connaissances)

**Ajoute une nouvelle entrée:**

```javascript
const knowledgeBase = {
  "ta question en minuscules": {
    answer: "Ta réponse détaillée ici",
    keywords: ["mot1", "mot2", "mot3"]  // Mots pour reconnaître la question
  },
  // Autres questions...
};
```

### Exemple complet

```javascript
"quand est votre prochain livestream": {
  answer: "Notre prochain livestream est prévu pour:\n📅 Date: [remplace par ta date]\n⏰ Heure: [remplace par l'heure]\n🔗 Lien: [ajoute le lien]\n\nTu peux aussi suivre notre Instagram pour les annonces!",
  keywords: ["livestream", "direct", "stream", "prochaine", "date"]
}
```

### Modifier une réponse existante

1. Cherche la question dans `knowledgeBase`
2. Modifie la valeur `answer`
3. Sauvegarde le fichier
4. Actualise la page (F5)

---

## 📝 Les réponses actuelles

Le chatbot répond à ces questions par défaut:

| Question | Réponse | Mots-clés |
|----------|---------|-----------|
| Qu'est-ce que GOTCHA? | Info sur le projet | gotcha, média, ydays |
| Quels sont les pôles? | Les 5 pôles | pôles, équipes, structure |
| Quels formats? | Vidéos, trottoirs, etc. | formats, vidéo, contenu |
| Comment contacter? | Réseaux et email | contact, email, communiquer |
| Qu'est-ce que Ydays? | Explication Ydays | ydays, école, projet |
| Qui dirige? | Les 3 cheffes | cheffe, direction, leader |
| Comment rejoindre? | Instructions | rejoindre, participer |
| Objectifs 2025-2026 | Chiffres et buts | objectif, 2025, but |
| La mission? | Mission GOTCHA | mission, objectif, raison |
| Quels réseaux? | Réseaux sociaux | réseau, social, instagram |

---

## 🚀 Bonnes pratiques

### Écrire une bonne réponse

✅ **Bien:** Clair, concis, avec emojis
```javascript
answer: "GOTCHA a 5 pôles:\n• Les CHEFFES\n• Informatique\n• Audiovisuel\n• Micro-trottoir\n• Bâtards"
```

❌ **Mal:** Trop long, compliqué
```javascript
answer: "Il y a différents pôles qui correspondent à..."
```

### Choisir les bons mots-clés

✅ **Bien:** Variés et pertinents
```javascript
keywords: ["livestream", "direct", "stream", "live", "en direct", "événement"]
```

❌ **Mal:** Trop génériques
```javascript
keywords: ["truc", "chose", "info"]
```

### Utiliser des retours à la ligne

```javascript
// ❌ Tout sur une ligne
"Ligne 1. Ligne 2. Ligne 3."

// ✅ Avec retours
"Ligne 1\nLigne 2\nLigne 3"
```

---

## 🎨 Ajouter des emojis

Les emojis rendent le chatbot plus fun!

```javascript
"🎬 Vidéos explicatives\n📡 Livestreams\n🎤 Micro-trottoirs"
```

Emojis courants:
- 🎬 = vidéo
- 📱 = réseau social
- 📧 = email
- 🎯 = objectif
- 💰 = budget
- 👥 = équipe
- 📅 = date/calendrier

---

## ⚙️ FAQ technique

### Comment ajouter une question composée?

**Q:** Et si l'utilisateur demande quelque chose de très spécifique?

**R:** Ajoute des mots-clés plus spécifiques:

```javascript
"combien ça coûte rejoindre gotcha": {
  answer: "GOTCHA est gratuit! Tu peux rejoindre sans frais...",
  keywords: ["coût", "prix", "gratuit", "payer", "tarif"]
}
```

### Les réponses ne s'affichent pas?

1. Vérifie la syntaxe JavaScript (pas d'erreur de guillemets)
2. Ouvre la console (F12) pour voir les erreurs
3. Sauvegarde et actualise le navigateur
4. Vérifier que les mots-clés sont en minuscules

### Comment tester?

1. Ouvre `pages/chatbot.html`
2. Pose une question
3. Attends la réponse (~600ms)
4. Modifie si besoin dans `js/chatbot.js`

---

## 🔐 Sécurité et confidentialité

✅ **Aucune donnée n'est envoyée** à un serveur externe
✅ **Les réponses restent locales** dans le navigateur
✅ **Pas de cookies** ou tracking (sauf votre analyse)
✅ **Pas d'API tierce** qui pourrait enregistrer les questions

---

## 📱 Pour les mobile

Le chatbot est **responsive** et fonctionne parfaitement sur:
- 📱 Téléphones
- 📱 Tablettes
- 💻 Ordinateurs

---

## 🎁 Bonus: Ajouter des actions

Tu peux aussi ajouter des boutons pour:
- Ouvrir une page
- Envoyer un email
- Voter/remplir un formulaire

(À implémenter si besoin)

---

## ✨ Prochaines étapes

1. **Personnalise** les réponses avec tes vraies infos
2. **Ajoute** tes propres questions
3. **Teste** avec des camarades
4. **Améliore** selon les retours

Bon chatbot! 🚀
