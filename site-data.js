const FALLBACK_CONTENT = {
  profile: {
    name: "Enzo Garcia",
    intro: "Hi, I'm a student at Belen Jesuit Preparatory School and an aspiring engineer, with a interest in all things Aerospace related."
  },
  about: {
    blurb: "Coming soon...",
    skills: [
      "CAD & DESIGN: Autodesk Fusion, 3D Modeling mechanical, Aerospace, and part Assemblies. Design for 3D printing, laser cutting and various other kinds of manufacturing. Technical/Engineering drawings and dimensioning, GD&T, DFMA, Iterative Prototyping.",
      "PROTOTYPING & MANUFACTURING: FDM 3D printing, Prototype fabrication, Component assembly, Material selection, Design iteration and troubleshooting, basic manufacturing workflows.",
      "AEROSPACE & FLIGHT PROJECTS: Model rocketry, Rocket assembly and testing, Basic aerodynamics, Wing and fueselage construction, Flight testing and performance evaluation.",
      "ROBOTICS & ENGINEERING: FTC/FRC robotics, Robot component design Mechanical integration, Assembly and testing, collaborative engineering, design and troubleshooting.",
      "PROGRAMMING & TECHNICAL TOOLS: Fluency in JavaScript, CSS, HTML, and other programming languages. Technical problem-solving, Basic electronics, Engineering Software, Data Collection and Analyisis."
    ]
  },
  projects: [
    {
      id: "Attending Artemis II",
      title: "Attending Artemis II",
      summary: "I recently got to attend the launch of the ARTEMIS II mission on the SLS rocket. A once in a lifetime experience, I still remember the ground trembling.",
      details: "Attending the Artemis II launch and how it gave me a new perspective, literally. Note: All pictures were taken by me or affiliates of the Belen Aerospace club.",
      longDescription: "It all started in the early stages of junior year. The newly formed Belen Aerospace Club had a competition to compete in, it had its workspace, it had a monthly launch schedule, but it was missing something... We knew from very early on that we wanted the club to stand out from the rest. Many of our members(including me) came from the Belen Robotics club, and we knew that the club would likely die out if we didn't distinguish it through something. After all, Robotics had its own competition already, that would likely take our members time. We wanted to show how the field of Aerospace is much more than the same mechanical/electrical focus of robotics. I especially took note of this, and began coordinating a project with a few other clubmates. I knew from watching launches on Spacex streams of their launches how thrilling watching a real time launch could be. I suggested we watch videos and or streams of launches during club meetings, or even while working on our projects. However it didn't take me long to realize a much larger ambition, something that would set a club tradition for far into the future. Before I could finish presenting the idea to the rest of the club, I casually mentioned how we could possibly even see a real launch. Much to my surprise this idea suddenly became central. We quickly coordinated a project to find launches we could attend that year. At first, I was quick to suggest attending a routine starlink launch out of the Cape, which at this point was happening almost every day. However, scheduling quickly became an issue. SpaceX launches happened so fast it was hard to pinpoint dates, or times for us to meet. We knew the day-long drive would need a much larger and important launch to give us the time we needed. We knew of Artemis II and a couple other launches scheduled for that year. At first Artemis II's date didn't work out for the group: Other activities, projects, or tests were scheduled precisely on its launch date. However many of the other launches for the next months also conflicted with schedules or were changing too often. However this would prove fortunate for us, as by spring of that year, we had been given a second chance at the Artemis II launch. It had been delayed twice, and its new schedule had perfectly aligned with the clubs, with April 1st being the launch date. In this highly fortunate turn of events, combined with a progression in our launch tracking abilities, we were able to plan out the trip. This was amazing to us, our struggles to even find a launch met with the most important of the whole year. For context, Artemis II was set to be the first crewed flight back to the Moon by NASA in 50 years! We left early that April 1st morning, and untrue to the holiday, the launch would not prank us that afternoon. As we arrived, we began to set up viewing equipment like telescopes and cameras. It was to our surprise that many people began to approach and ask to see through our equipment. One group had come from as far as India and told us their story, traveling all the way to America just to watch this launch. It was great meeting so many people, and getting to share in our passion for the space frontier. While I had never gotten to see a rocket from an in person perspective before, I think meeting all those people sharing that common interest with us was the most important new perspective I saw.",
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
        "Assets/Images/home/artemis-ii-2.jpg",
        "Assets/Images/home/artemis-ii-4.jpg",
        "Assets/Images/home/Me.jpg",
        "Assets/Images/home/artemis-ii-3.jpg"
      ]
    },
    {
      id: "project-two",
      title: "Project Two",
      summary: "An interactive prototype for showcasing work, hobbies, or creative ideas in a more engaging way.",
      details: "Built to be easy to update whenever more content or media gets added.",
      longDescription: "Project Two brings more interaction into the portfolio by giving the project a richer, more dynamic presentation. It is built to be easy to maintain and gives you room to add work without restructuring the page.",
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
      longDescription: "Project Three is designed for a capstone, class assignment, or portfolio showcase where a bit more explanation is needed. The page structure supports supporting text, media, and project context in one clean layout.",
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
