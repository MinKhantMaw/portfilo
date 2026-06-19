import { cvData } from '../data/cv';
import { motion } from 'motion/react';
import { Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-display font-bold">Featured Projects</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cvData.personalProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/60 rounded-[2rem] p-8 flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -8 }}
          >
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-medium tracking-widest text-slate-400">0{idx + 1}</span>
            </div>
            
            <h3 className="relative z-10 text-2xl font-display font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-indigo-500 transition-colors">
              {project.name}
            </h3>
            
            <p className="relative z-10 text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">
              {project.description}
            </p>
            
            <div className="relative z-10 flex gap-2 flex-wrap mb-8">
              {project.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="px-3 py-1.5 bg-indigo-50/80 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-bold border border-indigo-200/50 dark:border-indigo-500/20 shadow-sm transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="relative z-10 flex gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/60">
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
               >
                  <Github className="w-5 h-5 mr-2" />
                  View Source
               </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
