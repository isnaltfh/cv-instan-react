import React, { useState, useMemo } from "react";
import Form from "./components/Form.jsx";
import Preview from "./components/Preview.jsx";
import { exportAsPDF } from "./pdf.js";

export default function App() {
  // Bahasa: 'id' | 'en'
  const [lang, setLang] = useState("en");

  // Data form (contoh field — bisa kamu tambah sendiri)
  const [data, setData] = useState({
    fullName: "Your Name",
    jobTitle: "Frontend Developer",
    email: "you@mail.com",
    phone: "+62 8xx-xxxx-xxxx",
    location: "Jakarta, Indonesia",  
    summary:
      "Passionate Frontend Developer with 3+ years of experience building responsive, user-centric web applications. Proficient in React.js, JavaScript (ES6+), and modern CSS frameworks. Proven ability to collaborate with design teams and deliver high-performance solutions.",
    // Work Experience (array)
    work: [
      {
        role: "Frontend Specialist / Tech Innovate Solutions",
        period: "Jan 2022 – Present",
        bullets: [
          "Developed and maintained core features for a high-traffic e-commerce platform using React and Redux, improving page load speed by 15%.",
          "Collaborated with UX/UI designers to translate wireframes into pixel-perfect, accessible (WCAG) user interfaces.", 
          "Implemented unit and integration tests using Jest/Enzyme to ensure code quality and reduce production bugs by 20%."
        ],
      },
      {
        role: "Junior Web Developer / Creative Digital Agency",
        period: "Jan 2021 – Dec 2021",
        bullets: [
          "Contributed to the development of 10+ client websites using HTML5, CSS3, and Vanilla JavaScript.",
          "Optimized website performance for mobile devices, achieving an average PageSpeed score improvement of 10 points.",
          "Assisted in code reviews and utilized Git for version control in a collaborative environment."
        ],
      },
    ],
    // Organization Experience (array)
    org: [
      {
        role: "UI/UX Lead & Mentor / Dev Community Jakarta",
        period: "Sep 2020 – Jun 2021",
        bullets: [
          "Led a team of 5 junior members in redesigning the community's official website, resulting in a 25% increase in user engagement.",
          "Conducted bi-weekly workshops on modern frontend best practices (e.g., component-based architecture and state management)."
        ],
      },
    ],
  });

  const t = useMemo(() => {
    if (lang === "id") {
      return {
        pageTitle: "CV Instan – Generator PDF",
        download: "Unduh PDF",
        language: "Bahasa",
        workExp: "PENGALAMAN KERJA",
        orgExp: "PENGALAMAN ORGANISASI",
        contact: "Kontak",
        summary: "RINGKASAN",
      };
    }
    return {
      pageTitle: "CV Instan – Generator PDF",
      download: "Download PDF",
      language: "Language",
      workExp: "WORK EXPERIENCE",
      orgExp: "ORGANIZATION EXPERIENCE",
      contact: "Contact",
      summary: "SUMMARY",
    };
  }, [lang]);

  return (
    <div className="page">
      <header className="topbar">
        <h1>{t.pageTitle}</h1>
        <div className="right-controls">
          <label className="lang">
            {t.language}:
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </label>
          <button
            className="btn primary pill"
            onClick={() => exportAsPDF("#cv-root", `${data.fullName}-CV.pdf`)}
          >
            {t.download}
          </button>
        </div>
      </header>

      <main className="layout">
        <section className="left">
          <Form data={data} onChange={setData} lang={lang} />
        </section>

        <section className="right">
          {/* Preview untuk cetak */}
          <Preview id="cv-root" data={data} lang={lang} t={t} />
        </section>
      </main>
    </div>
  );
}
