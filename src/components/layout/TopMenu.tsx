"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TopMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TopMenu({ activeTab, setActiveTab }: TopMenuProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }

    if (isLangMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.skills.title }, 
    { id: "resume", label: t.experience.title },
    { id: "portfolio", label: t.portfolio.title },
    { id: "contact", label: t.nav.contact },
  ];

  const languages = [
    { code: "tr", label: "TR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "ru", label: "RU" },
  ] as const;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 bg-background/80 backdrop-blur-xl p-3 rounded-[1.5rem] sticky top-0 md:top-2 z-40 shadow-md border border-border/60 dark:border-border/80 dark:shadow-md"
    >
       <nav className="flex flex-wrap gap-1 justify-center md:justify-start">
         {navItems.map((item) => (
           <button 
             key={item.id} 
             onClick={() => setActiveTab(item.id)}
             className={cn(
               "px-5 py-2.5 text-sm font-medium transition-all duration-300 relative",
               activeTab === item.id 
                 ? "text-primary font-bold" 
                 : "hover:text-primary text-muted-foreground"
             )}
           >
             {item.label}
             {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
             )}
           </button>
         ))}
       </nav>

       <div className="flex gap-2 relative">
           {/* Language Selector */}
           <div className="relative" ref={langMenuRef}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-10 h-10 bg-background/50 shadow-sm border border-border/50 hover:bg-primary/10 hover:text-primary font-bold text-xs"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                {/* Display active language code instead of Globe icon */}
                {language.toUpperCase()}
                <span className="sr-only">Language</span>
              </Button>

              {isLangMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-12 bg-popover border border-border/50 p-1.5 rounded-2xl shadow-xl flex flex-col gap-1 min-w-[4rem] z-50 backdrop-blur-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={cn(
                        "px-3 py-1.5 rounded-xl text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                        language === lang.code ? "bg-primary/10 text-primary font-bold" : "text-muted-foreground"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
           </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-background/50 shadow-sm border border-border/50 hover:bg-primary/10 hover:text-primary"
          >
             {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
             <span className="sr-only">Theme</span>
          </Button>
       </div>
       


    </motion.div>
  );
}
