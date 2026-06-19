import { cvData } from '../data/cv';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="flex flex-col items-center text-center justify-center pt-24 pb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-slate-800 dark:text-slate-200 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for new opportunities in {cvData.personalInfo.location}
      </motion.div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 font-display overflow-hidden">
        <span className="block text-slate-900 dark:text-white">Software</span>
        <span className="block text-gradient">Engineer.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
        Hi, I'm {cvData.personalInfo.name}. I build enterprise web apps, robust APIs, and beautiful interfaces using modern architecture.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a 
          href="#projects" 
          className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-sm overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
        >
          Get in Touch
        </a>
      </div>
    </motion.section>
  );
}
