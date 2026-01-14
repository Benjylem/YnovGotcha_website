const knowledgeBase = {
  "qu'est-ce que gotcha": {
    answer: "GOTCHA est le média étudiant des Ydays. On centralise toutes les infos sur les projets, les équipes et les événements. Notre mission : devenir la référence des Ydays, claire, fun et centralisée.",
    keywords: ["gotcha", "média", "ydays", "projet"]
  },
  "quels sont les pôles": {
    answer: "GOTCHA a 5 pôles principaux:\n• Les CHEFFES - Direction du projet\n• Pôle Informatique - Développement du site\n• Pôle Audiovisuel - Vidéos explicatives\n• Pôle Micro-trottoir - Interviews et contenus\n• Pôle On Est Des Bâtards - Livestreams et formats humour",
    keywords: ["pôles", "équipes", "équipe", "pole", "structure"]
  },
  "quels formats produisez-vous": {
    answer: "Nos formats:\n🎬 Vidéos explicatives - Pour comprendre les projets Ydays\n🎤 Micro-trottoirs - Interviews d'étudiants\n😂 Formats humour 'Bâtards' - Du contenu décalé\n📡 Livestreams - Événements en direct\n❓ FAQ et guide - Des réponses à tes questions",
    keywords: ["formats", "vidéo", "contenu", "production"]
  },
  "comment contacter gotcha": {
    answer: "Tu peux nous contacter via:\n📧 Email: remplace@par.ton.email\n📱 Instagram: @gotcha\n💬 TikTok: @gotcha\n🌐 Site web: gotcha2026.netlify.app\nTu peux aussi remplir un formulaire de contact sur notre site!",
    keywords: ["contact", "email", "instagram", "communiquer", "joindre"]
  },
  "qu'est-ce que les ydays": {
    answer: "Les Ydays sont des jours de projets à l'école Ynov. C'est un moment où les étudiants travaillent sur des projets réels, innovants et pluridisciplinaires. GOTCHA est là pour centraliser les infos et valoriser ces projets auprès de tous les étudiants.",
    keywords: ["ydays", "école", "projet", "ynov"]
  },
  "qui dirige gotcha": {
    answer: "GOTCHA est dirigée par:\n👑 Jade Renaud - Cheffe de projet, Pôle Audiovisuel\n👑 Jade Olivier - Co-Cheffe de projet, Pôle Market Com\n👑 Marie Le Diouron - Co-Cheffe de projet, Pôle Market Com\n\nCes trois cheffes coordonnent tous les pôles et valident les projets.",
    keywords: ["cheffe", "direction", "leader", "responsable"]
  },
  "comment rejoindre gotcha": {
    answer: "Tu veux rejoindre GOTCHA? C'est possible!\nTu peux:\n✅ Rejoindre un pôle existant\n✅ Proposer une collaboration\n✅ Participer à nos events\nContacte-nous via le formulaire de contact pour en savoir plus!",
    keywords: ["rejoindre", "participer", "collaboration", "intégrer"]
  },
  "quels sont les objectifs 2025-2026": {
    answer: "Nos objectifs pour 2025-2026:\n📊 Quantitatifs: 12-20 vidéos, 6 vidéos explicatives, 8 micro-trottoirs, 4 formats humour, 1 livestream, 200 étudiants touchés\n🎯 Qualitatifs: Devenir la référence interne, valoriser les projets, améliorer la communication école → étudiants\n💰 Budget: 140€ stockage + matériel fourni par Ynov",
    keywords: ["objectif", "2025", "2026", "but", "cible"]
  },
  "qu'est-ce que la mission gotcha": {
    answer: "Notre mission est triple:\n🎯 Devenir LA référence des Ydays\n✨ Rendre tout ça claire, fun et centralisée\n🤝 Créer un lien entre étudiants et école\n\nOn apporte:\n✅ Site web dédié\n✅ Vidéos régulières\n✅ DA solide et reconnaissable\n✅ Stratégie de diffusion\n✅ Équipe organisée",
    keywords: ["mission", "objectif", "but", "raison"]
  },
  "quels réseaux utilisez-vous": {
    answer: "Nos réseaux sociaux:\n📲 Instagram - Contenu quotidien\n🎵 TikTok - Vidéos courtes et virales\n📺 YouTube - Vidéos complètes\n🌐 Site GOTCHA - Hub centralisé\n📡 Livestreams - Événements en direct",
    keywords: ["réseau", "social", "instagram", "tiktok", "youtube"]
  }
};

function findBestMatch(userMessage) {
  const userLower = userMessage.toLowerCase();
  let bestMatch = null;
  let highestScore = 0;

  for (const [question, data] of Object.entries(knowledgeBase)) {
    let score = 0;

    if (question.includes(userLower) || userLower.includes(question)) {
      score = 100;
    } else {
      for (const keyword of data.keywords) {
        if (userLower.includes(keyword)) {
          score += 50;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = data;
    }
  }

  return highestScore >= 30 ? bestMatch : null;
}

function displayMessage(content, isUser = false) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user" : "bot"}`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = content;

  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot";
  messageDiv.id = "typingIndicator";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';

  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

function sendMessage() {
  const chatInput = document.getElementById("chatInput");
  const message = chatInput.value.trim();

  if (!message) return;

  displayMessage(message, true);
  chatInput.value = "";
  chatInput.focus();

  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    const match = findBestMatch(message);

    if (match) {
      displayMessage(match.answer);
    } else {
      displayMessage(
        "Hmm, je ne suis pas sûr de cette réponse. 🤔\n\nTu peux:\n• Reformuler ta question\n• Consulter les questions populaires\n• Nous contacter directement pour une réponse précise!"
      );
    }
  }, 600);
}

function askQuestion(question) {
  const chatInput = document.getElementById("chatInput");
  chatInput.value = question;
  chatInput.focus();
  sendMessage();
}
