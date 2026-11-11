/* Embedded images and CV (base64). Replace a value to swap a picture. */
const IMAGES = {"cert": "data:image/webp;base64,UklGRm5WAABXRUJQVlA4IGJWAACQnAGdASqEA6ECPlUqkkcjoiGhIjNIyHAKiWlu+/NLWvAlQJlaYn8heM0DgRIYFQCfy6S6RPKeblyz1/etcmfcf1N5Svk36f/yfvF+dn+o9TH6C/3nuBfrt+u3W[...]

/* ============ EDIT YOUR CONTENT HERE ============
   Deploy free: GitHub Pages (rename this file to index.html, push to a repo named "portfolio",
   then Settings > Pages), or drag the folder into Netlify Drop, or import the repo in Vercel. */
const CONFIG = {
  name: "Tesfahun Abebe",
  tagline: "Software Engineering student at Injibara University, building web apps and digital products that solve real problems for Ethiopia.",
  roles: ["Full-Stack Developer", "Web Designer", "Problem Solver", "Future Software Engineer"],
  photo: IMAGES.me,  // portrait is embedded in IMAGES below
  cv: true,            // CV PDF is embedded in IMAGES.cv; the button shows when the viewer can save files
  email: "t3267270@gmail.com",
  phone: "+251970862975",
  github: "https://github.com/AbelGit33",
  youtube: "https://www.youtube.com/@abel-k3",
  linkedin: "https://www.linkedin.com/in/tesfahun-abebe-3a2928395",
  telegram: "https://t.me/Entrance00_bot",
  location: "Injibara, Amhara, Ethiopia",
  about: [
    "I’m a fourth-year Software Engineering student at Injibara University. I like turning an idea into something people can open in a browser, and I learn fastest by publishing real sites, like the university redesign and my AI-based tools.",
    "I build things that fit real needs in Ethiopia: a sports news platform, an AI-based department selection guide, an online store with Telebirr and Amharic support, and a Telegram bot that helps students prepare for exams.",
    "My focus is practical product building: good user experience, useful features, and solutions that work in the real world."
  ],
  facts: [["Status","4th-year student"],["University","Injibara University"],["Based in","Injibara, Ethiopia"],["Availability","Open to opportunities"]],
  learning: "Android development, React, and backend with Node.js", // edit freely
  skills: [ // [TODO] remove anything you don’t use yet
    ["Languages", ["JavaScript","HTML5","CSS3","Python","Java","C++"]],
    ["Frontend & mobile", ["React","Tailwind CSS","Responsive design","Android fundamentals"]],
    ["Backend & databases", ["Node.js","Express","MySQL","MongoDB"]],
    ["Tools", ["Git","GitHub","GitHub Pages","VS Code","Postman"]],
    ["Concepts", ["Data structures & algorithms","OOP","REST APIs","Software design","Agile"]]
  ],
  projects: [ // [TODO] replace each repo with the project’s own GitHub link, and add live links where missing
    {title:"Injibara University: official website redesign", featured:true, status:"Live", cats:["web"], img:"inu", url:"abelgit33.github.io/injibara-university",
     desc:"A modern redesign of the university’s official site: multi-level navigation, hero slider, leadership profiles, news and announcements, student services (SIMS, E-SHE, ICT, E-Learning), and a cleaner digital experience for visitors.",
     tech:["HTML","CSS","JavaScript"], live:"https://abelgit33.github.io/injibara-university/", repo:"https://github.com/AbelGit33"},
    {title:"BunaSports", status:"Live", cats:["web"], img:"buna", url:"abelgit33.github.io/BunaBete",
     desc:"A sports news and information platform with live scores, matches, teams, and leagues, plus login and registration, in a dark, responsive interface.",
     tech:["React","JavaScript","CSS"], live:"https://abelgit33.github.io/BunaBete/", repo:"https://github.com/AbelGit33"},
    {title:"Department Selection Guide", featured:true, status:"Live", cats:["web","ai"], img:"dept", url:"Dept Selection Guide",
     desc:"An AI-based academic advising engine live on Vercel. It audits prerequisites across departments, evaluates student performance, and recommends ranked options based on career fit and labour-market data.",
     tech:["AI","Web app","Data"], live:"https://dept-selection-guide.vercel.app/", liveLabel:"Open live AI guide", repo:"https://github.com/AbelGit33"},
    {title:"Shop Mart.et", status:"Built", cats:["web"], img:"shop", url:"Shop Mart.et",
     desc:"An Ethiopian online store with category browsing, search, wishlist and cart, an Amharic language switch, dark mode, a hero slider, and local payment options (Telebirr, CBE Birr, cash on delivery).",
     tech:["E-commerce","Web","Responsive UI"], live:"", repo:"https://github.com/AbelGit33"},
    {title:"EthioExamHub: Telegram bot", status:"Live", cats:["bots"], img:"bot", kind:"phone",
     desc:"A Telegram bot that helps Grade 11 and 12 students and university freshmen prepare for exams: past entrance exams with worked solutions, subject-wise model exams and quizzes, textbooks, and learning resources.",
     tech:["Telegram bot","Education"], live:"https://t.me/Entrance00_bot", liveLabel:"Try the live bot", repo:"https://github.com/AbelGit33"}
  ],
  filters: [["all","All"],["web","Web"],["ai","AI"],["bots","Bots"]],
  timeline: [
    {when:"Feb 2023 to Jun 2028 (expected)", title:"BSc in Software Engineering, Injibara University", text:"Now in my fourth year. Coursework: Advanced Data Structures and Algorithms, Database Management, Human-Computer Interaction, and software design."},
    {when:"Ongoing", title:"Self-directed projects", text:"Designing, building, and publishing real products: a university website redesign, a sports news platform, an AI-based advising tool, an Ethiopian e-commerce storefront, and an exam-prep bot."}
  ],
  certifications: [{title:"Android Developer Fundamentals", issuer:"Udacity", sub:"Nanodegree program completion", date:"February 1, 2026", img:"cert", id:"C9T3SFX3", href:"https://confirm.udacity.com/C9T3SFX3"}]
};
/* ============ RENDERING ============ */
const $ = id => document.getElementById(id);
const sections = [["home","Home"],["about","About"],["skills","Skills"],["projects","Projects"],["education","Education"],["contact","Contact"]];
const li = (href,label) => `<li><a href="${href}">${label}</a></li>`;
$("navlinks").innerHTML = sections.map(([i,l]) => li("#"+i,l)).join("");
$("footlinks").innerHTML = sections.slice(1).map(([i,l]) => li("#"+i,l)).join("");
$("tagline").textContent = CONFIG.tagline;
$("copy").textContent = "© 2026 " + CONFIG.name;
const progress = $("readingProgress");
const updateReadingProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 0;
  progress.style.setProperty("--progress", `${value}%`);
  progress.setAttribute("aria-valuenow", String(value));
};
window.addEventListener("scroll", updateReadingProgress, {passive:true});
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();
/* CV: plain download link to the PDF that sits next to index.html */
["cv","cv2"].forEach(id => { const b = $(id); b.href = "Tesfahun_Abebe_CV.pdf"; b.setAttribute("download", ""); b.hidden = false; });
if (CONFIG.photo) { $("photo").classList.add("has"); $("photo").innerHTML = `<img src="${CONFIG.photo}" alt="Portrait of ${CONFIG.name}" width="640" height="800"><span class="tagp"><i></i>Open to work</span>`; }
const ICONS = {
  GitHub:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.49 11.49 0 0 1 12 5.844c1.02 0 2.047.137 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.101.823 2.221 0 1.603-.015 2.896-.015 3.285 0 .322.218.694.825.576A12.005 12.005 0 0 0 24 12.297c0-6.627-5.373-12-12-12z"/></svg>`,
  LinkedIn:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5A1.5 1.5 0 1 1 6.92 5.5a1.5 1.5 0 0 1 .02 3zm-1.48 1.2h2.96V19H5.46V9.7zm4.8 0h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.97 3.54 4.53V19h-2.96v-17.1c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23V19h-2.96V9.7z"/></svg>`,
  YouTube:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.121-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  Telegram:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.46.143.14.117.18.33.2.468.144 1.38.86 4.74 1.224 6.3.169.8.29 1.102.46 1.118.182.019.3-.168.5-.414.238-.29.645-.731.913-1.016.203-.22.421-.4.742-.26.331.14.988.73 1.286.95.299.22.56.39.855.35.388-.05.817-.29 1.014-.63.265-.456.466-1.185.57-1.755.191-1.04.457-3.66.524-4.706.07-1.064.052-1.714-.155-1.926-.291-.293-.775-.287-1.053-.28-.454.013-1.045.175-2.577.7-2.628.9-4.592 1.571-6.68 2.295-.808.286-1.62.604-2.438.903-.8.233-1.442.453-1.765.686-.355.259-.401.58-.17.716.294.173.846.24 1.321.243.442.004.955-.145 1.287-.208.864-.164 1.874-.379 2.821-.508 1.474-.204 3.174-.575 4.453-.67.832-.06 1.53-.019 2.4.198.683.17 1.31.557.918.631-.41.078-.906.115-1.313.142-.709.047-1.532.101-2.437.092-.82-.01-1.517-.128-2.265-.195-.998-.09-1.847-.332-2.834-.616-.712-.206-1.198-.341-1.722-.312-.252.014-.437.125-.463.286-.058.36.3.448.72.709.32.196.652.388.997.562.509.255 1.17.477 1.867.423.632-.049 1.2-.144 1.845-.398.758-.3 1.442-.8 1.859-1.342.3-.393.583-.98.19-1.183-.439-.226-.899-.266-1.438-.288-.702-.028-1.463.015-2.216.054-1.048.055-2.081.099-3.138.178-.904.053-1.802.056-2.608-.224-.26-.09-.521-.236-.63-.448-.15-.301-.062-.705.233-.918.367-.27.9-.389 1.598-.467.972-.109 2.367-.116 3.52.12 1.117.24 2.954.712 4.16 1.59.505.37 1.255.953.959 1.638-.282.65-.977.875-1.606.907-.712.036-1.553-.182-2.11-.376-.7-.244-1.19-.481-1.74-.77-.508-.27-1.253-.617-2.188-.735-.495-.063-.99-.117-1.635-.115-.663.002-1.337.084-1.968.242-.899.224-1.692.706-2.43 1.365-.567.51-1.146 1.041-1.578 1.746-.23.373-.538 1.095-.476 1.765.107.965.724 1.63 1.475 1.988.771.367 1.696.381 2.63.163.532-.125 1.035-.355 1.552-.594.993-.49 1.951-.96 2.896-1.466.748-.397 1.424-.748 2.18-.914.616-.135 1.31-.188 1.927-.212.922-.041 1.69.139 2.1.464.484.386.795.98.622 1.537-.173.554-.653.93-1.188 1.107-.734.247-1.504.317-2.302.312-.788-.005-1.651-.073-2.506-.167-.922-.105-1.864-.29-2.59-.694-.949-.529-1.781-1.176-2.761-1.774-1.497-.915-2.8-.911-4.433-.814-1.366.082-2.532.186-3.95.061-.935-.082-1.872-.325-2.916-.712-.845-.315-1.64-.9-2.448-1.439-.36-.24-.757-.538-.868-.935-.148-.6.151-1.269.602-1.601.577-.426 1.325-.622 2.126-.815 1.255-.303 2.718-.273 3.829-.184 1.555.128 3.266.436 4.394 1.013 1.581.81 2.387 1.53 3.713 2.708.664.59 1.027 1.156 1.161 1.947.16.944-.141 1.648-.835 2.055-.653.38-1.124.525-2.007.621-1.655.182-3.1-.317-4.347-.865-1.715-.751-3.71-1.464-5.212-2.29-.863-.472-1.729-.989-2.516-1.547-.66-.47-1.402-.888-2.173-.856-.442.018-.886.206-1.098.777-.192.517-.151 1.099.089 1.554.233.442.587.78.92 1.119.659.669 1.412 1.214 2.13 1.62 1.225.694 2.595 1.057 4.239 1.253 1.596.189 3.332-.081 4.704-.614 1.222-.474 2.39-.996 3.552-1.637.82-.453 1.562-.93 2.233-1.545.857-.784 1.502-1.745 1.571-2.878.09-1.483-.737-2.795-1.909-3.574-1.119-.74-2.143-1.071-3.302-1.39-1.709-.472-3.332-.684-5.436-.833-1.908-.135-3.9-.192-5.745.155-1.597.302-3.347 1.111-4.567 2.627-.667.832-1.151 1.925-1.208 3.159-.058 1.268.211 2.44.77 3.446.716 1.287 1.867 2.358 3.089 2.942 1.192.573 2.558.834 3.999.948 1.343.106 2.734.168 3.963-.081 1.292-.263 2.537-.899 3.13-2.146.335-.708.537-1.812.271-2.631-.344-.109-.677-.273-1.197-.556-.384-.207-.715-.39-.994-.293-.268.094-.347.447-.203.811.254.643.571 1.264 1.148 1.74.798.66 1.667.765 2.68.709.772-.043 1.472-.244 2.082-.553.842-.431 1.518-.878 2.099-1.745.442-.657.906-1.566.822-2.562-.08-.942-.648-1.99-1.468-2.613-.645-.49-1.389-.783-2.13-.898-1.08-.169-2.12-.229-3.209-.184-1.202.05-2.35.351-3.46.756-1.504.692-2.6 1.775-3.517 3.15-.785 1.176-1.253 2.728-1.061 4.095.343 2.513 2.918 3.621 4.747 4.099 1.708.448 3.398.408 5.106-.094 1.878-.553 3.219-1.665 4.122-3.2.532-.9.822-1.992.779-3.004-.053-1.293-.549-2.571-1.4-3.553-.998-1.155-2.446-1.873-3.895-2.428-1.718-.652-3.558-.777-5.292-.78-1.497-.003-2.695.358-3.519 1.332-.665.786-.764 1.963-.442 2.652.289.622.846 1.162 1.778 1.292.546.075 1.173-.012 1.833-.148.914-.188 1.622-.594 2.371-1.338.415-.411.808-.814 1.312-.585.534.242.442.86.426 1.442-.056 2.024-.18 4.211-.31 6.332-.03.507.046 1.026.386 1.37.295.299.722.449 1.182.45.615.001 1.371-.253 1.855-.638.673-.536 1.08-1.451 1.272-2.424.414-2.1.39-4.377.523-6.512.037-.592.184-1.16.71-1.496.63-.4 1.342-.56 1.949-.388.596.168 1.144.552 1.305 1.23.421.885.686 1.892.77 2.857.095 1.065-.049 2.086-.333 3.105-.16.572-.512 1.036-.908 1.39-.687.615-1.484.923-2.306.983-.88.065-1.733-.127-2.218-.441-.91-.594-1.709-1.657-2.11-2.633-.133-.323-.376-.951-.31-1.25.106-.48.502-.854.996-.938.63-.11 1.279.101 1.745.578.303.308.495.778.658 1.19.16.404.403.772.619 1.08.556.785 1.331 1.237 2.442 1.438.421.076.858.103 1.317.08.65-.032 1.206-.18 1.732-.542.8-.553 1.287-1.314 1.444-2.213.214-1.235-.255-2.634-1.243-3.454-.679-.566-1.402-.908-2.236-1.015-.273-.036-.481-.262-.522-.575-.08-.605.467-1.248 1.132-1.295.698-.049 1.533.183 2.384.604.792.39 1.493 1.055 1.922 1.934.454.929.582 1.857.204 2.741-.387.904-1.056 1.695-1.965 2.235-.993.59-2.163.81-3.367.761-1.173-.048-2.179-.448-3.089-1.086-.91-.64-1.621-1.445-2.13-2.564-.549-1.19-.7-2.927-.077-4.116.619-1.18 1.749-1.763 3.206-2.041 1.851-.354 3.698-.092 5.53.447 1.75.514 3.187 1.383 4.143 2.95.574.944.893 1.99.901 3.065.01 1.078-.294 2.163-.911 3.052-.612.875-1.522 1.543-2.444 2.072-1.471.846-3.128 1.016-4.647.75-1.46-.257-2.677-.867-3.742-1.833-. differential?` }
  Email:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`
};
const soc = [["GitHub",CONFIG.github],["LinkedIn",CONFIG.linkedin],["YouTube",CONFIG.youtube],["Telegram",CONFIG.telegram],["Email","mailto:"+CONFIG.email]];
$("social").innerHTML = soc.map(([n,h]) => `<a class="btn s ic" href="${h}" target="_blank" rel="noopener" aria-label="${n}" title="${n}">${ICONS[n]}</a>`).join("");
$("aboutText").innerHTML = CONFIG.about.map(p => `<p>${p}</p>`).join("");
$("facts").innerHTML = CONFIG.facts.map(([a,b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("");
$("now").innerHTML = `<b>Currently learning:</b> ${CONFIG.learning}`;
const SKI = ["{ }","</>","DB","Git","UML"];
$("skillList").innerHTML = '<div class="skg">' + CONFIG.skills.map(([g,items],i) => `<div class="sk${i===CONFIG.skills.length-1?" wide":""}"><div class="skh"><span class="ski" aria-hidden="true">${SKI[i%SKI.length]}</span><span>${g}</span></div><div class="skv">${items.map(i => `<span>${i}</span>`).join("")}</div></div>`).join("") + '</div>';
$("timeline").innerHTML = CONFIG.timeline.map(t => `<li><time>${t.when}</time><h3>${t.title}</h3><p>${t.text}</p></li>`).join("");
$("ach").innerHTML = CONFIG.certifications.map(c => `<a class="pic" href="${c.href}" target="_blank" rel="noopener" aria-label="Verify ${c.title} certificate"><img src="${IMAGES[c.img]}" alt="${c.title} certificate" loading="lazy"><div class="info"><h4>${c.title}</h4><p class="meta">${c.issuer}</p><p class="id">${c.id}</p><span class="btn s">Verify credential</span></div></a>`).join("");
const links = [["Phone / Telegram", CONFIG.phone.replace(/(\+251)(\d{3})(\d{3})(\d{3})/,"$1 $2 $3 $4"), CONFIG.telegram],["Email",CONFIG.email,"mailto:"+CONFIG.email],["GitHub","AbelGit33",CONFIG.github],["Location",CONFIG.location,"https://maps.google.com/?q="+encodeURIComponent(CONFIG.location)]];
$("links").innerHTML = links.map(([a,b,h]) => `<li><a href="${h}" target="_blank" rel="noopener"><span>${a}</span><span>${b}</span></a></li>`).join("") + `<li><a href="#contact" onclick="return false;">Available for collaboration</a></li>`;
/* projects */
const frame = p => {
  if (!p.img) return `<div class="shot"><div class="dots"><i></i><i></i><i></i></div><div class="win">In the works</div></div>`;
  if (p.kind === "phone") return `<div class="shot ph"><div class="phone"><img src="${IMAGES[p.img]}" alt="Screenshot of ${p.title}" loading="lazy"></div></div>`;
  return `<div class="shot"><div class="chrome"><span class="dots"><i></i><i></i><i></i></span><em>${p.url || p.title}</em></div><div class="view"><img src="${IMAGES[p.img]}" alt="Screenshot of ${p.title}" loading="lazy"></div></div>`;
};
$("grid").innerHTML = CONFIG.projects.map(p => {
  const soon = p.status === "Coming soon";
  const acts = soon ? `<span class="btn s" aria-disabled="true">Coming soon</span>`
    : (p.live ? `<a class="btn p s" href="${p.live}" target="_blank" rel="noopener">${p.liveLabel || "Live demo"}</a>` : "") + (p.repo ? `<a class="btn s" href="${p.repo}" target="_blank" rel="noopener">GitHub</a>` : "");
  return `<article class="card${p.featured?" feat":""}${soon?" soon":""}" data-cats="${p.cats.join(" ")}">${frame(p)}
    <div class="body"><span class="badge${p.featured?" f":""}">${p.featured?"Featured · ":""}${p.status}</span>
    <h3>${p.title}</h3><p>${p.desc}</p><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div><div class="act">${acts}</div></div></article>`;
}).join("");
$("tabs").innerHTML = CONFIG.filters.map(([k,l],i) => `<button class="tab" data-f="${k}" aria-pressed="${i===0}">${l}</button>`).join("");
$("projectCount");
const projectCards = [...document.querySelectorAll(".card")];
let activeProjectFilter = "all";
const updateProjects = () => {
  const query = $("projectSearch").value.trim().toLocaleLowerCase();
  let visibleCount = 0;
  projectCards.forEach(card => {
    const matchesCategory = activeProjectFilter === "all" || card.dataset.cats.split(" ").includes(activeProjectFilter);
    const matchesSearch = !query || card.textContent.toLocaleLowerCase().includes(query);
    card.hidden = !(matchesCategory && matchesSearch);
    if (!card.hidden) visibleCount += 1;
  });
  $("projectCount").textContent = `${visibleCount} project${visibleCount === 1 ? "" : "s"} found`;
  $("projectEmpty").hidden = visibleCount !== 0;
};
$("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-pressed", t === b));
  activeProjectFilter = b.dataset.f;
  updateProjects();
});
$("projectSearch").addEventListener("input", updateProjects);
updateProjects();
/* typing */
(function(){
  const el = $("role"), roles = CONFIG.roles; let r = 0, c = 0, del = false;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = roles.join(" · "); return; }
  (function tick(){
    const w = roles[r];
    el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  })();
})();
/* theme */
const root = document.documentElement, tb = $("theme");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
const paint = () => tb.textContent = isDark() ? "☀" : "☾";
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch(e) {}
paint();
tb.onclick = () => { const n = isDark() ? "light" : "dark"; root.dataset.theme = n; try { localStorage.setItem("theme", n); } catch(e) {} paint(); };
/* mobile menu + active link */
$("menu").onclick = () => { const o = $("nav").classList.toggle("open"); $("menu").setAttribute("aria-expanded", o); };
$("nav").onclick = e => { if (e.target.tagName === "A") { $("nav").classList.remove("open"); $("menu").setAttribute("aria-expanded", "false"); } };
const navA = [...document.querySelectorAll("#navlinks a")];
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) navA.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), {rootMargin:"-45% 0px -45% 0px", threshold:0.2});
sections.forEach(([i]) => io.observe($(i)));
/* contact form: validates, then opens the visitor’s email app with the message filled in */
$("form").addEventListener("submit", e => {
  e.preventDefault();
  const n = $("fn").value.trim(), m = $("fe").value.trim(), g = $("fm").value.trim();
  const bad = {n: n.length < 2 ? "Enter your name." : "", e: /^\S+@\S+\.\S+$/.test(m) ? "" : "Enter a valid email address.", m: g.length < 10 ? "Write at least 10 characters." : ""};
  $("en").textContent = bad.n; $("ee").textContent = bad.e; $("em").textContent = bad.m;
  if (bad.n || bad.e || bad.m) return;
  const ok = $("ok"); ok.hidden = false; ok.textContent = "Thanks, " + n.split(" ")[0] + ". Your email app will open with the message ready to send.";
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message from " + n)}&body=${encodeURIComponent(g + "\n\n" + n + " (" + m + ")")}`;
  e.target.reset();
});
