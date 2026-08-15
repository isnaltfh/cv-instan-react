import React from "react";

export default function BlockField({
  kind,
  value,
  onChange,
  onRemove,
  lang = "en",
}) {
  const text =
    lang === "id"
      ? {
          university: "Universitas / Institusi",
          degree: "Gelar / Program Studi",
          location: "Lokasi",
          period: "Periode",
          educationDetail: "Detail Pendidikan",
          addDetail: "Tambah Detail",

          company: "Nama Perusahaan",
          companyDescription: "Deskripsi Perusahaan",
          position: "Posisi / Role",
          addPosition: "Tambah Posisi",
          removePosition: "Hapus Posisi",

          project: "Nama Proyek",
          technologies: "Teknologi / Tech Stack",

          organization: "Nama Organisasi",
          organizationDescription: "Deskripsi Organisasi",
          addRole: "Tambah Posisi",

          bullets: "Pencapaian / Deskripsi",
          addBullet: "Tambah Bullet",

          remove: "Hapus",
          removeBlock: "Hapus Bagian",
        }
      : {
          university: "University / Institution",
          degree: "Degree / Program",
          location: "Location",
          period: "Period",
          educationDetail: "Education Detail",
          addDetail: "Add Detail",

          company: "Company Name",
          companyDescription: "Company Description",
          position: "Position / Role",
          addPosition: "Add Position",
          removePosition: "Remove Position",

          project: "Project Name",
          technologies: "Technologies / Tech Stack",

          organization: "Organization Name",
          organizationDescription: "Organization Description",
          addRole: "Add Role",

          bullets: "Achievements / Description",
          addBullet: "Add Bullet",

          remove: "Remove",
          removeBlock: "Remove Block",
        };

  // =====================================================
  // GENERAL FIELD UPDATE
  // =====================================================

  const setField = (field, newValue) => {
    onChange({
      ...value,
      [field]: newValue,
    });
  };

  // =====================================================
  // ARRAY HELPERS
  // =====================================================

  const updateArrayItem = (
    field,
    index,
    newValue
  ) => {
    const array = [...(value[field] || [])];

    array[index] = newValue;

    setField(field, array);
  };

  const addArrayItem = (field, newItem) => {
    setField(field, [
      ...(value[field] || []),
      newItem,
    ]);
  };

  const removeArrayItem = (field, index) => {
    setField(
      field,
      (value[field] || []).filter(
        (_, itemIndex) =>
          itemIndex !== index
      )
    );
  };

  // =====================================================
  // NESTED ENTRY HELPERS
  // Work / Organization
  // =====================================================

  const updateEntry = (
    entryIndex,
    field,
    newValue
  ) => {
    const entries = [
      ...(value.entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],
      [field]: newValue,
    };

    setField("entries", entries);
  };

  const addEntry = () => {
    setField("entries", [
      ...(value.entries || []),

      {
        role: "",
        period: "",
        bullets: [""],
      },
    ]);
  };

  const removeEntry = (entryIndex) => {
    setField(
      "entries",

      (value.entries || []).filter(
        (_, index) =>
          index !== entryIndex
      )
    );
  };

  // =====================================================
  // ENTRY BULLETS
  // =====================================================

  const updateEntryBullet = (
    entryIndex,
    bulletIndex,
    newValue
  ) => {
    const entries = [
      ...(value.entries || []),
    ];

    const bullets = [
      ...(entries[entryIndex]?.bullets ||
        []),
    ];

    bullets[bulletIndex] = newValue;

    entries[entryIndex] = {
      ...entries[entryIndex],
      bullets,
    };

    setField("entries", entries);
  };

  const addEntryBullet = (entryIndex) => {
    const entries = [
      ...(value.entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],

      bullets: [
        ...(entries[entryIndex]?.bullets ||
          []),
        "",
      ],
    };

    setField("entries", entries);
  };

  const removeEntryBullet = (
    entryIndex,
    bulletIndex
  ) => {
    const entries = [
      ...(value.entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],

      bullets: (
        entries[entryIndex]?.bullets ||
        []
      ).filter(
        (_, index) =>
          index !== bulletIndex
      ),
    };

    setField("entries", entries);
  };

  // =====================================================
  // PROJECT BULLETS
  // =====================================================

  const updateProjectBullet = (
    bulletIndex,
    newValue
  ) => {
    updateArrayItem(
      "bullets",
      bulletIndex,
      newValue
    );
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="block">
      {/* =================================================
          EDUCATION
      ================================================= */}

      {kind === "edu" && (
        <>
          <div className="grid-2">
            <div>
              <label>
                {text.university}
              </label>

              <input
                value={value.school || ""}
                placeholder="Universitas / University"
                onChange={(e) =>
                  setField(
                    "school",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label>
                {text.location}
              </label>

              <input
                value={
                  value.location || ""
                }
                placeholder="Jakarta, Indonesia"
                onChange={(e) =>
                  setField(
                    "location",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>
                {text.degree}
              </label>

              <input
                value={value.degree || ""}
                placeholder="Bachelor's Degree in Informatics Engineering"
                onChange={(e) =>
                  setField(
                    "degree",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label>
                {text.period}
              </label>

              <input
                value={value.period || ""}
                placeholder="Aug 2022 – Jul 2026"
                onChange={(e) =>
                  setField(
                    "period",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <label>
            {text.educationDetail}
          </label>

          {(value.details || []).map(
            (detail, index) => (
              <div
                className="bullet-editor"
                key={index}
              >
                <textarea
                  rows={2}
                  value={detail}
                  placeholder="Relevant Coursework: ..."
                  onChange={(e) =>
                    updateArrayItem(
                      "details",
                      index,
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className="remove-bullet-btn"
                  onClick={() =>
                    removeArrayItem(
                      "details",
                      index
                    )
                  }
                >
                  {text.remove}
                </button>
              </div>
            )
          )}

          <button
            type="button"
            className="add-bullet-btn"
            onClick={() =>
              addArrayItem(
                "details",
                ""
              )
            }
          >
            + {text.addDetail}
          </button>
        </>
      )}

      {/* =================================================
          WORK EXPERIENCE
      ================================================= */}

      {kind === "exp" && (
        <>
          <div className="grid-2">
            <div>
              <label>
                {text.company}
              </label>

              <input
                value={
                  value.company || ""
                }
                placeholder="PT PLN Nusantara Power"
                onChange={(e) =>
                  setField(
                    "company",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label>
                {text.location}
              </label>

              <input
                value={
                  value.location || ""
                }
                placeholder="Bekasi, Indonesia"
                onChange={(e) =>
                  setField(
                    "location",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <label>
            {text.companyDescription}
          </label>

          <textarea
            rows={3}
            value={
              value.description || ""
            }
            placeholder="Brief description of the company..."
            onChange={(e) =>
              setField(
                "description",
                e.target.value
              )
            }
          />

          {(value.entries || []).map(
            (entry, entryIndex) => (
              <div
                className="block"
                key={entryIndex}
              >
                <div className="grid-2">
                  <div>
                    <label>
                      {text.position}
                    </label>

                    <input
                      value={
                        entry.role || ""
                      }
                      placeholder="IT Support Intern"
                      onChange={(e) =>
                        updateEntry(
                          entryIndex,
                          "role",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label>
                      {text.period}
                    </label>

                    <input
                      value={
                        entry.period || ""
                      }
                      placeholder="Aug 2025 – Nov 2025"
                      onChange={(e) =>
                        updateEntry(
                          entryIndex,
                          "period",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <label>
                  {text.bullets}
                </label>

                {(entry.bullets || []).map(
                  (
                    bullet,
                    bulletIndex
                  ) => (
                    <div
                      className="bullet-editor"
                      key={bulletIndex}
                    >
                      <textarea
                        rows={2}
                        value={bullet}
                        placeholder="Describe an achievement or responsibility..."
                        onChange={(e) =>
                          updateEntryBullet(
                            entryIndex,
                            bulletIndex,
                            e.target
                              .value
                          )
                        }
                      />

                      <button
                        type="button"
                        className="remove-bullet-btn"
                        onClick={() =>
                          removeEntryBullet(
                            entryIndex,
                            bulletIndex
                          )
                        }
                      >
                        {text.remove}
                      </button>
                    </div>
                  )
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="add-bullet-btn"
                    onClick={() =>
                      addEntryBullet(
                        entryIndex
                      )
                    }
                  >
                    + {text.addBullet}
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeEntry(
                        entryIndex
                      )
                    }
                  >
                    {text.removePosition}
                  </button>
                </div>
              </div>
            )
          )}

          <button
            type="button"
            className="add-btn"
            onClick={addEntry}
          >
            + {text.addPosition}
          </button>
        </>
      )}

      {/* =================================================
          PROJECT
      ================================================= */}

      {kind === "proj" && (
        <>
          <div className="grid-2">
            <div>
              <label>
                {text.project}
              </label>

              <input
                value={value.title || ""}
                placeholder="PLN NP Internal RAG Chatbot"
                onChange={(e) =>
                  setField(
                    "title",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label>
                {text.period}
              </label>

              <input
                value={value.period || ""}
                placeholder="Apr – Jul 2026"
                onChange={(e) =>
                  setField(
                    "period",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <label>
            {text.technologies}
          </label>

          <input
            value={value.tech || ""}
            placeholder="Python, FastAPI, ChromaDB, Ollama"
            onChange={(e) =>
              setField(
                "tech",
                e.target.value
              )
            }
          />

          <label>
            {text.bullets}
          </label>

          {(value.bullets || []).map(
            (bullet, bulletIndex) => (
              <div
                className="bullet-editor"
                key={bulletIndex}
              >
                <textarea
                  rows={2}
                  value={bullet}
                  placeholder="Describe the project contribution..."
                  onChange={(e) =>
                    updateProjectBullet(
                      bulletIndex,
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className="remove-bullet-btn"
                  onClick={() =>
                    removeArrayItem(
                      "bullets",
                      bulletIndex
                    )
                  }
                >
                  {text.remove}
                </button>
              </div>
            )
          )}

          <button
            type="button"
            className="add-bullet-btn"
            onClick={() =>
              addArrayItem(
                "bullets",
                ""
              )
            }
          >
            + {text.addBullet}
          </button>
        </>
      )}

      {/* =================================================
          ORGANIZATION
      ================================================= */}

      {kind === "org" && (
        <>
          <label>
            {text.organization}
          </label>

          <input
            value={
              value.organization || ""
            }
            placeholder="GDGOC UIN Syarif Hidayatullah Jakarta"
            onChange={(e) =>
              setField(
                "organization",
                e.target.value
              )
            }
          />

          <label>
            {text.organizationDescription}
          </label>

          <textarea
            rows={3}
            value={
              value.description || ""
            }
            placeholder="Brief description of the organization..."
            onChange={(e) =>
              setField(
                "description",
                e.target.value
              )
            }
          />

          {(value.entries || []).map(
            (entry, entryIndex) => (
              <div
                className="block"
                key={entryIndex}
              >
                <div className="grid-2">
                  <div>
                    <label>
                      {text.position}
                    </label>

                    <input
                      value={
                        entry.role || ""
                      }
                      placeholder="Event Staff"
                      onChange={(e) =>
                        updateEntry(
                          entryIndex,
                          "role",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label>
                      {text.period}
                    </label>

                    <input
                      value={
                        entry.period || ""
                      }
                      placeholder="Oct 2024 – Jul 2025"
                      onChange={(e) =>
                        updateEntry(
                          entryIndex,
                          "period",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <label>
                  {text.bullets}
                </label>

                {(entry.bullets || []).map(
                  (
                    bullet,
                    bulletIndex
                  ) => (
                    <div
                      className="bullet-editor"
                      key={bulletIndex}
                    >
                      <textarea
                        rows={2}
                        value={bullet}
                        placeholder="Describe responsibility or achievement..."
                        onChange={(e) =>
                          updateEntryBullet(
                            entryIndex,
                            bulletIndex,
                            e.target
                              .value
                          )
                        }
                      />

                      <button
                        type="button"
                        className="remove-bullet-btn"
                        onClick={() =>
                          removeEntryBullet(
                            entryIndex,
                            bulletIndex
                          )
                        }
                      >
                        {text.remove}
                      </button>
                    </div>
                  )
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="add-bullet-btn"
                    onClick={() =>
                      addEntryBullet(
                        entryIndex
                      )
                    }
                  >
                    + {text.addBullet}
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeEntry(
                        entryIndex
                      )
                    }
                  >
                    {text.removePosition}
                  </button>
                </div>
              </div>
            )
          )}

          <button
            type="button"
            className="add-btn"
            onClick={addEntry}
          >
            + {text.addRole}
          </button>
        </>
      )}

      {/* =================================================
          REMOVE WHOLE BLOCK
      ================================================= */}

      {onRemove && (
        <div className="form-actions">
          <button
            type="button"
            className="remove-btn"
            onClick={onRemove}
          >
            {text.removeBlock}
          </button>
        </div>
      )}
    </div>
  );
}