"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { SkillIcon } from "@/components/ui/SkillIcon";

export default function Skills() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="">
      <div className="container max-w-screen-xl ">
    
         <div className="grid gap-6 lg:grid-cols-2">
           {t.skills.categories.map((category, index) => (
             <motion.div
               key={index}
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="rounded-2xl border border-primary/10 bg-card/80 backdrop-blur-sm p-6 hover:bg-card hover:shadow-md transition-all duration-300"
             >
               <h3 className="mb-4 text-lg font-bold text-center text-foreground/90">{category.name}</h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                  {category.items.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      variants={item}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-border/40 bg-background/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                    >
                      <div className="p-2 rounded-lg bg-background/80 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <SkillIcon name={skill} className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300 truncate">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
}
