// Pour ajouter un projet : copie un bloc ci-dessous, change les champs, c'est tout.
window.PROJECTS = [
  {
    name: 'Nocturna Code',
    tagline: "Gestionnaire de projets avec éditeur intégré, pensé pour reprendre là où tu t'es arrêté.",
    status: 'Bêta',
    version: '0.2.0',
    logo: 'assets/nocturna-code.svg',
    tags: ['Windows', 'Electron', 'TypeScript', 'Monaco'],
    features: ['Éditeur Monaco avec onglets et split', 'Session restaurée à la réouverture', 'Terminal intégré et lancement F5', 'Sauvegardes et versions du projet', 'Mises à jour automatiques'],
    links: [
      { label: 'Télécharger', url: 'https://github.com/CoreFRR/Core-Of-Project/releases/latest', primary: true },
      { label: 'GitHub', url: 'https://github.com/CoreFRR/Core-Of-Project' }
    ]
  },
  {
    name: 'Nocturna Ultra',
    tagline: 'Bot Discord pour gérer et animer ton serveur : modération, tickets, niveaux et économie.',
    logo: 'assets/nocturna-ultra.svg',
    tags: ['Discord', 'Node.js', 'discord.js'],
    features: ['Modération et auto-modération', 'Tickets de support multi-panneaux', 'Niveaux (XP) et économie', 'Messages d\'arrivée et de départ, règlement, rôles automatiques', 'Sauvegardes de la structure du serveur'],
    links: [
      { label: 'Inviter le bot', url: 'https://discord.com/oauth2/authorize?client_id=1542888939168333895&permissions=8&integration_type=0&scope=bot', primary: true }
    ]
  }
]
