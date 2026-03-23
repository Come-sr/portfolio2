export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Formation' | 'Alternance' | 'Stage';
  description: string;
  skills: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    title: "Cursus B3 chez Hesias",
    company: "Hesias",
    location: "Vichy, France",
    period: "2025 - 2026",
    type: "Formation",
    description: "Formation en développement et cybersécurité. Continuant mon alternance à l'Université de Vichy.",
    skills: ["Développement", "Cybersécurité", "Alternance"],
  },
  {
    title: "Alternance au Pôle Universitaire de Vichy",
    company: "Pôle Universitaire de Vichy",
    location: "Vichy, France",
    period: "2024 - 2026",
    type: "Alternance",
    description: "Configuration et gestion du serveur GLPI, assistance quotidienne aux utilisateurs (enseignants, étudiants, administratifs), maintenance du parc informatique.",
    skills: ["GLPI", "Support Utilisateur", "Maintenance", "Réseau"],
    link: "https://www.vichy-communaute.fr/pole-universitaire/",
  },
  {
    title: "BTS SIO option SISR",
    company: "Lycée Valery Larbaud",
    location: "Cusset, France",
    period: "2023 - 2025",
    type: "Formation",
    description: "Formation spécialisée en Solutions d'Infrastructure, Systèmes et Réseaux pour devenir technicien système et réseau.",
    skills: ["Réseau", "Système", "Infrastructure", "SISR"],
  },
  {
    title: "Stage au Pôle Universitaire de Vichy",
    company: "Pôle Universitaire de Vichy",
    location: "Vichy, France",
    period: "2023 — 2 mois",
    type: "Stage",
    description: "Consolidation des compétences en réseau, découverte du fonctionnement d'un SI d'envergure et création de documentation pour le brassage réseau.",
    skills: ["Réseau", "Documentation", "Brassage", "SI"],
  },
  {
    title: "Bac Professionnel Systèmes Numériques",
    company: "Lycée Albert Londres",
    location: "Cusset, France",
    period: "2020 - 2023",
    type: "Formation",
    description: "Option Audiovisuels, réseau et équipements domestiques (Mention Bien). Acquisition de solides bases techniques en électronique et informatique.",
    skills: ["Audiovisuel", "Réseau", "Équipements domestiques", "Électronique", "Informatique"],
  },
  {
    title: "Stage Découverte à Vichy Communauté",
    company: "Vichy Communauté",
    location: "Vichy, France",
    period: "2019 — 1 mois",
    type: "Stage",
    description: "Première immersion professionnelle en informatique, confirmant mon orientation de carrière (maintenance et GLPI).",
    skills: ["Maintenance", "Découverte IT", "GLPI"],
  },
];
