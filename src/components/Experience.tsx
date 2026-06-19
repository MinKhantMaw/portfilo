import { cvData } from '../data/cv';
import { motion } from 'motion/react';

export default function Experience() {
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

      <div className="space-y-12">
        {cvData.experience.map((job, idx) => (
          <div key={job.id} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[12.5rem] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="md:flex gap-16">
              {/* Timestamp & Company */}
              <div className="md:w-48 shrink-0 relative pt-1">
                {/* Timeline Dot */}
                 <div className="absolute left-[-2rem] md:left-[auto] md:-right-[2.5rem] top-1.5 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-slate-50 dark:ring-slate-950 z-10" />
                 
                 <p className="text-sm font-bold text-slate-400 mb-1">{job.duration}</p>
                 <p className="text-lg font-display font-bold text-slate-800 dark:text-slate-200 mb-1">{job.company}</p>
              </div>

              {/* Roles & Projects */}
              <div className="flex-1 mt-2 md:mt-0 pb-12">
                <h3 className="text-2xl font-display font-medium text-slate-900 dark:text-white mb-6">
                  {job.title}
                </h3>
                
                <div className="space-y-6">
                  {job.projects.map((project, pIdx) => (
                     <div key={pIdx} className="bg-white/50 dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow">
                       <strong className="text-lg font-bold text-slate-900 dark:text-white block mb-4">{project.name}</strong>
                       <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
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
