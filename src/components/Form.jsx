import React from "react";
import BlockField from "./BlockField.jsx";

export default function Form({
  data,
  setData,
  addExp, addEdu, addProj,
  updateExp, updateEdu, updateProj,
  removeExp, removeEdu, removeProj,
  onPDF, onReset
}) {
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <section className="card">
      <div className="hd">Isi Data</div>
      <div className="bd">
        <div className="row">
          <div>
            <label>Nama Lengkap</label>
            <input value={data.name} onChange={set("name")} placeholder="Nama Anda" />
          </div>
          <div>
            <label>Jabatan/Posisi</label>
            <input value={data.title} onChange={set("title")} placeholder="Frontend Developer" />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Email</label>
            <input value={data.email} onChange={set("email")} placeholder="nama@email.com" />
          </div>
          <div>
            <label>Telepon</label>
            <input value={data.phone} onChange={set("phone")} placeholder="+62 812 3456 7890" />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Lokasi</label>
            <input value={data.location} onChange={set("location")} placeholder="Jakarta, Indonesia" />
          </div>
          <div>
            <label>Website/LinkedIn</label>
            <input value={data.website} onChange={set("website")} placeholder="linkedin.com/in/anda" />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Tanggal Lahir (opsional)</label>
            <input type="date" value={data.dob} onChange={set("dob")} />
          </div>
          <div>
            <label>Foto (URL) opsional</label>
            <input value={data.photo} onChange={set("photo")} placeholder="https://.../foto.jpg" />
          </div>
        </div>

        <label>Ringkasan/Profil Singkat</label>
        <textarea value={data.summary} onChange={set("summary")} placeholder="Profil profesional singkat, 2–3 kalimat" />

        <label>Keahlian (pisahkan dengan koma)</label>
        <input value={data.skills} onChange={set("skills")} placeholder="JavaScript, React, Tailwind" />

        <hr className="sep" />

        <div className="row">
          <div><strong>Pengalaman</strong></div>
          <div className="actions" style={{justifyContent:"end"}}>
            <button className="btn ghost" type="button" onClick={addExp}>+ Tambah Pengalaman</button>
          </div>
        </div>
        <div>
          {data.exps.map((x, i) => (
            <BlockField
              key={x.id}
              kind="exp"
              value={x}
              onChange={(val) => updateExp(i, val)}
              onRemove={() => removeExp(i)}
            />
          ))}
        </div>

        <hr className="sep" />

        <div className="row">
          <div><strong>Pendidikan</strong></div>
          <div className="actions" style={{justifyContent:"end"}}>
            <button className="btn ghost" type="button" onClick={addEdu}>+ Tambah Pendidikan</button>
          </div>
        </div>
        <div>
          {data.edus.map((x, i) => (
            <BlockField
              key={x.id}
              kind="edu"
              value={x}
              onChange={(val) => updateEdu(i, val)}
              onRemove={() => removeEdu(i)}
            />
          ))}
        </div>

        <hr className="sep" />

        <div className="row">
          <div><strong>Proyek / Sertifikasi (opsional)</strong></div>
          <div className="actions" style={{justifyContent:"end"}}>
            <button className="btn ghost" type="button" onClick={addProj}>+ Tambah Item</button>
          </div>
        </div>
        <div>
          {data.projs.map((x, i) => (
            <BlockField
              key={x.id}
              kind="proj"
              value={x}
              onChange={(val) => updateProj(i, val)}
              onRemove={() => removeProj(i)}
            />
          ))}
        </div>

        <div className="actions">
          <button className="btn primary" type="button" onClick={onPDF}>Download PDF</button>
          <button className="btn bad" type="button" onClick={onReset}>Reset Form</button>
        </div>
        <p className="small">Tip: semua perubahan langsung tampil pada pratinjau di kanan.</p>
      </div>
    </section>
  );
}
