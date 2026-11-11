(() => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const aboutFacts = [
    ["Based in", "Injibara, Ethiopia"],
    ["Current focus", "Web products & practical tools"],
    ["Learning", "Software engineering & product thinking"],
    ["Goal", "Build useful experiences for real people"]
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/AbelGit33", icon: "GH" },
    { label: "YouTube", url: "https://www.youtube.com/@abel-k3", icon: "YT" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tesfahun-abebe-3a2928395", icon: "in" },
    { label: "Telegram", url: "https://t.me/+251970862975", icon: "TG" }
  ];

  const skillsByGroup = [
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Accessibility"] },
    { title: "Backend & Tools", items: ["Node.js", "APIs", "Git & GitHub", "UI/UX Thinking", "Problem Solving"] },
    { title: "Product & Learning", items: ["Wireframing", "Rapid prototyping", "User testing", "Product iteration", "Documentation"] }
  ];

  const projectData = [
    {
      name: "Department Selection Guide",
      category: "AI / Education",
      description: "A guide that helps students compare departments, understand options, and make better academic decisions.",
      tags: ["AI", "EdTech", "UX", "Web"],
      link: "https://dept-selection-guide.vercel.app/",
      featured: true 
    },
    {
      name: "EthioExamHub",
      category: "Telegram Bot",
      description: "A practical exam-prep bot built to help students study and navigate important learning resources more efficiently.",
      tags: ["Bots", "Learning", "Automation", "Telegram"],
      link: "https://t.me/Entrance00_bot",
      featured: false
    },
    {
      name: "Portfolio Website",
      category: "Personal Brand",
      description: "A modern personal portfolio that showcases projects, background, and contact information in a clean editorial style.",
      tags: ["Portfolio", "Design", "Responsive", "Web"],
      link: "#home",
      featured: false
    },
    {
      name: "Developer Toolkit",
      category: "Productivity",
      description: "Tools and workflows that help simplify routine tasks, reduce friction, and make ideas easier to turn into useful products.",
      tags: ["Tools", "Process", "Productivity", "Web"],
      link: "#projects",
      featured: false
    }
  ];

  const timelineEntries = [
    { year: "2024 — Present", title: "Software Engineering Student", meta: "Injibara University", text: "Building projects, exploring modern web workflows, and learning how to turn ideas into practical digital experiences." },
    { year: "2023", title: "Web Development Learning", meta: "Self-driven practice", text: "Focused on HTML, CSS, JavaScript, and product-oriented front-end work while building real examples and small tools." },
    { year: "2022", title: "Problem-solving and digital projects", meta: "Independent exploration", text: "Started creating small solutions, experimenting with user-centered design, and understanding how software can make life easier." }
  ];

  const nowCard = `
    <h3>Now</h3>
    <p>Designing and building useful digital products, improving my frontend skills, and learning how to ship ideas that solve real problems.</p>
  `;

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  function renderNav() {
    const nav = document.getElementById("navlinks");
    if (!nav) return;
    nav.innerHTML = navItems.map(item => `
      <li><a href="${item.href}">${item.label}</a></li>
    `).join("");
  }

  function renderSocial() {
    const social = document.getElementById("social");
    if (!social) return;
    social.innerHTML = socialLinks.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">${link.icon}</a>
    `).join("");
  }

  function renderAbout() {
    const aboutText = document.getElementById("aboutText");
    if (!aboutText) return;
    aboutText.innerHTML = `
      <p>I’m Tesfahun Abebe, a software engineering student who enjoys turning ideas into useful digital experiences.</p>
      <p>My work sits at the intersection of engineering, design, and practical problem-solving. I like building products that feel simple to use and genuinely helpful to people.</p>
      <p>Right now, I’m focused on developing web experiences, experimenting with product ideas, and learning how to deliver polished solutions from concept to launch.</p>
    `;

    const facts = document.getElementById("facts");
    if (facts) {
      facts.innerHTML = aboutFacts.map(([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `).join("");
    }

    const now = document.getElementById("now");
    if (now) {
      now.innerHTML = nowCard;
    }
  }

  function renderSkills() {
    const section = document.querySelector("#skills .wrap");
    if (!section) return;

    const existing = section.querySelector(".skg");
    if (existing) return;

    const grid = document.createElement("div");
    grid.className = "skg";
    grid.innerHTML = skillsByGroup.map(group => `
      <div class="sk">
        <div class="skh">
          <span class="ski">✦</span>
          <h3>${group.title}</h3>
        </div>
        <ul class="tags">
          ${group.items.map(item => `<li><span>${item}</span></li>`).join("")}
        </ul>
      </div>
    `).join("");

    const intro = section.querySelector(".section-intro");
    if (intro) {
      intro.insertAdjacentElement("afterend", grid);
    } else {
      section.appendChild(grid);
    }
  }

  function renderProjects() {
    const tabsEl = document.getElementById("tabs");
    const gridEl = document.getElementById("grid");
    if (!tabsEl || !gridEl) return;

    const filters = ["All", "AI", "Web", "Bots", "Productivity", "UX"];
    tabsEl.innerHTML = filters.map((filter, index) => `
      <button class="tab${index === 0 ? " active" : ""}" type="button" aria-pressed="${index === 0}">${filter}</button>
    `).join("");

    function buildCard(project) {
      const actions = project.link && project.link !== "#projects" ? `
        <div class="act">
          <a class="btn p s" href="${project.link}" target="${project.link.startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer">${project.featured ? "View project" : "Open"}</a>
        </div>
      ` : `<div class="act"><span class="btn p s disabled">Soon</span></div>`;

      return `
        <article class="card ${project.featured ? "feat" : ""}">
          <div class="shot">
            <span class="badge ${project.featured ? "f" : ""}">${project.featured ? "Featured · Live" : project.category}</span>
          </div>
          <div class="body">
            <div class="meta">
              <span class="eyebrow small">${project.category}</span>
              <h3>${project.name}</h3>
            </div>
            <p>${project.description}</p>
            <div class="tags">
              ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
            </div>
            ${actions}
          </div>
        </article>
      `;
    }

    const allCards = projectData.map(buildCard).join("");
    gridEl.innerHTML = allCards;

    const buttons = [...tabsEl.querySelectorAll(".tab")];
    const search = document.getElementById("projectSearch");
    const empty = document.getElementById("projectEmpty");

    function filterCards() {
      const selected = tabsEl.querySelector(".tab[aria-pressed='true']")?.textContent.trim() || "All";
      const query = (search?.value || "").toLowerCase().trim();

      const cards = [...gridEl.querySelectorAll(".card")];
      let visible = 0;

      cards.forEach(card => {
        const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const text = card.textContent.toLowerCase();
        const category = card.querySelector(".eyebrow")?.textContent.toLowerCase() || "";
        const matchesFilter = selected === "All" || category.includes(selected.toLowerCase()) || text.includes(selected.toLowerCase());
        const matchesSearch = !query || title.includes(query) || text.includes(query);
        const shouldShow = matchesFilter && matchesSearch;
        card.style.display = shouldShow ? "" : "none";
        if (shouldShow) visible += 1;
      });

      if (empty) {
        empty.hidden = visible !== 0;
      }
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => {
          const pressed = btn === button;
          btn.setAttribute("aria-pressed", String(pressed));
          btn.classList.toggle("active", pressed);
        });
        filterCards();
      });
    });

    if (search) {
      search.addEventListener("input", filterCards);
    }

    filterCards();
  }

  function renderTimeline() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;
    timeline.innerHTML = timelineEntries.map(entry => `
      <li>
        <div class="when">${entry.year}</div>
        <div class="info">
          <h3>${entry.title}</h3>
          <p class="meta">${entry.meta}</p>
          <p>${entry.text}</p>
        </div>
      </li>
    `).join("");

    const cert = document.querySelector(".cert-heading");
    if (cert) {
      const parent = cert.parentElement;
      const certCard = document.createElement("div");
      certCard.className = "cert";
      certCard.innerHTML = `
        <div class="meta">
          <span class="eyebrow">Certification</span>
          <h3>Web Development & Product Thinking</h3>
        </div>
        <p>Continuous self-learning in modern web technologies, UI craft, and effective digital product building.</p>
      `;
      cert.insertAdjacentElement("afterend", certCard);
    }
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    const copy = document.getElementById("copy");
    if (copy) {
      copy.textContent = `© ${year} Tesfahun Abebe`;
    }

    const footlinks = document.getElementById("footlinks");
    if (footlinks) {
      footlinks.innerHTML = footerLinks.map(link => `
        <li><a href="${link.href}">${link.label}</a></li>
      `).join("");
    }
  }

  function initTheme() {
    const themeButton = document.getElementById("theme");
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (themeButton) themeButton.textContent = "☀";
    }

    if (themeButton) {
      themeButton.addEventListener("click", () => {
        const dark = root.getAttribute("data-theme") === "dark";
        const next = dark ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("portfolio-theme", next);
        themeButton.textContent = next === "dark" ? "☀" : "☾";
      });
    }
  }

  function initMenu() {
    const menuButton = document.getElementById("menu");
    const nav = document.getElementById("nav");
    if (!menuButton || !nav) return;

    const toggle = () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    };

    menuButton.addEventListener("click", toggle);
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  function initReadingProgress() {
    const progress = document.getElementById("readingProgress");
    if (!progress) return;

    const fill = progress.querySelector("span");
    if (!fill) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const value = total > 0 ? (scrollTop / total) * 100 : 0;
      progress.setAttribute("aria-valuenow", String(Math.min(100, Math.max(0, value))));
      fill.style.width = `${Math.min(100, Math.max(0, value))}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initCvLinks() {
    const cvLinks = document.querySelectorAll("#cv, #cv2");
    cvLinks.forEach(link => {
      link.href = "Tesfahun_Abebe_CV.pdf";
      link.removeAttribute("hidden");
    });
  }

  function initContactForm() {
    const form = document.getElementById("form");
    if (!form) return;

    const nameInput = document.getElementById("fn");
    const emailInput = document.getElementById("fe");
    const messageInput = document.getElementById("fm");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = nameInput?.value.trim() || "";
      const email = emailInput?.value.trim() || "";
      const message = messageInput?.value.trim() || "";
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert("Please fill in your name, email, and message.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const subject = encodeURIComponent("Portfolio inquiry from " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:t3267270@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

  renderNav();
  renderSocial();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderFooter();
  initTheme();
  initMenu();
  initReadingProgress();
  initCvLinks();
  initContactForm();
})();
