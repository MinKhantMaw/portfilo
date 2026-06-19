import { cvData } from '../data/cv';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle2, Globe2 } from 'lucide-react';

export default function Education() {
  return (
    <motion.section 
      id="education" 
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-display font-bold">Background</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-indigo-500 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <GraduationCap className="w-48 h-48" />
            </div>
            
            <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-200 mb-8 relative z-10">Education</h3>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-display font-bold leading-tight mb-2">{cvData.education.degree}</h4>
              <p className="text-indigo-100 font-medium mb-6">{cvData.education.institution}</p>
              <div className="inline-flex px-4 py-1.5 bg-indigo-500/50 backdrop-blur-md rounded-full text-sm font-bold shadow-sm">
                Class of {cvData.education.year}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/60">
            <div className="flex items-center gap-3 mb-6">
              <Globe2 className="w-5 h-5 text-indigo-500" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Languages</h3>
            </div>
            <div className="space-y-4">
              {cvData.languages.map((lang, idx) => (
                 <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800/60 last:border-0 last:pb-0">
                   <span className="font-medium text-slate-800 dark:text-slate-200">{lang.language}</span>
                   <span className="text-sm px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">{lang.proficiency}</span>
                 </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 rounded-[2rem] bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/60 h-full">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-indigo-500" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Key Achievements</h3>
          </div>
          
          <div className="space-y-6">
            {cvData.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed pt-1.5">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
