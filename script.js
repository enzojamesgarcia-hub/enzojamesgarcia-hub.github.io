document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  function buildProjectLink(project) {
    if (project.id) {
      return `project.html?id=${encodeURIComponent(project.id)}`;
    }
    return project.link || "#";
  }

  function createProjectCard(project) {
    const media = project.image
      ? `<div class="project-media"><img src="${project.image}" alt="${project.title}" /></div>`
      : "";

    const tags = (project.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");

    const pdfButton = project.pdf
      ? `<a class="secondary-button" href="${project.pdf}" target="_blank" rel="noreferrer">View PDF</a>`
      : "";

    const detailLink = buildProjectLink(project);
    const primaryButton = project.id
      ? `<a class="button" href="${detailLink}">More info</a>`
      : `<a class="button" href="${project.link || "#"}" target="_blank" rel="noreferrer">Open</a>`;

    return `
      <article class="project-card">
        ${media}
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          ${project.details ? `<p class="project-note">${project.details}</p>` : ""}
          <div class="tag-row">${tags}</div>
          <div class="project-actions">
            ${primaryButton}
            ${pdfButton}
          </div>
        </div>
      </article>
    `;
  }

  function renderProjects() {
    const target = document.querySelector("#projects-grid");
    if (!target) return;
    target.innerHTML = (window.siteContent || window.FALLBACK_CONTENT || { projects: [] }).projects.map(createProjectCard).join("");
  }

  function renderFeaturedProjects() {
    const target = document.querySelector("#featured-projects");
    if (!target) return;
    const featured = (window.siteContent || window.FALLBACK_CONTENT || { projects: [] }).projects.slice(0, 3);
    target.innerHTML = featured.map(createProjectCard).join("");
  }

  function renderAbout() {
    const content = window.siteContent || window.FALLBACK_CONTENT || { about: { blurb: "", skills: [] } };

    const aboutTarget = document.querySelector("#about-copy");
    if (aboutTarget) {
      aboutTarget.textContent = content.about.blurb;
    }

    const skillList = document.querySelector("#skills-list");
    if (skillList) {
      skillList.innerHTML = (content.about.skills || []).map((skill) => `<li>${skill}</li>`).join("");
    }

    const homeAbout = document.querySelector("#home-about-copy");
    if (homeAbout) {
      homeAbout.textContent = content.about.blurb;
    }

    const homeSkills = document.querySelector("#home-skills");
    if (homeSkills) {
      homeSkills.innerHTML = (content.about.skills || []).map((skill) => `<li>${skill}</li>`).join("");
    }
  }

  function renderContact() {
    const content = window.siteContent || window.FALLBACK_CONTENT || { contact: { email: "", github: "", location: "" } };
    const list = document.querySelector("#contact-list");
    if (!list) return;

    list.innerHTML = `
      <li>Email: <a href="mailto:${content.contact.email}">${content.contact.email}</a></li>
      <li>GitHub: <a href="${content.contact.github}" target="_blank" rel="noreferrer">${content.contact.github}</a></li>
      <li>Location: ${content.contact.location}</li>
    `;
  }

  function isVideoSource(value) {
    if (!value || typeof value !== "string") return false;
    const trimmed = value.trim();
    if (!trimmed) return false;

    return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(trimmed)
      || /youtube\.com|youtu\.be|vimeo\.com/i.test(trimmed)
      || /video/i.test(trimmed);
  }

  function renderMediaItem(item, projectTitle) {
    const source = typeof item === "string" ? item : item?.src || "";
    if (!source || !source.trim()) return "";

    const label = projectTitle ? `${projectTitle} media` : "Project media";

    if (isVideoSource(source)) {
      return `<video class="gallery-video" src="${source}" controls playsinline aria-label="${label}"></video>`;
    }

    return `<img src="${source}" alt="${label}" />`;
  }

  function renderProjectDetail() {
    const container = document.querySelector("#project-detail");
    if (!container) return;

    const content = window.siteContent || window.FALLBACK_CONTENT || { projects: [] };
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id");
    const project = content.projects.find((item) => item.id === projectId) || content.projects[0];

    if (!project) return;

    const primaryMedia = project.video
      ? `<div class="project-detail-media"><video src="${project.video}" controls playsinline aria-label="${project.title} video"></video></div>`
      : project.image
        ? `<div class="project-detail-media"><img src="${project.image}" alt="${project.title}" /></div>`
        : "";

    const tags = (project.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
    const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
    const gallery = (project.gallery || [])
      .map((item) => renderMediaItem(item, project.title))
      .filter(Boolean)
      .join("");

    const pdfLink = project.pdf
      ? `<a class="button" href="${project.pdf}" target="_blank" rel="noreferrer">Open PDF</a>`
      : "";
    const externalLink = project.link
      ? `<a class="secondary-button" href="${project.link}" target="_blank" rel="noreferrer">Open external link</a>`
      : "";

    container.innerHTML = `
      <article class="detail-page-card">
        <div class="detail-page-header">
          <p class="eyebrow">Project detail</p>
          <h1>${project.title}</h1>
        </div>

        ${primaryMedia}

        <div class="detail-copy">
          <p>${project.longDescription || project.summary}</p>
          <div class="tag-row">${tags}</div>

          <div class="project-actions detail-actions">
            ${pdfLink}
            ${externalLink}
          </div>

          ${highlights ? `<div class="detail-panel"><h3>Highlights</h3><ul class="feature-list">${highlights}</ul></div>` : ""}
        </div>

        ${gallery ? `<div class="gallery-grid">${gallery}</div>` : ""}
      </article>
    `;
  }

  renderProjects();
  renderFeaturedProjects();
  renderAbout();
  renderContact();
  renderProjectDetail();
});
