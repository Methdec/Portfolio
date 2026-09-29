// src/data/projects.js

export const projectsData = {
  pro: [
    { 
      id: 'allscans', 
      title: 'Projet de fin d\'étude : AllScans', 
      tech: 'React / Python / FastAPI / MongoDB / Docker',
      date: '2025 - 2026',
      images: [],
      content: [
        "Work in progress"
      ],
      githubLink: 'https://github.com/Methdec/All_Scans',
      demoLink: 'https://demo-dashboard.com'
    },
    { 
      id: 'flow', 
      title: 'Flow - Réseau Social (Clone de Twitter)',
      date: '2024 - 2025',
      tech: 'Next.js / TypeScript / Supabase / Stripe',
      githubLink: 'https://github.com/LouisMbc/flow',
      demoLink: '', 
      images: [], 
      content: [
        "Flow est une application web Full-Stack de type réseau social, fortement inspirée de Twitter (X), réalisée dans le cadre d'un projet de groupe.",
        "L'objectif était de concevoir une plateforme interactive capable de gérer des flux de données en temps réel, des interactions sociales complexes et un système de monétisation.",
        "Le projet repose sur une architecture moderne utilisant Next.js et TypeScript pour le front-end, combinés à Supabase pour la gestion de la base de données, de l'authentification et du temps réel.",
        "[GALLERY_MEDIUM] /images/flowaccueil.png, /images/flowimage2.png",
        "### Fonctionnalités implémentées :",
        "- **Moteur social complet :** Publication de posts (tweets), retweets, système de likes, gestion des hashtags et des mentions entre utilisateurs.",
        "- **Temps réel :** Implémentation d'une messagerie privée (Direct Messages) et d'un système de notifications dynamiques.",
        "- **Contenu éphémère :** Développement d'un module de 'Stories' permettant de partager des médias temporaires.",
        "- **Abonnement Premium :** Intégration de l'API Stripe (Checkout et Webhooks) pour débloquer des fonctionnalités exclusives aux abonnés.",
        "- **Profils personnalisés :** Outil de configuration et d'édition de profil complet avec gestion de followers/following et moteur de recherche intégré."
      ],
      documents: []
    },
    {
      id: 'tamagotchi',
      title: 'Console Tamagotchi & Mini-RPG',
      tech: 'ESP32 / C++ / Impression 3D / Pixel Art',
      date: '2024',
      githubLink: 'https://github.com/Methdec/Tamagotchi',
      demoLink: 'https://www.pixilart.com/argon4te',
      images: [],
      content: [
        "Réalisation d'un projet de fin d'année ambitieux : la conception de A à Z d'une **console portable type Tamagotchi**. Le projet allie ingénierie matérielle, modélisation 3D, développement C++ embarqué et création graphique.",
        
        "Le concept de base repose sur l'entretien d'un petit slime virtuel (nourriture via des cookies, sommeil) géré par deux jauges critiques : la **faim** et la **joie**. Si la créature ne mange pas, elle meurt de faim ; si on ne joue pas avec elle, sa jauge de joie tombe à zéro et elle se suicide.",
        
        "### Hardware & Modélisation 3D",
        "- **Électronique :** Cerveau basé sur un microcontrôleur **ESP32**, couplé à un écran matriciel LED de 16x32 pixels et 5 boutons physiques d'interaction. Câblage et soudures réalisés à la main.",
        "- **Conception 3D :** Boîtier modélisé sur mesure. Une fonctionnalité unique permet de fixer des « couches » supplémentaires sur la coque grâce à des aimants, faisant correspondre l'aspect physique de la console au **skin virtuel** équipé en jeu.",
        
        "### Mini-jeux & RPG Procédural",
        "Pour maintenir la jauge de joie, la télévision de la chambre permet d'accéder à plusieurs applications :",
        "- **Arcade Dodge :** Un jeu de survie où le slime doit esquiver des pluies de météorites à la difficulté croissante, intégrant un système de **Scoreboard**.",
        "- **Dungeon Crawler RPG :** Un véritable mini-RPG se déroulant dans un labyrinthe de 25 salles (5x5) généré **procéduralement**. Il inclut un système de combat contre 4 types de monstres, un inventaire de loot, et des salles spéciales (rivière, runes à usage unique pour booster ses statistiques).",
        "- **Boss Fight caché :** Les matériaux lootés peuvent être vendus à un marchand dans le donjon. Rassembler assez d'argent permet d'acheter une clé secrète déclenchant un combat de boss en 3 phases contre le marchand lui-même.",
        
        "### Direction Artistique & Bonus",
        "- **Pixel Art 100% Custom :** L'intégralité des sprites (animations, monstres, décors) a été dessinée à la main sur Pixilart.",
        "- **Système de succès :** Les scores obtenus et les boss vaincus débloquent de nouvelles apparences (skins) équipables.",
        "- **Générateur de Courbes de Lissajous :** Intégration d'un algorithme mathématique générant des courbes harmoniques géométriques en fonction de paramètres X et Y modifiables en temps réel.",
        "- **Godmode & Settings :** Menu d'options complet pour paramétrer la console, activer la triche ou réinitialiser la sauvegarde EEPROM.",
        
        "[GALLERY_MEDIUM] /images/exemplesprite2.gif, /images/exemplesprite.gif"
      ],
      documents: []
    },
    { 
      id: 'pot-connecte', 
      title: 'Pot Connecté IoT - Signaux Bioélectriques',
      tech: 'ESP32 / C++ / Capteur AD8232 / MQTT',
      date: 'Juillet - Août 2025',
      images: [],
      content: [
        "L'objectif principal de ce projet est de concevoir un **système embarqué** capable de récupérer, de traiter et de transmettre les **signaux bioélectriques** (variant entre 1 et 100 mV) émis par une plante vers une interface web. Ces signaux fluctuent en fonction de leur état et des stimuli environnementaux.",
        
        "### Architecture matérielle",
        "Le système repose sur un microcontrôleur **ESP32** couplé à un **capteur cardiaque AD8232**, particulièrement adapté pour amplifier les signaux faibles. Trois électrodes autocollantes de type ECG sont utilisées pour capter l'activité de la plante.",
        
        "### Expériences et mesures",
        "Plusieurs expériences ont été menées sur des spécimens de Jasmin et d'Orchidée pour établir une base de données de référence :\n\n- **Stress lumineux :** Réaction mesurée lors d'une exposition soudaine au soleil.\n- **Stress physique :** Un pic allant de 0.5 mV à 2.5 mV est enregistré lors d'une perturbation.\n- **Stress hydrique :** L'ajout d'eau n'a généré aucun signal électrique distinct.",
        
        "[GALLERY_MEDIUM] /images/potconnecteimage1.png, /images/potconnecteimage2.png"
      ],
      
      documents: [
        {
          id: 'rapport-pot',
          title: 'Rapport de Projet Complet',
          description: 'L\'intégralité des recherches, des calculs de filtres et des résultats expérimentaux.',
          fileUrl: '/documents/Rapport Projet Signaux Bioélectriques des Plantes.pdf',
          downloadName: 'Rapport_Pot_Connecte.pdf'
        }
      ],
      githubLink: 'https://github.com/Methdec/Straway-test-de-r-ponses-lectriques-d-une-plante',
      demoLink: null
    }
  ],
  perso: [
    {
      id: 'portfolio-react',
      title: 'Portfolio Personnel - React & Tailwind',
      tech: 'React / Tailwind CSS / Vite / Vercel',
      date: 'Septembre 2026',
      githubLink: 'https://github.com/Methdec/Portfolio',
      demoLink: '/',
      images: [],
      content: [
        "Conception et développement de ce **portfolio interactif** (le site sur lequel vous naviguez actuellement) afin de présenter mon parcours, mes compétences et mes réalisations de manière centralisée.",
        
        "### Design & UI/UX",
        "L'interface a été entièrement pensée autour d'un **Dark Mode** élégant pour un rendu développeur très moderne. Elle intègre des effets de **Glassmorphism** (cartes en verre dépoli), des grilles d'arrière-plan subtiles et colorées selon les sections, ainsi que des animations d'apparition fluides pour maximiser l'expérience utilisateur.",
        
        "### Architecture Technique",
        "- **Single Page Application (SPA)** ultra-rapide propulsée par **Vite** et structurée en composants modulaires avec **React**.\n- Routage dynamique géré par **React Router** pour une navigation instantanée sans rechargement de page.\n- Intégration d'un **interpréteur de texte sur-mesure** en JavaScript permettant de parser des balises personnalisées (pour le gras ou les sous-titres) afin de faciliter la rédaction du contenu.\n- Styling 100% responsive et utilitaire réalisé avec **Tailwind CSS**.",
        
        "### Déploiement & CI/CD",
        "L'hébergement est assuré par **Vercel**. Le projet est directement synchronisé avec le dépôt **GitHub** pour garantir une intégration et un déploiement continus (**CI/CD**). Chaque nouveau projet ajouté dans le code est ainsi automatiquement poussé en production sans action supplémentaire.",
      ],
      documents: []
    }
    ]
};