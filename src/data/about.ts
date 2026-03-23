export interface Certification {
  title: string;
  org: string;
  date: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export const certifications: Certification[] = [
  {
    title: "Certified Stormshield Network Administrator",
    org: "Stormshield",
    date: "Jusqu'au 10/06/2028"
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    date: "2023"
  },
  {
    title: "Digital Awareness",
    org: "Cisco Networking Academy",
    date: "2023"
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor Administrateur Infrastructures Sécurisées",
    school: "Hésias",
    period: "2024 - Présent",
    details: "Formation en alternance combinant théorie et pratique. J'apprends la gestion d'infrastructures, la sécurité des systèmes et le développement d'applications métier."
  },
  {
    degree: "BTS SIO option SISR",
    school: "Lycée Valery Larbaud",
    period: "2022 - 2024",
    details: "Solutions d'Infrastructure, Systèmes et Réseaux. Compétences en configuration d'équipements réseaux, gestion de serveurs Windows/Linux."
  },
  {
    degree: "Bac Pro Systèmes Numériques",
    school: "Lycée Albert Londres",
    period: "2020 - 2023",
    details: "Option ARED (Audiovisuel, Réseau et Équipements Domestiques). Mention Bien. Acquisition de solides bases techniques en électronique et informatique."
  }
];
