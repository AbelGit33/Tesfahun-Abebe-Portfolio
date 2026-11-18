(() => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/AbelGit33",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.2-6-2.7m12 5.4v-3.3a2.9 2.9 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.5 7a4.4 4.4 0 0 0-.1-3.2S17.4 3.5 15 5a13 13 0 0 0-6 0C6.6 3.5 5.6 3.8 5.6 3.8A4.4 4.4 0 0 0 5.5 7a4.7 4.7 0 0 0-1.2 3.2c0 4.7 2.8 5.7 5.5 6A2.9 2.9 0 0 0 9 18.5v3.2"/></svg>',
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@abel-k3",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z"/><path class="icon-fill" d="m10 15.5 5.2-3.5L10 8.5v7Z"/></svg>',
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tesfahun-abebe-3a2928395",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5H2V22h3V8.5ZM3.5 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM22 14.3c0-4.1-2.2-6-5.2-6a4.5 4.5 0 0 0-4.1 2.3v-2H9.8V22h3v-6.7c0-1.8.4-3.6 2.6-3.6s2.3 2.1 2.3 3.7V22h3v-7.7Z"/></svg>',
    },
    {
      label: "Telegram",
      url: "https://t.me/+251970862975",
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.7 3.3-3.3 16.1c-.2 1.1-.8 1.4-1.7.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.8 8.8-8c.4-.4-.1-.6-.6-.2L6.6 13.4 2 12c-1-.3-1-1 .2-1.5L20 3.6c.8-.3 1.9.2 1.7-.3Z"/></svg>',
    },
  ];

  const taglineText =
    "I build practical web experiences, learn fast, and turn ideas into useful digital products for real people.";
  const roleText =
    "Software engineering student · Web developer · UI + product-minded problem solver";

  const facts = [
    ["Based in", "Injibara, Ethiopia"],
    ["Current focus", "Software engineering and digital products"],
    ["Learning", "Web development, UX, and product thinking"],
    ["Goal", "Build useful tools that help people in everyday life"],
  ];

  const skills = [
    {
      title: "Frontend",
      icon: "💻",
      items: [
        { label: "HTML5", icon: "◩" },
        { label: "CSS3", icon: "◫" },
        { label: "JavaScript", icon: "◬" },
        { label: "Responsive layouts", icon: "▣" },
        { label: "Accessibility", icon: "◎" },
      ],
    },
    {
      title: "Product building",
      icon: "🧩",
      items: [
        { label: "Wireframing", icon: "✎" },
        { label: "User-focused design", icon: "✦" },
        { label: "Prototyping", icon: "▤" },
        { label: "Testing", icon: "✓" },
        { label: "Iteration", icon: "↻" },
      ],
    },
    {
      title: "Tools & workflow",
      icon: "⚙️",
      items: [
        { label: "Git & GitHub", icon: "⌁" },
        { label: "APIs", icon: "◈" },
        { label: "Problem solving", icon: "✳" },
        { label: "Documentation", icon: "☰" },
        { label: "Rapid learning", icon: "⚡" },
      ],
    },
  ];

  const projectData = [
    {
      title: "Department Selection Guide",
      category: "AI / Education",
      description:
        "A practical guide to help students compare departments and make better academic decisions with less confusion.",
      tags: ["AI", "EdTech", "UX", "Web"],
      tagIcons: ["✦", "◎", "▣", "◈"],
      image: "assets/DeptSelectionGuideAiBased.png",
      imageAlt:
        "Illustrated department selection dashboard with interest prompts and guided academic choices",
      link: "https://dept-selection-guide.vercel.app/",
      linkLabel: "Open Department Selection Guide",
      featured: true,
      badgeIcon: "✦",
    },
    {
      title: "Teaching Stack",
      category: "Education / Web App",
      description:
        "A live web app focused on practical tools and resources for teaching and learning.",
      tags: ["Education", "Teaching", "Learning", "Web"],
      tagIcons: ["▤", "✎", "☰", "◈"],
      image: "assets/Screenshot%202026-11-15%20023948.png",
      imageAlt:
        "Screenshot of a Digital World Academy learning tracks landing page with course cards and navigation",
      link: "https://teaching-stack.vercel.app/",
      linkLabel: "Open Teaching Stack",
      featured: false,
      badgeIcon: "▤",
    },
    {
      title: "EthioExamHub",
      category: "Telegram Bot",
      description:
        "An exam-prep bot designed to make education support more accessible and actionable for students.",
      tags: ["Bot", "Learning", "Automation", "Telegram"],
      tagIcons: ["◎", "✓", "⚡", "✆"],
      image: "assets/bot.jpg",
      imageAlt:
        "A pink heart illustration used as the visual for the exam-prep bot experience",
      link: "https://t.me/Entrance00_bot",
      featured: false,
      badgeIcon: "✆",
    },
    {
      title: "Portfolio Website",
      category: "Personal Brand",
      description:
        "A clear, modern portfolio for sharing my work, background, and available opportunities in a polished format.",
      tags: ["Portfolio", "Design", "Responsive", "Web"],
      tagIcons: ["◫", "✦", "▣", "◈"],
      image: "assets/project-portfolio.svg",
      imageAlt:
        "Illustrated responsive portfolio layout with a profile feature and content cards",
      link: "#home",
      featured: false,
      badgeIcon: "◫",
    },
    {
      title: "Developer Toolkit",
      category: "Productivity",
      description:
        "Small systems and workflows aimed at simplifying repetitive tasks and turning ideas into usable solutions.",
      tags: ["Tools", "Productivity", "Workflow", "Web"],
      tagIcons: ["⚙", "▣", "↻", "◈"],
      image: "assets/project-toolkit.svg",
      imageAlt:
        "Illustrated developer workspace with code editor and quick actions",
      link: "#projects",
      featured: false,
      badgeIcon: "⚙",
    },
  ];

  const timeline = [
    {
      year: "2024 — Present",
      title: "Software Engineering Student",
      meta: "Injibara University",
      text: "Learning software engineering fundamentals while building digital products and improving my practical web skills.",
    },
    {
      year: "2023",
      title: "Web Dev & Product Learning",
      meta: "Self-directed study",
      text: "Focused on front-end development, JavaScript, product thinking, and building useful interfaces from scratch.",
    },
    {
      year: "2022",
      title: "Problem-solving & experimentation",
      meta: "Independent projects",
      text: "Started creating small web experiments, exploring UX, and learning how software can solve real problems.",
    },
  ];

  function renderNav() {
    const nav = document.getElementById("navlinks");
    if (!nav) return;
    nav.innerHTML = navItems
      .map(
        (item) => `
      <li><a href="${item.href}">${item.label}</a></li>
    `,
      )
      .join("");
  }

  function renderSocial() {
    const social = document.getElementById("social");
    if (!social) return;
    social.innerHTML = socialLinks
      .map(
        (link) => `
      <a class="ic" href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">${link.icon}</a>
    `,
      )
      .join("");
  }

  function renderContactLinks() {
    const links = document.getElementById("links");
    if (!links) return;

    const contactLinks = [
      {
        label: "Email",
        detail: "t3267270@gmail.com",
        url: "mailto:t3267270@gmail.com",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
      },
      ...socialLinks.map((link) => ({
        ...link,
        detail:
          link.label === "GitHub"
            ? "@AbelGit33"
            : link.label === "LinkedIn"
              ? "Connect with me"
              : link.label === "Telegram"
                ? "Send a message"
                : "Watch my videos",
        icon: link.icon,
      })),
    ];

    links.innerHTML = contactLinks
      .map(
        (link) => `
      <li><a href="${link.url}"${link.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}><span class="contact-link-label">${link.icon}${link.label}</span><span>${link.detail} <span aria-hidden="true">↗</span></span></a></li>
    `,
      )
      .join("");
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
      factsEl.innerHTML = facts
        .map(
          ([k, v]) => `
        <div>
          <dt>${k}</dt>
          <dd>${v}</dd>
        </div>
      `,
        )
        .join("");
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
    grid.innerHTML = skills
      .map(
        (group) => `
      <div class="sk">
        <div class="skh">
          <span class="ski" aria-hidden="true">${group.icon}</span>
          <h3>${group.title}</h3>
        </div>
        <ul class="tags">
          ${group.items.map((item) => `<li><span><span class="tag-emoji" aria-hidden="true">${item.icon || "•"}</span>${item.label}</span></li>`).join("")}
        </ul>
      </div>
    `,
      )
      .join("");

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

    const filters = [
      "All",
      "AI",
      "Web",
      "Bot",
      "Productivity",
      "UX",
      "Education",
    ];
    tabsEl.innerHTML = filters
      .map(
        (filter, index) => `
      <button class="tab${index === 0 ? " active" : ""}" type="button" aria-pressed="${index === 0}">${filter}</button>
    `,
      )
      .join("");

    const cards = projectData
      .map(
        (project) => `
      <article class="card ${project.featured ? "feat" : ""}">
        <div class="shot">
          <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" decoding="async">
          <span class="badge ${project.featured ? "f" : ""}"><span class="badge-icon" aria-hidden="true">${project.badgeIcon || "✦"}</span>${project.featured ? "Featured · Live" : project.category}</span>
        </div>
        <div class="body">
          <div class="meta">
            <span class="eyebrow small">${project.category}</span>
            <h3>${project.title}</h3>
          </div>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map((tag, index) => `<span><span class="tag-emoji" aria-hidden="true">${project.tagIcons?.[index] || "•"}</span>${tag}</span>`).join("")}
          </div>
          <div class="act">
            <a class="btn p s" href="${project.link}" target="${project.link.startsWith("http") ? "_blank" : "_self"}" rel="noopener noreferrer">${project.linkLabel || "View project"}</a>
          </div>
        </div>
      </article>
    `,
      )
      .join("");

    gridEl.innerHTML = cards;

    const buttons = [...tabsEl.querySelectorAll(".tab")];

    function updateGrid() {
      const active =
        tabsEl.querySelector(".tab[aria-pressed='true']")?.textContent.trim() ||
        "All";
      const query = (searchEl?.value || "").trim().toLowerCase();
      const cardsEls = [...gridEl.querySelectorAll(".card")];
      let visible = 0;

      cardsEls.forEach((card) => {
        const title = (
          card.querySelector("h3")?.textContent || ""
        ).toLowerCase();
        const text = card.textContent.toLowerCase();
        const matchesFilter =
          active === "All" || text.toLowerCase().includes(active.toLowerCase());
        const matchesSearch =
          !query || title.includes(query) || text.includes(query);
        const show = matchesFilter && matchesSearch;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });

      if (emptyEl) emptyEl.hidden = visible !== 0;
      const count = document.getElementById("projectCount");
      if (count)
        count.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
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
    timelineEl.innerHTML = timeline
      .map(
        (item) => `
      <li>
        <div class="when">${item.year}</div>
        <div class="info">
          <h3>${item.title}</h3>
          <p class="meta">${item.meta}</p>
          <p>${item.text}</p>
        </div>
      </li>
    `,
      )
      .join("");

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
        { label: "Contact", href: "#contact" },
      ]
        .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
        .join("");
    }
  }

  function initThemeToggle() {
    const root = document.documentElement;
    const toggle = document.getElementById("theme");
    const saved = localStorage.getItem("portfolio-theme");

    const updateButton = (dark) => {
      toggle.innerHTML = dark
        ? '<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
        : '<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"/></svg>';
      toggle.setAttribute(
        "aria-label",
        `Switch to ${dark ? "light" : "dark"} theme`,
      );
      toggle.setAttribute("aria-pressed", String(dark));
    };

    if (saved === "dark") {
      root.setAttribute("data-theme", "dark");
    }
    if (toggle) updateButton(saved === "dark");

    if (toggle) {
      toggle.addEventListener("click", () => {
        const dark = root.getAttribute("data-theme") === "dark";
        const value = dark ? "light" : "dark";
        root.setAttribute("data-theme", value);
        localStorage.setItem("portfolio-theme", value);
        updateButton(value === "dark");
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
      menu.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
      menu.innerHTML = expanded
        ? '<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
        : '<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
      nav.classList.toggle("open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-label", "Open menu");
        menu.innerHTML =
          '<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
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
    document.querySelectorAll("#cv, #cv2").forEach((link) => {
      link.href = "Tesfahun_Abebe_CV.pdf";
      link.removeAttribute("hidden");
    });
  }

  function initContactForm() {
    const form = document.getElementById("form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fields = [
        {
          input: document.getElementById("fn"),
          error: document.getElementById("en"),
          value: document.getElementById("fn")?.value.trim() || "",
          message: "Please enter your name.",
        },
        {
          input: document.getElementById("fe"),
          error: document.getElementById("ee"),
          value: document.getElementById("fe")?.value.trim() || "",
          message: "Please enter a valid email address.",
        },
        {
          input: document.getElementById("fm"),
          error: document.getElementById("em"),
          value: document.getElementById("fm")?.value.trim() || "",
          message: "Please enter a message.",
        },
      ];

      fields.forEach(({ input, error }) => {
        input?.removeAttribute("aria-invalid");
        if (error) error.textContent = "";
      });

      const [nameField, emailField, messageField] = fields;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const invalidFields = [
        { ...nameField, invalid: !nameField.value },
        { ...emailField, invalid: !emailPattern.test(emailField.value) },
        { ...messageField, invalid: !messageField.value },
      ].filter((field) => field.invalid);

      invalidFields.forEach(({ input, error, message }) => {
        if (input) input.setAttribute("aria-invalid", "true");
        if (error) error.textContent = message;
      });

      if (invalidFields.length) {
        invalidFields[0].input?.focus();
        return;
      }

      const name = nameField.value;
      const email = emailField.value;
      const message = messageField.value;
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      );
      const status = document.getElementById("ok");
      if (status) {
        status.textContent =
          "Your email app should open with your message. If it doesn’t, email me at t3267270@gmail.com.";
        status.hidden = false;
      }
      window.location.href = `mailto:t3267270@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  renderNav();
  renderSocial();
  renderContactLinks();
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
