import { cvData } from "../data/cv";
import { motion } from "motion/react";
import { Code, Server, Database, Cloud } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      label: "Frontend",
      desc: "Vue.js, React, Tailwind",
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500" />,
      label: "Backend",
      desc: "Laravel, PHP, REST APIs",
    },
    {
      icon: <Database className="w-6 h-6 text-pink-500" />,
      label: "Database",
      desc: "MySQL, Redis",
    },
    {
      icon: <Cloud className="w-6 h-6 text-emerald-500" />,
      label: "DevOps",
      desc: "Docker, AWS, CI/CD",
    },
  ];

  return (
    <motion.section
      id="about"
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-display font-bold">About Me</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h3 className="text-3xl font-display font-medium text-slate-800 dark:text-slate-200 leading-tight">
            I craft digital experiences with a focus on{" "}
            <span className="font-bold text-indigo-500">performance</span> and{" "}
            <span className="font-bold text-purple-500">scalability</span>.
          </h3>
          <div className="text-lg text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
            <p>{cvData.summary}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="p-6 rounded-3xl glass text-center">
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                3.5+
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Years Exp
              </p>
            </div>
            <div className="p-6 rounded-3xl glass text-center">
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                20+
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Projects
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800/60 hover:shadow-lg transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.label}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
