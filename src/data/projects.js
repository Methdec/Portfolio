// src/data/projects.js

export const projectsData = {
  pro: [
    { 
      id: 'allscans', 
      title: 'Projet de fin d\'étude : AllScans', 
      tech: 'React / Python / FastAPI / MongoDB / Docker',
      date: '2025 - 2026',
      images: [
        'https://via.placeholder.com/800x400?text=Dashboard+Image+1',
        'https://via.placeholder.com/400x300?text=Dashboard+Image+2',
        'https://via.placeholder.com/400x300?text=Dashboard+Image+3'
      ],
      content: [
        "Ce projet consistait à développer un tableau de bord complet pour la gestion des clients d'une agence locale. L'objectif principal était de regrouper toutes les informations éparpillées dans divers fichiers Excel vers une interface unique et sécurisée.",
        "J'ai pris en charge le développement full-stack, de la conception de la base de données PostgreSQL jusqu'à l'interface en React. Une attention particulière a été portée sur l'optimisation des requêtes, car le volume de données à traiter quotidiennement était important.",
        "L'un des plus gros défis a été la mise en place d'un système de génération de rapports PDF à la volée, qui a nécessité l'intégration d'une file d'attente pour ne pas bloquer l'interface utilisateur lors des exports lourds."
      ],
      githubLink: 'https://github.com/votre-profil/dashboard',
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
        "[GALLERY_MEDIUM] /images/flowaccueil.png, flowimage2.png",
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
      title: 'Projet de fin d\'année 2024 : Tamagotchi', 
      tech: 'Arduino / C++ / ESP32',
      date: '2023 - 2024',
      images: [
        'https://via.placeholder.com/800x400?text=Dashboard+Image+1',
        'https://via.placeholder.com/400x300?text=Dashboard+Image+2',
        'https://via.placeholder.com/400x300?text=Dashboard+Image+3'
      ],
      content: [
        "Ce projet consistait à développer un tableau de bord complet pour la gestion des clients d'une agence locale. L'objectif principal était de regrouper toutes les informations éparpillées dans divers fichiers Excel vers une interface unique et sécurisée.",
        "J'ai pris en charge le développement full-stack, de la conception de la base de données PostgreSQL jusqu'à l'interface en React. Une attention particulière a été portée sur l'optimisation des requêtes, car le volume de données à traiter quotidiennement était important.",
        "L'un des plus gros défis a été la mise en place d'un système de génération de rapports PDF à la volée, qui a nécessité l'intégration d'une file d'attente pour ne pas bloquer l'interface utilisateur lors des exports lourds."
      ],
      githubLink: 'https://github.com/votre-profil/dashboard',
      demoLink: 'https://demo-dashboard.com'
    },
    { 
      id: 'pot-connecte', 
      title: 'Pot Connecté IoT - Signaux Bioélectriques', 
      tech: 'ESP32 / C++ / Capteur AD8232 / MQTT',
      date: 'Juillet-Aout 2025',

      images: [], 
      content: [
        "L'objectif principal de ce projet est de concevoir un système embarqué capable de récupérer, de traiter et de transmettre les signaux bioélectriques (variant entre 1 et 100 mV) émis par une plante vers une interface web. Ces signaux fluctuent en fonction de leur état et des stimuli environnementaux.",
        
        "Architecture matérielle : Le système repose sur un microcontrôleur ESP32 couplé à un capteur cardiaque AD8232, particulièrement adapté pour amplifier les signaux faibles. Trois électrodes autocollantes de type ECG sont utilisées.",
        
        "Plusieurs expériences ont été menées sur des spécimens de Jasmin et d'Orchidée pour établir une base de données de référence :\n- Stress lumineux : Lors d'une exposition soudaine au soleil\n- Stress physique : Un pic allant de 0.5 mV à 2.5 mV est mesuré\n- Stress hydrique : L'ajout d'eau n'a généré aucun signal distinct",
        
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
      id: 'p3', 
      title: 'Générateur de portfolio', 
      tech: 'Vite / React',
      date: 'Avril 2026',
      images: [], // Tableau vide si pas d'image
      content: [
        "Un projet personnel né du besoin de créer rapidement mon propre portfolio. J'ai décidé d'en faire un outil réutilisable.",
        "Le principe est simple : on édite un fichier de configuration JSON, et l'application génère dynamiquement les pages et le routage associé."
      ],
      githubLink: 'https://github.com/votre-profil/portfolio-gen',
      demoLink: 'https://portfolio-gen.com'
    },
    { id: 'p4', title: 'Bot Discord', tech: 'Python', date: 'Janvier 2026', images: [], content: ["Bot utilitaire..."], githubLink: '', demoLink: '' },
    { id: 'p5', title: 'App météo', tech: 'React Native', date: 'Mars 2025', images: [], content: ["App mobile..."], githubLink: '', demoLink: '' }
  ]
};