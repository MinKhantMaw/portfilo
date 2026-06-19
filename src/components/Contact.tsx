import { cvData } from '../data/cv';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-display font-bold">Get In Touch</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
      </div>
      
      <div className="max-w-3xl mx-auto h-full">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2rem] p-8 md:p-12 flex flex-col text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="mb-12 relative z-10 text-center">
            <h3 className="text-3xl font-display font-bold mb-4">Let's build something beautiful together.</h3>
            <p className="text-indigo-100 text-lg">Currently available for new opportunities.</p>
          </div>
          
          <div className="space-y-8 flex-1 relative z-10 max-w-md mx-auto w-full">
            <a href={`mailto:${cvData.personalInfo.email}`} className="flex items-center group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">Email</p>
                <p className="font-medium text-lg">{cvData.personalInfo.email}</p>
              </div>
            </a>

            <a href={`tel:${cvData.personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">Phone</p>
                <p className="font-medium text-lg">{cvData.personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center group">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">Location</p>
                <p className="font-medium text-lg">{cvData.personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex gap-4 relative z-10 justify-center">
            <a href={`https://${cvData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-indigo-600 hover:-translate-y-1 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`https://${cvData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-indigo-600 hover:-translate-y-1 transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
