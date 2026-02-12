"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="container max-w-screen-xl">
      <div className="relative border-l border-primary/20 ml-4 md:ml-6 space-y-12 pb-8">
        {t.portfolio.projects.map((project, index) => (
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
            
            <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md group">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Compact Image */}
                <div className="w-full sm:w-28 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-border/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200`;
                    }}
                  />
                </div>

                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-3.3 w-3.3" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
