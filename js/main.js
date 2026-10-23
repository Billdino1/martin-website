/* ==========================================================================
   Header / site name
   ========================================================================== */
document.getElementById("siteName").textContent = SITE.name;
document.getElementById("footerName").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
document.title = `${SITE.name} — ${SITE.tagline}`;

document.querySelector(".nav-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

/* ==========================================================================
   Hero — random book, non-repeating quote cycle per book
   ========================================================================== */
const HERO_STATE_KEY = "heroQuoteState";

function loadHeroState() {
  try {
    return JSON.parse(localStorage.getItem(HERO_STATE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveHeroState(state) {
  localStorage.setItem(HERO_STATE_KEY, JSON.stringify(state));
}

function renderHero(book) {
  const cover = document.getElementById("heroCover");
  if (book.cover) {
    cover.style.background = "";
    cover.innerHTML = `<img src="${book.cover}" alt="${book.title} cover" class="hero-cover-img">`;
  } else {
    cover.style.background = `linear-gradient(160deg, ${book.coverColors[0]}, ${book.coverColors[1]})`;
    cover.innerHTML = `<span class="hero-cover-title">${book.title}</span>`;
  }

  const state = loadHeroState();
  const lastIndex = state[book.id] ?? -1;
  const nextIndex = (lastIndex + 1) % book.quotes.length;
  state[book.id] = nextIndex;
  saveHeroState(state);

  document.getElementById("heroQuote").textContent = `“${book.quotes[nextIndex]}”`;
  document.getElementById("heroBookTitle").textContent = book.title;
  document.getElementById("heroBookYear").textContent = book.year;
}

function rollHero() {
  const eligible = BOOKS.filter((book) => book.quotes.length > 0);
  const book = eligible[Math.floor(Math.random() * eligible.length)];
  renderHero(book);
}

rollHero();
document.getElementById("heroReroll").addEventListener("click", rollHero);

/* ==========================================================================
   Works — books grid
   ========================================================================== */
const booksGrid = document.getElementById("booksGrid");
booksGrid.innerHTML = BOOKS.map(
  (book) => `
  <article class="book-card fade-up">
    <div class="book-cover" ${book.cover ? "" : `style="background: linear-gradient(160deg, ${book.coverColors[0]}, ${book.coverColors[1]})"`}>
      ${book.cover
        ? `<img src="${book.cover}" alt="${book.title} cover" class="book-cover-img">`
        : `<span class="book-cover-title">${book.title}</span>`}
    </div>
    <h3 class="book-title">${book.title}</h3>
    <span class="book-year">${book.year}</span>
    <p class="book-desc">${book.description}</p>
  </article>`
).join("");

/* ==========================================================================
   Works — andra verk (pictures + titles grid)
   ========================================================================== */
const otherWorksGrid = document.getElementById("otherWorksGrid");
otherWorksGrid.innerHTML = OTHER_WORKS.map((work) => {
  const titleHtml = work.link
    ? `<a href="${work.link}" target="_blank" rel="noopener">${work.title}</a>`
    : work.title;
  const coverInner = work.cover
    ? `<img src="${work.cover}" alt="${work.title}" class="other-work-cover-img">`
    : "";
  const coverHtml = work.link
    ? `<a href="${work.link}" target="_blank" rel="noopener" class="other-work-cover" ${work.cover ? "" : `style="background: linear-gradient(160deg, ${work.coverColors[0]}, ${work.coverColors[1]})"`}>${coverInner}</a>`
    : `<div class="other-work-cover" ${work.cover ? "" : `style="background: linear-gradient(160deg, ${work.coverColors[0]}, ${work.coverColors[1]})"`}>${coverInner}</div>`;
  return `
  <article class="other-work-card fade-up">
    ${coverHtml}
    <h4 class="other-work-title">${titleHtml}</h4>
    ${work.description ? `<p class="other-work-desc">${work.description}</p>` : ""}
    ${work.year ? `<span class="other-work-year">${work.year}</span>` : ""}
    ${work.quote ? `<p class="other-work-quote">&ldquo;${work.quote}&rdquo;</p>` : ""}
  </article>`;
}).join("");

/* ==========================================================================
   Right Now — loaded from Supabase (see js/config.js); falls back to the
   default notes in data.js if Supabase isn't configured yet.
   ========================================================================== */
async function loadNotes() {
  if (supabaseClient) {
    const { data, error } = await supabaseClient
      .from("notes")
      .select("date, text")
      .order("date", { ascending: false });
    if (!error && data) return data;
  }
  return [...NOTES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function formatNoteDate(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

loadNotes().then((notes) => {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = notes
    .map(
      (note) => `
    <li class="note-item fade-up">
      <span class="note-date">${formatNoteDate(note.date)}</span>
      <p class="note-text">${note.text}</p>
    </li>`
    )
    .join("");
  // Notes load asynchronously (after Supabase responds), so these elements
  // are inserted after the page-load fade-up observer already ran its
  // initial querySelectorAll — without this they'd stay stuck at opacity: 0.
  notesList.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
});

/* ==========================================================================
   Favorites
   ========================================================================== */
document.getElementById("favoritesGrid").innerHTML = FAVORITES.map(
  (line) => `<li class="favorite-card fade-up">${line}</li>`
).join("");

/* ==========================================================================
   Contact — mailto fallback (no backend wired up yet)
   ========================================================================== */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
});

/* ==========================================================================
   Scroll-in fade animation
   ========================================================================== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
