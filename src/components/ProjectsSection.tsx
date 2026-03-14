import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'The Digitalization Process of Manuscripts As Preservation And Salvage of Islamic Historical Information Sources In Aceh',
    description: 'A comprehensive research on the digitalization efforts of ancient manuscripts in Aceh as a vital step in preserving and salvaging Islamic historical information sources for future generations.',
    tags: ['Published Journal', 'Digital Preservation', 'Islamic History'],
    image: '/images/manuskrip.jpg',
    icon: <BookOpen className="h-6 w-6" />,
    link: 'https://journal.ar-raniry.ac.id/index.php/IJIHC/article/view/7509',
  },
  {
    title: 'ACEH DALAM KEBERAGAMAN: HARMONI DAN TOLERANSI SAAT ZIARAH KUBURAN MASSAL SIRON',
    description: 'A study on cultural harmony and religious tolerance during the tsunami mass grave pilgrimage at Siron, Aceh.',
    tags: ['Cultural Research', 'Tolerance', 'Aceh History'],
    image: '/images/siron.jpg',
    icon: <GraduationCap className="h-6 w-6" />,
    link: '#',
  },
  {
    title: 'Model Edukasi Qanun Jinayat Berbasis Media Digital: Peran Wilayatul Hisbah bagi Gen Z',
    description: 'Innovative research on digital education models to increase legal awareness of Qanun Jinayat among Gen Z in Aceh.',
    tags: ['Digital Education', 'Qanun Jinayat', 'Gen Z'],
    image: '/images/wh.jpg',
    icon: <ShieldCheck className="h-6 w-6" />,
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[3rem] border shadow-2xl overflow-hidden p-8 md:p-16
            bg-cyan-50/80 backdrop-blur-md border-cyan-200 transition-all duration-500
            dark:bg-[#112240]/75 dark:border-cyan-900/50 hover:border-cyan-400/30 group/main"
        >
          <div className="text-center mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-2 block transition-transform hover:scale-110 cursor-default">
              Scientific Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic text-slate-900 dark:text-white mb-4">
              Research & Publications
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full transition-all duration-700 group-hover/main:w-48" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group h-full">
                <div className="h-full flex flex-col rounded-[2.5rem] bg-white/80 dark:bg-[#0a192f] border border-cyan-100 dark:border-white/5 shadow-xl overflow-hidden transition-all duration-500 
                  hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(6,182,212,0.25)]">
                  
                  <div className="relative h-56 w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <div className="flex flex-wrap gap-2">
                         {project.tags.map((tag) => (
                           <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg">
                             {tag}
                           </span>
                         ))}
                       </div>
                    </div>

                    <div className="absolute top-4 right-4 p-2.5 bg-white/90 dark:bg-[#112240]/90 rounded-2xl shadow-lg text-cyan-600 dark:text-cyan-400 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-lg font-black italic text-slate-900 dark:text-white leading-tight mb-4 uppercase transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] font-bold text-cyan-600/70 dark:text-cyan-400/70 uppercase tracking-widest">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium italic mb-6 line-clamp-4">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-2xl border-cyan-500/50 text-cyan-600 dark:text-cyan-400 font-bold italic transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent active:scale-95 shadow-md"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Full Research
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}