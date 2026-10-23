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
      title: "Project One",
      summary: "A clean landing page concept designed to highlight a personal brand or portfolio story.",
      details: "This project focuses on layout, hierarchy, and polished visual spacing.",
      tags: ["HTML", "CSS", "Design"],
      image: "",
      pdf: "",
      link: ""
    },
    {
      title: "Project Two",
      summary: "An interactive prototype for showcasing work, hobbies, or creative ideas in a more engaging way.",
      details: "Built to be easy to update whenever more content or media gets added.",
      tags: ["JavaScript", "UI", "Responsive"],
      image: "",
      pdf: "",
      link: ""
    },
    {
      title: "Project Three",
      summary: "A presentation-style page for a class project, concept, or final deliverable.",
      details: "This format makes it easy to add images, links, and research summaries in one place.",
      tags: ["Portfolio", "HTML", "Presentation"],
      image: "",
      pdf: "",
      link: ""
    }
  ],
  contact: {
    email: "you@example.com",
    github: "https://github.com/yourusername",
    location: "Miami, FL"
  }
};

const content = window.siteContent || FALLBACK_CONTENT;

function createProjectCard(project) {
  const media = project.image
    ? `<div class="project-media"><img src="${project.image}" alt="${project.title}" /></div>`
    : "";

  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  const pdfButton = project.pdf
    ? `<a class="secondary-button" href="${project.pdf}" target="_blank" rel="noreferrer">View PDF</a>`
    : "";

  const linkButton = project.link
    ? `<a class="secondary-button" href="${project.link}" target="_blank" rel="noreferrer">Open</a>`
    : "";

  return `
    <article class="project-card">
      ${media}
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        ${project.details ? `<p class="project-note">${project.details}</p>` : ""}
        <div class="tag-row">${tags}</div>
        <div class="project-actions">
          ${pdfButton}
          ${linkButton}
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
});
