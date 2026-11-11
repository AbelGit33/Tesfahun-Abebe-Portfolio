(() => {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const cards = [...grid.querySelectorAll(".card")];
  const featured = cards.find(card => {
    const title = card.querySelector("h3")?.textContent.trim().toLowerCase() || "";
    return title.includes("department selection guide");
  });

  if (featured) {
    featured.classList.add("feat");
    const badge = featured.querySelector(".badge");
    if (badge) {
      badge.classList.add("f");
      badge.textContent = "Featured · Live";
    }

    const actions = featured.querySelector(".act");
    if (actions && !actions.querySelector('a[href="https://dept-selection-guide.vercel.app/"]')) {
      const liveLink = document.createElement("a");
      liveLink.href = "https://dept-selection-guide.vercel.app/";
      liveLink.target = "_blank";
      liveLink.rel = "noopener noreferrer";
      liveLink.className = "btn p s";
      liveLink.textContent = "Open live AI guide";
      actions.insertBefore(liveLink, actions.firstChild);
    }

    if (grid.firstElementChild !== featured) {
      grid.insertBefore(featured, grid.firstElementChild);
    }
  }
})();
