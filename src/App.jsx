import React, { useMemo, useState } from "react";
import Form from "./components/Form.jsx";
import Preview from "./components/Preview.jsx";
import { exportAsPDF } from "./pdf.js";

export default function App() {
  const [lang, setLang] = useState("en");

  const [data, setData] = useState({
    /* =====================================================
       PERSONAL INFORMATION — FICTIONAL DEMO DATA
    ===================================================== */

    fullName: "ALEX MORGAN",
    jobTitle: "Software Engineer",

    email: "alex.morgan@example.com",
    phone: "+62 812-0000-0000",
    location: "Bandung, Indonesia",

    links:
      "linkedin.com/in/alexmorgan-demo | alexmorgan.dev",

    summary:
      "Software Engineer with experience building responsive web applications, backend services, and modern digital products. Skilled in JavaScript, React, Python, REST APIs, databases, and collaborative software development.",


    /* =====================================================
       CUSTOM SECTION TITLES
    ===================================================== */

    sectionTitles: {
      education: "",
      work: "",
      skills: "",
      projects: "",
      organization: "",
    },


    /* =====================================================
       SHOW / HIDE SECTIONS
    ===================================================== */

    showSections: {
      education: true,
      work: true,
      skills: true,
      projects: true,
      organization: true,
    },


    /* =====================================================
       EDUCATION — FICTIONAL
    ===================================================== */

    education: [
      {
        school: "Westbridge Institute of Technology",
        location: "Bandung, Indonesia",
        period: "Aug 2021 – Jul 2025",

        degree:
          "Bachelor’s Degree in Computer Science GPA: 3.75/4.00 — Cum Laude",

        details: [
          "Relevant Coursework: Software Engineering, Data Structures and Algorithms, Database Systems, Web Development, Cloud Computing, Computer Networks, and Human-Computer Interaction.",
        ],
      },
    ],


    /* =====================================================
       WORK EXPERIENCE — FICTIONAL
    ===================================================== */

    work: [
      {
        company: "BrightLayer Technologies",
        location: "Jakarta, Indonesia",

        description:
          "A digital technology company providing software development, cloud solutions, and business application services.",

        entries: [
          {
            role: "Software Engineering Intern",
            period: "Jan 2025 – Jun 2025",

            bullets: [
              "Developed responsive web application features using React and integrated REST API services for internal business tools.",
              "Created reusable frontend components that improved consistency and maintainability across multiple application pages.",
              "Collaborated with developers and designers to test, troubleshoot, and refine application features before release.",
            ],
          },

          {
            role: "Junior Web Developer",
            period: "Jul 2024 – Dec 2024",

            bullets: [
              "Built and maintained responsive website interfaces using JavaScript, HTML, and CSS.",
              "Improved website usability by optimizing layouts for desktop, tablet, and mobile devices.",
              "Supported debugging, version control, and technical documentation using Git and GitHub.",
            ],
          },
        ],
      },

      {
        company: "PixelForge Creative Studio",
        location: "Bandung, Indonesia",

        description:
          "A creative technology studio focused on websites, digital products, and interactive user experiences.",

        entries: [
          {
            role: "Frontend Developer Trainee",
            period: "Feb 2024 – May 2024",

            bullets: [
              "Developed landing pages and interactive interface components for simulated client projects.",
              "Translated user interface designs into responsive web pages using modern CSS and JavaScript.",
              "Participated in peer code reviews and basic frontend performance testing.",
            ],
          },
        ],
      },
    ],


    /* =====================================================
       TECHNICAL SKILLS — DEMO DATA
    ===================================================== */

    skills: {
      technical: [
        "Programming Languages: JavaScript, Python, TypeScript, SQL",
        "Web Technologies & Frameworks: HTML, CSS, React.js, Node.js, Express.js, Vite, REST APIs",
        "Databases & Backend: PostgreSQL, MySQL, SQLite, FastAPI",
        "Development Tools: Git, GitHub, Docker, Postman, Figma, Visual Studio Code",
      ],

      certifications: [
        "CloudCore Academy — Cloud Computing Fundamentals, 2025",
        "CodeSpring Institute — Python Programming Essentials, 2025",
        "LinuxWorks Academy — Linux System Administration Fundamentals, 2024",
        "WebCraft Learning — Frontend Web Development Bootcamp, 2024",
      ],
    },


    /* =====================================================
       SELECTED TECHNICAL PROJECTS — FICTIONAL
    ===================================================== */

    projects: [
      {
        title:
          "HelpDesk Pro — IT Support Ticketing Dashboard",

        tech:
          "React, Node.js, Express.js, MySQL, REST API",

        period:
          "Feb – May 2025",

        bullets: [
          "Developed a web-based IT support ticketing dashboard for recording, tracking, and managing technical support requests.",
          "Implemented ticket status management, issue categorization, technician assignment, and searchable support history.",
          "Designed a responsive interface to provide a consistent user experience across desktop, tablet, and mobile devices.",
        ],
      },

      {
        title:
          "NetWatch — Network Monitoring Dashboard",

        tech:
          "Python, Flask, SQLite, HTML, CSS, JavaScript",

        period:
          "Sep – Dec 2024",

        bullets: [
          "Built a lightweight network monitoring dashboard for visualizing device availability and basic connectivity information.",
          "Implemented periodic device checks and status logging to identify unavailable or disconnected devices.",
          "Created a simple dashboard for displaying monitoring history and network health information.",
        ],
      },

      {
        title:
          "TaskFlow — Team Productivity Application",

        tech:
          "React, JavaScript, Vite, CSS, Local Storage",

        period:
          "Jun – Aug 2024",

        bullets: [
          "Developed a productivity application for managing tasks, priorities, deadlines, and project progress.",
          "Implemented dynamic filtering, reusable React components, and persistent browser-based data storage.",
        ],
      },
    ],


    /* =====================================================
       ORGANIZATION EXPERIENCE — FICTIONAL
    ===================================================== */

    organizations: [
      {
        organization:
          "TechNova Student Community",

        description:
          "A student-led technology community focused on software development, digital innovation, collaborative learning, and practical technology workshops.",

        entries: [
          {
            role:
              "Technology Program Staff",

            period:
              "Sep 2023 – Jun 2024",

            bullets: [
              "Supported the planning and execution of technology workshops, seminars, and collaborative learning activities for university students.",
              "Coordinated participant communication, event schedules, and technical preparation for community programs.",
            ],
          },

          {
            role:
              "Web Development Class Coordinator",

            period:
              "Jan – Apr 2024",

            bullets: [
              "Coordinated weekly web development sessions, mentor schedules, learning materials, and participant communication.",
              "Supported more than 80 participants throughout beginner-level frontend development activities.",
            ],
          },
        ],
      },

      {
        organization:
          "Digital Innovation Society",

        description:
          "A student organization encouraging creative problem-solving, technology-based projects, and interdisciplinary collaboration.",

        entries: [
          {
            role:
              "Program Coordinator",

            period:
              "Mar – Aug 2023",

            bullets: [
              "Assisted in organizing digital innovation activities, student project showcases, and technology discussions.",
              "Supported event documentation, participant registration, and internal team coordination.",
            ],
          },
        ],
      },
    ],
  });


  /* =====================================================
     LANGUAGE
  ===================================================== */

  const t = useMemo(
    () =>
      lang === "id"
        ? {
            pageTitle: "CV Instan – Generator PDF",
            download: "Unduh PDF",
            language: "Bahasa",

            education: "Pendidikan",
            workExp: "Pengalaman Kerja",

            skills:
              "Keahlian Teknis & Sertifikasi",

            projects:
              "Proyek Teknis Pilihan",

            orgExp:
              "Pengalaman Kepemimpinan & Organisasi",

            technicalSkills:
              "Keahlian Teknis:",

            certifications:
              "Sertifikasi & Pelatihan:",
          }
        : {
            pageTitle: "CV Instan – Generator PDF",
            download: "Download PDF",
            language: "Language",

            education: "Education",
            workExp: "Work Experience",

            skills:
              "Technical Skills & Certifications",

            projects:
              "Selected Technical Projects",

            orgExp:
              "Leadership & Organizational Experience",

            technicalSkills:
              "Technical Skills:",

            certifications:
              "Certifications & Training:",
          },
    [lang]
  );


  /* =====================================================
     PDF DOWNLOAD
  ===================================================== */

  const handleDownloadPDF = () => {
    const safeName =
      data.fullName
        ?.trim()
        .replace(/\s+/g, "_") ||
      "Resume";

    const fileName =
      `${safeName}_CV.pdf`;

    exportAsPDF(
      "#cv-root",
      fileName
    );
  };


  /* =====================================================
     PAGE
  ===================================================== */

  return (
    <div className="page">

      {/* ================= TOPBAR ================= */}

      <header className="topbar">
        <h1 className="brand">
          {t.pageTitle}
        </h1>

        <div className="right-controls">

          <label className="lang">
            {t.language}

            <select
              value={lang}
              onChange={(e) =>
                setLang(e.target.value)
              }
            >
              <option value="en">
                English
              </option>

              <option value="id">
                Indonesia
              </option>
            </select>
          </label>


          <button
            type="button"
            className="btn primary pill"
            onClick={handleDownloadPDF}
          >
            {t.download}
          </button>

        </div>
      </header>


      {/* ================= MAIN ================= */}

      <main className="layout">

        {/* FORM */}

        <section className="left">
          <Form
            data={data}
            onChange={setData}
            lang={lang}
            t={t}
          />
        </section>


        {/* PREVIEW */}

        <section className="right">

          <div className="preview-panel">

            <div className="preview-toolbar">

              <div>
                <strong>
                  Live CV Preview
                </strong>

                <span>
                  Updates automatically
                </span>
              </div>

              <span className="preview-badge">
                A4
              </span>

            </div>


            <div className="preview-scroll">

              <div
                id="cv-root"
                className="cv a4"
              >
                <div className="cv-inner">

                  <Preview
                    data={data}
                    t={t}
                  />

                </div>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}