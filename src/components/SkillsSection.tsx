import { motion } from 'framer-motion';
import { BookOpen, Code2, Layout, Search, Users, Monitor, FileText } from 'lucide-react';

const mainSkills = [
  { name: 'Scientific Research', level: 95, icon: Search },
  { name: 'Web Development', level: 90, icon: Code2 },
  { name: 'Portfolio Design', level: 88, icon: Layout },
  { name: 'Data Analysis', level: 82, icon: FileText },
];

const academicSkills = [
  { 
    name: 'Science (IPA)', 
    desc: 'Biology, Chemistry, Physics', 
    level: 85, 
    icon: BookOpen,
    color: 'from-blue-600 to-cyan-400' 
  },
  { 
    name: 'Social Science (IPS)', 
    desc: 'Sociology, History, Psychology', 
    level: 90, 
    icon: Users,
    color: 'from-blue-500 to-indigo-400'
  },
  { 
    name: 'IT & Digital', 
    desc: 'Web Dev, Programming, Tools', 
    level: 90, 
    icon: Monitor,
    color: 'from-cyan-500 to-blue-400'
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* KOTAK BESAR UTAMA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-[3rem] border transition-all duration-500 shadow-2xl overflow-hidden p-8 md:p-16
            bg-cyan-50/80 backdrop-blur-md border-cyan-200 hover:border-cyan-400/30
            dark:bg-[#112240]/70 dark:border-cyan-900/50 dark:hover:border-cyan-400/20"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-2 block transition-transform hover:scale-110 cursor-default">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic text-slate-900 dark:text-white mb-4">
              My Technical Ability
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
          </div>

          {/* GRID SKILL UTAMA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-white/60 dark:bg-[#0a192f] border border-cyan-100 dark:border-white/5 shadow-xl transition-all hover:border-cyan-400 group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-2xl transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                    <skill.icon className="h-8 w-8 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-cyan-600 dark:text-cyan-400 font-black italic group-hover:scale-110 transition-transform">{skill.level}%</span>
                </div>
                <h3 className="text-sm font-black text-slate-800 dark:text-white mb-6 uppercase tracking-widest">{skill.name}</h3>
                
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-[white/30] animate-[pulse_2s_infinite]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ACADEMIC SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-[2rem] bg-white/60 dark:bg-[#0a192f] border border-cyan-100 dark:border-white/5 shadow-lg transition-all hover:shadow-cyan-500/10 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg transition-transform group-hover:rotate-12`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black italic leading-none mb-1">{skill.name}</h4>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">{skill.desc}</p>
                  </div>
                </div>
                
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
                <div className="mt-2 text-right">
                  <span className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 italic">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}