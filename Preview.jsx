// src/components/Preview.jsx
/* eslint-disable react/prop-types */
const t = {
  en: {
    summary: "SUMMARY",
    work: "WORK EXPERIENCE",
    org: "ORGANIZATION EXPERIENCE",
    present: "Present",
  },
  id: {
    summary: "RINGKASAN",
    work: "PENGALAMAN KERJA",
    org: "PENGALAMAN ORGANISASI",
    present: "Sekarang",
  },
};

function formatRange(start, end, lang = "en") {
  if (!start && !end) return "";
  const show = (d) =>
    d ? new Date(d).toLocaleString(lang === "id" ? "id-ID" : "en-US", { month: "short", year: "numeric" }) : "";
  const right = end ? show(end) : t[lang].present;
  return `${show(start)} – ${right}`;
}

function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h3 className="section-title">
        <span>{title}</span>
      </h3>
      {children}
    </section>
  );
}

export default function Preview({ value = {}, lang = "en" }) {
  const name = value?.profile?.name || "Your Name";
  const role = value?.profile?.role || "Your Title";
  const summary =
    value?.profile?.summary ||
    (lang === "id"
      ? "Tulis ringkasan singkat mengenai kemampuan dan pengalaman kamu."
      : "Write a short summary about your skills and experience.");

  const work = value?.work || []; // [{role, company, start, end, bullets:[...]}]
  const org = value?.organizations || []; // [{title, org, start, end, bullets:[...]}]

  return (
    <div className="preview">
      <div id="cv-root" className="cv a4">
        <header className="cv-header">
          <div>
            <div className="cv-name">{name}</div>
            <div className="cv-role">{role}</div>
          </div>
          {/* tempat kontak bila ada */}
          {/* <div className="cv-contacts">email | phone | link</div> */}
        </header>

        <Section title={t[lang].summary}>
          <p className="cv-text">{summary}</p>
        </Section>

        <Section title={t[lang].work}>
          {work.length === 0 ? (
            <p className="muted">{lang === "id" ? "Belum ada data." : "No data yet."}</p>
          ) : (
            work.map((w, i) => (
              <div className="item" key={i}>
                <div className="item-head">
                  <strong>
                    {w.role}
                    {w.company ? `, ${w.company}` : ""}
                  </strong>
                  <span className="item-dates">{formatRange(w.start, w.end, lang)}</span>
                </div>
                {Array.isArray(w.bullets) && w.bullets.length > 0 && (
                  <ul className="bullets">
                    {w.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </Section>

        <Section title={t[lang].org}>
          {org.length === 0 ? (
            <p className="muted">{lang === "id" ? "Belum ada data." : "No data yet."}</p>
          ) : (
            org.map((o, i) => (
              <div className="item" key={i}>
                <div className="item-head">
                  <strong>
                    {o.title}
                    {o.org ? `, ${o.org}` : ""}
                  </strong>
                  <span className="item-dates">{formatRange(o.start, o.end, lang)}</span>
                </div>
                {Array.isArray(o.bullets) && o.bullets.length > 0 && (
                  <ul className="bullets">
                    {o.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </Section>
      </div>
    </div>
  );
}
