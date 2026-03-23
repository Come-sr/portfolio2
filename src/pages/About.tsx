import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Award, BookOpen, Music, Server, Newspaper } from 'lucide-react';
import { certifications, education } from '../data/about';
//
import { 
  Download, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Music, 
  Server, 
  Newspaper,
  // Nouvelles icônes à ajouter :
  Box, 
  Sprout, 
  Cloud, 
  ShieldCheck 
} from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'À Propos';
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
      >
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            À Propos.
          </h1>
          <p className="text-xl text-[#a1a1aa] font-medium max-w-2xl mx-auto">
            Découvrez mon parcours, mes passions et ce qui me motive dans le domaine de l'informatique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio */}
          <motion.div variants={fadeUp} className="md:col-span-2 space-y-6">
            <div className="bento-card bg-[#1c1c1c] border border-white/5">
              <h2 className="text-3xl font-extrabold tracking-tight mb-6 text-white">
                Mon Parcours
              </h2>
              <div className="space-y-6 text-[#a1a1aa] font-medium leading-relaxed">
                <p>
                  Je suis actuellement en Bachelor 3 Administrateur d'Infrastructures
                  Sécurisées chez Hesias, en alternance au Pôle Universitaire de Vichy.
                </p>
                <p>
                  Depuis mon plus jeune âge, l'informatique me passionne. C'est cette passion
                  qui m'a conduit à me spécialiser en obtenant un bac professionnel en systèmes numériques, puis un
                  BTS SIO option SISR. Aujourd'hui, je m'oriente vers le DevOps, un domaine où je peux allier mes
                  compétences en infrastructure et mon goût pour l'automatisation.
                </p>
                <p>
                  Ce qui me caractérise : l'autonomie, la patience et une curiosité qui
                  s'étend au-delà de la tech. Lecture, plantes, maquettes Gunpla ou simplement écouter de la
                  musique.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c4f042] text-[#111111] rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
                >
                  <Download className="w-5 h-5" />
                  Télécharger mon CV
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="bento-card bg-[#1c1c1c] border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#a78bfa]/20 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#a78bfa]" />
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Formation</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-4 border-[#a78bfa]/30">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 rounded-full bg-[#a78bfa] border-4 border-[#1c1c1c]" />
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#a1a1aa] mb-3">
                      <span className="px-3 py-1 bg-white/5 rounded-full">{edu.school}</span>
                      <span>•</span>
                      <span className="text-[#a78bfa]">{edu.period}</span>
                    </div>
                    <p className="text-[#a1a1aa] font-medium">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Certifications */}
            <div className="bento-card bg-[#1c1c1c] border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">Certifications</h2>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-white font-bold mb-1">{cert.title}</span>
                    <span className="text-sm text-[#a1a1aa] font-medium">{cert.org} • <span className="text-[#3b82f6]">{cert.date}</span></span>
                  </li>
                ))}
              </ul>
            </div>
{/* Passions & Intérêts */}
            <div className="bento-card bg-[#f4f4f5] text-[#111111]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#111111]/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#111111]" />
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight">Passions & Intérêts</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* 1. Maquettes Gunpla (Nouveau - spécifique à ta bio) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm text-center">
                  <Box className="w-6 h-6 mb-2 text-[#ef4444]" />
                  <span className="text-xs font-bold">Maquettes Gunpla</span>
                </div>

                {/* 2. Auto-Hébergement (Nouveau - remplace Home Lab par un terme plus fort) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm text-center">
                  <Cloud className="w-6 h-6 mb-2 text-[#3b82f6]" />
                  <span className="text-xs font-bold">Auto-Hébergement</span>
                </div>

                {/* 3. Botanique & Plantes (Nouveau - mentionné dans ta bio) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm text-center">
                  <Sprout className="w-6 h-6 mb-2 text-[#22c55e]" />
                  <span className="text-xs font-bold">Botanique & Plantes</span>
                </div>

                {/* 4. Musique (Ancien - conservé) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm text-center">
                  <Music className="w-6 h-6 mb-2 text-[#ec4899]" />
                  <span className="text-xs font-bold">Musique</span>
                </div>

                {/* 5. Lecture et Curiosité (Ancien - conservé) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm text-center">
                  <BookOpen className="w-6 h-6 mb-2 text-[#6366f1]" />
                  <span className="text-xs font-bold">Lecture & Curiosité</span>
                </div>

                {/* 6. Sécurité Réseau (Nouveau - lié à ta certification Stormshield) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white shadow-sm text-center">
                  <ShieldCheck className="w-6 h-6 mb-2 text-[#f59e0b]" />
                  <span className="text-xs font-bold">Sécurité Réseau</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
