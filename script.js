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
    if (!project) return "";

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
    const content = window.siteContent || window.FALLBACK_CONTENT || { projects: [] };
    target.innerHTML = (Array.isArray(content.projects) ? content.projects : []).map(createProjectCard).join("");
  }

  function renderFeaturedProjects() {
    const target = document.querySelector("#featured-projects");
    if (!target) return;
    const content = window.siteContent || window.FALLBACK_CONTENT || { projects: [] };
    const featured = (Array.isArray(content.projects) ? content.projects : []).slice(0, 3);
    target.innerHTML = featured.map(createProjectCard).join("");
  }

  function renderAbout() {
    const content = window.siteContent || window.FALLBACK_CONTENT || { about: { blurb: "", skills: [] } };

    const aboutTarget = document.querySelector("#about-copy");
    if (aboutTarget) {
      aboutTarget.textContent = (content.about || {}).blurb || "";
    }

    const skillList = document.querySelector("#skills-list");
    if (skillList) {
      skillList.innerHTML = ((content.about || {}).skills || []).map((skill) => `<li>${skill}</li>`).join("");
    }

    const homeAbout = document.querySelector("#home-about-copy");
    if (homeAbout) {
      homeAbout.textContent = (content.about || {}).blurb || "";
    }

    const homeSkills = document.querySelector("#home-skills");
    if (homeSkills) {
      homeSkills.innerHTML = ((content.about || {}).skills || []).map((skill) => `<li>${skill}</li>`).join("");
    }
  }

  function renderContact() {
    const content = window.siteContent || window.FALLBACK_CONTENT || { contact: { email: "", github: "", location: "" } };
    const list = document.querySelector("#contact-list");
    if (!list) return;

    list.innerHTML = `
      <li>Email: <a href="mailto:${(content.contact || {}).email}">${(content.contact || {}).email}</a></li>
      <li>GitHub: <a href="${(content.contact || {}).github}" target="_blank" rel="noreferrer">${(content.contact || {}).github}</a></li>
      <li>Location: ${(content.contact || {}).location}</li>
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

  function renderGallerySlider(project) {
    const gallery = (project.gallery || []).filter((item) => {
      const source = typeof item === "string" ? item : item?.src || "";
      return !!source && source.trim();
    });

    if (!gallery.length) return "";

    const titleSlug = (project.title || "project")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "project";

    const cards = gallery
      .map((item, index) => {
        const source = typeof item === "string" ? item : item?.src || "";
        const title = `${project.title} image ${index + 1}`;
        return `
          <button class="gallery-card" type="button" data-src="${source}" data-index="${index}" aria-label="${title}">
            <img src="${source}" alt="${title}" />
          </button>
        `;
      })
      .join("");

    return `
      <div class="gallery-bank" id="gallery-bank-${titleSlug}" data-project="${project.title}">
        <div class="gallery-slider-header">
          <h3>Gallery</h3>
          <div class="gallery-nav">
            <button type="button" class="gallery-arrow prev" aria-label="Previous images">&#10094;</button>
            <button type="button" class="gallery-arrow next" aria-label="Next images">&#10095;</button>
          </div>
        </div>
        <div class="gallery-bank-track">${cards}</div>
      </div>
    `;
  }

  function buildLightboxMarkup() {
    return `
      <div class="gallery-lightbox" id="gallery-lightbox" aria-hidden="true">
        <button type="button" class="lightbox-close" aria-label="Close image">&times;</button>
        <button type="button" class="lightbox-arrow prev" aria-label="Previous image">&#10094;</button>
        <div class="lightbox-frame">
          <div class="lightbox-media"></div>
        </div>
        <button type="button" class="lightbox-arrow next" aria-label="Next image">&#10095;</button>
      </div>
    `;
  }

  function openLightbox(bank, currentIndex) {
    const cards = [...bank.querySelectorAll(".gallery-card")];
    if (!cards.length) return;

    const lightbox = document.getElementById("gallery-lightbox");
    if (!lightbox) return;

    const safeIndex = ((currentIndex % cards.length) + cards.length) % cards.length;
    const activeCard = cards[safeIndex];
    const mediaWrap = lightbox.querySelector(".lightbox-media");
    if (!mediaWrap) return;

    const source = activeCard?.dataset.src || "";
    lightbox.dataset.bankId = bank.id;
    lightbox.dataset.index = String(safeIndex);

    if (isVideoSource(source)) {
      mediaWrap.innerHTML = `<video src="${source}" controls playsinline autoplay></video>`;
    } else {
      mediaWrap.innerHTML = `<img src="${source}" alt="${bank.dataset.project || "Project image"}" />`;
    }

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    const lightbox = document.getElementById("gallery-lightbox");
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  function setupGalleryBank() {
    const banks = document.querySelectorAll(".gallery-bank");
    if (!banks.length) return;

    banks.forEach((bank) => {
      const track = bank.querySelector(".gallery-bank-track");
      const prevButton = bank.querySelector(".gallery-arrow.prev");
      const nextButton = bank.querySelector(".gallery-arrow.next");
      const cards = [...bank.querySelectorAll(".gallery-card")];

      if (!track || !cards.length) return;

      const scrollAmount = () => {
        const firstCard = cards[0];
        if (!firstCard) return 220;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || "16");
        return firstCard.getBoundingClientRect().width + gap;
      };

      prevButton?.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
      });

      nextButton?.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
      });

      cards.forEach((card) => {
        card.addEventListener("click", () => openLightbox(bank, Number(card.dataset.index || 0)));
      });
    });

    const lightbox = document.getElementById("gallery-lightbox");
    if (!lightbox) {
      document.body.insertAdjacentHTML("beforeend", buildLightboxMarkup());
    }

    const galleryLightbox = document.getElementById("gallery-lightbox");
    if (!galleryLightbox) return;

    galleryLightbox.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);

    galleryLightbox.addEventListener("click", (event) => {
      if (event.target === galleryLightbox) {
        closeLightbox();
      }
    });

    galleryLightbox.querySelector(".lightbox-arrow.prev")?.addEventListener("click", () => {
      const bank = document.getElementById(galleryLightbox.dataset.bankId || "");
      if (!bank) return;
      const cards = [...bank.querySelectorAll(".gallery-card")];
      if (!cards.length) return;
      const currentIndex = Number(galleryLightbox.dataset.index || 0);
      openLightbox(bank, currentIndex - 1);
    });

    galleryLightbox.querySelector(".lightbox-arrow.next")?.addEventListener("click", () => {
      const bank = document.getElementById(galleryLightbox.dataset.bankId || "");
      if (!bank) return;
      const cards = [...bank.querySelectorAll(".gallery-card")];
      if (!cards.length) return;
      const currentIndex = Number(galleryLightbox.dataset.index || 0);
      openLightbox(bank, currentIndex + 1);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") {
        const bank = document.getElementById(galleryLightbox.dataset.bankId || "");
        if (!bank) return;
        const currentIndex = Number(galleryLightbox.dataset.index || 0);
        openLightbox(bank, currentIndex + 1);
      }
      if (event.key === "ArrowLeft") {
        const bank = document.getElementById(galleryLightbox.dataset.bankId || "");
        if (!bank) return;
        const currentIndex = Number(galleryLightbox.dataset.index || 0);
        openLightbox(bank, currentIndex - 1);
      }
    });
  }

  function renderProjectDetail() {
    const container = document.querySelector("#project-detail");
    if (!container) return;

    const content = window.siteContent || window.FALLBACK_CONTENT || { projects: [] };
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id");
    const project = (Array.isArray(content.projects) ? content.projects : []).find((item) => item.id === projectId) || (Array.isArray(content.projects) ? content.projects[0] : null);

    if (!project) return;

    const primaryMedia = project.video
      ? `<div class="project-detail-media"><video src="${project.video}" controls playsinline aria-label="${project.title} video"></video></div>`
      : project.image
        ? `<div class="project-detail-media"><img src="${project.image}" alt="${project.title}" /></div>`
        : "";

    const tags = (project.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
    const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
    const galleryMarkup = renderGallerySlider(project);

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

        ${galleryMarkup ? `${galleryMarkup}` : ""}
      </article>
    `;

    setupGalleryBank();
  }

  if (document.querySelector("#projects-grid")) {
    renderProjects();
  }

  if (document.querySelector("#featured-projects")) {
    renderFeaturedProjects();
  }

  if (document.querySelector("#about-copy") || document.querySelector("#home-about-copy")) {
    renderAbout();
  }

  if (document.querySelector("#contact-list")) {
    renderContact();
  }

  if (document.querySelector("#project-detail")) {
    renderProjectDetail();
  }
});
