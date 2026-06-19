/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import FloatingSocials from './components/FloatingSocials';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col overflow-x-hidden">
      <Navbar />
      <FloatingSocials />
      <div className="w-full flex-col max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 space-y-32">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com/MinKhantMaw/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all hover:-translate-y-1" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/minkhantmaw/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all hover:-translate-y-1" aria-label="Personal Blog">
              <Globe className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-500">© {new Date().getFullYear()} Myo Khant Mon. All rights reserved.</p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
