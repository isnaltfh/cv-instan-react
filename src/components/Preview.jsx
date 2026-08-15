import React from "react";

export default function Preview({ data, t }) {
  // =====================================================
  // SECTION TITLE HELPER
  // =====================================================

  const getSectionTitle = (key, defaultTitle) => {
    const customTitle =
      data.sectionTitles?.[key]?.trim();

    return customTitle || defaultTitle;
  };

  // =====================================================
  // VISIBILITY HELPER
  // =====================================================

  const isSectionVisible = (key) => {
    /*
      Jika showSections belum tersedia,
      default-nya tetap ditampilkan.
    */
    return data.showSections?.[key] !== false;
  };

  return (
    <div className="cv-page">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="cv-header">
        <h1 className="cv-name">
          {data.fullName}
        </h1>

        {/* Job title optional */}
        {data.jobTitle?.trim() && (
          <div className="cv-header-role">
            {data.jobTitle}
          </div>
        )}

        <div className="cv-contact-line">
          {[
            data.phone,
            data.email,
            data.links,
          ]
            .filter(
              (item) =>
                item &&
                item.trim() !== ""
            )
            .map((item, index, array) => (
              <React.Fragment key={index}>
                <span>{item}</span>

                {index <
                  array.length - 1 && (
                  <span className="cv-contact-separator">
                    {" | "}
                  </span>
                )}
              </React.Fragment>
            ))}
        </div>

        {data.location?.trim() && (
          <div className="cv-location">
            {data.location}
          </div>
        )}

        {data.summary?.trim() && (
          <p className="cv-summary-top">
            {data.summary}
          </p>
        )}
      </header>

      {/* =================================================
          1. EDUCATION
      ================================================= */}

      {isSectionVisible("education") &&
        data.education?.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {getSectionTitle(
                "education",
                t?.education || "Education"
              )}
            </h2>

            {data.education.map(
              (edu, index) => (
                <div
                  key={index}
                  className="cv-entry"
                >
                  <div className="cv-entry-top">
                    <div className="cv-mainline">
                      <span className="cv-main-strong">
                        {edu.school}
                      </span>

                      {edu.location?.trim() && (
                        <>
                          <span>
                            {" - "}
                          </span>

                          <span className="cv-muted-strong">
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>

                    {edu.period?.trim() && (
                      <div className="cv-period">
                        {edu.period}
                      </div>
                    )}
                  </div>

                  {edu.degree?.trim() && (
                    <div className="cv-subline">
                      {edu.degree}
                    </div>
                  )}

                  {edu.details?.some(
                    (item) =>
                      item?.trim() !== ""
                  ) && (
                    <ul className="cv-bullets">
                      {edu.details
                        .filter(
                          (item) =>
                            item?.trim() !== ""
                        )
                        .map((item, i) => (
                          <li key={i}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )
            )}
          </section>
        )}

      {/* =================================================
          2. WORK EXPERIENCE
      ================================================= */}

      {isSectionVisible("work") &&
        data.work?.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {getSectionTitle(
                "work",
                t?.workExp ||
                  "Work Experience"
              )}
            </h2>

            {data.work.map(
              (company, companyIndex) => (
                <div
                  key={companyIndex}
                  className="cv-group"
                >
                  {/* Company header */}

                  <div className="cv-entry-top">
                    <div className="cv-mainline">
                      <span className="cv-main-strong">
                        {company.company}
                      </span>

                      {company.location?.trim() && (
                        <span className="cv-muted-strong">
                          {company.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company description */}

                  {company.description?.trim() && (
                    <p className="cv-description">
                      {company.description}
                    </p>
                  )}

                  {/* Roles inside company */}

                  {company.entries?.map(
                    (entry, entryIndex) => (
                      <div
                        key={entryIndex}
                        className="cv-subentry"
                      >
                        <div className="cv-entry-top">
                          <div className="cv-role">
                            {entry.role}
                          </div>

                          {entry.period?.trim() && (
                            <div className="cv-period">
                              {entry.period}
                            </div>
                          )}
                        </div>

                        {entry.bullets?.some(
                          (bullet) =>
                            bullet?.trim() !== ""
                        ) && (
                          <ul className="cv-bullets">
                            {entry.bullets
                              .filter(
                                (bullet) =>
                                  bullet?.trim() !==
                                  ""
                              )
                              .map(
                                (
                                  bullet,
                                  bulletIndex
                                ) => (
                                  <li
                                    key={
                                      bulletIndex
                                    }
                                  >
                                    {bullet}
                                  </li>
                                )
                              )}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </section>
        )}

      {/* =================================================
          3. TECHNICAL SKILLS & CERTIFICATIONS
      ================================================= */}

      {isSectionVisible("skills") &&
        (data.skills?.technical?.length >
          0 ||
          data.skills?.certifications
            ?.length > 0) && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {getSectionTitle(
                "skills",
                t?.skills ||
                  "Technical Skills & Certifications"
              )}
            </h2>

            {/* Technical Skills */}

            {data.skills?.technical?.some(
              (item) =>
                item?.trim() !== ""
            ) && (
              <>
                <div className="cv-subheading">
                  {t?.technicalSkills ||
                    "Technical Skills:"}
                </div>

                <ul className="cv-bullets">
                  {data.skills.technical
                    .filter(
                      (item) =>
                        item?.trim() !== ""
                    )
                    .map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                </ul>
              </>
            )}

            {/* Certifications */}

            {data.skills?.certifications?.some(
              (item) =>
                item?.trim() !== ""
            ) && (
              <>
                <div className="cv-subheading">
                  {t?.certifications ||
                    "Certifications & Training:"}
                </div>

                <ul className="cv-bullets">
                  {data.skills.certifications
                    .filter(
                      (item) =>
                        item?.trim() !== ""
                    )
                    .map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </section>
        )}

      {/* =================================================
          4. SELECTED TECHNICAL PROJECTS
          OPTIONAL SECTION
      ================================================= */}

      {isSectionVisible("projects") &&
        data.projects?.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {getSectionTitle(
                "projects",
                t?.projects ||
                  "Selected Technical Projects"
              )}
            </h2>

            {data.projects.map(
              (project, index) => (
                <div
                  key={index}
                  className="cv-entry"
                >
                  <div className="cv-entry-top">
                    <div className="cv-project-title">
                      {project.title}
                    </div>

                    {project.period?.trim() && (
                      <div className="cv-period">
                        {project.period}
                      </div>
                    )}
                  </div>

                  {project.tech?.trim() && (
                    <div className="cv-techline">
                      {project.tech}
                    </div>
                  )}

                  {project.bullets?.some(
                    (bullet) =>
                      bullet?.trim() !== ""
                  ) && (
                    <ul className="cv-bullets">
                      {project.bullets
                        .filter(
                          (bullet) =>
                            bullet?.trim() !== ""
                        )
                        .map(
                          (
                            bullet,
                            bulletIndex
                          ) => (
                            <li
                              key={bulletIndex}
                            >
                              {bullet}
                            </li>
                          )
                        )}
                    </ul>
                  )}
                </div>
              )
            )}
          </section>
        )}

      {/* =================================================
          5. LEADERSHIP & ORGANIZATIONAL EXPERIENCE
      ================================================= */}

      {isSectionVisible("organization") &&
        data.organizations?.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">
              {getSectionTitle(
                "organization",
                t?.orgExp ||
                  "Leadership & Organizational Experience"
              )}
            </h2>

            {data.organizations.map(
              (org, orgIndex) => (
                <div
                  key={orgIndex}
                  className="cv-group"
                >
                  {/* Organization name */}

                  <div className="cv-entry-top">
                    <div className="cv-organization-name">
                      {org.organization}
                    </div>
                  </div>

                  {/* Organization description */}

                  {org.description?.trim() && (
                    <p className="cv-organization-description">
                      {org.description}
                    </p>
                  )}

                  {/* Roles */}

                  {org.entries?.map(
                    (entry, entryIndex) => (
                      <div
                        key={entryIndex}
                        className="cv-subentry"
                      >
                        <div className="cv-entry-top">
                          <div className="cv-role">
                            {entry.role}
                          </div>

                          {entry.period?.trim() && (
                            <div className="cv-period">
                              {entry.period}
                            </div>
                          )}
                        </div>

                        {entry.bullets?.some(
                          (bullet) =>
                            bullet?.trim() !== ""
                        ) && (
                          <ul className="cv-bullets">
                            {entry.bullets
                              .filter(
                                (bullet) =>
                                  bullet?.trim() !==
                                  ""
                              )
                              .map(
                                (
                                  bullet,
                                  bulletIndex
                                ) => (
                                  <li
                                    key={
                                      bulletIndex
                                    }
                                  >
                                    {bullet}
                                  </li>
                                )
                              )}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </section>
        )}
    </div>
  );
}