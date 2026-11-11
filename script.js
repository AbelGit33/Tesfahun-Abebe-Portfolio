(() => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/AbelGit33", icon: "GH" },
    { label: "YouTube", url: "https://www.youtube.com/@abel-k3", icon: "YT" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tesfahun-abebe-3a2928395", icon: "in" },
    { label: "Telegram", url: "https://t.me/+251970862975", icon: "TG" }
  ];

  const taglineText = "I build practical web experiences, learn fast, and turn ideas into useful digital products for real people.";
  const roleText = "Software engineering student · Web developer · UI + product-minded problem solver";

  const facts = [
    ["Based in", "Injibara, Ethiopia"],
    ["Current focus", "Software engineering and digital products"],
    ["Learning", "Web development, UX, and product thinking"],
    ["Goal", "Build useful tools that help people in everyday life"]
  ];

  const skills = [
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Responsive layouts", "Accessibility"] },
    { title: "Product building", items: ["Wireframing", "User-focused design", "Prototyping", "Testing", "Iteration"] },
    { title: "Tools & workflow", items: ["Git & GitHub", "APIs", "Problem solving", "Documentation", "Rapid learning"] }
  ];

  const projectData = [
    {
      title: "Department Selection Guide",
      category: "AI / Education",
      description: "A practical guide to help students compare departments and make better academic decisions with less confusion.",
      tags: ["AI", "EdTech", "UX", "Web"],
      link: "https://dept-selection-guide.vercel.app/",
      featured: true
    },
    {
      title: "EthioExamHub",
      category: "Telegram Bot",
      description: "An exam-prep bot designed to make education support more accessible and actionable for students.",
      tags: ["Bot", "Learning", "Automation", "Telegram"],
      link: "https://t.me/Entrance00_bot",
      featured: false
    },
    {
      title: "Portfolio Website",
      category: "Personal Brand",
      description: "A clear, modern portfolio for sharing my work, background, and available opportunities in a polished format.",
      tags: ["Portfolio", "Design", "Responsive", "Web"],
      link: "#home",
      featured: false
    },
    {
      title: "Developer Toolkit",
      category: "Productivity",
      description: "Small systems and workflows aimed at simplifying repetitive tasks and turning ideas into usable solutions.",
      tags: ["Tools", "Productivity", "Workflow", "Web"],
      link: "#projects",
      featured: false
    }
  ];

  const timeline = [
    {
      year: "2024 — Present",
      title: "Software Engineering Student",
      meta: "Injibara University",
      text: "Learning software engineering fundamentals while building digital products and improving my practical web skills."
    },
    {
      year: "2023",
      title: "Web Dev & Product Learning",
      meta: "Self-directed study",
      text: "Focused on front-end development, JavaScript, product thinking, and building useful interfaces from scratch."
    },
    {
      year: "2022",
      title: "Problem-solving & experimentation",
      meta: "Independent projects",
      text: "Started creating small web experiments, exploring UX, and learning how software can solve real problems."
    }
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

  function renderHeroText() {
    const tagline = document.getElementById("tagline");
    const role = document.getElementById("role");
    if (tagline) tagline.textContent = taglineText;
    if (role) role.textContent = roleText;
  }

  function renderAbout() {
    const aboutText = document.getElementById("aboutText");
    if (aboutText) {
      aboutText.innerHTML = `
        <p>I’m Tesfahun Abebe, a software engineering student who enjoys turning ideas into useful digital experiences.</p>
        <p>I’m especially interested in building products that are simple, thoughtful, and genuinely helpful to people.</p>
        <p>Right now, I’m learning by building — creating web interfaces, experimenting with product ideas, and improving the way I solve real-world problems with technology.</p>
      `;
    }

    const factsEl = document.getElementById("facts");
    if (factsEl) {
      factsEl.innerHTML = facts.map(([k, v]) => `
        <div>
          <dt>${k}</dt>
          <dd>${v}</dd>
        </div>
      `).join("");
    }

    const now = document.getElementById("now");
    if (now) {
      now.innerHTML = `
        <h3>Now</h3>
        <p>Building web products, learning more about software engineering, and refining how I turn ideas into useful digital experiences.</p>
      `;
    }
  }

  function renderSkills() {
    const section = document.querySelector("#skills .wrap");
    if (!section) return;

    const existing = section.querySelector(".skg");
    if (existing) return;

    const grid = document.createElement("div");
    grid.className = "skg";
    grid.innerHTML = skills.map(group => `
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
    if (intro) intro.insertAdjacentElement("afterend", grid);
    else section.appendChild(grid);
  }

  function renderProjects() {
    const tabsEl = document.getElementById("tabs");
    const gridEl = document.getElementById("grid");
    const searchEl = document.getElementById("projectSearch");
    const emptyEl = document.getElementById("projectEmpty");

    if (!tabsEl || !gridEl) return;

    const filters = ["All", "AI", "Web", "Bot", "Productivity", "UX"];
    tabsEl.innerHTML = filters.map((filter, index) => `
      <button class="tab${index === 0 ? " active" : ""}" type="button" aria-pressed="${index === 0}">${filter}</button>
    `).join("");

    const cards = projectData.map(project => `
      <article class="card ${project.featured ? "feat" : ""}">
        <div class="shot">
          <span class="badge ${project.featured ? "f" : ""}">${project.featured ? "Featured · Live" : project.category}</span>
        </div>
        <div class="body">
          <div class="meta">
            <span class="eyebrow small">${project.category}</span>
            <h3>${project.title}</h3>
          </div>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
          <div class="act">
            <a class="btn p s" href="${project.link}" target="${project.link.startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer">${project.featured ? "Open live" : "View"}</a>
          </div>
        </div>
      </article>
    `).join("");

    gridEl.innerHTML = cards;

    const buttons = [...tabsEl.querySelectorAll(".tab")];

    function updateGrid() {
      const active = tabsEl.querySelector(".tab[aria-pressed='true']")?.textContent.trim() || "All";
      const query = (searchEl?.value || "").trim().toLowerCase();
      const cardsEls = [...gridEl.querySelectorAll(".card")];
      let visible = 0;

      cardsEls.forEach(card => {
        const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
        const text = card.textContent.toLowerCase();
        const matchesFilter = active === "All" || text.toLowerCase().includes(active.toLowerCase());
        const matchesSearch = !query || title.includes(query) || text.includes(query);
        const show = matchesFilter && matchesSearch;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });

      if (emptyEl) emptyEl.hidden = visible !== 0;
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => {
          const pressed = btn === button;
          btn.setAttribute("aria-pressed", String(pressed));
          btn.classList.toggle("active", pressed);
        });
        updateGrid();
      });
    });

    if (searchEl) {
      searchEl.addEventListener("input", updateGrid);
    }

    updateGrid();
  }

  function renderTimeline() {
    const timelineEl = document.getElementById("timeline");
    if (!timelineEl) return;
    timelineEl.innerHTML = timeline.map(item => `
      <li>
        <div class="when">${item.year}</div>
        <div class="info">
          <h3>${item.title}</h3>
          <p class="meta">${item.meta}</p>
          <p>${item.text}</p>
        </div>
      </li>
    `).join("");

    const certHeading = document.querySelector(".cert-heading");
    if (certHeading) {
      const certCard = document.createElement("div");
      certCard.className = "cert";
      certCard.innerHTML = `
        <div class="meta">
          <span class="eyebrow">Certification</span>
          <h3>Web Development & product thinking</h3>
        </div>
        <p>Continuous self-learning in modern web technologies, user-centered design, and building useful digital products.</p>
      `;
      certHeading.insertAdjacentElement("afterend", certCard);
    }
  }

  function renderFooter() {
    const copy = document.getElementById("copy");
    if (copy) copy.textContent = `© ${new Date().getFullYear()} Tesfahun Abebe`;

    const footlinks = document.getElementById("footlinks");
    if (footlinks) {
      footlinks.innerHTML = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
      ].map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join("");
    }
  }

  function initThemeToggle() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme");
    const saved = localStorage.getItem("portfolio-theme");

    if (saved === "dark") {
      root.setAttribute("data-theme", "dark");
      if (toggle) toggle.textContent = "☀";
    }

    if (toggle) {
      toggle.addEventListener("click", () => {
        const dark = root.getAttribute("data-theme") === "dark";
        const value = dark ? "light" : "dark";
        root.setAttribute("data-theme", value);
        localStorage.setItem("portfolio-theme", value);
        toggle.textContent = value === "dark" ? "☀" : "☾";
      });
    }
  }

  function initMenu() {
    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");
    if (!menu || !nav) return;

    menu.addEventListener("click", () => {
      const expanded = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initReadingProgress() {
    const progress = document.getElementById("readingProgress");
    if (!progress) return;

    const fill = progress.querySelector("span");
    if (!fill) return;

    const update = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const value = total > 0 ? (window.scrollY / total) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, value));
      progress.setAttribute("aria-valuenow", String(clamped));
      fill.style.width = `${clamped}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initCvLinks() {
    document.querySelectorAll("#cv, #cv2").forEach(link => {
      link.href = "Tesfahun_Abebe_CV.pdf";
      link.removeAttribute("hidden");
    });
  }

  function initContactForm() {
    const form = document.getElementById("form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("fn")?.value.trim() || "";
      const email = document.getElementById("fe")?.value.trim() || "";
      const message = document.getElementById("fm")?.value.trim() || "";

      if (!name || !email || !message) {
        alert("Please fill in your name, email, and message.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:t3267270@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

  renderNav();
  renderSocial();
  renderHeroText();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderFooter();
  initThemeToggle();
  initMenu();
  initReadingProgress();
  initCvLinks();
  initContactForm();
})();
