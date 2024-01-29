// variabile publice
let activePage = "home";

// functii publice
function $(selector) {
  const el = document.querySelector(selector);
  // console.info("%o found:", selector, el);
  return el;
}

function hide(id) {
  // console.info("hide", id);
  $("#" + id).style.display = "none";
}

function show(id) {
  // console.info("show", id);
  const page = document.getElementById(id);
  // console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  // console.info("show page", id);
  const prevlink = $("a[data-page=" + activePage + "]");
  prevlink.classList.remove("active");
  hide(activePage);

  const nextLink = $(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

function initEvents() {
  const toolbar = $("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      const page = e.target.dataset.page;
    // console.warn("click %o", page);
      showPage(page);
    }
  });
}

function sortSkillByEndorcements(a, b) {
  // console.info("sort", a, b);
  return b.endorcements - a.endorcements;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills(skills) {
  // skills.sort(sortSkillByEndorcements);
  skills.sort(sortByName);
  const ul = $("#skills ul");

  const text = skills.map(function (skill) {
    let cls = "";
    if (skill.favorite == true) {
      // console.warn("f", skill);
      cls = "favorite";
    }

    // console.info("inside %o map", skill.favorite, cls);
    return `<li class="${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  // console.warn(text);

  ul.innerHTML = text.join("");
}

function loadSkills() {
  fetch("skills.json").then(function (r) {
    r.json().then(function (skills) {
      showSkills(skills);
    });
  });
}

// executii
showPage(activePage);
initEvents();
loadSkills();

setTimeout(() => {
  initRubik(document.getElementById("rubikChallenge"));
  initRubik(document.getElementById("rubikChallengePage"));
}, 10);

