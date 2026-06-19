import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

export default function FloatingSocials() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/MinKhantMaw/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/minkhantmaw/",
    },
    // {
    //   name: 'Blog',
    //   icon: <Globe className="w-5 h-5" />,
    //   url: '#',
    // },
  ];

  return (
    <motion.div
      className="hidden xl:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {socials.map((social, idx) => (
        <motion.a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors hover:-translate-y-1 transform duration-200"
          aria-label={social.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
      <div className="w-px h-24 bg-slate-300 dark:bg-slate-700 mt-2" />
    </motion.div>
  );
}
