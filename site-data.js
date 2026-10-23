const FALLBACK_CONTENT = {
  profile: {
    name: "Enzo Garcia",
    intro: "I build clean, responsive web experiences and like turning simple ideas into polished, easy-to-use sites."
  },
  about: {
    blurb: "I'm a student and aspiring developer based in South Florida. I enjoy learning how to turn ideas into polished web experiences that feel simple, modern, and easy to navigate.",
    skills: ["HTML & CSS", "JavaScript", "Responsive design", "GitHub Pages", "UI/UX basics", "Project storytelling"]
  },
  projects: [
    {
      id: "Watchinng Artemis II",
      title: "Watchinng Artemis II",
      summary: "I recently got to watch the launch of the ARTEMIS II mission on the SLS rocket. A once in a lifetime experience, I still remember the trembling ground.",
      details: "Attending the Artemis II Laucnh and how it gave me new perspective, litteraly.",
      longDescription: ",
      tags: ["TRIP", "EVENT", "INSPIRATION"],
      image: "Assets/Images/home/artemis-ii.jpg",
      pdf: "",
      link: "",
      highlights: ["Club development and coordination", "Inspiring Experience", "Rocketry"],
      gallery: []
    },
    {
      id: "project-two",
      title: "Project Two",
      summary: "An interactive prototype for showcasing work, hobbies, or creative ideas in a more engaging way.",
      details: "Built to be easy to update whenever more content or media gets added.",
      longDescription: "Project Two brings more interaction into the portfolio by giving the project a richer, more dynamic presentation. It is built to be easy to maintain and gives you room to add more content over time.",
      tags: ["JavaScript", "UI", "Responsive"],
      image: "",
      pdf: "",
      link: "",
      highlights: ["IWORDS", "WIORDS", "WORDS"],
      gallery: []
    },
    {
      id: "project-three",
      title: "Project Three",
      summary: "A presentation-style page for a class project, concept, or final deliverable.",
      details: "This format makes it easy to add images, links, and research summaries in one place.",
      longDescription: "Project Three is designed for a capstone, class assignment, or portfolio showcase where a bit more explanation is needed. The page structure supports supporting text, media, and a clean, readable layout for classroom or presentation work.",
      tags: ["Portfolio", "HTML", "Presentation"],
      image: "",
      pdf: "",
      link: "",
      highlights: ["Presentation layout", "Supports media and text", "Great for class projects"],
      gallery: []
    }
  ],
  contact: {
    email: "you@example.com",
    github: "https://github.com/yourusername",
    location: "Miami, FL"
  }
};

const content = window.siteContent || FALLBACK_CONTENT;

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

function renderProjectDetail() {
  const container = document.querySelector("#project-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = content.projects.find((item) => item.id === projectId) || content.projects[0];

  const media = project.image
    ? `<div class="project-detail-media"><img src="${project.image}" alt="${project.title}" /></div>`
    : "";

  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
  const gallery = (project.gallery || []).map((item) => `<img src="${item}" alt="${project.title} gallery item" />`).join("");
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

      ${media}

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
