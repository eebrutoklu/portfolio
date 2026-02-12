"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Code, Layout, Smartphone, PenTool } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const icons = [Layout, Smartphone, PenTool, Code];

  return (
    <div className="space-y-4">
       <div className="bg-background/50 backdrop-blur-sm ">
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base p-2 md:p-4">
            {t.about.description}
          </p>
       </div>

       <div className="grid md:grid-cols-2 gap-4 py-2">
          {t.about.cards.map((card, index) => {
             const Icon = icons[index];
             const colors = [
               "bg-purple-50/50 border-purple-100 text-purple-950 dark:bg-purple-900/10 dark:border-purple-800 dark:text-purple-300",
               "bg-pink-50/50 border-pink-100 text-pink-950 dark:bg-pink-900/10 dark:border-pink-800 dark:text-pink-300",
               "bg-blue-50/50 border-blue-100 text-blue-950 dark:bg-blue-900/10 dark:border-blue-800 dark:text-blue-300",
               "bg-orange-50/50 border-orange-100 text-orange-950 dark:bg-orange-900/10 dark:border-orange-800 dark:text-orange-300"
             ];

             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center ${colors[index]}`} 
              >
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm dark:bg-background/20 shrink-0">
                       <Icon className="h-4 w-4" />
                    </div>
                    <h4 className="font-bold text-base">{card.title}</h4>
                 </div>
                 <p className="opacity-100 font-medium text-xs lg:text-sm leading-snug">{card.description}</p>
              </motion.div>
             );
          })}
       </div>
    </div>
  );
}
