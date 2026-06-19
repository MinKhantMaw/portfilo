import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cvData } from '../data/cv';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 max-w-5xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shrink-0">
          MK
        </div>
        <span className="font-semibold tracking-tight text-slate-900 dark:text-white hidden sm:block">
          {cvData.personalInfo.name} <span className="text-slate-500 font-normal">/ Portfolio</span>
        </span>
      </div>
      
      <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a href="#about" className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-2 rounded-full font-bold transition-colors shadow-lg shadow-indigo-900/20 hidden sm:block">
          DOWNLOAD CV
        </a>

        <div className="md:hidden flex items-center">
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="p-1 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl mt-2 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#about" onClick={() => setIsOpen(false)} className="mt-2 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-3 rounded-xl font-bold transition-colors">
            DOWNLOAD CV
          </a>
        </div>
      )}
    </header>
  );
}
