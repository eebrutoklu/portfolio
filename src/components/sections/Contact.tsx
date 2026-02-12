import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { SuccessModal } from "../ui/SuccessModal";

export default function Contact() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!captchaToken) {
      alert(t.contact.captcha.verify);
      return;
    }
    
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      turnstileRef.current?.reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const mailtoLink = `mailto:eebrutoklu@outlook.com?subject=Contact from ${formData.name}&body=${formData.message}`;
      window.location.href = mailtoLink;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background rounded-2xl p-3 border border-border/50 shadow-sm">
       <div className="bg-background/50 backdrop-blur-sm mb-6">
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
            {t.contact.description}
          </p>
       </div>
       
       <form ref={formRef} className="space-y-4" onSubmit={handleSend}>
          {/* EmailJS default template uses 'name', 'email', 'message' and 'title' */}
          <input type="hidden" name="title" value="Portfolio Contact" />
          
          <div className="grid md:grid-cols-2 gap-4">
             <div className="space-y-1.5">
                <label className="text-xs font-medium">{t.contact.form.name}</label>
                <input 
                  type="text" 
                  name="name" // Matches state key
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all text-sm"
                  placeholder={t.contact.form.namePlaceholder}
                />
             </div>
             <div className="space-y-1.5">
                <label className="text-xs font-medium">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  name="email" // Matches state key
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all text-sm"
                  placeholder={t.contact.form.emailPlaceholder}
                />
             </div>
          </div>
          
          <div className="space-y-1.5">
             <label className="text-xs font-medium">{t.contact.form.message}</label>
             <textarea 
               name="message" // Matches state key
               value={formData.message}
               onChange={handleChange}
               required
               className="w-full p-2.5 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all min-h-[100px] text-sm resize-none"
               placeholder={t.contact.form.messagePlaceholder}
             ></textarea>
          </div>

          <Button type="submit" variant="outline" disabled={loading} className="w-full md:w-auto rounded-xl py-2 px-6 text-sm border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 text-primary transition-all duration-300 group">
             {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
             {loading ? (language === 'tr' ? 'Gönderiliyor...' : 'Sending...') : t.contact.send}
             {!loading && <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
          </Button>

          <div className="pt-2">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} // Testing key
              onSuccess={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              onError={() => setCaptchaToken(null)}
              options={{
                theme: theme === "dark" ? "dark" : "light",
                size: "normal",
              }}
            />
          </div>
       </form>

       <SuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          title={t.contact.modal.title}
          message={t.contact.modal.message}
          closeText={t.contact.modal.close}
       />
    </div>
  );
}
