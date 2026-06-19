import { useState } from 'react';
import { cvData } from '../data/cv';
import { motion, AnimatePresence } from 'motion/react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    { title: "Backend Development", skills: cvData.skills.backend, color: "from-indigo-500 to-blue-500", filterType: 'Backend' },
    { title: "Frontend & UI", skills: cvData.skills.frontend, color: "from-pink-500 to-rose-500", filterType: 'Frontend' },
    { title: "Cloud & DevOps", skills: cvData.skills.devops, color: "from-emerald-500 to-teal-500", filterType: 'Cloud' },
    { title: "Databases", skills: [...cvData.skills.database, ...cvData.skills.caching], color: "from-amber-500 to-orange-500", filterType: 'Backend' },
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Cloud'];

  const filteredCategories = categories.filter(cat => activeFilter === 'All' || cat.filterType === activeFilter);

  return (
    <motion.section 
      id="skills" 
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-4xl font-display font-bold">Technical Skills</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
        </div>
        
        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-2xl w-fit">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeFilter === filter 
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/60 overflow-hidden relative group"
              whileHover={{ y: -5 }}
            >
             <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
             <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-6 pl-4">{category.title}</h3>
             
             <div className="flex flex-wrap gap-3 pl-4">
               {category.skills.map((skill, skillIdx) => (
                 <span 
                   key={skillIdx} 
                   className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
                 >
                   {skill}
                 </span>
               ))}
             </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
