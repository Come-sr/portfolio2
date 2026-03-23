import type { ReactNode } from 'react';
import { Terminal, Server, Shield, Database, Network, Cpu, Globe } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  color: string;
  textColor: string;
  icon: ReactNode;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Contexte & Missions",
    description: "Immersion au sein d'un parc informatique de 3000 utilisateurs. Maintenance, dépannage et assistance aux utilisateurs.",
    tags: ["Infrastructure", "Support", "Réseaux"],
    link: "/Projet/Alternance/ALT1.HTML",
    color: "bg-[#f4f4f5]",
    textColor: "text-[#111111]",
    icon: <Server className="w-8 h-8" />,
    featured: false
  },
  {
    title: "Déploiement GLPI",
    description: "Mise en place d'un système de ticketing et d'inventaire avec GLPI. Configuration des règles, des collecteurs mails et des notifications.",
    tags: ["GLPI", "Ticketing", "Inventaire"],
    link: "/Projet/Alternance/ALT2.HTML",
    color: "bg-[#c4f042]",
    textColor: "text-[#111111]",
    icon: <Database className="w-8 h-8" />,
    featured: false
  },
  {
    title: "Firewall Stormshield",
    description: "Administration d'un firewall Stormshield. Gestion des règles de filtrage, des VPN et de la sécurité du réseau.",
    tags: ["Sécurité", "Firewall", "Règles"],
    link: "#",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Shield className="w-8 h-8 text-[#3b82f6]" />,
    featured: false
  },
  {
    title: "Outils de Maintenance",
    description: "Création d'une clé USB bootable avec des outils de maintenance : antivirus, live CD, gestionnaire de partitions, etc.",
    tags: ["USB Bootable", "Maintenance", "Sécurité"],
    link: "/Projet/MissionAP/Yumii.html",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Cpu className="w-8 h-8 text-[#ec4899]" />,
    featured: false
  },
  {
    title: "Travail Collaboratif",
    description: "Déploiement d'une solution de travail collaboratif avec Nextcloud. Intégration LDAP, gestion des partages et des utilisateurs.",
    tags: ["Nextcloud", "LDAP", "Collaboratif"],
    link: "/Projet/MissionAP2/NextCloud.html",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Globe className="w-8 h-8 text-[#10b981]" />,
    featured: false
  },
  {
    title: "Administration Windows",
    description: "Mise en place d'un environnement Active Directory avec DNS, DHCP et GPO. Gestion des utilisateurs et des postes de travail.",
    tags: ["Windows Server", "AD", "DNS"],
    link: "/Projet/MissionAP2/WindowsServer.html",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Server className="w-8 h-8 text-[#f4f4f5]" />,
    featured: false
  },
  {
    title: "VPN IPSec Cisco",
    description: "Configuration d'un tunnel VPN IPSec entre deux sites distants. Sécurisation des échanges et des données.",
    tags: ["IPSec", "VPN", "Sécurité"],
    link: "/Projet/MissionAP2/vpnIPSEC.html",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Shield className="w-8 h-8 text-[#a78bfa]" />,
    featured: false
  },
  {
    title: "Redondance Infrastructure",
    description: "Mise en place d'une infrastructure réseau redondante avec les protocoles STP et EtherChannel. Haute disponibilité et performance.",
    tags: ["STP", "EtherChannel", "Redondance"],
    link: "/Projet/MissionAP2/Redondance.html",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Network className="w-8 h-8 text-[#c4f042]" />,
    featured: false
  },
  {
    title: "Supervision Nagios",
    description: "Déploiement d'une solution de supervision avec Nagios. Monitoring des services et des équipements, alertes et rapports.",
    tags: ["Nagios", "Monitoring", "Alertes"],
    link: "/Projet/MissionAP2/Nagios.html",
    color: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Network className="w-8 h-8 text-[#3b82f6]" />,
    featured: false
  }
];
