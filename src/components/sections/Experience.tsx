"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t, dir } = useLanguage();

  return (
    <section id="experience" className="container max-w-screen-xl ">
      {/* Title removed to avoid duplication with tab label */ }

      <div className="relative border-l border-primary/20 ml-4 md:ml-6 space-y-12 pb-8">
        {t.experience.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col gap-2 rounded-lg border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <Briefcase className="h-3 w-3" />
                <span>{item.company}</span>
              </div>
              
              <ul className="mt-3 list-disc space-y-1 pl-4 text-muted-foreground text-sm">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
