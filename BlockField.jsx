import React from "react";

export default function BlockField({ kind, value, onChange, onRemove }) {
  // kind: "exp" | "edu" | "proj"
  const set = (k) => (e) => onChange({ ...value, [k]: e.target.value });

  return (
    <div className="card block">
      <div className="bd">
        {kind === "exp" && (
          <>
            <div className="row">
              <div>
                <label>Perusahaan</label>
                <input value={value.company || ""} onChange={set("company")} placeholder="Nama Perusahaan" />
              </div>
              <div>
                <label>Posisi</label>
                <input value={value.role || ""} onChange={set("role")} placeholder="Jabatan" />
              </div>
            </div>
            <div className="row">
              <div>
                <label>Lokasi</label>
                <input value={value.loc || ""} onChange={set("loc")} placeholder="Kota, Negara" />
              </div>
              <div>
                <label>Periode</label>
                <input value={value.period || ""} onChange={set("period")} placeholder="Jan 2024 – Present" />
              </div>
            </div>
            <label>Deskripsi (poin per baris)</label>
            <textarea value={value.desc || ""} onChange={set("desc")} placeholder="- Mencapai X&#10;- Mengelola Y" />
          </>
        )}

        {kind === "edu" && (
          <>
            <div className="row">
              <div>
                <label>Institusi</label>
                <input value={value.school || ""} onChange={set("school")} placeholder="Nama Kampus/Sekolah" />
              </div>
              <div>
                <label>Gelar/Jurusan</label>
                <input value={value.major || ""} onChange={set("major")} placeholder="S1 Informatika" />
              </div>
            </div>
            <div className="row">
              <div>
                <label>Periode</label>
                <input value={value.period || ""} onChange={set("period")} placeholder="2022 – Present" />
              </div>
              <div>
                <label>Lokasi</label>
                <input value={value.loc || ""} onChange={set("loc")} placeholder="Kota" />
              </div>
            </div>
          </>
        )}

        {kind === "proj" && (
          <>
            <div className="row">
              <div>
                <label>Nama</label>
                <input value={value.title || ""} onChange={set("title")} placeholder="Nama Proyek / Sertifikasi" />
              </div>
              <div>
                <label>Tautan (opsional)</label>
                <input value={value.link || ""} onChange={set("link")} placeholder="https://..." />
              </div>
            </div>
            <label>Deskripsi singkat</label>
            <textarea value={value.desc || ""} onChange={set("desc")} placeholder="Ringkas dan jelas" />
          </>
        )}

        <div className="actions">
          <button type="button" className="btn bad" onClick={onRemove}>Hapus</button>
        </div>
      </div>
    </div>
  );
}
