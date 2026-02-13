# Ebru Toklu - Portfolio Website

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, çok dilli (Türkçe, İngilizce, Arapça, Rusça) desteğine sahip, kişisel bir portfolyo web sitesidir.

## 🚀 Teknolojiler

- **Framework:** [Next.js 16](https://nextjs.org/) (App Directory)
- **Dil:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animasyon:** [Framer Motion](https://www.framer.com/motion/)
- **Form & Captcha:** EmailJS & Cloudflare Turnstile
- **İkonlar:** Lucide React, React Icons

## ✨ Proje Özellikleri

- **🌍 Çoklu Dil Desteği:** 4 farklı dil seçeneği ile (TR, EN, AR, RU) global erişilebilirlik.
- **🌗 Tema Yönetimi:** Kullanıcı tercihine dayalı Aydınlık (Light) ve Karanlık (Dark) mod geçişleri.
- **⚡ Dinamik İçerik:** Tüm metinler ve veri yapıları `content.ts` üzerinden kolayca yönetilebilir.
- **✉️ İletişim Formu:** EmailJS entegrasyonu ile sunucusuz e-posta gönderimi ve **Cloudflare Turnstile** ile spam koruması.
- **📱 Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarda kusursuz çalışan esnek arayüz.
- **🎨 Modern UI/UX:** Özel fontlar (Rouge Script, Special Elite), cam efekti (Glassmorphism) ve yumuşak geçişler.
- **🔄 Animasyonlu Sidebar:** Profil fotoğrafı ve logo arasında geçiş yapabilen, sosyal medya bağlantılarını içeren etkileşimli yan menü.
- **📄 CV İndirme:** Seçili dile uygun özgeçmiş dosyasını (PDF) doğrudan indirme imkanı.

## 🛠️ Kurulum ve Çalıştırma Rehberi

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin.

### 1. Ön Hazırlık

Bilgisayarınızda [Node.js](https://nodejs.org/) (v20 veya üzeri önerilir) kurulu olmalıdır.

### 2. Projeyi Klonlayın

```bash
git clone https://github.com/eebrutoklu/portfolio.git
cd portfolio
```

### 3. Bağımlılıkları Yükleyin

```bash
npm install
# veya
yarn install
# veya
pnpm install
```

### 4. Çevre Değişkenlerini (.env) Ayarlayın

Projenin düzgün çalışması (özellikle iletişim formu) için bazı API anahtarlarına ihtiyacı vardır.

1.  Proje ana dizininde `.env.local.example` dosyasını bulun.
2.  Bu dosyanın adını `.env.local` olarak değiştirin veya kopyasını oluşturun.
3.  İçerisindeki değerleri kendi API anahtarlarınızla doldurun:

**EmailJS Ayarları:**
- [EmailJS](https://www.emailjs.com/) üzerinde bir hesap oluşturun.
- Bir "Email Service" ekleyin (örneğin Gmail). -> `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- Bir "Email Template" oluşturun. -> `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- Hesap ayarlarından Public Key'inizi alın. -> `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Cloudflare Turnstile Ayarları:**
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) üzerinden bir site oluşturun.
- Site Key'inizi alın. -> `NEXT_PUBLIC_TURNSTILE_SITE_KEY`

**.env.local Dosyası Örneği:**

```ini
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xyz123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_789publickey

# Turnstile Captcha
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAABBBCCCDDD
```

### 5. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızı açın ve [http://localhost:3000](http://localhost:3000) adresine gidin.

## 📦 Prodüksiyon İçin Derleme

Projeyi canlı ortama atmadan önce optimize edilmiş bir sürüm oluşturmak için:

```bash
npm run build
npm start
```

## 📂 Proje Yapısı

- `src/app`: Sayfa yapıları ve yönlendirmeler (Next.js App Router).
- `src/components`: Tekrar kullanılabilir UI bileşenleri (Button, Sidebar, Sections vb.).
- `src/context`: Global state yönetimi (Theme, Language).
- `src/data`: İçerik metinleri ve çeviriler (`content.ts`).
- `public`: Görseller ve statik dosyalar.

## 🤝 Katkıda Bulunma

1.  Bu projeyi forklayın.
2.  Yeni bir özellik dalı (feature branch) oluşturun (`git checkout -b ozellik/YeniOzellik`).
3.  Değişikliklerinizi commit yapın (`git commit -m 'Yeni özellik eklendi'`).
4.  Dalınızı push yapın (`git push origin ozellik/YeniOzellik`).
5.  Bir Pull Request oluşturun.

---

**Geliştirici:** Ebru Toklu
