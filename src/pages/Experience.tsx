import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../data/experiences';

const typeStyles = {
  Formation: {
    badge: 'bg-[#a78bfa]/15 text-[#a78bfa]',
    dot:   'bg-[#a78bfa]',
  },
  Alternance: {
    badge: 'bg-[#c4f042]/15 text-[#c4f042]',
    dot:   'bg-[#c4f042]',
  },
  Stage: {
    badge: 'bg-[#3b82f6]/15 text-[#3b82f6]',
    dot:   'bg-[#3b82f6]',
  },
};

export default function Experience() {
  useEffect(() => {
    document.title = 'Expériences';
  }, []);

  const ease = [0.16, 1, 0.3, 1];
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="px-6 max-w-4xl mx-auto">
      <motion.div initial="hidden" animate="visible" variants={stagger}>

        {/* Page header */}
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Expérience.
          </h1>
          <p className="text-lg text-[#71717a] font-medium max-w-xl mx-auto">
            Mon parcours professionnel et les compétences acquises sur le terrain.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/8" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const styles = typeStyles[exp.type];
              const isHighlighted = index === 0;

              // Card theming
              const cardBg    = isHighlighted ? 'bg-[#c4f042] text-[#111111]' : 'bg-[#1c1c1c] border border-white/5 text-white';
              const muted     = isHighlighted ? 'text-[#111111]/60' : 'text-[#a1a1aa]';
              const veryMuted = isHighlighted ? 'text-[#111111]/45' : 'text-[#71717a]';
              const skillTag  = isHighlighted
                ? 'bg-[#111111]/8 border border-[#111111]/10 text-[#111111]'
                : 'bg-white/5 border border-white/8 text-[#e4e4e7]';
              const typeBadge = isHighlighted
                ? 'bg-[#111111]/10 text-[#111111]'
                : styles.badge;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-7 w-3 h-3 rounded-full z-10 ring-4 ring-[#111111] transition-transform duration-300 group-hover:scale-125 ${styles.dot}`}
                  />

                  {/* Card — alternates sides on desktop */}
                  <div className={`
                    pl-12 md:pl-0 md:w-[calc(50%-2rem)]
                    ${index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'}
                  `}>
                    <div className={`bento-card ${cardBg}`}>

                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-lg font-bold leading-snug">{exp.title}</h3>
                        <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold ${typeBadge}`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium mb-1 ${muted}`}>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <div className={`flex items-center gap-1.5 text-sm font-medium mb-5 ${veryMuted}`}>
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        {exp.period}
                      </div>

                      {/* Description */}
                      <p className={`text-sm font-medium leading-relaxed mb-5 ${muted}`}>
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className={`px-2.5 py-1 rounded-full text-xs font-medium ${skillTag}`}>
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* External link */}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60 ${isHighlighted ? 'text-[#111111]' : 'text-white'}`}
                        >
                          Voir l'entreprise <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </motion.div>
    </section>
  );
}
