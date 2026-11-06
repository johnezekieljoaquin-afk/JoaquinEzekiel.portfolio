/* script.js = the BRAIN of the page.
   ONLY EDIT PART 1 (the "YOUR INFO" section). Parts 2 and 3 make it work. */

/* =====================================================================
   PART 1: YOUR INFO  (edit this part)
   ===================================================================== */

const portfolio = {
  name: "John Ezekiel F. Joaquin",
  section: "BSIS 1BG1",
  course: "IS104",                 // shown in the About card

  // YOUR BACKGROUND PHOTO for the top banner. Two options:
  //  (a) put the photo in your repo next to index.html and write its name, e.g. "bg.jpg"
  //  (b) paste a Google Drive link to the photo
  //  Leave "" to use the plain blue gradient instead.
  heroBackground: "3D Wireframe Art abstract wallpaper.jpg",

  // Your picture. Two options:
  //  (a) upload a photo to your GitHub repo (e.g. me.jpg) and write "me.jpg"
  //  (b) paste a Google Drive link to the photo
  photo: "20251102_141716_0000.jpg",

  intro: "Hi, I’m John Ezekiel F. Joaquin, a BSIS 1BG1 student. This portfolio brings together the activities and projects I completed for IS104. Open a folder to explore, then click any file to watch or read it right here.",

  professor: "Mme. Josephine Bayonito",

  /* ---- FOLDERS AND FILES ----
     A FILE looks like:    { title: "Name you want shown", link: "paste gdrive link", kind: "MP4" }
     A FOLDER looks like:  { title: "Folder name", items: [ ...files and folders inside... ] }
     - "kind" is optional: it's just the small label on the thumbnail (MP4, PDF, PNG...).
     - Every { } needs a comma after it, except the last one in a list.
     - Folders can hold other folders, as many levels as you like.
     - HOW TO GET A LINK: in Google Drive, right-click the file > Share > General access >
       "Anyone with the link" > Copy link. Paste it between the quotes.  */

  folders: [
    {
      title: "Activity",
      items: [
        // 3 videos
        { title: "Activity 1 - Creative Self-Introduction", kind: "MP4", link: "https://drive.google.com/file/d/1jpy_JpRHBG_IpbhvUGHPlODT29FGh8J1/view?usp=drive_link" },
        { title: "Activity 2 - Public Speaking Demonstration", kind: "MP4", link: "https://drive.google.com/file/d/1tC8d3O59fpmnJLCW54uoFNybufRZdq6K/view?usp=drive_link" },
        { title: "Activity 5 -  90-Second TEDTalk Challenge", kind: "MP4", link: "https://drive.google.com/file/d/1gVLaqlMGJFs4oN1klRE4x77jWy58Hepz/view?usp=drive_link" },
        // 1 picture
        { title: "Activity 3 - Audience Persona", kind: "JPEG", link: "https://drive.google.com/file/d/1S6qSMkSjVDtJk8Cz_GJw7VlFFeoP4oiz/view?usp=drive_link" },

        // Folder A: 1 video + 1 pdf
        {
          title: "Activity 4 - Infomercial",
          items: [
            { title: "Folder A - Infomercial", kind: "MP4", link: "https://drive.google.com/file/d/1dHA1D4NP0KfVT2ee8V_QQVn5NSMZPvwD/view?usp=drive_link" },
            { title: "Folder A - Task Distribution", kind: "PDF", link: "https://drive.google.com/file/d/1mUx-zEnhqGxHWyr-5b-skXW_rS_5j-DR/view?usp=drive_link" }
          ]
        },

        // Folder B: 3 png, 3 pdf, 1 mp4, 1 docs, and a folder with 4 png
        {
          title: "Webinar Activity",
          items: [
            { title: "Certificate", kind: "PNG", link: "https://drive.google.com/file/d/1jkf_mJ8srVYUYzJOSiYB2T5DE1lt_tzs/view?usp=drive_link" },
            { title: "Poster", kind: "PNG", link: "https://drive.google.com/file/d/1ryCZ3d-vr4gSoL0m4nkRhhZuIiRZI61k/view?usp=drive_link" },
            { title: "Teaser", kind: "MP4", link: "https://drive.google.com/file/d/1ktw5Q7CMY_61H5_PajjP7riB2ShdCPAq/view?usp=drive_link" },
            { title: "Evaluation Form", kind: "PDF", link: "https://drive.google.com/file/d/1PkcKC7oSbWyuL9eW-PjYPsPWxBKQ4Zuj/view?usp=drive_link" },
            { title: "Registration Form", kind: "PDF", link: "https://drive.google.com/file/d/1NojTbeDGQkH5qn5aRPWXdjvElEWk80AZ/view?usp=drive_link" },
            { title: "Slides", kind: "PDF", link: "https://drive.google.com/file/d/15SSKtxgUNGnqb5Sz3BJzri-j8tN31HYp/view?usp=drive_link" },
            { title: "Webinar Record", kind: "MP4", link: "https://drive.google.com/file/d/1bNZBqWvgrG5JIli8eccgaem18sDKm6xi/view?usp=drive_link" },
            { title: "Terminal Report", kind: "DOCX", link: "https://docs.google.com/document/d/1e1tWPeaK0NXLAfIYuOFR4pwTHTgBwFST/edit?usp=drive_link&ouid=116018404208516496039&rtpof=true&sd=true" },
            {
              title: "Screenshots",
              items: [
                { title: "Picture A", kind: "PNG", link: "https://drive.google.com/file/d/1AMHfdJMOyjg6Z_YjWr1bKhvBaOsEmfen/view?usp=drive_link" },
                { title: "Picture B", kind: "PNG", link: "https://drive.google.com/file/d/13oQwKFq43lbBKVIwGdFl_zP1P7wSmqiL/view?usp=drive_link" },
                { title: "Picture C", kind: "PNG", link: "https://drive.google.com/file/d/1ac0LyDo_5mG-T2j4voyiOxzfRjx2cp5R/view?usp=drive_link" },
                { title: "Picture D", kind: "PNG", link: "https://drive.google.com/file/d/1X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X/view?usp=drive_link" }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Product Pitching - RiseGuard",
      items: [
        // Add your project files here, same format as above.
        { title: "RiseGuard Slides", kind: "PDF", link: "https://drive.google.com/file/d/18Qiv1wdewcTth-zw62O3kcEJQhH3r1ch/view?usp=drive_link" },
        { title: "Design", kind: "PDF", link: "https://drive.google.com/file/d/1wx21BY1Vesv-weVmPu0F8zQb46ylnlSD/view?usp=drive_link" }
      ]
    }
  ]
};

/* =====================================================================
   PART 2: HELPER FUNCTIONS (don't edit)
   ===================================================================== */

// Finds the file's ID inside a Drive link. Handles both link styles:
//   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//   https://drive.google.com/open?id=FILE_ID
function getDriveId(link) {
  const m = link.match(/\/d\/([\w-]+)/) || link.match(/[?&]id=([\w-]+)/);
  return m ? m[1] : null;   // null = no valid link pasted yet
}

// Auto-made thumbnail picture for a Drive file (works for videos, pdfs, images, docs)
const thumbUrl = id => `https://drive.google.com/thumbnail?id=${id}&sz=w640`;

// The Drive page that PLAYS or SHOWS the file inside an iframe
// Google Docs/Sheets/Slides links (docs.google.com) use a different preview address than Drive files
function previewUrl(link, id) {
  const g = link.match(/docs\.google\.com\/(document|spreadsheets|presentation)\//);
  return g ? `https://docs.google.com/${g[1]}/d/${id}/preview`
           : `https://drive.google.com/file/d/${id}/preview`;
}

// Shortcut for getting an element by its id
const $ = id => document.getElementById(id);

/* =====================================================================
   PART 3: BUILDING THE PAGE (don't edit)
   ===================================================================== */

// Fill the header, intro and footer
$("name").textContent = portfolio.name;
$("section").textContent = portfolio.section;
$("intro").textContent = portfolio.intro;
$("prof").textContent = portfolio.professor;
$("brand").textContent = portfolio.name;                 // name in the top bar
$("infoSection").textContent = portfolio.section;        // About card
$("infoCourse").textContent = portfolio.course;

// Counts every file inside all folders (folders inside folders included)
const countFiles = items => items.reduce((n, it) => n + (it.items ? countFiles(it.items) : 1), 0);
$("infoCount").textContent = countFiles(portfolio.folders) + " files";

// Background photo: Drive link -> convert it, otherwise use the file name as is.
// Then hand it to CSS through the variable --hero-bg (style.css uses it in .hero).
const bgId = getDriveId(portfolio.heroBackground);
const bgSrc = bgId ? `https://drive.google.com/thumbnail?id=${bgId}&sz=w1600` : portfolio.heroBackground;
if (bgSrc) $("top").style.setProperty("--hero-bg", `url("${bgSrc}")`);
document.title = portfolio.name + " | Portfolio";

// Photo: if it's a Drive link, convert it; otherwise use it as a normal file name
const photoId = getDriveId(portfolio.photo);
$("photo").src = photoId ? thumbUrl(photoId) : portfolio.photo;

// "path" remembers which folders we've opened. [] means we're on the home page.
// Home page = the top-level folders (Activity, Project).
let path = [];

// Gets the list of things to show for the current path
function currentItems() {
  let items = portfolio.folders;
  for (const folder of path) items = folder.items;
  return items;
}

// Draws breadcrumb + cards. Runs again every time you open/close a folder.
function render() {
  // ---- Back button: only visible when you're inside a folder ----
  $("back").hidden = path.length === 0;

  // ---- Breadcrumb ----
  const crumbs = $("crumbs");
  crumbs.innerHTML = "";
  const trail = [{ title: "Home" }, ...path];
  trail.forEach((step, i) => {
    if (i === trail.length - 1) {
      // last step = where you are now (not clickable)
      const s = document.createElement("span");
      s.className = "current"; s.textContent = step.title;
      crumbs.append(s);
    } else {
      const b = document.createElement("button");
      b.textContent = step.title;
      b.onclick = () => { path = path.slice(0, i); render(); };  // jump back
      crumbs.append(b, "/");
    }
  });

  // ---- Cards ----
  const grid = $("grid");
  grid.innerHTML = "";
  const items = currentItems();
  if (!items.length) grid.innerHTML = '<p class="empty">Nothing here yet.</p>';
  items.forEach((item, i) => {
    const card = makeCard(item);
    card.style.setProperty("--i", i);   // card number -> CSS uses it to delay each card's entrance
    grid.append(card);
  });
}

// Makes one card (a folder or a file)
function makeCard(item) {
  const card = document.createElement("button");
  card.className = "card";

  // TILT + SHINE: while the mouse moves over the card, tell CSS where the mouse is
  card.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;               // skip on touchscreens
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;            // 0 (left edge) to 1 (right edge)
    const y = (e.clientY - r.top) / r.height;            // 0 (top edge) to 1 (bottom edge)
    card.style.setProperty("--rx", (0.5 - y) * 10 + "deg");
    card.style.setProperty("--ry", (x - 0.5) * 12 + "deg");
    card.style.setProperty("--mx", x * 100 + "%");
    card.style.setProperty("--my", y * 100 + "%");
  });
  card.addEventListener("pointerleave", () => {          // mouse left: flatten the card again
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  const title = document.createElement("div");
  title.className = "card__title";
  title.textContent = item.title;
  card.append(thumb, title);

  // ----- FOLDER CARD -----
  if (item.items) {
    thumb.innerHTML = '<span class="icon">📁</span>';
    const sub = document.createElement("div");
    sub.className = "card__sub";
    sub.textContent = item.items.length + (item.items.length === 1 ? " item" : " items");
    card.append(sub);
    card.onclick = () => { path.push(item); render(); };   // open the folder
    return card;
  }

  // ----- FILE CARD -----
  const id = getDriveId(item.link);
  const icon = document.createElement("span");
  icon.className = "icon"; icon.textContent = "📄";

  if (id) {
    const img = document.createElement("img");
    img.src = thumbUrl(id);
    img.alt = "";
    img.loading = "lazy";                               // loads only when scrolled into view
    img.onerror = () => { img.replaceWith(icon); };     // if Drive has no thumbnail, show an icon
    thumb.append(img);
  } else {
    thumb.append(icon);   // no valid link pasted yet
  }

  if (item.kind) {
    const badge = document.createElement("span");
    badge.className = "badge"; badge.textContent = item.kind;
    thumb.append(badge);
    if (/mp4|mov|video/i.test(item.kind)) {             // play button on videos
      const p = document.createElement("span");
      p.className = "play"; p.textContent = "▶";
      thumb.append(p);
    }
  }

  card.onclick = () => openPlayer(item.title, item.link);
  return card;
}

/* ---------- POP-UP PLAYER ---------- */
function openPlayer(title, link) {
  const id = getDriveId(link);
  if (!id) { alert("This item has no Google Drive link yet. Paste it in script.js."); return; }
  $("modalTitle").textContent = title;
  $("spinner").hidden = false;                  // show the loading spinner
  $("player").src = previewUrl(link, id);       // loading this URL starts the viewer
  $("modal").hidden = false;
}

// When the file has finished loading, hide the spinner
$("player").onload = () => { $("spinner").hidden = true; };

function closePlayer() {
  $("modal").hidden = true;
  $("player").src = "about:blank";    // empties the iframe so video stops playing
}

$("closeBtn").onclick = closePlayer;
// Clicking the dark area outside the box also closes it
$("modal").onclick = e => { if (e.target === $("modal")) closePlayer(); };
// Pressing Esc closes it too
document.addEventListener("keydown", e => { if (e.key === "Escape") closePlayer(); });

// BACK BUTTON: remove the last opened folder from "path" = go up one level
$("back").onclick = () => { path.pop(); render(); };

// Start: draw the home page
render();
