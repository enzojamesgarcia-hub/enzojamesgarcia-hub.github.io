const FALLBACK_CONTENT = {
  profile: {
    name: "Enzo Garcia",
    intro: "Hi, I'm a student at Belen Jesuit Preparatory School and an aspiring engineer with an interest in all things aerospace-related."
  },
  about: {
    blurb: "I'm Enzo Garcia, a student at Belen Jesuit Preparatory School with a strong interest in aerospace and mechanical engineering. My interest in engineering comes from a desire to understand how things work and use that understanding to create something of my own. To create things from creation, to understand creation. Through robotics, CAD, 3D printing, and aerospace projects, I've developed hands-on experience turning ideas into functional designs. As a co-founder of my school's Aerospace Club, I've helped design, build, and test rockets and model aircraft while collaborating with other students to bring projects to life.I'm particularly interested in the engineering behind aerospace vehicles: how they're designed, how their components work together, and how theoretical ideas translate into real-world performance. I enjoy the process of taking a concept from an initial design through fabrication, testing, and refinement.I'm continuing to develop my technical skills and explore new challenges as I work toward a future in aerospace engineering.",
    skills: [
      "CAD & DESIGN: Autodesk Fusion, 3D modeling for mechanical, aerospace, and part assemblies. Design for 3D printing, laser cutting, and other manufacturing workflows.",
      "PROTOTYPING & MANUFACTURING: FDM 3D printing, prototype fabrication, component assembly, material selection, design iteration, troubleshooting, and basic manufacturing workflows.",
      "AEROSPACE & FLIGHT PROJECTS: Model rocketry, rocket assembly and testing, basic aerodynamics, wing and fuselage construction, and flight testing and performance evaluation.",
      "ROBOTICS & ENGINEERING: FTC/FRC robotics, robot component design, mechanical integration, assembly and testing, collaborative engineering, and design troubleshooting.",
      "PROGRAMMING & TECHNICAL TOOLS: Fluency in JavaScript, CSS, HTML, and other programming languages. Technical problem-solving, basic electronics, engineering software, and data collection and analysis."
    ]
  },
  projects: [
    {
      id: "Attending Artemis II",
      title: "Attending Artemis II",
      summary: "I recently got to attend the launch of the ARTEMIS II mission on the SLS rocket. A once in a lifetime experience, I still remember the ground trembling.",
      details: "Attending the Artemis II launch and how it gave me a new perspective, literally. Note: All pictures were taken by me or affiliates of the Belen Aerospace club.",
      longDescription: "It all started in the early stages of junior year. The newly formed Belen Aerospace Club had a competition to compete in, it had its workspace, it had a monthly launch schedule, and it gave us the opportunity to learn, build, and grow. Attending the Artemis II launch was a defining moment for me and gave me a new perspective on space exploration and engineering.",
      tags: ["Rocketry", "EVENT", "INSPIRATION"],
      image: "Assets/Images/home/artemis-ii-1.jpg",
      video: "",
      pdf: "",
      link: "",
      highlights: [
        "Inspirational Experience",
        "SLS Rocket",
        "New Perspectives"
      ],
      gallery: [
        "Assets/Images/home/artemis-ii-1.jpg",
        "Assets/Images/home/Me.jpg",
        "Assets/Images/home/artemis-ii-2.jpg",
        "Assets/Images/home/artemis-ii-4.jpg",
        "Assets/Images/home/artemis-ii-6.jpg",
        "Assets/Images/home/artemis-ii-3.jpg"
      ]
    },
    {
      id: "project-two",
      title: "Project Two",
      summary: "An interactive prototype for showcasing work, hobbies, or creative ideas in a more engaging way.",
      details: "Built to be easy to update whenever more content or media gets added.",
      longDescription: "Project Two brings more interaction into the portfolio by giving the project a richer, more dynamic presentation. It is built to be easy to maintain and gives you room to add content as the project develops.",
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
      longDescription: "Project Three is designed for a capstone, class assignment, or portfolio showcase where a bit more explanation is needed. The page structure supports supporting text, media, and project details in a clean presentation layout.",
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
    github: "https://github.com/enzojamesgarcia",
    location: "Miami, FL"
  }
};

window.FALLBACK_CONTENT = FALLBACK_CONTENT;
window.siteContent = window.siteContent || FALLBACK_CONTENT;

const content = window.siteContent || FALLBACK_CONTENT;

function buildProjectLink(project) {
  if (project && project.id) {
    return `project.html?id=${encodeURIComponent(project.id)}`;
  }
  return project && project.link ? project.link : "#";
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

function getProjects() {
  return Array.isArray(content.projects) ? content.projects : FALLBACK_CONTENT.projects;
}

function renderProjects() {
  const target = document.querySelector("#projects-grid");
  if (!target) return;

  target.innerHTML = getProjects().map(createProjectCard).join("");
}

function renderFeaturedProjects() {
  const target = document.querySelector("#featured-projects");
  if (!target) return;

  const featured = getProjects().slice(0, 3);
  target.innerHTML = featured.map(createProjectCard).join("");
}

function renderAbout() {
  const aboutData = content.about || FALLBACK_CONTENT.about;

  const aboutTarget = document.querySelector("#about-copy");
  if (aboutTarget) {
    aboutTarget.textContent = aboutData.blurb;
  }

  const skillList = document.querySelector("#skills-list");
  if (skillList) {
    skillList.innerHTML = (aboutData.skills || []).map((skill) => `<li>${skill}</li>`).join("");
  }

  const homeAbout = document.querySelector("#home-about-copy");
  if (homeAbout) {
    homeAbout.textContent = aboutData.blurb;
  }

  const homeSkills = document.querySelector("#home-skills");
  if (homeSkills) {
    homeSkills.innerHTML = (aboutData.skills || []).map((skill) => `<li>${skill}</li>`).join("");
  }
}

function renderContact() {
  const contactData = content.contact || FALLBACK_CONTENT.contact;
  const list = document.querySelector("#contact-list");
  if (!list) return;

  list.innerHTML = `
    <li>Email: <a href="mailto:${contactData.email}">${contactData.email}</a></li>
    <li>GitHub: <a href="${contactData.github}" target="_blank" rel="noreferrer">${contactData.github}</a></li>
    <li>Location: ${contactData.location}</li>
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
  const projects = getProjects();
  const project = projects.find((item) => item.id === projectId) || projects[0];

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

window.siteContent = content;
window.FALLBACK_CONTENT = FALLBACK_CONTENT;

window.renderProjects = renderProjects;
window.renderFeaturedProjects = renderFeaturedProjects;
window.renderAbout = renderAbout;
window.renderContact = renderContact;
window.renderProjectDetail = renderProjectDetail;

if (document.readyState !== "loading") {
  setupMobileNav();
  renderProjects();
  renderFeaturedProjects();
  renderAbout();
  renderContact();
  renderProjectDetail();
}
