# 📘 Afrik Hub INFORMATIK – Official Website

![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)  
![HTML5](https://img.shields.io/badge/HTML5-orange?style=flat&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-blue?style=flat&logo=css3&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=javascript&logoColor=white)

This repository contains the source code of the official website of **Afrik Hub INFORMATIK**, an IT company offering computer maintenance, software development, networking, hosting, import-export, and professional digital services.

The website is a **static HTML/CSS/JS project** deployed on **Vercel**, with support for **clean URLs** (example: `/services` instead of `/services.html`).

---

## 🚀 Features

- Responsive and modern UI  
- Smooth fade-in animations  
- Clean URL navigation (SEO-friendly)  
- Hero banners on each page  
- Service cards with professional layout  
- Contact page with CTA buttons  
- Deployed globally on Vercel CDN  

---

## 📁 Project Structure

/
├── index.html
├── about.html
├── services.html
├── contact.html
├── styles.css
├── scripts.js
├── vercel.json
└── /images

## 🔗 Clean URL Support (Vercel)

The `vercel.json` file enables clean URLs:

```json```
{
  "rewrites": [
    { "source": "/", "destination": "/index.html" },
    { "source": "/about", "destination": "/about.html" },
    { "source": "/services", "destination": "/services.html" },
    { "source": "/contact", "destination": "/contact.html" }
  ]
}

This ensures that visiting /services automatically loads services.html.

## 🛠️ Run Locally

# Clone the repository:

- git clone - https://github.com/gdac-dev/Afrik_Hub-site.git
- Open the project: cd Afrik_Hub-site
- Open index.html in your browser:
- Open index.html, Or drag and drop the file into your browser window.

## 🚀 Deploy to Vercel

You can deploy the project manually or using Vercel CLI.

- Using Vercel CLI
- npm install -g vercel
- vercel deploy


Ensure that vercel.json is included in your project root so Vercel can configure clean URLs.

## Manual Deployment

- Go to https://vercel.com
- Create a new project
- Import this GitHub repository

## Deploy

Vercel will auto-detect this as a static site.

🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## Vercel Hosting

📞 Company Information – Afrik Hub INFORMATIK

- Phone: +237 650 197 290
- Location: Douala, Cameroun
- RCCM: RC/DLN/2017/B/898
- NIU: M031718422860P

## 👨‍💻 Developer

Website built and maintained by Afrik Hub INFORMATIK.<br>
For any collaboration or website project, feel free to contact us.

## Live Demo
https://afrik-hub.vercel.app/
