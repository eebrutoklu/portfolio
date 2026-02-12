"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Smartphone, 
  RefreshCw,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [isReal, setIsReal] = useState(false);

  // Auto-switch every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsReal((prev) => !prev);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleImage = () => {
    setIsReal((prev) => !prev);
  };

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-[300px] lg:h-full bg-card rounded-3xl px-2 py-6 flex flex-col items-center text-center shadow-md dark:shadow-md border border-border/60 dark:border-border/80 overflow-y-auto hidden-scrollbar"
    >
      <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center gap-4 lg:gap-0 w-full mb-6">
        <div 
          className="relative w-24 h-24 lg:w-40 lg:h-40 lg:mb-4 rounded-full overflow-hidden bg-muted shrink-0 cursor-pointer group shadow-inner border-4 border-background dark:border-secondary/20 dark:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-shadow duration-300"
          onClick={toggleImage}
        >
           <AnimatePresence mode="wait">
             <motion.img
                key={isReal ? "real" : "anim"}
                src={isReal ? "/profile/et.png" : "/profile/animation-image.png"}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1, rotate: isReal ? -5 : 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: isReal ? 5 : -5 }}
                transition={{ duration: 0.6, ease: "backOut" }}
             />
           </AnimatePresence>
           
           {/* "E. T" Text Overlay when et.png is shown */}
           <AnimatePresence>
             {isReal && (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.3 }}
                 className="absolute inset-0 flex items-center justify-center z-10"
               >
                 <span 
                   className="text-4xl lg:text-5xl text-primary drop-shadow-md"
                   style={{ fontFamily: 'var(--font-rouge-script), cursive' }}
                 >
                   E. T
                 </span>
               </motion.div>
             )}
           </AnimatePresence>
           
           {/* Hover Hint */}
           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
              <div className="bg-black/40 p-2 rounded-full backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                 <RefreshCw className="h-4 w-4 text-white animate-spin-slow" />
              </div>
           </div>
        </div>

        <div className="flex flex-col items-end lg:items-center text-right lg:text-center flex-1">
          <div className="flex justify-end lg:justify-center w-full">
             <h1 
               className="text-5xl lg:text-5xl mb-2 text-primary tracking-wide"
               style={{ fontFamily: 'var(--font-rouge-script), cursive' }}
             >
              Ebru Toklu
            </h1>
          </div>
          <p className="text-primary mb-3 lg:mb-6 bg-blue-50 dark:bg-secondary/50 px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium shadow-sm border border-transparent dark:border-transparent">
            Frontend Developer
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 lg:gap-3">
            <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-8 w-8 lg:h-10 lg:w-10 text-primary hover:text-primary hover:bg-primary/10 rounded-lg">
                {/* X Icon */}
                <FaXTwitter className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="sr-only">X</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/eebrutoklu" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-8 w-8 lg:h-10 lg:w-10 text-primary hover:text-primary hover:bg-primary/10 rounded-lg">
                <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </a>
            <a href="https://www.github.com/eebrutoklu" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-8 w-8 lg:h-10 lg:w-10 text-primary hover:text-primary hover:bg-primary/10 rounded-lg">
                <Github className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>





      <div className="w-full space-y-4 bg-muted/30 p-4 rounded-2xl mb-6">
        <div className="flex items-center gap-4 text-left border-b border-border/50 pb-3 last:border-0 last:pb-0">
          <div className="p-2 bg-background shadow-sm rounded-lg text-primary">
            <Smartphone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="text-sm font-medium">{t.contact.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-left border-b border-border/50 pb-3 last:border-0 last:pb-0">
          <div className="p-2 bg-background shadow-sm rounded-lg text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium truncate" title={t.contact.email}>{t.contact.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-left border-b border-border/50 pb-3 last:border-0 last:pb-0">
          <div className="p-2 bg-background shadow-sm rounded-lg text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm font-medium">{t.contact.location}</p>
          </div>
        </div>
      </div>

      <Button asChild variant="outline" className="w-3/4 rounded-2xl py-3 text-sm border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 text-primary transition-all duration-300">
        <a href={language === "tr" ? "/cv/ebrutoklu-tr.pdf" : "/cv/ebrutoklu-en.pdf"} download="Ebru_Toklu_CV.pdf" target="_blank">
          <Download className="mr-2 h-4 w-4" />
          {t.nav.downloadCV}
        </a>
      </Button>
    </motion.aside>
  );
}
