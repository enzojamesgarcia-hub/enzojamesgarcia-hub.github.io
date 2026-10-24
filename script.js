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

  function renderMediaItem(item, projectTitle, index = 0, isActive = false) {
    const source = typeof item === "string" ? item : item?.src || "";
    if (!source || !source.trim()) return "";

    const label = projectTitle ? `${projectTitle} media ${index + 1}` : `Project media ${index + 1}`;

    if (isVideoSource(source)) {
      return `<button class="gallery-slide ${isActive ? "is-active" : ""}" type="button" data-src="${source}" data-index="${index}" aria-label="${label}"><video class="gallery-media" src="${source}" controls playsinline aria-label="${label}"></video></button>`;
    }

    return `<button class="gallery-slide ${isActive ? "is-active" : ""}" type="button" data-src="${source}" data-index="${index}" aria-label="${label}"><img src="${source}" alt="${label}" /></button>`;
  }

  function renderGallerySlider(project) {
    const gallery = (project.gallery || []).filter((item) => {
      const source = typeof item === "string" ? item : item?.src || "";
      return !!source && source.trim();
    });

    if (!gallery.length) return "";

    const slides = gallery
      .map((item, index) => renderMediaItem(item, project.title, index, index === 0))
      .join("");

    const thumbs = gallery
      .map((item, index) => {
        const source = typeof item === "string" ? item : item?.src || "";
        if (!source || !source.trim()) return "";
        const thumbLabel = `${project.title} thumbnail ${index + 1}`;
        return `<button class="gallery-thumb ${index === 0 ? "is-active" : ""}" type="button" data-index="${index}" aria-label="${thumbLabel}"><img src="${source}" alt="${thumbLabel}" /></button>`;
      })
      .join("");

    return `
      <div class="gallery-slider" data-project="${project.title}">
        <div class="gallery-slider-header">
          <h3>Gallery</h3>
          <div class="gallery-nav">
            <button type="button" class="gallery-arrow prev" aria-label="Previous image">&#10094;</button>
            <button type="button" class="gallery-arrow next" aria-label="Next image">&#10095;</button>
          </div>
        </div>
        <div class="gallery-stage">${slides}</div>
        <div class="gallery-thumbs">${thumbs}</div>
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

  function openLightbox(slider, nextIndex) {
    const slides = [...slider.querySelectorAll(".gallery-slide")];
    if (!slides.length) return;

    const lightbox = document.getElementById("gallery-lightbox");
    if (!lightbox) return;

    const targetIndex = (nextIndex + slides.length) % slides.length;
    const activeSlide = slides[targetIndex];
    const source = activeSlide?.dataset.src || "";
    const mediaWrap = lightbox.querySelector(".lightbox-media");
    if (!mediaWrap) return;

    lightbox.dataset.index = String(targetIndex);
    lightbox.dataset.sliderSelector = ".gallery-slider[data-project=\"" + slider.dataset.project + "\"]";

    if (isVideoSource(source)) {
      mediaWrap.innerHTML = `<video src="${source}" controls playsinline autoplay></video>`;
    } else {
      mediaWrap.innerHTML = `<img src="${source}" alt="${slider.dataset.project || "Project image"}" />`;
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

  function setupGallerySlider() {
    const sliders = document.querySelectorAll(".gallery-slider");
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      const slides = [...slider.querySelectorAll(".gallery-slide")];
      const thumbs = [...slider.querySelectorAll(".gallery-thumb")];
      const prevButton = slider.querySelector(".gallery-arrow.prev");
      const nextButton = slider.querySelector(".gallery-arrow.next");

      if (!slides.length) return;

      let currentIndex = 0;

      const showSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("is-active", slideIndex === currentIndex);
        });
        thumbs.forEach((thumb, thumbIndex) => {
          thumb.classList.toggle("is-active", thumbIndex === currentIndex);
        });
      };

      prevButton?.addEventListener("click", () => showSlide(currentIndex - 1));
      nextButton?.addEventListener("click", () => showSlide(currentIndex + 1));

      thumbs.forEach((thumb, thumbIndex) => {
        thumb.addEventListener("click", () => showSlide(thumbIndex));
      });

      slides.forEach((slide) => {
        slide.addEventListener("click", () => openLightbox(slider, Number(slide.dataset.index || 0)));
      });

      showSlide(0);
    });

    const lightbox = document.getElementById("gallery-lightbox");
    if (!lightbox) {
      document.body.insertAdjacentHTML("beforeend", buildLightboxMarkup());
    }

    const galleryLightbox = document.getElementById("gallery-lightbox");
    if (!galleryLightbox) return;

    const closeButton = galleryLightbox.querySelector(".lightbox-close");
    closeButton?.addEventListener("click", closeLightbox);

    galleryLightbox.addEventListener("click", (event) => {
      if (event.target === galleryLightbox) {
        closeLightbox();
      }
    });

    const lightboxPrev = galleryLightbox.querySelector(".lightbox-arrow.prev");
    const lightboxNext = galleryLightbox.querySelector(".lightbox-arrow.next");

    lightboxPrev?.addEventListener("click", () => {
      const activeSlider = document.querySelector(".gallery-slider");
      if (!activeSlider) return;
      const slides = [...activeSlider.querySelectorAll(".gallery-slide")];
      if (!slides.length) return;
      const currentIndex = Number(galleryLightbox.dataset.index || 0);
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
      openLightbox(activeSlider, nextIndex);
    });

    lightboxNext?.addEventListener("click", () => {
      const activeSlider = document.querySelector(".gallery-slider");
      if (!activeSlider) return;
      const slides = [...activeSlider.querySelectorAll(".gallery-slide")];
      if (!slides.length) return;
      const currentIndex = Number(galleryLightbox.dataset.index || 0);
      const nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
      openLightbox(activeSlider, nextIndex);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") {
        const activeSlider = document.querySelector(".gallery-slider");
        if (!activeSlider) return;
        const currentIndex = Number(galleryLightbox.dataset.index || 0);
        openLightbox(activeSlider, currentIndex + 1);
      }
      if (event.key === "ArrowLeft") {
        const activeSlider = document.querySelector(".gallery-slider");
        if (!activeSlider) return;
        const currentIndex = Number(galleryLightbox.dataset.index || 0);
        openLightbox(activeSlider, currentIndex - 1);
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

    setupGallerySlider();
  }

  renderProjects();
  renderFeaturedProjects();
  renderAbout();
  renderContact();
  renderProjectDetail();
});
