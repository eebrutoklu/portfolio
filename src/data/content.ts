export type Language = "tr" | "en" | "ar" | "ru";

export interface Content {
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  experience: {
    title: string;
    items: {
      role: string;
      company: string;
      date: string;
      description: string[];
    }[];
  };
  education: {
    title: string;
    items: {
      degree: string;
      school: string;
      date: string;
    }[];
  };
  skills: {
    title: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  portfolio: {
    title: string;
    projects: {
      title: string;
      description: string;
      image: string;
      size: "small" | "wide" | "tall" | "large";
      link?: string;
    }[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    location: string;
    send: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
    };
    modal: {
      title: string;
      message: string;
      close: string;
    };
    captcha: {
      verify: string;
      failed: string;
    };
    labels: {
      phone: string;
      email: string;
      location: string;
    };
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
    downloadCV: string;
  };
}

const commonData = {
  email: "eebrutoklu@outlook.com",
  phone: " ",
  location: "Antalya, Turkey",
  socials: {
    linkedin: "LinkedIn", // URL to be added
    github: "GitHub" // URL if available
  }
};

export const content: Record<Language, Content> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Portfolyo",
      contact: "İletişim",
      downloadCV: "Özgeçmiş İndir"
    },
    hero: {
      greeting: "Merhaba, Ben Ebru Toklu",
      role: "Frontend Geliştirici",
      description: "Modern web teknolojileri ve kullanıcı deneyimi üzerine odaklanan; JavaScript, TypeScript, React, Next.js, React Native ve Node.js konularında uzmanlaşmış bir yazılım geliştiriciyim.",
      cta: "İletişime Geç"
    },
    about: {
      title: "Hakkımda",
      description: "2017 yılında dijital dünyada iz bırakma hedefiyle başladığım yolculuğum, UI/UX tasarımıyla temellendi ve bugün İmecar bünyesinde Frontend Developer olarak devam ediyor. Elektrikli araç şarj istasyonları için yenilikçi, kullanıcı dostu ve yüksek performanslı arayüzler geliştiriyorum. React, Next.js, React Native ve TypeScript gibi modern teknolojileri kullanarak, sadece kod yazmıyor; kullanıcı deneyimini merkeze alan, ölçeklenebilir ve sürdürülebilir dijital çözümler üretiyorum. Problemleri çözmekten keyif alan, sürekli öğrenen ve teknolojiyi bir araçtan öte bir tutku olarak gören bir yazılımcıyım.",
      cards: [
        {
          title: "Web Geliştirme",
          description: "Next.js ve React kullanarak hızlı, responsive ve performanslı web uygulamaları geliştiriyorum."
        },
        {
          title: "Mobil Uygulama",
          description: "React Native ile iOS ve Android için çapraz platform mobil deneyimler oluşturuyorum."
        },
        {
          title: "UI/UX Tasarım",
          description: "Kullanıcı dostu, erişilebilir ve modern arayüzler tasarlıyorum."
        },
        {
          title: "Mentörlük",
          description: "Yeni geliştiricilere rehberlik ediyor ve bilgi paylaşımında bulunuyorum."
        }
      ]
    },
    experience: {
      title: "İş Deneyimi",
      items: [
        {
          role: "Frontend Developer",
          company: "İmecar",
          date: "Nisan 2024 – Günümüz",
          description: [
            "React, Next.js, TypeScript ve Vanilla JavaScript kullanarak elektrikli araç şarj istasyonları için mobil uyumlu, çapraz platform ve kullanıcı dostu arayüzler geliştirdim.",
            "Redis ve RESTful API entegrasyonları kullanarak veri yönetimi, görselleştirme ve raporlama özelliklerine sahip gelişmiş bir yönetici paneli oluşturdum ve bakımını sağladım.",
            "Sayfa yükleme sürelerini iyileştirmek ve kullanıcı deneyimini artırmak için Sunucu Taraflı Oluşturma (SSR), Statik Site Oluşturma (SSG) ve durum yönetimi tekniklerini uyguladım.",
            "Dinamik veri akışını ve global durumu yönetmek için Redux, Axios, Zustand, React Router, Context API ve React Hooks gibi modern kütüphaneler ve araçlar kullandım.",
            "CSS kullanarak özel UI bileşenleri ve ikonlar tasarladım; utility-first framework'ler ve tasarım sistemleri ile görsel tutarlılığı sağladım.",
            "Proje planlama, görev dağılımı ve ekip koordinasyonu süreçlerini başarıyla yürüterek, çevik (agile) bir ortamda zamanında ve ölçeklenebilir teslimatlar gerçekleştirdim.",
            "React Native kullanarak akıllı cihaz ve akıllı modül takip sistemleri ile elektrikli araç şarj istasyonu projelerinin geliştirilmesine katkıda bulundum.",
            "Electron.js ve Nextron kullanarak çapraz platform masaüstü uygulamaları geliştirdim ve paketledim, projeyi çevrimdışı destekle masaüstü ortamlarına taşıdım.",
            "Birim, entegrasyon ve uçtan uca (E2E) test süreçlerini yönettim; WebSocket ile gerçek zamanlı iletişim, PWA ve ödeme sistemleri (Stripe/Iyzico) gibi yeteneklerimdeki gelişmiş özellikleri projelere başarıyla entegre ettim."
          ]
        },
        {
          role: "React Native Developer",
          company: "Arabuleu",
          date: "Ocak 2023 – Haziran 2024",
          description: [
            "React Native kullanarak e-ticaret uygulaması dahil olmak üzere çapraz platform projeler geliştirdim.",
            "RESTful API entegrasyonlarını sağladım ve SQLite ile yerel veri depolama süreçlerini yönettim.",
            "Versiyon kontrolü için Git kullandım.",
            "Platforma özgü (iOS ve Android) hataları giderdim ve her iki platformda da uyumluluğu sağladim.",
            "Hem bağımsız olarak hem de işbirlikçi bir ekibin parçası olarak geliştirme görevlerine katkıda bulundum."
          ]
        },
        {
          role: "Frontend Developer",
          company: "Udemig",
          date: "Ocak 2020 – Aralık 2022",
          description: [
            "HTML ve CSS kullanarak kullanıcı arayüzleri (frontend) oluşturdum.",
            "Hem bağımsız olarak hem de takım ortamlarında birden fazla projede çalıştım.",
            "Versiyon kontrolü ve işbirliği için Git/GitHub kullandım.",
            "Geliştirme zorluklarının üstesinden gelmek ve etkili çözümler sunmak için problem çözme becerilerimi kullandım.",
            "Geri bildirimleri analiz ederek ve UI/UX iyileştirmeleri uygulayarak kullanıcı deneyimini geliştirdim.",
            "JavaScript, React, HTML, CSS ve çeşitli destekleyici kütüphanelerde yetkinlik kazandım."
          ]
        },
        {
          role: "Social Media Designer & Instructor",
          company: "Püyed Academy",
          date: "Ekim 2017 – Eylül 2020",
          description: [
            "HTML, CSS, Bootstrap ve JavaScript kullanarak resmi web sitesini ve sosyal medya platformlarını tasarladım ve yönettim.",
            "UI geliştirme, UX tasarımı üzerine çalıştım ve kullanılabilirlik testleri gerçekleştirdim.",
            "ÖSYM web sitesinin kullanılabilirliği ve tasarımı üzerine odaklanan akademik bir araştırma yürüttüm."
          ]
        }
      ]
    },
    portfolio: {
      title: "Portfolyo",
      projects: [
        {
          title: "OCPP Dashboard",
          description: "Elektrikli araç şarj istasyonlarının uzaktan yönetimi; anlık takip, başarılı şarj işlemleri, uzaktan başlatma/durdurma ve uygulamasız ödeme yöntemleri. (Next.js, Redux, Socket.io, TypeScript, Tailwind CSS)",
          image: "/portfolio/ocpp.png",
          size: "large"
        },
        {
          title: "Uygulamasız Ödeme Arayüzü",
          description: "POS cihazı, Stripe ve PayPal gibi yöntemlerle uygulama indirmeden hızlı ödeme ve şarj başlatma imkanı. (React, Context API, Stripe, TypeScript, Bootstrap)",
          image: "/portfolio/charger-1.png",
          size: "wide"
        },
        {
          title: "Konfigürasyon Sayfası",
          description: "Şarj istasyonlarının teknik yapılandırmaları için özelleştirilmiş, kullanıcı dostu konfigürasyon sayfası. (React, Zustand, Material UI, React Hook Form, TypeScript)",
          image: "/portfolio/configpage.png",
          size: "wide"
        },
        {
          title: "Çoklu Marka Şarj Arayüzleri",
          description: "Farklı elektrikli araç şarj istasyonu markaları için geliştirilmiş özelleştirilebilir arayüz tasarımları ve yönetim panelleri. (React, Redux, Redis, Sass/SCSS, TypeScript)",
          image: "/portfolio/evbee.webp",
          size: "small"
        },
        {
          title: "Şeker & Tansiyon Takip",
          description: "Girilen değerleri kaydetme, haftalık analizler ve yüzdelik değişim istatistikleri sunan, React Native ile geliştirilmiş sağlık takip uygulaması. (React Native, Expo, Expo Notifications, Victory Charts, TypeScript)",
          image: "/portfolio/health.png",
          size: "tall"
        },
        {
          title: "Namaz & İbadet Uygulaması",
          description: "Namaz ve oruç vakitleri, dualar, kıble bulucu ve sosyal medya için story oluşturma özellikleri içeren kapsamlı mobil rehber. (React Native, Expo, Context API, Location Services, TypeScript)",
          image: "/portfolio/prayer.png",
          size: "tall"
        },
        {
          title: "QR Menü",
          description: "Restoran ve kafeler için geliştirilmiş, hızlı ve estetik dijital menü çözümü. (Next.js, TanStack Query, Tailwind CSS, Framer Motion)",
          image: "/portfolio/qr-menu.png",
          size: "tall"
        },
        {
          title: "Çiçekli Web Sitesi",
          description: "E-ticaret odaklı, zarif ve kullanıcı deneyimi ön planda olan web sitesi tasarımı. (Next.js, Zustand, Framer Motion, TypeScript)",
          image: "/portfolio/flower.png",
          size: "small"
        }
      ]
    },
    education: {
      title: "Eğitim",
      items: [
        {
          degree: "Yüksek Lisans - Bilgisayar Bilimleri",
          school: "Uludağ Üniversitesi",
          date: "2019"
        },
        {
          degree: "Lisans - Bilgisayar Bilimleri Endüstri Teknolojisi",
          school: "Uludağ Üniversitesi",
          date: "2015"
        }
      ]
    },
    skills: {
      title: "Yetenekler",
      categories: [
        {
          name: "Yazılım & Geliştirme",
          items: [
            "JavaScript (ES6+)", "TypeScript", "React", "React Native", "Next.js",
            "Redux", "Zustand", "Context API",
            "TanStack Query (React Query)", "React Hook Form + Zod/Yup",
            "HTML5", "CSS3", "Sass/SCSS",
            "Framer Motion", "Material UI", "Bootstrap", "Tailwind CSS", "Shadcn",
            "Electron.js", "Nextron"
          ]
        },
        {
          name: "Araçlar & Diğer",
          items: [
            "Git", "GitHub", "Jira", "Trello", "Jenkins", "Docker", "OpenProject",
            "Figma", "Adobe Photoshop", "UI/UX & Design Tools",
            "Unit Test", "Integration Test", "End-to-End (E2E)",
            "WebSockets / Realtime (Socket.io)", "PWA (Service Workers)",
            "MVC, MVVM Design Patterns", "RESTful API Integration",
            "Performance Optimization",
            "Stripe", "Iyzico"
          ]
        }
      ]
    },
    contact: {
      title: "İletişim",
      email: commonData.email,
      phone: commonData.phone,
      location: commonData.location,
      send: "Gönder",
      description: "Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma fırsatlarını konuşmaya her zaman açığım.",
      form: {
        name: "İsim",
        email: "E-posta",
        message: "Mesaj",
        namePlaceholder: "Adınız",
        emailPlaceholder: "E-posta Adresiniz",
        messagePlaceholder: "Mesajınızı buraya yazın..."
      },
      modal: {
        title: "Mesaj Alındı!",
        message: "Mesajınız bana ulaştı. En kısa sürede size geri döneceğim.",
        close: "Kapat"
      },
      captcha: {
        verify: "Lütfen insan olduğunuzu doğrulayın.",
        failed: "Doğrulama başarısız oldu, lütfen tekrar deneyin."
      },
      labels: {
        phone: "Telefon",
        email: "E-posta",
        location: "Konum"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Portfolio",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    hero: {
      greeting: "Hello, I'm Ebru Toklu",
      role: "Frontend Developer",
      description: "I am a software developer specializing in JavaScript, TypeScript, React, Next.js, React Native, and Node.js, focusing on modern web technologies and user experience.",
      cta: "Get in Touch"
    },
    about: {
      title: "About Me",
      description: "My journey, which began in 2017 with the goal of making a mark in the digital world, was founded on UI/UX design and continues today as a Frontend Developer at Imecar. I develop innovative, user-friendly, and high-performance interfaces for electric vehicle charging stations. Using modern technologies such as React, Next.js, React Native, and TypeScript, I don't just write code; I create scalable and sustainable digital solutions centered around user experience. I am a software developer who enjoys solving problems, constantly learns, and sees technology as a passion rather than just a tool.",
      cards: [
        {
          title: "Web Development",
          description: "Building responsive and performant web applications using Next.js and React."
        },
        {
          title: "App Development",
          description: "Creating cross-platform mobile experiences with React Native."
        },
        {
          title: "UI/UX Design",
          description: "Designing intuitive and accessible user interfaces."
        },
        {
          title: "Mentorship",
          description: "Sharing knowledge and guiding new developers."
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Frontend Developer",
          company: "İmecar",
          date: "April 2024 – Present",
          description: [
            "Mobile-responsive, cross-platform, and user-friendly interfaces for electric vehicle charging stations were developed using React, Next.js, TypeScript, and Vanilla JavaScript.",
            "An advanced admin panel with data management, visualization, and reporting features was built and maintained using Redis and RESTful API integrations.",
            "Server-Side Rendering (SSR), Static Site Generation (SSG), and state management techniques were applied to improve page load times and enhance user experience.",
            "Modern libraries and tools such as Redux, Axios, Zustand, React Router, Context API, and React Hooks were used to manage dynamic data flow and global state.",
            "Custom UI components and icons were designed using CSS, and visual consistency was ensured through utility-first frameworks and design systems.",
            "Project planning, task distribution, and team coordination processes were successfully executed, resulting in timely and scalable deliveries in an agile environment.",
            "Contributed to the development of smart device and smart module tracking systems and EV charging station projects using React Native.",
            "Cross-platform desktop applications were developed and packaged using Electron.js and Nextron, extending the project to desktop environments with offline support.",
            "Managed Unit, Integration, and E2E testing processes; successfully integrated advanced features from my skill set such as real-time communication via WebSockets, PWA capabilities, and payment systems (Stripe/Iyzico)."
          ]
        },
        {
          role: "React Native Developer",
          company: "Arabuleu",
          date: "January 2023 – June 2024",
          description: [
            "Developed cross-platform projects using React Native, including an e-commerce application.",
            "Integrated RESTful APIs and managed local data storage with SQLite.",
            "Used Git for version control.",
            "Fixed platform-specific bugs and ensured compatibility with both iOS and Android.",
            "Contributed to development tasks both independently and as part of a collaborative team."
          ]
        },
        {
          role: "Frontend Developer",
          company: "Udemig",
          date: "January 2020 – December 2022",
          description: [
            "Built front-end interfaces using HTML and CSS.",
            "Worked on multiple projects both independently and in team settings.",
            "Used Git/GitHub for version control and collaboration.",
            "Applied problem-solving skills to overcome development challenges and deliver effective solutions.",
            "Improved user experience by analyzing feedback and implementing UI/UX enhancements.",
            "Gained proficiency in JavaScript, React, HTML, CSS, and various supporting libraries."
          ]
        },
        {
          role: "Social Media Designer & Instructor",
          company: "Püyed Academy",
          date: "October 2017 – September 2020",
          description: [
            "Designed and managed the official website and social media platforms using HTML, CSS, Bootstrap, and JavaScript.",
            "Worked on UI development, UX design, and conducted usability testing.",
            "Conducted academic research focusing on the usability and design of the ÖSYM (Student Selection and Placement Center) website."
          ]
        }
      ]
    },
    portfolio: {
      title: "Portfolio",
      projects: [
        {
          title: "OCPP Dashboard",
          description: "Remote management of EV charging stations; real-time tracking, successful charging sessions, remote start/stop, and direct payment methods. (Next.js, Redux, Socket.io, TypeScript, Tailwind CSS)",
          image: "/portfolio/ocpp.png",
          size: "large"
        },
        {
          title: "App-Free Payment Interface",
          description: "Enables fast payment and charging via POS devices, Stripe, and PayPal without downloading an app. (React, Context API, Stripe, TypeScript, Bootstrap)",
          image: "/portfolio/charger-1.png",
          size: "wide"
        },
        {
          title: "Config Page",
          description: "User-friendly configuration page customized for technical configurations of charging stations. (React, Zustand, Material UI, React Hook Form, TypeScript)",
          image: "/portfolio/configpage.png",
          size: "wide"
        },
        {
          title: "Multi-Brand Charging Interfaces",
          description: "Customized, high-performance interface designs and developments for various electric vehicle charging station brands. (React, Redux, Redis, Sass/SCSS, TypeScript)",
          image: "/portfolio/evbee.webp",
          size: "small"
        },
        {
          title: "Health Tracker (Sugar & BP)",
          description: "React Native health app featuring data entry, weekly analysis, and percentage change statistics. (React Native, Expo, Expo Notifications, Victory Charts, TypeScript)",
          image: "/portfolio/health.png",
          size: "tall"
        },
        {
          title: "Prayer & Worship App",
          description: "Comprehensive guide featuring prayer/fasting times, dhikr, Qibla finder, and social media story creation tools. (React Native, Expo, Context API, Location Services, TypeScript)",
          image: "/portfolio/prayer.png",
          size: "tall"
        },
        {
          title: "QR Menu",
          description: "Fast and aesthetic digital menu solution developed for restaurants and cafes. (Next.js, TanStack Query, Tailwind CSS, Framer Motion)",
          image: "/portfolio/qr-menu.png",
          size: "tall"
        },
        {
          title: "Flower Website",
          description: "E-commerce focused website design with a focus on elegance and user experience. (Next.js, Zustand, Framer Motion, TypeScript)",
          image: "/portfolio/flower.png",
          size: "small"
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Master’s Degree - Computer Science",
          school: "Uludağ University",
          date: "2019"
        },
        {
          degree: "Bachelor’s Degree - Computer Science Industry Technology",
          school: "Uludağ University",
          date: "2015"
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Development",
          items: [
            "JavaScript (ES6+)", "TypeScript", "React", "React Native", "Next.js",
            "Redux", "Zustand", "Context API",
            "TanStack Query (React Query)", "React Hook Form + Zod/Yup",
            "HTML5", "CSS3", "Sass/SCSS",
            "Framer Motion", "Material UI", "Bootstrap", "Tailwind CSS", "Shadcn",
            "Electron.js", "Nextron"
          ]
        },
        {
          name: "Tools & Others",
          items: [
            "Git", "GitHub", "Jira", "Trello", "Jenkins", "Docker", "OpenProject",
            "Figma", "Adobe Photoshop", "UI/UX & Design Tools",
            "Unit Test", "Integration Test", "End-to-End (E2E)",
            "WebSockets / Realtime (Socket.io)", "PWA (Service Workers)",
            "MVC, MVVM Design Patterns", "RESTful API Integration",
            "Performance Optimization",
            "Stripe", "Iyzico"
          ]
        }
      ]
    },
    contact: {
      title: "Contact",
      email: commonData.email,
      phone: commonData.phone,
      location: commonData.location,
      send: "Send Message",
      description: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Write your message here..."
      },
      modal: {
        title: "Message Received!",
        message: "Your message has reached me. I will get back to you as soon as possible.",
        close: "Close"
      },
      captcha: {
        verify: "Please verify you are human.",
        failed: "Verification failed, please try again."
      },
      labels: {
        phone: "Phone",
        email: "Email",
        location: "Location"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية"
    },
    hero: {
      greeting: "مرحباً، أنا إبرو توكلو",
      role: "مطورة واجهات أمامية",
      description: "أنا مطورة برمجيات متخصصة في تطوير الويب الحديث وتجربة المستخدم، ولدي خبرة متقدمة في JavaScript و TypeScript و React و Next.js و React Native و Node.js.",
      cta: "تواصل معي"
    },
    about: {
      title: "من أنا",
      description: "بدأت مسيرتي المهنية في عام 2017 بتصميم وسائل التواصل الاجتماعي، وتطورت إلى شغف بتطوير الواجهات الأمامية وبناء تطبيقات الويب الحديثة. أقوم بتصميم وتطوير واجهات سهلة الاستخدام باستخدام تقنيات مثل React و Next.js و React Native.",
      cards: [
        {
          title: "تطوير الويب",
          description: "بناء تطبيقات ويب سريعة وسريعة الاستجابة باستخدام Next.js و React."
        },
        {
          title: "تطوير التطبيقات",
          description: "إنشاء تجارب جوال متعددة المنصات لنظامي التشغيل iOS و Android باستخدام React Native."
        },
        {
          title: "تصميم واجهة المستخدم / تجربة المستخدم",
          description: "تصميم واجهات سهلة الاستخدام ويمكن الوصول إليها وحديثة."
        },
        {
          title: "التوجيه",
          description: "توجيه المطورين الجدد وتبادل المعرفة."
        }
      ]
    },
    experience: {
      title: "الخبرة العملية",
      items: [
        {
          role: "Frontend Developer",
          company: "İmecar",
          date: "أبريل 2024 - حتى الآن",
          description: [
            "تم تطوير واجهات مستخدم متجاوبة مع الأجهزة المحمولة ومتعددة المنصات وسهلة الاستخدام لمحطات شحن المركبات الكهربائية باستخدام React و Next.js و TypeScript و Vanilla JavaScript.",
            "تم بناء وصيانة لوحة تحكم متقدمة مع ميزات إدارة البيانات والتصور وإعداد التقارير باستخدام تكاملات Redis و RESTful API.",
            "تم تطبيق تقنيات العرض من جانب الخادم (SSR) وإنشاء الموقع الثابت (SSG) وإدارة الحالة لتحسين أوقات تحميل الصفحة وتعزيز تجربة المستخدم.",
            "تم استخدام المكتبات والأدوات الحديثة مثل Redux و Axios و Zustand و React Router و Context API و React Hooks لإدارة تدفق البيانات الديناميكي والحالة العامة.",
            "تم تصميم مكونات واجهة مستخدم مخصصة وأيقونات باستخدام CSS، وتم ضمان الاتساق المرئي من خلال أطر العمل التي تعطي الأولوية للأدوات وأنظمة التصميم.",
            "تم تنفيذ عمليات تخطيط المشروع وتوزيع المهام وتنسيق الفريق بنجاح، مما أدى إلى تسليمات في الوقت المناسب وقابلة للتطوير في بيئة رشيقة (agile).",
            "المساهمة في تطوير أنظمة تتبع الأجهزة الذكية والوحدات الذكية ومشاريع محطات شحن السيارات الكهربائية باستخدام React Native.",
            "تم تطوير تطبيقات سطح المكتب متعددة المنصات وتعبئتها باستخدام Electron.js و Nextron، مما وسع المشروع ليشمل بيئات سطح المكتب مع دعم العمل دون اتصال بالإنترنت.",
            "إدارة عمليات اختبار الوحدة والتكامل والاختبار من البداية إلى النهاية (E2E)؛ دمج الميزات المتقدمة من مجموعة مهاراتي بنجاح مثل الاتصال في الوقت الفعلي عبر WebSockets وقدرات PWA وأنظمة الدفع (Stripe/Iyzico)."
          ]
        },
        {
          role: "React Native Developer",
          company: "Arabuleu",
          date: "يناير 2023 – يونيو 2024",
          description: [
            "تطوير مشاريع متعددة المنصات باستخدام React Native، بما في ذلك تطبيق للتجارة الإلكترونية.",
            "دقم بدمج واجهات برمجة تطبيقات RESTful وإدارة تخزين البيانات المحلية باستخدام SQLite.",
            "استخدام Git للتحكم في الإصدار.",
            "إصلاح الأخطاء الخاصة بالمنصة وضمان التوافق مع كل من iOS و Android.",
            "المساهمة في مهام التطوير بشكل مستقل وكجزء من فريق تعاوني."
          ]
        },
        {
          role: "Frontend Developer",
          company: "Udemig",
          date: "يناير 2020 – ديسمبر 2022",
          description: [
            "بناء واجهات أمامية باستخدام HTML و CSS.",
            "العمل على مشاريع متعددة بشكل مستقل وفي إطار فريق.",
            "استخدام Git/GitHub للتحكم في الإصدار والتعاون.",
            "تطبيق مهارات حل المشكلات للتغلب على تحديات التطوير وتقديم حلول فعالة.",
            "تحسين تجربة المستخدم من خلال تحليل الملاحظات وتنفيذ تحسينات UI/UX.",
            "اكتساب الكفاءة في JavaScript و React و HTML و CSS ومكتبات داعمة مختلفة."
          ]
        },
        {
          role: "Social Media Designer & Instructor",
          company: "Püyed Academy",
          date: "أكتوبر 2017 – سبتمبر 2020",
          description: [
            "تصميم وإدارة الموقع الرسمي ومنصات التواصل الاجتماعي باستخدام HTML و CSS و Bootstrap و JavaScript.",
            "العمل على تطوير واجهة المستخدم وتصميم تجربة المستخدم وإجراء اختبارات قابلية الاستخدام.",
            "إجراء بحث أكاديمي يركز على قابلية الاستخدام وتصميم موقع ÖSYM (مركز اختيار وتنسيب الطلاب)."
          ]
        }
      ]
    },
    portfolio: {
      title: "المشاريع",
      projects: [
        {
          title: "لوحة تحكم OCPP",
          description: "إدارة محطات شحن المركبات الكهربائية عن بُعد؛ التتبع الفوري، عمليات الشحن الناجحة، البدء/الإيقاف عن بُعد، وطرق الدفع المباشرة. (Next.js, Redux, Socket.io, TypeScript, Tailwind CSS)",
          image: "/portfolio/ocpp.png",
          size: "large"
        },
        {
          title: "واجهة الدفع المباشر",
          description: "إمكانية الشحن والدفع السريع عبر أجهزة نقاط البيع و Stripe و PayPal دون الحاجة إلى تحميل تطبيق. (React, Context API, Stripe, TypeScript, Bootstrap)",
          image: "/portfolio/charger-1.png",
          size: "wide"
        },
        {
          title: "صفحة التكوين",
          description: "صفحة تكوين سهلة الاستخدام ومخصصة للتكوينات الفنية لمحطات الشحن. (React, Zustand, Material UI, React Hook Form, TypeScript)",
          image: "/portfolio/configpage.png",
          size: "wide"
        },
        {
          title: "محطات شحن Evbee",
          description: "واجهة إدارة شحن حديثة تم تصميمها وتطويرها لنظام Evbee البيئي. (React, Redux, Redis, Sass/SCSS, TypeScript)",
          image: "/portfolio/evbee.webp",
          size: "small"
        },
        {
          title: "تتبع السكر والضغط",
          description: "تطبيق صحي تم تطويره بـ React Native يتميز بإدخال البيانات والتحليلات الأسبوعية وإحصائيات التغيير بالنسبة المئوية. (React Native, Expo, Expo Notifications, Victory Charts, TypeScript)",
          image: "/portfolio/health.png",
          size: "tall"
        },
        {
          title: "تطبيق نماذ وعبادة",
          description: "دليل شامل يضم أوقات الصلاة والصيام، والأذكار، ومكتشف القبلة، وأدوات إنشاء القصص لوسائل التواصل الاجتماعي. (React Native, Expo, Context API, Location Services, TypeScript)",
          image: "/portfolio/prayer.png",
          size: "tall"
        },
        {
          title: "قائمة QR",
          description: "حل قائمة رقمية سريع وجمالي تم تطويره للمطاعم والمقاهي. (Next.js, TanStack Query, Tailwind CSS, Framer Motion)",
          image: "/portfolio/qr-menu.png",
          size: "tall"
        },
        {
          title: "موقع الزهور",
          description: "تصميم موقع إلكتروني يركز على التجارة الإلكترونية مع التركيز على الأناقة وتجربة المستخدم. (Next.js, Zustand, Framer Motion, TypeScript)",
          image: "/portfolio/flower.png",
          size: "small"
        }
      ]
    },
    education: {
      title: "التعليم",
      items: [
        {
          degree: "ماجستير - علوم الحاسوب",
          school: "جامعة أولوداغ",
          date: "2019"
        },
        {
          degree: "بكالوريوس - تكنولوجيا صناعة علوم الحاسوب",
          school: "جامعة أولوداغ",
          date: "2015"
        }
      ]
    },
    skills: {
      title: "المهارات",
      categories: [
        {
          name: "التطوير والبرمجة",
          items: [
            "JavaScript (ES6+)", "TypeScript", "React", "React Native", "Next.js",
            "Redux", "Zustand", "Context API",
            "TanStack Query (React Query)", "React Hook Form + Zod/Yup",
            "HTML5", "CSS3", "Sass/SCSS",
            "Framer Motion", "Material UI", "Bootstrap", "Tailwind CSS", "Shadcn",
            "Electron.js", "Nextron"
          ]
        },
        {
          name: "الأدوات والتطبيقات",
          items: [
            "Git", "GitHub", "Jira", "Trello", "Jenkins", "Docker", "OpenProject",
            "Figma", "Adobe Photoshop", "UI/UX & Design Tools",
            "Unit Test", "Integration Test", "End-to-End (E2E)",
            "WebSockets / Realtime (Socket.io)", "PWA (Service Workers)",
            "MVC, MVVM Design Patterns", "RESTful API Integration",
            "Performance Optimization",
            "Stripe", "Iyzico"
          ]
        }
      ]
    },
    contact: {
      title: "اتصل بي",
      email: commonData.email,
      phone: commonData.phone,
      location: commonData.location,
      send: "إرسال",
      description: "أنا دائمًا منفتح لمناقشة مشاريع جديدة أو أفكار إبداعية أو فرص لأكون جزءًا من رؤاكم.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "اكتب رسالتك هنا..."
      },
      modal: {
        title: "تم استلام الرسالة!",
        message: "لقد وصلت رسالتك. سأرد عليك في أقرب وقت ممكن.",
        close: "إغلاق"
      },
      captcha: {
        verify: "يرجى التحقق من أنك إنسان.",
        failed: "فشل التحقق، يرجى المحاولة مرة أخرى."
      },
      labels: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        location: "الموقع"
      }
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      experience: "Опыт",
      projects: "Проекты",
      contact: "Контакты",
      downloadCV: "Скачать резюме"
    },
    hero: {
      greeting: "Привет, я Эбру Токлу",
      role: "Frontend Разработчик",
      description: "Я разработчик программного обеспечения, специализирующийся на JavaScript, TypeScript, React, Next.js, React Native и Node.js, с фокусом на современные веб-технологии и пользовательский опыт.",
      cta: "Связаться"
    },
    about: {
      title: "Обо мне",
      description: "Моя карьера началась в 2017 году с дизайна социальных сетей и переросла в страсть к frontend-разработке и созданию современных веб-приложений. Я проектирую и разрабатываю удобные интерфейсы, используя такие технологии, как React, Next.js и React Native.",
      cards: [
        {
          title: "Веб-разработка",
          description: "Создание быстрых, адаптивных и производительных веб-приложений с использованием Next.js и React."
        },
        {
          title: "Разработка приложений",
          description: "Создание кроссплатформенных мобильных приложений для iOS и Android с помощью React Native."
        },
        {
          title: "UI/UX Дизайн",
          description: "Разработка удобных, доступных и современных интерфейсов."
        },
        {
          title: "Наставничество",
          description: "Наставничество новых разработчиков и обмен знаниями."
        }
      ]
    },
    experience: {
      title: "Опыт работы",
      items: [
        {
          role: "Frontend Developer",
          company: "İmecar",
          date: "Апрель 2024 – Настоящее время",
          description: [
            "Разработаны мобильно-адаптивные, кроссплатформенные и удобные интерфейсы для зарядных станций электромобилей с использованием React, Next.js, TypeScript и Vanilla JavaScript.",
            "Создана и поддерживается продвинутая панель администрирования с функциями управления данными, визуализации и отчетности с использованием интеграции Redis и RESTful API.",
            "Применены методы рендеринга на стороне сервера (SSR), генерации статических сайтов (SSG) и управления состоянием для улучшения времени загрузки страниц и повышения удобства использования.",
            "Использованы современные библиотеки и инструменты, такие как Redux, Axios, Zustand, React Router, Context API и React Hooks, для управления динамическим потоком данных и глобальным состоянием.",
            "Разработаны пользовательские компоненты UI и иконки с использованием CSS, обеспечена визуальная согласованность с помощью utility-first фреймворков и дизайн-систем.",
            "Успешно выполнены процессы планирования проектов, распределения задач и координации команды, что привело к своевременным и масштабируемым поставкам в гибкой среде (agile).",
            "Внесен вклад в разработку систем отслеживания умных устройств и модулей, а также проектов зарядных станций для электромобилей с использованием React Native.",
            "Разработаны и упакованы кроссплатформенные настольные приложения с использованием Electron.js и Nextron, расширяющие проект до настольных сред с поддержкой работы в автономном режиме.",
            "Управлял процессами модульного, интеграционного и E2E тестирования; успешно интегрировал передовые функции из моего набора навыков, такие как общение в реальном времени через WebSockets, возможности PWA и платежные системы (Stripe/Iyzico)."
          ]
        },
        {
          role: "React Native Developer",
          company: "Arabuleu",
          date: "Январь 2023 – Июнь 2024",
          description: [
            "Разработал кроссплатформенные проекты с использованием React Native, включая приложение для электронной коммерции.",
            "Интегрировал RESTful API и управлял локальным хранилищем данных с помощью SQLite.",
            "Использовал Git для контроля версий.",
            "Исправлял ошибки, специфичные для платформы, и обеспечивал совместимость как с iOS, так и с Android.",
            "Вносил вклад в задачи разработки как самостоятельно, так и в составе совместной команды."
          ]
        },
        {
          role: "Frontend Developer",
          company: "Udemig",
          date: "Январь 2020 – Декабрь 2022",
          description: [
            "Создавал интерфейсы (frontend) с использованием HTML и CSS.",
            "Работал над несколькими проектами как самостоятельно, так и в команде.",
            "Использовал Git/GitHub для контроля версий и совместной работы.",
            "Применял навыки решения проблем для преодоления трудностей разработки и предоставления эффективных решений.",
            "Улучшал пользовательский опыт, анализируя отзывы и внедряя улучшения UI/UX.",
            "Приобрел навыки работы с JavaScript, React, HTML, CSS и различными вспомогательными библиотеками."
          ]
        },
        {
          role: "Social Media Designer & Instructor",
          company: "Püyed Academy",
          date: "Октябрь 2017 – Сентябрь 2020",
          description: [
            "Разработал и управлял официальным веб-сайтом и платформами социальных сетей, используя HTML, CSS, Bootstrap и JavaScript.",
            "Работал над разработкой UI, дизайном UX и проводил тестирование юзабилити.",
            "Провел академическое исследование, посвященное юзабилити и дизайну веб-сайта ÖSYM (Центр отбора и размещения студентов)."
          ]
        }
      ]
    },
    portfolio: {
      title: "Портфолио",
      projects: [
        {
          title: "OCPP Панель управления",
          description: "Удаленное управление зарядными станциями; отслеживание в реальном времени, успешные сеансы зарядки, удаленный старт/стоп и прямые методы оплаты. (Next.js, Redux, Socket.io, TypeScript, Tailwind CSS)",
          image: "/portfolio/ocpp.png",
          size: "large"
        },
        {
          title: "Интерфейс прямой оплаты",
          description: "Возможность быстрой оплаты и зарядки через POS-терминалы, Stripe и PayPal без скачивания приложения. (React, Context API, Stripe, TypeScript, Bootstrap)",
          image: "/portfolio/charger-1.png",
          size: "wide"
        },
        {
          title: "Страница конфигурации",
          description: "Удобная страница конфигурации, адаптированная для технических настроек зарядных станций. (React, Zustand, Material UI, React Hook Form, TypeScript)",
          image: "/portfolio/configpage.png",
          size: "wide"
        },
        {
          title: "Зарядные станции Evbee",
          description: "Современный интерфейс управления зарядкой, разработанный для экосистемы Evbee. (React, Redux, Redis, Sass/SCSS, TypeScript)",
          image: "/portfolio/evbee.webp",
          size: "small"
        },
        {
          title: "Трекер здоровья (сахар и давление)",
          description: "Приложение на React Native с вводом данных, еженедельным анализом и статистикой изменений в процентах. (React Native, Expo, Expo Notifications, Victory Charts, TypeScript)",
          image: "/portfolio/health.png",
          size: "tall"
        },
        {
          title: "Приложение для молитв",
          description: "Комплексное руководство с временем молитв/поста, зикром, поиском Киблы и созданием историй для соцсетей. (React Native, Expo, Context API, Location Services, TypeScript)",
          image: "/portfolio/prayer.png",
          size: "tall"
        },
        {
          title: "QR Меню",
          description: "Быстрое и эстетичное решение для цифрового меню, разработанное для ресторанов и кафе. (Next.js, TanStack Query, Tailwind CSS, Framer Motion)",
          image: "/portfolio/qr-menu.png",
          size: "tall"
        },
        {
          title: "Сайт цветов",
          description: "Дизайн веб-сайта, ориентированный на электронную коммерцию, с акцентом на элегантность и пользовательский опыт. (Next.js, Zustand, Framer Motion, TypeScript)",
          image: "/portfolio/flower.png",
          size: "small"
        }
      ]
    },
    education: {
      title: "Образование",
      items: [
        {
          degree: "Магистр - Компьютерные науки (Master's Degree)",
          school: "Университет Улудаг",
          date: "2019"
        },
        {
          degree: "Бакалавр - Компьютерные науки и промышленные технологии",
          school: "Университет Улудаг",
          date: "2015"
        }
      ]
    },
    skills: {
      title: "Навыки",
      categories: [
        {
          name: "Разработка",
          items: [
            "JavaScript (ES6+)", "TypeScript", "React", "React Native", "Next.js",
            "Redux", "Zustand", "Context API",
            "TanStack Query (React Query)", "React Hook Form + Zod/Yup",
            "HTML5", "CSS3", "Sass/SCSS",
            "Framer Motion", "Material UI", "Bootstrap", "Tailwind CSS", "Shadcn",
            "Electron.js", "Nextron"
          ]
        },
        {
          name: "Инструменты",
          items: [
            "Git", "GitHub", "Jira", "Trello", "Jenkins", "Docker", "OpenProject",
            "Figma", "Adobe Photoshop", "UI/UX & Design Tools",
            "Unit Test", "Integration Test", "End-to-End (E2E)",
            "WebSockets / Realtime (Socket.io)", "PWA (Service Workers)",
            "MVC, MVVM Design Patterns", "RESTful API Integration",
            "Performance Optimization",
            "Stripe", "Iyzico"
          ]
        }
      ]
    },
    contact: {
      title: "Контакты",
      email: commonData.email,
      phone: commonData.phone,
      location: commonData.location,
      send: "Отправить",
      description: "Я всегда открыта для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.",
      form: {
        name: "Имя",
        email: "Email",
        message: "Сообщение",
        namePlaceholder: "Ваше имя",
        emailPlaceholder: "Ваш Email",
        messagePlaceholder: "Напишите ваше сообщение здесь..."
      },
      modal: {
        title: "Сообщение получено!",
        message: "Ваше сообщение дошло до меня. Я свяжусь с вами в ближайшее время.",
        close: "Закрыть"
      },
      captcha: {
        verify: "Пожалуйста, подтвердите, что вы человек.",
        failed: "Ошибка проверки, попробуйте еще раз."
      },
      labels: {
        phone: "Телефон",
        email: "Email",
        location: "Местоположение"
      }
    }
  }
};
