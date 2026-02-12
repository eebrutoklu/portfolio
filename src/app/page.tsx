"use client";

import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import TopMenu from "@/components/layout/TopMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const { t } = useLanguage();
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Scroll content container to top
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="container mx-auto p-2 lg:p-4 min-h-[100dvh] lg:h-[100dvh] lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-4 lg:h-full">
        
        {/* Left Sidebar - Profile Information */}
        <Sidebar />

        {/* Right Content Area */}
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col gap-4 lg:h-full lg:overflow-hidden -mt-1.5"
        >
          {/* Top Menu (Floating) - Now controls tabs */}
          <TopMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          


          {/* Content Cards - Tabbed View */}
          <div ref={contentRef} className="flex-1 bg-card/80 backdrop-blur-xl p-2 sm:p-4 relative lg:overflow-y-auto hidden-scrollbar">
             
             <AnimatePresence mode="wait">
               {activeTab === "home" && (
                 <motion.div 
                   key="home"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                   <Hero onContactClick={() => setActiveTab("contact")} />
                 </motion.div>
               )}

               {activeTab === "about" && (
                 <motion.div 
                   key="about"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                   <h3 className="flex items-center text-3xl font-bold mb-6 gap-3 text-primary">
                     {t.about.title}
                     <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full ml-4 opacity-30"></div>
                   </h3>
                   <About />
                 </motion.div>
               )}

               {activeTab === "skills" && (
                 <motion.div 
                   key="skills"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                   <h3 className="flex items-center text-3xl font-bold mb-6 gap-3 text-primary">
                     {t.skills.title}
                     <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full ml-4 opacity-30"></div>
                   </h3>
                   <Skills />
                 </motion.div>
               )}

                {activeTab === "portfolio" && (
                  <motion.div 
                    key="portfolio"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="flex items-center text-3xl font-bold mb-6 gap-3 text-primary">
                      {t.portfolio.title}
                      <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full ml-4 opacity-30"></div>
                    </h3>
                    <Portfolio />
                  </motion.div>
                )}

                {activeTab === "resume" && (
                  <motion.div 
                    key="resume"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                     <h3 className="flex items-center text-3xl font-bold mb-6 gap-3 text-primary">
                      {t.experience.title}
                      <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full ml-4 opacity-30"></div>
                    </h3>
                    <Experience />
                  </motion.div>
                )}

               {activeTab === "contact" && (
                 <motion.div 
                   key="contact"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                 >
                    <h3 className="flex items-center text-3xl font-bold mb-6 gap-3 text-primary">
                     {t.contact.title}
                     <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full ml-4 opacity-30"></div>
                   </h3>
                   <Contact />
                 </motion.div>
               )}
             </AnimatePresence>

          </div>
          
          <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground">
                <div className="container">
                  © {new Date().getFullYear()} Ebru Toklu. All rights reserved.
                </div>
              </footer>
          

          

          

        </motion.main>
      </div>
    </div>
  );
}
