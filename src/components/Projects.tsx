import { useState, useEffect } from 'react';
import { cvData } from '../data/cv';
import { motion, AnimatePresence } from 'motion/react';
import { Github, FolderGit2, Eye, X, CheckCircle2 } from 'lucide-react';

type Project = typeof cvData.personalProjects[0];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <motion.section 
      id="projects" 
      className="scroll-mt-32 relative"
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
            whileHover={{ y: -8, scale: 1.02 }}
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
            
            <p className="relative z-10 text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1 line-clamp-3">
              {project.description}
            </p>
            
            <div className="relative z-10 flex gap-2 flex-wrap mb-8">
              {project.technologies.slice(0, 4).map((tech, tIdx) => (
                <span key={tIdx} className="px-3 py-1.5 bg-indigo-50/80 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-bold border border-indigo-200/50 dark:border-indigo-500/20 shadow-sm transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div className="relative z-10 flex gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/60 items-center justify-between mt-auto">
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
               >
                  <Github className="w-5 h-5 mr-2" />
                  View Source
               </a>

               <button 
                 onClick={() => setActiveProject(project)}
                 className="md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-sm rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-500/20 shadow-sm"
               >
                 <Eye className="w-4 h-4 mr-2" /> Quick View
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl z-[101] border border-slate-100 dark:border-slate-800"
            >
              <div className="sticky top-0 right-0 flex justify-end p-4 z-10 mix-blend-difference pointer-events-none">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors pointer-events-auto"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {activeProject.screenshots && activeProject.screenshots.length > 0 && (
                <div className="w-full h-[300px] sm:h-[400px] relative -mt-16">
                  <img 
                    src={activeProject.screenshots[0]} 
                    alt={activeProject.name} 
                    className="w-full h-full object-cover rounded-t-[2rem]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
                </div>
              )}

              <div className={`p-8 sm:p-12 ${(!activeProject.screenshots || activeProject.screenshots.length === 0) ? 'pt-16' : '-mt-24 relative z-10'}`}>
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-500 shadow-xl border border-slate-100 dark:border-slate-700">
                    <FolderGit2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-1">
                      {activeProject.name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <a 
                        href={activeProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        View Source
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                  <div className="lg:col-span-2 space-y-8">
                    <section>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Overview</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {activeProject.description}
                      </p>
                    </section>

                    {activeProject.features && (
                      <section>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Core Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeProject.features.split(', ').map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                              <span className="text-slate-600 dark:text-slate-400 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {activeProject.responsibilities && (
                      <section>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">My Role</h4>
                        <ul className="space-y-3">
                          {activeProject.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-2" />
                              <span className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}
                    
                    {activeProject.screenshots && activeProject.screenshots.length > 1 && (
                      <section>
                         <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Gallery</h4>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {activeProject.screenshots.slice(1).map((src, i) => (
                             <img 
                               key={i}
                               src={src} 
                               alt="Project screenshot" 
                               className="w-full h-48 object-cover rounded-2xl border border-slate-200 dark:border-slate-800"
                               referrerPolicy="no-referrer"
                             />
                           ))}
                         </div>
                      </section>
                    )}
                  </div>

                  <div className="space-y-8">
                    <section className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/60">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
