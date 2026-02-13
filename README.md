# Ebru Toklu - Portfolio Website

This project is a personal portfolio website developed using modern web technologies, featuring multi-language support (Turkish, English, Arabic, Russian).

## 🚀 Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) (App Directory)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Form & Captcha:** EmailJS & Cloudflare Turnstile
- **Icons:** Lucide React, React Icons

## ✨ Project Features

- **🌍 Multi-Language Support:** Global accessibility with 4 language options (TR, EN, AR, RU).
- **🌗 Theme Management:** User-preference based Light and Dark mode switching.
- **⚡ Dynamic Content:** All text and data structures are easily managed via `content.ts`.
- **✉️ Contact Form:** Serverless email sending with EmailJS integration and spam protection via **Cloudflare Turnstile**.
- **📱 Responsive Design:** Flexible interface that works flawlessly on mobile, tablet, and desktop devices.
- **🎨 Modern UI/UX:** Custom fonts (Rouge Script, Special Elite), Glassmorphism effects, and smooth transitions.
- **🔄 Animated Sidebar:** Interactive sidebar featuring a toggle between profile photo and logo, along with social media links.
- **📄 CV Download:** Direct download of the resume (PDF) in the selected language.

## 🛠️ Installation and Setup Guide

Follow these steps to run the project on your local machine.

### 1. Prerequisites

You must have [Node.js](https://nodejs.org/) (v20 or higher recommended) installed on your computer.

### 2. Clone the Project

```bash
git clone https://github.com/eebrutoklu/portfolio.git
cd portfolio
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 4. Configure Environment Variables (.env)

The project requires specific API keys to function correctly (especially the contact form).

1.  Find the `.env.local.example` file in the project root directory.
2.  Rename this file to `.env.local` or create a copy.
3.  Fill in the values with your own API keys:

**EmailJS Settings:**
- Create an account at [EmailJS](https://www.emailjs.com/).
- Add an "Email Service" (e.g., Gmail). -> `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- Create an "Email Template". -> `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- Get your Public Key from Account Settings. -> `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Cloudflare Turnstile Settings:**
- Create a site at [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/).
- Get your Site Key. -> `NEXT_PUBLIC_TURNSTILE_SITE_KEY`

**Example .env.local File:**

```ini
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xyz123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_789publickey

# Turnstile Captcha
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAABBBCCCDDD
```

### 5. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## ☁️ Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import your project into Vercel.
3.  **Important:** Add the environment variables (`NEXT_PUBLIC_EMAILJS_...`, etc.) in the Vercel Project Settings > Environment Variables section.
4.  Click **Deploy**. Vercel will automatically detect Next.js and build your project.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📂 Project Structure

- `src/app`: Page structures and routing (Next.js App Router).
- `src/components`: Reusable UI components (Button, Sidebar, Sections, etc.).
- `src/context`: Global state management (Theme, Language).
- `src/data`: Content text and translations (`content.ts`).
- `public`: Images and static files.

## 🤝 Contributing

1.  Fork this project.
2.  Create a new feature branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Create a Pull Request.

---

**Developer:** Ebru Toklu
