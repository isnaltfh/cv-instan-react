import React from "react";

export default function Form({ data, onChange, lang }) {
  const update = (key, val) => onChange({ ...data, [key]: val });

  const updateArray = (key, idx, value) => {
    const copy = data[key].slice();
    copy[idx] = value;
    onChange({ ...data, [key]: copy });
  };

  const addItem = (key, item) => onChange({ ...data, [key]: [...data[key], item] });

  const removeItem = (key, idx) => {
    const copy = data[key].slice();
    copy.splice(idx, 1);
    onChange({ ...data, [key]: copy });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="form-title">{lang === "id" ? "Formulir Data" : "Form Data"}</h3>

        <div className="grid-2">
          <div>
            <label>Full Name</label>
            <input
              value={data.fullName}
              onChange={(e) => update("fullName", e.target.value)}
            />
          </div>
          <div>
            <label>Job Title</label>
            <input
              value={data.jobTitle}
              onChange={(e) => update("jobTitle", e.target.value)}
            />
          </div>
        </div>

        <div className="grid-3">
          <div>
            <label>Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              value={data.location}
              onChange={(e) => update("location", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>Summary</label>
          <textarea
            rows={4}
            value={data.summary}
            onChange={(e) => update("summary", e.target.value)}
          />
        </div>

        <h4 className="subhead">{lang === "id" ? "Pengalaman Kerja" : "Work Experience"}</h4>
        {data.work.map((w, i) => (
          <div key={i} className="block">
            <div className="grid-2">
              <div>
                <label>Role / Company</label>
                <input
                  value={w.role}
                  onChange={(e) =>
                    updateArray(
                      "work",
                      i,
                      { ...w, role: e.target.value }
                    )
                  }
                />
              </div>
              <div>
                <label>Period</label>
                <input
                  value={w.period}
                  onChange={(e) =>
                    updateArray(
                      "work",
                      i,
                      { ...w, period: e.target.value }
                    )
                  }
                />
              </div>
            </div>
            <label>Bullets (one per line)</label>
            <textarea
              rows={3}
              value={w.bullets.join("\n")}
              onChange={(e) =>
                updateArray("work", i, {
                  ...w,
                  bullets: e.target.value.split("\n").filter(Boolean),
                })
              }
            />
            <button className="btn ghost" onClick={() => removeItem("work", i)}>
              {lang === "id" ? "Hapus" : "Remove"}
            </button>
          </div>
        ))}
        <button
          className="btn pill"
          onClick={() =>
            addItem("work", { role: "", period: "", bullets: [] })
          }
        >
          + {lang === "id" ? "Tambah Pekerjaan" : "Add Work"}
        </button>

        <h4 className="subhead" style={{ marginTop: 18 }}>
          {lang === "id" ? "Pengalaman Organisasi" : "Organization Experience"}
        </h4>
        {data.org.map((o, i) => (
          <div key={i} className="block">
            <div className="grid-2">
              <div>
                <label>Role / Organization</label>
                <input
                  value={o.role}
                  onChange={(e) =>
                    updateArray(
                      "org",
                      i,
                      { ...o, role: e.target.value }
                    )
                  }
                />
              </div>
              <div>
                <label>Period</label>
                <input
                  value={o.period}
                  onChange={(e) =>
                    updateArray(
                      "org",
                      i,
                      { ...o, period: e.target.value }
                    )
                  }
                />
              </div>
            </div>
            <label>Bullets (one per line)</label>
            <textarea
              rows={3}
              value={o.bullets.join("\n")}
              onChange={(e) =>
                updateArray("org", i, {
                  ...o,
                  bullets: e.target.value.split("\n").filter(Boolean),
                })
              }
            />
            <button className="btn ghost" onClick={() => removeItem("org", i)}>
              {lang === "id" ? "Hapus" : "Remove"}
            </button>
          </div>
        ))}
        <button
          className="btn pill"
          onClick={() => addItem("org", { role: "", period: "", bullets: [] })}
        >
          + {lang === "id" ? "Tambah Organisasi" : "Add Org"}
        </button>
      </div>
    </div>
  );
}
