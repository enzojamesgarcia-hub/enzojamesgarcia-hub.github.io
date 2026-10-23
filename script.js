/* =========================================================
   MODERN PORTFOLIO THEME
   ========================================================= */

:root {
  --bg: #0f172a;
  --bg-soft: #111827;
  --surface: rgba(15, 23, 42, 0.82);
  --surface-strong: #1e293b;
  --card: #ffffff;
  --card-alt: #f8fafc;
  --text: #e2e8f0;
  --text-dark: #0f172a;
  --muted: #94a3b8;
  --primary: #7c3aed;
  --primary-strong: #a78bfa;
  --accent: #22c55e;
  --border: rgba(148, 163, 184, 0.2);
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.28);
  --radius: 22px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.33), transparent 30%),
    radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.22), transparent 26%),
    var(--bg);
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 72px 0;
}

.page-header {
  padding-top: 72px;
  padding-bottom: 32px;
}

.alt-section {
  background: rgba(15, 23, 42, 0.35);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(15, 23, 42, 0.72);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 24px;
}

.site-title {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-menu a {
  color: rgba(255, 255, 255, 0.82);
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--primary-strong);
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 4px 0;
  background: white;
}

.hero {
  padding: 88px 0 72px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.hero-copy,
.hero-card,
.project-card,
.mini-panel,
.contact-form,
.detail-page-card {
  background: rgba(15, 23, 42, 0.68);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.hero-copy {
  padding: 42px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--primary-strong);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1, h2, h3 {
  line-height: 1.15;
  margin-bottom: 12px;
}

h1 {
  font-size: clamp(2.4rem, 4vw, 4rem);
  margin-bottom: 18px;
}

h2 {
  font-size: clamp(1.8rem, 2.4vw, 2.6rem);
}

p {
  color: var(--text);
}

.hero-text,
.page-intro,
#about-copy {
  font-size: 1.08rem;
  color: rgba(226, 232, 240, 0.9);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}

.button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: 0 16px 32px rgba(124, 58, 237, 0.34);
}

.button.secondary,
.secondary-button {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}

.button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.hero-card {
  padding: 32px 28px;
}

.feature-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.feature-list li {
  position: relative;
  padding-left: 20px;
  color: rgba(226, 232, 240, 0.9);
}

.feature-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
}

.section-heading {
  margin-bottom: 28px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.project-card {
  overflow: hidden;
  background: rgba(15, 23, 42, 0.7);
}

.project-media {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(34, 197, 94, 0.2));
  min-height: 220px;
}

.project-media img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.project-body {
  padding: 22px 22px 24px;
}

.project-card h3 {
  margin-bottom: 8px;
  font-size: 1.5rem;
}

.project-card p {
  color: rgba(226, 232, 240, 0.88);
}

.project-note {
  margin-top: 12px;
  color: var(--muted);
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.38rem 0.8rem;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(167, 139, 250, 0.35);
  color: var(--primary-strong);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.split-layout,
.narrow-layout {
  display: grid;
  gap: 28px;
}

.split-layout {
  grid-template-columns: 1.2fr 0.8fr;
  align-items: start;
}

.narrow-layout {
  max-width: 760px;
}

.mini-panel {
  padding: 26px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.chip-list li {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.55rem 0.85rem;
  background: rgba(255, 255, 255, 0.02);
  color: rgba(226, 232, 240, 0.9);
}

.info-list {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}

.info-list li {
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.55);
}

.info-list a {
  color: var(--primary-strong);
}

.contact-form {
  padding: 26px;
}

label {
  display: block;
  margin: 16px 0 8px;
  color: rgba(226, 232, 240, 0.9);
  font-weight: 700;
}

input,
textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.5);
  color: white;
}

input::placeholder,
textarea::placeholder {
  color: rgba(148, 163, 184, 0.9);
}

.contact-form .button {
  margin-top: 20px;
  border: none;
  width: 100%;
  cursor: pointer;
}

.site-footer {
  padding: 28px 0 48px;
  color: var(--muted);
  text-align: center;
}

.featured-project {
  padding: 20px;
}

.detail-page-card {
  overflow: hidden;
  padding: 24px;
}

.detail-page-header {
  margin-bottom: 24px;
}

.project-detail-media {
  margin-bottom: 22px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.project-detail-media img {
  width: 100%;
  height: 340px;
  object-fit: cover;
}

.detail-copy {
  display: grid;
  gap: 18px;
}

.detail-panel {
  margin-top: 8px;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin-top: 26px;
}

.gallery-grid img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid var(--border);
}

@media (max-width: 760px) {
  .hero-grid,
  .split-layout {
    grid-template-columns: 1fr;
  }

  .nav-menu {
    position: absolute;
    left: 16px;
    right: 16px;
    top: 76px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 18px;
    background: rgba(15, 23, 42, 0.96);
    border: 1px solid var(--border);
    border-radius: 18px;
  }

  .nav-menu.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .hero-copy,
  .hero-card,
  .mini-panel,
  .contact-form,
  .detail-page-card {
    padding: 22px 18px;
  }

  .section {
    padding: 56px 0;
  }
}
