import { useRef } from 'react';
import { cvData } from '../data/cv';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.section 
      id="experience" 
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-display font-bold">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
      </div>

      <div className="relative space-y-12 pb-12" ref={containerRef}>
        {/* Continuous Timeline Track */}
        <div className="absolute left-0 md:left-48 top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 origin-top -translate-x-1/2" />
        
        {/* Scroll Linked Progress Line */}
        <motion.div 
          className="absolute left-0 md:left-48 top-2 bottom-0 w-[2px] bg-indigo-500 origin-top -translate-x-1/2"
          style={{ scaleY }}
        />

        {cvData.experience.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-0">
             {/* Timeline Dot */}
             <motion.div 
               className="absolute left-0 md:left-48 top-[10px] w-3 h-3 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-full z-10 -translate-x-1/2"
               initial={false}
               whileInView={{
                 borderColor: 'rgb(99, 102, 241)',
                 boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.1)',
               }}
               viewport={{ margin: "-50% 0px -50% 0px" }}
               transition={{ duration: 0.3 }}
             />

            <div className="md:flex">
              {/* Timestamp & Company */}
              <div className="md:w-48 shrink-0 pt-1 md:pr-10 md:text-right">
                 <p className="text-sm font-bold text-slate-400 mb-1">{job.duration}</p>
                 <p className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-1">{job.company}</p>
              </div>

              {/* Roles & Projects */}
              <div className="flex-1 mt-2 md:mt-0 pb-12 md:pl-10">
                <h3 className="text-2xl font-display font-medium text-slate-900 dark:text-white mb-6">
                  {job.title}
                </h3>
                
                <div className="space-y-6">
                  {job.projects.map((project, pIdx) => (
                     <div key={pIdx} className="bg-white/50 dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow group/card">
                       <strong className="text-lg font-bold text-slate-900 dark:text-white block mb-4 group-hover/card:text-indigo-500 transition-colors">{project.name}</strong>
                       <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-6 marker:text-indigo-500/50">
                         {project.responsibilities.map((resp, rIdx) => (
                           <li key={rIdx}>{resp}</li>
                         ))}
                       </ul>
                       <div className="flex flex-wrap gap-2">
                         {project.technologies.map((tech, tIdx) => (
                           <span key={tIdx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300">
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
