import React from "react";

export default function Form({
  data,
  onChange,
  lang,
  t,
}) {
  // =====================================================
  // TEXT
  // =====================================================

  const text =
    lang === "id"
      ? {
          formTitle: "Formulir Data",

          personal: "Informasi Pribadi",
          fullName: "Nama Lengkap",
          jobTitle: "Posisi / Job Title",
          email: "Email",
          phone: "Nomor Telepon",
          location: "Lokasi",
          links: "LinkedIn / Portfolio",
          summary: "Ringkasan Profesional",

          sectionTitle: "Judul Bagian",
          showSection: "Tampilkan Bagian",

          education: "Pendidikan",
          university: "Universitas / Institusi",
          degree: "Gelar / Program Studi",
          period: "Periode",
          details: "Detail Pendidikan",
          addEducation: "Tambah Pendidikan",
          removeEducation: "Hapus Pendidikan",
          addDetail: "Tambah Detail",

          work: "Pengalaman Kerja",
          company: "Nama Perusahaan",
          companyLocation: "Lokasi Perusahaan",
          companyDescription: "Deskripsi Perusahaan",
          position: "Posisi / Role",
          addCompany: "Tambah Perusahaan",
          removeCompany: "Hapus Perusahaan",
          addPosition: "Tambah Posisi",
          removePosition: "Hapus Posisi",

          bullets: "Pencapaian / Deskripsi",
          bulletPlaceholder:
            "Tuliskan pencapaian atau tanggung jawab...",
          addBullet: "Tambah Bullet",
          removeBullet: "Hapus",

          skills: "Keahlian Teknis & Sertifikasi",
          technicalSkills: "Keahlian Teknis",
          certifications: "Sertifikasi & Pelatihan",
          addSkill: "Tambah Keahlian",
          addCertification: "Tambah Sertifikasi",

          projects: "Proyek Teknis Pilihan",
          projectTitle: "Nama Proyek",
          technologies: "Teknologi / Tech Stack",
          addProject: "Tambah Proyek",
          removeProject: "Hapus Proyek",

          organization:
            "Pengalaman Kepemimpinan & Organisasi",
          organizationName: "Nama Organisasi",
          organizationDescription: "Deskripsi Organisasi",
          addOrganization: "Tambah Organisasi",
          removeOrganization: "Hapus Organisasi",
          addRole: "Tambah Posisi",

          remove: "Hapus",
        }
      : {
          formTitle: "Form Data",

          personal: "Personal Information",
          fullName: "Full Name",
          jobTitle: "Job Title",
          email: "Email",
          phone: "Phone",
          location: "Location",
          links: "LinkedIn / Portfolio",
          summary: "Professional Summary",

          sectionTitle: "Section Title",
          showSection: "Show Section",

          education: "Education",
          university: "University / Institution",
          degree: "Degree / Program",
          period: "Period",
          details: "Education Details",
          addEducation: "Add Education",
          removeEducation: "Remove Education",
          addDetail: "Add Detail",

          work: "Work Experience",
          company: "Company Name",
          companyLocation: "Company Location",
          companyDescription: "Company Description",
          position: "Position / Role",
          addCompany: "Add Company",
          removeCompany: "Remove Company",
          addPosition: "Add Position",
          removePosition: "Remove Position",

          bullets: "Achievements / Description",
          bulletPlaceholder:
            "Describe an achievement or responsibility...",
          addBullet: "Add Bullet",
          removeBullet: "Remove",

          skills: "Technical Skills & Certifications",
          technicalSkills: "Technical Skills",
          certifications: "Certifications & Training",
          addSkill: "Add Skill",
          addCertification: "Add Certification",

          projects: "Selected Technical Projects",
          projectTitle: "Project Name",
          technologies: "Technologies / Tech Stack",
          addProject: "Add Project",
          removeProject: "Remove Project",

          organization:
            "Leadership & Organizational Experience",
          organizationName: "Organization Name",
          organizationDescription:
            "Organization Description",
          addOrganization: "Add Organization",
          removeOrganization: "Remove Organization",
          addRole: "Add Role",

          remove: "Remove",
        };

  // =====================================================
  // GENERAL UPDATE
  // =====================================================

  const update = (key, value) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  // =====================================================
  // SECTION TITLE
  // =====================================================

  const updateSectionTitle = (key, value) => {
    onChange({
      ...data,

      sectionTitles: {
        ...data.sectionTitles,
        [key]: value,
      },
    });
  };

  // =====================================================
  // SHOW / HIDE SECTION
  // =====================================================

  const toggleSection = (key) => {
    onChange({
      ...data,

      showSections: {
        ...data.showSections,

        [key]:
          data.showSections?.[key] === false
            ? true
            : false,
      },
    });
  };

  // =====================================================
  // EDUCATION
  // =====================================================

  const updateEducation = (
    educationIndex,
    field,
    value
  ) => {
    const education = [...data.education];

    education[educationIndex] = {
      ...education[educationIndex],
      [field]: value,
    };

    update("education", education);
  };

  const addEducation = () => {
    update("education", [
      ...data.education,

      {
        school: "",
        location: "",
        period: "",
        degree: "",
        details: [""],
      },
    ]);
  };

  const removeEducation = (educationIndex) => {
    update(
      "education",
      data.education.filter(
        (_, index) => index !== educationIndex
      )
    );
  };

  const updateEducationDetail = (
    educationIndex,
    detailIndex,
    value
  ) => {
    const education = [...data.education];

    const details = [
      ...(education[educationIndex].details || []),
    ];

    details[detailIndex] = value;

    education[educationIndex] = {
      ...education[educationIndex],
      details,
    };

    update("education", education);
  };

  const addEducationDetail = (educationIndex) => {
    const education = [...data.education];

    education[educationIndex] = {
      ...education[educationIndex],

      details: [
        ...(education[educationIndex].details || []),
        "",
      ],
    };

    update("education", education);
  };

  const removeEducationDetail = (
    educationIndex,
    detailIndex
  ) => {
    const education = [...data.education];

    education[educationIndex] = {
      ...education[educationIndex],

      details: (
        education[educationIndex].details || []
      ).filter(
        (_, index) => index !== detailIndex
      ),
    };

    update("education", education);
  };

  // =====================================================
  // WORK — COMPANY
  // =====================================================

  const updateCompany = (
    companyIndex,
    field,
    value
  ) => {
    const work = [...data.work];

    work[companyIndex] = {
      ...work[companyIndex],
      [field]: value,
    };

    update("work", work);
  };

  const addCompany = () => {
    update("work", [
      ...data.work,

      {
        company: "",
        location: "",
        description: "",

        entries: [
          {
            role: "",
            period: "",
            bullets: [""],
          },
        ],
      },
    ]);
  };

  const removeCompany = (companyIndex) => {
    update(
      "work",
      data.work.filter(
        (_, index) => index !== companyIndex
      )
    );
  };

  // =====================================================
  // WORK — POSITION
  // =====================================================

  const updateWorkEntry = (
    companyIndex,
    entryIndex,
    field,
    value
  ) => {
    const work = [...data.work];

    const entries = [
      ...(work[companyIndex].entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],
      [field]: value,
    };

    work[companyIndex] = {
      ...work[companyIndex],
      entries,
    };

    update("work", work);
  };

  const addWorkEntry = (companyIndex) => {
    const work = [...data.work];

    work[companyIndex] = {
      ...work[companyIndex],

      entries: [
        ...(work[companyIndex].entries || []),

        {
          role: "",
          period: "",
          bullets: [""],
        },
      ],
    };

    update("work", work);
  };

  const removeWorkEntry = (
    companyIndex,
    entryIndex
  ) => {
    const work = [...data.work];

    work[companyIndex] = {
      ...work[companyIndex],

      entries: (
        work[companyIndex].entries || []
      ).filter(
        (_, index) => index !== entryIndex
      ),
    };

    update("work", work);
  };

  // =====================================================
  // WORK — BULLET
  // =====================================================

  const updateWorkBullet = (
    companyIndex,
    entryIndex,
    bulletIndex,
    value
  ) => {
    const work = [...data.work];

    const entries = [
      ...(work[companyIndex].entries || []),
    ];

    const bullets = [
      ...(entries[entryIndex].bullets || []),
    ];

    bullets[bulletIndex] = value;

    entries[entryIndex] = {
      ...entries[entryIndex],
      bullets,
    };

    work[companyIndex] = {
      ...work[companyIndex],
      entries,
    };

    update("work", work);
  };

  const addWorkBullet = (
    companyIndex,
    entryIndex
  ) => {
    const work = [...data.work];

    const entries = [
      ...(work[companyIndex].entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],

      bullets: [
        ...(entries[entryIndex].bullets || []),
        "",
      ],
    };

    work[companyIndex] = {
      ...work[companyIndex],
      entries,
    };

    update("work", work);
  };

  const removeWorkBullet = (
    companyIndex,
    entryIndex,
    bulletIndex
  ) => {
    const work = [...data.work];

    const entries = [
      ...(work[companyIndex].entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],

      bullets: (
        entries[entryIndex].bullets || []
      ).filter(
        (_, index) => index !== bulletIndex
      ),
    };

    work[companyIndex] = {
      ...work[companyIndex],
      entries,
    };

    update("work", work);
  };

  // =====================================================
  // SKILLS
  // =====================================================

  const updateSkillItem = (
    group,
    itemIndex,
    value
  ) => {
    const items = [
      ...(data.skills?.[group] || []),
    ];

    items[itemIndex] = value;

    update("skills", {
      ...data.skills,
      [group]: items,
    });
  };

  const addSkillItem = (group) => {
    update("skills", {
      ...data.skills,

      [group]: [
        ...(data.skills?.[group] || []),
        "",
      ],
    });
  };

  const removeSkillItem = (
    group,
    itemIndex
  ) => {
    update("skills", {
      ...data.skills,

      [group]: (
        data.skills?.[group] || []
      ).filter(
        (_, index) => index !== itemIndex
      ),
    });
  };

  // =====================================================
  // PROJECTS
  // =====================================================

  const updateProject = (
    projectIndex,
    field,
    value
  ) => {
    const projects = [...data.projects];

    projects[projectIndex] = {
      ...projects[projectIndex],
      [field]: value,
    };

    update("projects", projects);
  };

  const addProject = () => {
    update("projects", [
      ...data.projects,

      {
        title: "",
        tech: "",
        period: "",
        bullets: [""],
      },
    ]);
  };

  const removeProject = (projectIndex) => {
    update(
      "projects",

      data.projects.filter(
        (_, index) => index !== projectIndex
      )
    );
  };

  const updateProjectBullet = (
    projectIndex,
    bulletIndex,
    value
  ) => {
    const projects = [...data.projects];

    const bullets = [
      ...(projects[projectIndex].bullets || []),
    ];

    bullets[bulletIndex] = value;

    projects[projectIndex] = {
      ...projects[projectIndex],
      bullets,
    };

    update("projects", projects);
  };

  const addProjectBullet = (projectIndex) => {
    const projects = [...data.projects];

    projects[projectIndex] = {
      ...projects[projectIndex],

      bullets: [
        ...(projects[projectIndex].bullets || []),
        "",
      ],
    };

    update("projects", projects);
  };

  const removeProjectBullet = (
    projectIndex,
    bulletIndex
  ) => {
    const projects = [...data.projects];

    projects[projectIndex] = {
      ...projects[projectIndex],

      bullets: (
        projects[projectIndex].bullets || []
      ).filter(
        (_, index) => index !== bulletIndex
      ),
    };

    update("projects", projects);
  };

  // =====================================================
  // ORGANIZATION
  // =====================================================

  const updateOrganization = (
    orgIndex,
    field,
    value
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    organizations[orgIndex] = {
      ...organizations[orgIndex],
      [field]: value,
    };

    update("organizations", organizations);
  };

  const addOrganization = () => {
    update("organizations", [
      ...data.organizations,

      {
        organization: "",
        description: "",

        entries: [
          {
            role: "",
            period: "",
            bullets: [""],
          },
        ],
      },
    ]);
  };

  const removeOrganization = (orgIndex) => {
    update(
      "organizations",

      data.organizations.filter(
        (_, index) => index !== orgIndex
      )
    );
  };

  // =====================================================
  // ORGANIZATION ROLE
  // =====================================================

  const updateOrganizationEntry = (
    orgIndex,
    entryIndex,
    field,
    value
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    const entries = [
      ...(organizations[orgIndex].entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],
      [field]: value,
    };

    organizations[orgIndex] = {
      ...organizations[orgIndex],
      entries,
    };

    update("organizations", organizations);
  };

  const addOrganizationEntry = (
    orgIndex
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    organizations[orgIndex] = {
      ...organizations[orgIndex],

      entries: [
        ...(organizations[orgIndex].entries ||
          []),

        {
          role: "",
          period: "",
          bullets: [""],
        },
      ],
    };

    update("organizations", organizations);
  };

  const removeOrganizationEntry = (
    orgIndex,
    entryIndex
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    organizations[orgIndex] = {
      ...organizations[orgIndex],

      entries: (
        organizations[orgIndex].entries || []
      ).filter(
        (_, index) => index !== entryIndex
      ),
    };

    update("organizations", organizations);
  };

  // =====================================================
  // ORGANIZATION BULLET
  // =====================================================

  const updateOrganizationBullet = (
    orgIndex,
    entryIndex,
    bulletIndex,
    value
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    const entries = [
      ...(organizations[orgIndex].entries || []),
    ];

    const bullets = [
      ...(entries[entryIndex].bullets || []),
    ];

    bullets[bulletIndex] = value;

    entries[entryIndex] = {
      ...entries[entryIndex],
      bullets,
    };

    organizations[orgIndex] = {
      ...organizations[orgIndex],
      entries,
    };

    update("organizations", organizations);
  };

  const addOrganizationBullet = (
    orgIndex,
    entryIndex
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    const entries = [
      ...(organizations[orgIndex].entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],

      bullets: [
        ...(entries[entryIndex].bullets || []),
        "",
      ],
    };

    organizations[orgIndex] = {
      ...organizations[orgIndex],
      entries,
    };

    update("organizations", organizations);
  };

  const removeOrganizationBullet = (
    orgIndex,
    entryIndex,
    bulletIndex
  ) => {
    const organizations = [
      ...data.organizations,
    ];

    const entries = [
      ...(organizations[orgIndex].entries || []),
    ];

    entries[entryIndex] = {
      ...entries[entryIndex],

      bullets: (
        entries[entryIndex].bullets || []
      ).filter(
        (_, index) => index !== bulletIndex
      ),
    };

    organizations[orgIndex] = {
      ...organizations[orgIndex],
      entries,
    };

    update("organizations", organizations);
  };

  // =====================================================
  // SECTION HEADER
  // =====================================================

  const SectionEditor = ({
    sectionKey,
    title,
  }) => (
    <>
      <h4 className="subhead">
        {title}
      </h4>

      <div className="section-editor">
        <label>
          {text.sectionTitle}
        </label>

        <input
          value={
            data.sectionTitles?.[
              sectionKey
            ] || ""
          }
          placeholder={title}
          onChange={(e) =>
            updateSectionTitle(
              sectionKey,
              e.target.value
            )
          }
        />

        <div
          className="toggle-row"
          style={{ marginBottom: 0 }}
        >
          <span>
            {text.showSection}
          </span>

          <input
            type="checkbox"
            checked={
              data.showSections?.[
                sectionKey
              ] !== false
            }
            onChange={() =>
              toggleSection(sectionKey)
            }
          />
        </div>
      </div>
    </>
  );

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="form-title">
          {text.formTitle}
        </h3>

        {/* =============================================
            PERSONAL INFORMATION
        ============================================== */}

        <h4 className="subhead">
          {text.personal}
        </h4>

        <div className="grid-2">
          <div>
            <label>
              {text.fullName}
            </label>

            <input
              value={data.fullName || ""}
              onChange={(e) =>
                update(
                  "fullName",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label>
              {text.jobTitle}
            </label>

            <input
              value={data.jobTitle || ""}
              onChange={(e) =>
                update(
                  "jobTitle",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <div className="grid-3">
          <div>
            <label>
              {text.email}
            </label>

            <input
              type="email"
              value={data.email || ""}
              onChange={(e) =>
                update(
                  "email",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label>
              {text.phone}
            </label>

            <input
              value={data.phone || ""}
              onChange={(e) =>
                update(
                  "phone",
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
              value={data.location || ""}
              onChange={(e) =>
                update(
                  "location",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <div>
          <label>
            {text.links}
          </label>

          <input
            value={data.links || ""}
            onChange={(e) =>
              update(
                "links",
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label>
            {text.summary}
          </label>

          <textarea
            rows={4}
            value={data.summary || ""}
            onChange={(e) =>
              update(
                "summary",
                e.target.value
              )
            }
          />
        </div>

        {/* =============================================
            EDUCATION
        ============================================== */}

        <SectionEditor
          sectionKey="education"
          title={
            t?.education ||
            text.education
          }
        />

        {data.showSections?.education !==
          false &&
          data.education?.map(
            (education, educationIndex) => (
              <div
                key={educationIndex}
                className="block"
              >
                <div className="grid-2">
                  <div>
                    <label>
                      {text.university}
                    </label>

                    <input
                      value={
                        education.school || ""
                      }
                      onChange={(e) =>
                        updateEducation(
                          educationIndex,
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
                        education.location ||
                        ""
                      }
                      onChange={(e) =>
                        updateEducation(
                          educationIndex,
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
                      value={
                        education.degree || ""
                      }
                      onChange={(e) =>
                        updateEducation(
                          educationIndex,
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
                      value={
                        education.period || ""
                      }
                      onChange={(e) =>
                        updateEducation(
                          educationIndex,
                          "period",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <label>
                  {text.details}
                </label>

                {education.details?.map(
                  (detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="bullet-editor"
                    >
                      <textarea
                        rows={2}
                        value={detail}
                        onChange={(e) =>
                          updateEducationDetail(
                            educationIndex,
                            detailIndex,
                            e.target.value
                          )
                        }
                      />

                      <button
                        type="button"
                        className="remove-bullet-btn"
                        onClick={() =>
                          removeEducationDetail(
                            educationIndex,
                            detailIndex
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
                      addEducationDetail(
                        educationIndex
                      )
                    }
                  >
                    + {text.addDetail}
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeEducation(
                        educationIndex
                      )
                    }
                  >
                    {text.removeEducation}
                  </button>
                </div>
              </div>
            )
          )}

        {data.showSections?.education !==
          false && (
          <button
            type="button"
            className="add-btn"
            onClick={addEducation}
          >
            + {text.addEducation}
          </button>
        )}

        {/* =============================================
            WORK EXPERIENCE
        ============================================== */}

        <SectionEditor
          sectionKey="work"
          title={
            t?.workExp ||
            text.work
          }
        />

        {data.showSections?.work !== false &&
          data.work?.map(
            (company, companyIndex) => (
              <div
                key={companyIndex}
                className="block"
              >
                <div className="grid-2">
                  <div>
                    <label>
                      {text.company}
                    </label>

                    <input
                      value={
                        company.company || ""
                      }
                      onChange={(e) =>
                        updateCompany(
                          companyIndex,
                          "company",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label>
                      {
                        text.companyLocation
                      }
                    </label>

                    <input
                      value={
                        company.location || ""
                      }
                      onChange={(e) =>
                        updateCompany(
                          companyIndex,
                          "location",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <div>
                  <label>
                    {
                      text.companyDescription
                    }
                  </label>

                  <textarea
                    rows={3}
                    value={
                      company.description ||
                      ""
                    }
                    onChange={(e) =>
                      updateCompany(
                        companyIndex,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </div>

                {company.entries?.map(
                  (
                    entry,
                    entryIndex
                  ) => (
                    <div
                      key={entryIndex}
                      className="block"
                    >
                      <div className="grid-2">
                        <div>
                          <label>
                            {
                              text.position
                            }
                          </label>

                          <input
                            value={
                              entry.role ||
                              ""
                            }
                            onChange={(e) =>
                              updateWorkEntry(
                                companyIndex,
                                entryIndex,
                                "role",
                                e.target
                                  .value
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
                              entry.period ||
                              ""
                            }
                            onChange={(e) =>
                              updateWorkEntry(
                                companyIndex,
                                entryIndex,
                                "period",
                                e.target
                                  .value
                              )
                            }
                          />
                        </div>
                      </div>

                      <label>
                        {text.bullets}
                      </label>

                      {entry.bullets?.map(
                        (
                          bullet,
                          bulletIndex
                        ) => (
                          <div
                            key={
                              bulletIndex
                            }
                            className="bullet-editor"
                          >
                            <textarea
                              rows={2}
                              placeholder={
                                text.bulletPlaceholder
                              }
                              value={
                                bullet
                              }
                              onChange={(
                                e
                              ) =>
                                updateWorkBullet(
                                  companyIndex,
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
                                removeWorkBullet(
                                  companyIndex,
                                  entryIndex,
                                  bulletIndex
                                )
                              }
                            >
                              {
                                text.removeBullet
                              }
                            </button>
                          </div>
                        )
                      )}

                      <div className="form-actions">
                        <button
                          type="button"
                          className="add-bullet-btn"
                          onClick={() =>
                            addWorkBullet(
                              companyIndex,
                              entryIndex
                            )
                          }
                        >
                          +{" "}
                          {
                            text.addBullet
                          }
                        </button>

                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() =>
                            removeWorkEntry(
                              companyIndex,
                              entryIndex
                            )
                          }
                        >
                          {
                            text.removePosition
                          }
                        </button>
                      </div>
                    </div>
                  )
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() =>
                      addWorkEntry(
                        companyIndex
                      )
                    }
                  >
                    + {text.addPosition}
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeCompany(
                        companyIndex
                      )
                    }
                  >
                    {
                      text.removeCompany
                    }
                  </button>
                </div>
              </div>
            )
          )}

        {data.showSections?.work !==
          false && (
          <button
            type="button"
            className="add-btn"
            onClick={addCompany}
          >
            + {text.addCompany}
          </button>
        )}

        {/* =============================================
            TECHNICAL SKILLS
        ============================================== */}

        <SectionEditor
          sectionKey="skills"
          title={
            t?.skills ||
            text.skills
          }
        />

        {data.showSections?.skills !==
          false && (
          <>
            <div className="block">
              <h4 className="subhead">
                {text.technicalSkills}
              </h4>

              {data.skills?.technical?.map(
                (skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bullet-editor"
                  >
                    <input
                      value={skill}
                      onChange={(e) =>
                        updateSkillItem(
                          "technical",
                          skillIndex,
                          e.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="remove-bullet-btn"
                      onClick={() =>
                        removeSkillItem(
                          "technical",
                          skillIndex
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
                className="add-btn"
                onClick={() =>
                  addSkillItem(
                    "technical"
                  )
                }
              >
                + {text.addSkill}
              </button>
            </div>

            <div className="block">
              <h4 className="subhead">
                {text.certifications}
              </h4>

              {data.skills?.certifications?.map(
                (
                  certification,
                  certificationIndex
                ) => (
                  <div
                    key={
                      certificationIndex
                    }
                    className="bullet-editor"
                  >
                    <input
                      value={
                        certification
                      }
                      onChange={(e) =>
                        updateSkillItem(
                          "certifications",
                          certificationIndex,
                          e.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="remove-bullet-btn"
                      onClick={() =>
                        removeSkillItem(
                          "certifications",
                          certificationIndex
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
                className="add-btn"
                onClick={() =>
                  addSkillItem(
                    "certifications"
                  )
                }
              >
                +{" "}
                {
                  text.addCertification
                }
              </button>
            </div>
          </>
        )}

        {/* =============================================
            PROJECTS
        ============================================== */}

        <SectionEditor
          sectionKey="projects"
          title={
            t?.projects ||
            text.projects
          }
        />

        {data.showSections?.projects !==
          false &&
          data.projects?.map(
            (project, projectIndex) => (
              <div
                key={projectIndex}
                className="block"
              >
                <div className="grid-2">
                  <div>
                    <label>
                      {
                        text.projectTitle
                      }
                    </label>

                    <input
                      value={
                        project.title || ""
                      }
                      onChange={(e) =>
                        updateProject(
                          projectIndex,
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
                      value={
                        project.period || ""
                      }
                      onChange={(e) =>
                        updateProject(
                          projectIndex,
                          "period",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>

                <div>
                  <label>
                    {text.technologies}
                  </label>

                  <input
                    value={
                      project.tech || ""
                    }
                    onChange={(e) =>
                      updateProject(
                        projectIndex,
                        "tech",
                        e.target.value
                      )
                    }
                  />
                </div>

                <label>
                  {text.bullets}
                </label>

                {project.bullets?.map(
                  (
                    bullet,
                    bulletIndex
                  ) => (
                    <div
                      key={bulletIndex}
                      className="bullet-editor"
                    >
                      <textarea
                        rows={2}
                        value={bullet}
                        onChange={(e) =>
                          updateProjectBullet(
                            projectIndex,
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
                          removeProjectBullet(
                            projectIndex,
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
                      addProjectBullet(
                        projectIndex
                      )
                    }
                  >
                    + {text.addBullet}
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeProject(
                        projectIndex
                      )
                    }
                  >
                    {
                      text.removeProject
                    }
                  </button>
                </div>
              </div>
            )
          )}

        {data.showSections?.projects !==
          false && (
          <button
            type="button"
            className="add-btn"
            onClick={addProject}
          >
            + {text.addProject}
          </button>
        )}

        {/* =============================================
            ORGANIZATION
        ============================================== */}

        <SectionEditor
          sectionKey="organization"
          title={
            t?.orgExp ||
            text.organization
          }
        />

        {data.showSections?.organization !==
          false &&
          data.organizations?.map(
            (organization, orgIndex) => (
              <div
                key={orgIndex}
                className="block"
              >
                <div>
                  <label>
                    {
                      text.organizationName
                    }
                  </label>

                  <input
                    value={
                      organization.organization ||
                      ""
                    }
                    onChange={(e) =>
                      updateOrganization(
                        orgIndex,
                        "organization",
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label>
                    {
                      text.organizationDescription
                    }
                  </label>

                  <textarea
                    rows={3}
                    value={
                      organization.description ||
                      ""
                    }
                    onChange={(e) =>
                      updateOrganization(
                        orgIndex,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </div>

                {organization.entries?.map(
                  (
                    entry,
                    entryIndex
                  ) => (
                    <div
                      key={entryIndex}
                      className="block"
                    >
                      <div className="grid-2">
                        <div>
                          <label>
                            {
                              text.position
                            }
                          </label>

                          <input
                            value={
                              entry.role ||
                              ""
                            }
                            onChange={(e) =>
                              updateOrganizationEntry(
                                orgIndex,
                                entryIndex,
                                "role",
                                e.target
                                  .value
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
                              entry.period ||
                              ""
                            }
                            onChange={(e) =>
                              updateOrganizationEntry(
                                orgIndex,
                                entryIndex,
                                "period",
                                e.target
                                  .value
                              )
                            }
                          />
                        </div>
                      </div>

                      <label>
                        {text.bullets}
                      </label>

                      {entry.bullets?.map(
                        (
                          bullet,
                          bulletIndex
                        ) => (
                          <div
                            key={
                              bulletIndex
                            }
                            className="bullet-editor"
                          >
                            <textarea
                              rows={2}
                              value={
                                bullet
                              }
                              onChange={(
                                e
                              ) =>
                                updateOrganizationBullet(
                                  orgIndex,
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
                                removeOrganizationBullet(
                                  orgIndex,
                                  entryIndex,
                                  bulletIndex
                                )
                              }
                            >
                              {
                                text.remove
                              }
                            </button>
                          </div>
                        )
                      )}

                      <div className="form-actions">
                        <button
                          type="button"
                          className="add-bullet-btn"
                          onClick={() =>
                            addOrganizationBullet(
                              orgIndex,
                              entryIndex
                            )
                          }
                        >
                          +{" "}
                          {
                            text.addBullet
                          }
                        </button>

                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() =>
                            removeOrganizationEntry(
                              orgIndex,
                              entryIndex
                            )
                          }
                        >
                          {
                            text.removePosition
                          }
                        </button>
                      </div>
                    </div>
                  )
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() =>
                      addOrganizationEntry(
                        orgIndex
                      )
                    }
                  >
                    + {text.addRole}
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeOrganization(
                        orgIndex
                      )
                    }
                  >
                    {
                      text.removeOrganization
                    }
                  </button>
                </div>
              </div>
            )
          )}

        {data.showSections
          ?.organization !== false && (
          <button
            type="button"
            className="add-btn"
            onClick={addOrganization}
          >
            + {text.addOrganization}
          </button>
        )}
      </div>
    </div>
  );
}