const FALLBACK_CONTENT = {
  profile: {
    name: "Enzo Garcia",
    intro: "I’m a CAD-certified designer and maker with hands-on experience in machining, robotics, and rapid prototyping."
  },
  about: {
    blurb: "I’m a CAD-certified Fusion user with experience in machining, including 3D printing, laser cutting, and CNC work. I also serve as a seasoned FRC robotics team leader, helping turn ide[...]
    skills: [
      "CAD Certified (Fusion)",
      "Experienced in machining (3D printers, laser cutting, CNC)",
      "Seasoned FRC robotics team leader"
    ]
  },
  projects: [
    {
      id: "Attending Artemis II",
      title: "Attending Artemis II",
      summary: "I recently got to attend the launch of the ARTEMIS II mission on the SLS rocket. A once in a lifetime experience, I still remember the trembling ground.",
      details: "Attending the Artemis II launch and how it gave me a new perspective, literally.",
      longDescription: "It all started during that first discussion with the other members of the newly founded Aerospace Club. While planning out the future of our club, we were certain in our ne[...]
      tags: ["Rocketry", "EVENT", "INSPIRATION"],
      image: "Assets/Images/home/artemis-ii-1.jpg",
      video: "",
      pdf: "",
      link: "",
      highlights: [
        "Launch experience",
        "SLS rocket",
        "Once-in-a-lifetime experience"
      ],
      gallery: [
        "Assets/Images/home/artemis-ii-1.jpg",
        "Assets/Images/home/artemis-ii-2.jpg",
        "Assets/Images/home/artemis-ii-3.jpg"
      ]
    },
    {
      id: "project-two",
      title: "Project Two",
      summary: "An interactive prototype for showcasing work, hobbies, or creative ideas in a more engaging way.",
      details: "Built to be easy to update whenever more content or media gets added.",
      longDescription: "Project Two brings more interaction into the portfolio by giving the project a richer, more dynamic presentation. It is built to be easy to maintain and gives you room to a[...]
      tags: ["JavaScript", "UI", "Responsive"],
      image: "",
      video: "",
      pdf: "",
      link: "",
      highlights: ["Interactive layout", "Flexible content updates", "User-friendly presentation"],
      gallery: []
    },
    {
      id: "project-three",
      title: "Project Three",
      summary: "A presentation-style page for a class project, concept, or final deliverable.",
      details: "This format makes it easy to add images, links, and research summaries in one place.",
      longDescription: "Project Three is designed for a capstone, class assignment, or portfolio showcase where a bit more explanation is needed. The page structure supports supporting text, media[...]
      tags: ["Portfolio", "HTML", "Presentation"],
      image: "",
      video: "",
      pdf: "",
      link: "",
      highlights: ["Presentation layout", "Supports media and text", "Great for class projects"],
      gallery: []
    }
  ],
  contact: {
    email: "ejgarcia@belenwolverines.org",
    github: "https://github.com/yourusername",
    location: "Miami, FL"
  }
};

window.FALLBACK_CONTENT = FALLBACK_CONTENT;
window.siteContent = window.siteContent || FALLBACK_CONTENT;

const content = window.siteContent;

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

  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

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

  target.innerHTML = content.projects.map(createProjectCard).join("");
}

function renderFeaturedProjects() {
  const target = document.querySelector("#featured-projects");
  if (!target) return;

  const featured = content.projects.slice(0, 3);
  target.innerHTML = featured.map(createProjectCard).join("");
}

function renderAbout() {
  const aboutTarget = document.querySelector("#about-copy");
  if (aboutTarget) {
    aboutTarget.textContent = content.about.blurb;
  }

  const skillList = document.querySelector("#skills-list");
  if (skillList) {
    skillList.innerHTML = content.about.skills.map((skill) => `<li>${skill}</li>`).join("");
  }

  const homeAbout = document.querySelector("#home-about-copy");
  if (homeAbout) {
    homeAbout.textContent = content.about.blurb;
  }

  const homeSkills = document.querySelector("#home-skills");
  if (homeSkills) {
    homeSkills.innerHTML = content.about.skills.map((skill) => `<li>${skill}</li>`).join("");
  }
}

function renderContact() {
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

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = content.projects.find((item) => item.id === projectId) || content.projects[0];

  const primaryMedia = project.video
    ? `<div class="project-detail-media"><video src="${project.video}" controls playsinline aria-label="${project.title} video"></video></div>`
    : project.image
      ? `<div class="project-detail-media"><img src="${project.image}" alt="${project.title}" /></div>`
      : "";

  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
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

function setupMobileNav() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  renderProjects();
  renderFeaturedProjects();
  renderAbout();
  renderContact();
  renderProjectDetail();
});
