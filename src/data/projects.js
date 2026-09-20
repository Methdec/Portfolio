// src/data/projects.js

export const projectsData = {
  pro: [
    { 
      id: 'p1', 
      title: 'Dashboard Client', 
      tech: 'React / Node.js',
      // Ces données servent pour la page de détails
      date: 'Septembre 2025',
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
      id: 'p2', 
      title: 'Refonte Site E-commerce', 
      tech: 'Next.js / Stripe',
      date: 'Février 2026',
      images: [
        'https://via.placeholder.com/800x400?text=Ecommerce+Main'
      ],
      content: [
        "Migration d'une ancienne boutique WooCommerce vers une architecture moderne Headless en utilisant Next.js. Ce choix technologique a permis d'améliorer drastiquement les temps de chargement et le SEO de la boutique.",
        "L'intégration complète de l'API Stripe a été réalisée pour gérer les paiements, incluant un système d'abonnement mensuel complexe."
      ],
      githubLink: 'https://github.com/votre-profil/ecommerce',
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