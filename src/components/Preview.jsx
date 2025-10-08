import React, { forwardRef } from "react";

const Preview = forwardRef(({ data }, ref) => {
  const toBullet = (text="") =>
    text.split(/\n+/).map(s => s.replace(/^\-\s?/,'').trim()).filter(Boolean);

  const skillsArr = data.skills
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <section className="preview-wrap">
      <div ref={ref} id="cv" className="preview a4">
        <div className="p-hd">
          <img
            className="avatar"
            alt="Foto"
            src={data.photo || ""}
            style={{ visibility: data.photo ? "visible" : "hidden" }}
          />
          <div>
            <div className="name">{data.name || "Nama Lengkap"}</div>
            <div className="title">{data.title || "Posisi/Jabatan"}</div>
            <div className="meta">
              <span>{data.email || "email@contoh.com"}</span> •{" "}
              <span>{data.phone || "+62 812 3456 7890"}</span> •{" "}
              <span>{data.location || "Kota, Negara"}</span> •{" "}
              {data.website ? (
                <a className="link" href={data.website} target="_blank" rel="noreferrer">
                  {data.website}
                </a>
              ) : (
                <span className="link">linkedin.com/in/anda</span>
              )}
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Ringkasan</h3>
          <div className="p-summary">
            {data.summary || "Tulis ringkasan profesional singkat Anda di sini."}
          </div>
        </div>

        <div className="right">
          <div>
            <div className="section">
              <h3>Pengalaman</h3>
              <div id="p_exp">
                {data.exps.length ? data.exps.map((e) => (
                  <div className="item" key={e.id}>
                    <div style={{ fontWeight:700, fontSize:13 }}>
                      {(e.role || "(Posisi)")} — {(e.company || "(Perusahaan)")}
                    </div>
                    <div style={{ fontSize:12, color:"#374151" }}>
                      {e.loc || ""} {e.period ? `• ${e.period}` : ""}
                    </div>
                    {toBullet(e.desc).length > 0 && (
                      <ul className="ul">
                        {toBullet(e.desc).map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                )) : <div className="small" style={{color:"#374151"}}>Tambahkan pengalaman Anda.</div>}
              </div>
            </div>

            <div className="section">
              <h3>Pendidikan</h3>
              <div id="p_edu">
                {data.edus.length ? data.edus.map((e) => (
                  <div className="item" key={e.id}>
                    <div style={{ fontWeight:700, fontSize:13 }}>{e.school || "(Institusi)"}</div>
                    <div style={{ fontSize:12, color:"#374151" }}>
                      {(e.major || "(Gelar/Jurusan)")} • {(e.period || "")} {e.loc ? `• ${e.loc}` : ""}
                    </div>
                  </div>
                )) : <div className="small" style={{color:"#374151"}}>Tambahkan pendidikan Anda.</div>}
              </div>
            </div>
          </div>

          <aside>
            <div className="section">
              <h3>Keahlian</h3>
              <div className="badges">
                {skillsArr.length
                  ? skillsArr.map((s, i) => <span className="badge" key={i}>{s}</span>)
                  : <span className="small" style={{color:"#374151"}}>Belum ada</span>}
              </div>
            </div>

            <div className="section">
              <h3>Proyek / Sertifikasi</h3>
              <div id="p_proj">
                {data.projs.length ? data.projs.map((p) => (
                  <div className="item" key={p.id}>
                    <div style={{ fontWeight:700, fontSize:13 }}>
                      {p.link
                        ? <a className="link" href={p.link} target="_blank" rel="noreferrer">{p.title || "(Judul)"}</a>
                        : (p.title || "(Judul)")}
                    </div>
                    <div style={{ fontSize:12, color:"#374151" }}>{p.desc || ""}</div>
                  </div>
                )) : <div className="small" style={{color:"#374151"}}>Opsional.</div>}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="actions" style={{ justifyContent:"center", marginTop:10 }}>
        <button className="btn primary" type="button" onClick={data.onPDF}>Download PDF</button>
      </div>
    </section>
  );
});

export default Preview;
