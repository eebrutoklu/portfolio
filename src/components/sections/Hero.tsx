"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypewriterRole } from "@/components/ui/typewriter-effect";

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="flex flex-col items-center justify-center py-6 md:py-12 text-center max-w-3xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="flex flex-col items-center"
        >
          <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-4xl xl:text-5xl mb-3">
            {t.hero.greeting} <br />
            <span className="text-primary block h-[1.5em] min-h-[60px]">
              <TypewriterRole 
                words={[t.hero.role]} 
                className="text-primary"
              />
            </span>
          </h1>
          <p className="max-w-[600px] text-base text-muted-foreground sm:text-lg">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button size="lg" className="group" onClick={onContactClick}>
            {t.hero.cta}
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={language === "tr" ? "/cv/ebrutoklu-tr.pdf" : "/cv/ebrutoklu-en.pdf"} download="Ebru_Toklu_CV.pdf" target="_blank">
              {t.nav.downloadCV}
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 text-muted-foreground"
        >
           {/* Social Icons Placeholder */}
           <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6"/></a>
           <a href="#" className="hover:text-primary transition-colors"><Github className="h-6 w-6"/></a>
           <a href={`mailto:${t.contact.email}`} className="hover:text-primary transition-colors"><Mail className="h-6 w-6"/></a>
        </motion.div>
      </div>


    </section>
  );
}
