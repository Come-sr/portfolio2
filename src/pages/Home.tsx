import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar, Rocket, Network, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const skills = [
  'Virtualisation', 'Docker', 'Proxmox', 'Debian', 'Fedora', 'Arch Linux',
  'Administration Système & Réseau', 'Firewall Stormshield', 'Sécurisation réseau',
  'Cybersécurité', 'RGPD', 'Déploiement de services', 'Windows Server',
  'Active Directory', 'DNS', 'Reverse Proxy', 'Téléphonie IP', 'VPN',
];

export default function Home() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const ease = [0.16, 1, 0.3, 1];
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[300px]"
      >
        {/* Hero Card */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 lg:col-span-2 row-span-2 bento-card bg-[#c4f042] text-[#111111] flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/10 backdrop-blur-sm text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-[#111111] animate-pulse-soft" />
              Apprenti Technicien Informatique
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Bonjour, je suis{' '}
              <TypeAnimation
                sequence={[
                  'Côme Servy',
                  6000,
                  'un technicien système et réseau',
                  5500,
                  'étudiant en Bac+3',
                  7000,
                  "passionné d'informatique",
                  6500,
                  'Côme Servy',
                  5000,
                  'un technicien système et réseau',
                  6000,
                  "passionné d'informatique",
                  7500,
                  "en train d'écouter de la musique",
                  5000,
                ]}
                wrapper="span"
                speed={35}
                repeat={Infinity}
              />
            </h1>
            <p className="text-base md:text-lg font-medium text-[#111111]/75 max-w-sm leading-relaxed">
              Passionné d'informatique, curieux par nature. J'aime construire des infrastructures qui fonctionnent.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Voir mes projets
            </Link>
            <a
              href="mailto:pm@comesr.art"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#111111] rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Me contacter
            </a>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Servy_Come.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#111111]/25 text-[#111111] rounded-full font-semibold hover:scale-105 hover:border-[#111111]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Mon CV
            </motion.a>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 lg:col-span-2 bento-card bg-[#1c1c1c] border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#a78bfa]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="text-lg font-semibold text-white mb-4 relative z-10">Compétences</h3>
          <div className="flex flex-wrap gap-2 relative z-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white/8 text-[#e4e4e7] text-xs font-medium rounded-full border border-white/8 hover:bg-white/12 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 lg:col-span-2 bento-card bg-[#1c1c1c] border border-white/5 text-white flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#a78bfa]/8 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />

          <div className="flex justify-between items-start relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/15 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-[#a78bfa]" />
            </div>
            <a
              href="/Projet/Alternance/docker.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>

          <div className="relative z-10">
            <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 bg-[#a78bfa]/15 text-[#a78bfa] rounded-full text-xs font-medium">Docker</span>
              <span className="px-3 py-1 bg-white/8 text-[#e4e4e7] rounded-full text-xs font-medium">Portainer</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Infrastructure Docker</h3>
            <p className="text-[#a1a1aa] text-sm font-medium leading-relaxed">
              Déploiement d'une infrastructure conteneurisée avec Portainer, Wiki.js et Stirling-PDF.
            </p>
          </div>
        </motion.div>

        {/* Current Status Card */}
        <motion.div
          variants={fadeUp}
          className="bento-card bg-[#1c1c1c] border border-white/5 flex flex-col justify-center gap-5"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse-soft" />
            <span className="text-[#22c55e] font-semibold text-sm uppercase tracking-wider">En alternance</span>
          </div>
          <div>
            <p className="text-white font-semibold text-base leading-tight">Pôle Universitaire de Vichy</p>
            <p className="text-[#a1a1aa] text-sm font-medium mt-1">Technicien Informatique</p>
          </div>
          <div className="flex items-center gap-2 text-[#71717a] text-sm font-medium">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Jusqu'en Septembre 2026</span>
          </div>
          <div className="flex items-center gap-2 text-[#71717a] text-sm font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Vichy, France</span>
          </div>
        </motion.div>

        {/* Contact / Socials Card */}
        <motion.div
          variants={fadeUp}
          className="bento-card bg-[#f4f4f5] text-[#111111] flex flex-col justify-center items-center text-center"
        >
          <h3 className="text-xl font-bold mb-6">Discutons !</h3>
          <div className="flex gap-3">
            <a
              href="https://github.com/come-sr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 shadow-md"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/comesrv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#0a66c2] flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 shadow-md"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:pm@comesr.art"
              className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 shadow-md"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </motion.div>

        {/* DevOps Focus Card */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 lg:col-span-2 bento-card bg-[#1c1c1c] border border-white/5 text-white flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-[#c4f042]/8 rounded-full blur-3xl" />

          <div className="flex items-center gap-3 relative z-10">
            <div className="w-11 h-11 rounded-xl bg-[#c4f042]/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#c4f042]" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Objectif DevOps</h3>
              <p className="text-[#71717a] text-sm font-medium">En cours d'apprentissage</p>
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-[#a1a1aa] text-sm font-medium mb-4 leading-relaxed">
              J'oriente mon parcours vers le DevOps, alliant infrastructure et automatisation.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'Ansible', 'Terraform', 'CI/CD'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-[#c4f042]/10 text-[#c4f042] rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 lg:col-span-2 bento-card bg-[#1c1c1c] border border-white/5 flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">En quelques chiffres</h3>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '2 ans', label: "d'alternance" },
              { value: 'Bac+3', label: 'en cours' },
              { value: '9', label: 'projets réalisés' },
              { value: '3', label: 'certifications' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-[#71717a] font-medium text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ce que je fais Card */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 lg:col-span-2 bento-card bg-[#f4f4f5] text-[#111111] flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold mb-5">Ce que je fais</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <Monitor className="w-5 h-5 text-[#a78bfa]" />, title: 'Admin Sys', desc: 'Linux, Windows Server, virtualisation' },
              { icon: <Network className="w-5 h-5 text-[#3b82f6]" />, title: 'Réseau', desc: 'DNS, VPN, Téléphonie IP, switching' },
              { icon: <ShieldCheck className="w-5 h-5 text-[#22c55e]" />, title: 'Sécurité', desc: 'Firewall, RGPD, sécurisation réseau' },
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-2 p-4 rounded-xl bg-white shadow-sm">
                {item.icon}
                <span className="font-semibold text-sm">{item.title}</span>
                <span className="text-xs text-[#71717a] font-medium leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
