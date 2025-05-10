# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Here’s a complete README.md for your SoftSell landing page project, structured for professionalism and clarity:



# SoftSell – Software License Resale Landing Page

SoftSell is a fictional startup that helps users sell unused software licenses. This is a responsive, single-page React-based marketing website built as part of the Credex Web Development Internship assignment.

## ✨ Features

- Modern Hero Section with CTA
- Step-by-step “How It Works” section with icons
- “Why Choose Us” section with value points
- Customer Testimonials
- Responsive Contact/Lead Form with validation
- AI-powered chatbot (mocked with pre-defined responses)
- Mobile responsive layout
- Light/dark mode toggle
- Custom styling with Bootstrap and styled-components
- SEO-ready meta tags and favicon
- Deployed on Vercel

---

## 📁 Folder Structure
softsell-landing/
│
├── public/
│   ├── logo.png               # SoftSell logo
│   ├── screenshot.png         # Output image for README
│   └── favicon.ico            # (Optional)
│
├── src/
│   ├── assets/
│   │   └── icons/             # Icons used in HowItWorks & WhyChooseUs
│   │
│   ├── components/
│   │   ├── HeroSection.jsx     # Hero headline + CTA
│   │   ├── HowItWorks.jsx      # 3-step process with icons
│   │   ├── WhyChooseUs.jsx     # 3–4 value points with icons
│   │   ├── Testimonials.jsx    # Two dummy customer reviews
│   │   └── ContactForm.jsx     # Form with Name, Email, etc.
│   │
│   ├── App.jsx                 # Root page combining all components
│   ├── main.jsx                # Vite entry point
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.mdsoftsell-landing/
│
├── public/
│   ├── logo.png               # SoftSell logo
│
├── src/
│   ├── assets/
│   │   └── icons/             # Icons used in HowItWorks & WhyChooseUs
│   │
│   ├── components/
│   │   ├── HeroSection.jsx     # Hero headline + CTA
│   │   ├── HowItWorks.jsx      # 3-step process with icons
│   │   ├── WhyChooseUs.jsx     # 3–4 value points with icons
│   │   ├── Testimonials.jsx    # Two dummy customer reviews
│   │   └── ContactForm.jsx     # Form with Name, Email, etc.
│   │
│   ├── App.jsx                 # Root page combining all components
│   ├── main.jsx                # Vite entry point
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md


## ⚙️ Tech Stack

- **React.js + Vite**
- **Bootstrap 5**
- **styled-components**
- **react-simple-chatbot**
- **react-icons**


## 🛠️ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/YOUR_USERNAME/softsell-landing.git
cd softsell-landing

2. Install Dependencies



npm install --legacy-peer-deps

3. Start Development Server



npm run dev


🚀 Deployment

Deployed on Vercel

1. Push your code to GitHub:
git remote add origin https://github.com/YOUR_USERNAME/softsell-landing.git
git push -u origin main
2. Go to vercel.com
3. Import your GitHub project
4. Use Vite as framework
5. Set:
Build Command: vite build


⌛ Time Spent

Task	Time

Setup & Installation	20 mins
UI Design Implementation	3 hours
Chatbot Integration	1 hour
Testing & Deployment	40 mins
README & Polish	30 mins
Total	~6 hours

📩 Contact

Made with passion by Naga Lakshmi for the Credex Internship Assignment.
