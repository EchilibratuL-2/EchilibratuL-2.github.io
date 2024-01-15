// variabile publice
var activePage = "home";

// functii publice
function $(selector) {
  var el =  document.querySelector(selector);
  console.info("%o found:", selector, el);
  return el;
}

function hide(id) {
  console.info("hide", id);
  $('#' + id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  var prevlink = $("a[data-page=" + activePage + "]");
  prevlink.classList.remove("active");
  hide(activePage);

  var nextLink = $(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = $("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.innerHTML.toLowerCase();
      console.warn("event", page);
      showPage(page);
    }
  });
}

function showSkills() {
  var ul = $("#skills ul");

  var skills = [
    {
      name: "HTML",
      endorcements: 6,
      favorite: true,
    },
    { name: "CSS", endorcements: 5 },
    { name: "JS", endorcements: 7, favorite: true },
    { name: "Word", endorcements: 1, favorite: false },
  ];

  var text = skills.map(function (skill) {
    var cls = "";
    if (skill.favorite == true) {
      console.warn("f", skill);
      cls = "favorite";
    }

    console.info("inside %o map", skill.favorite, cls);
    return `<li class="${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");
}

// executii
showSkills();
showPage(activePage);
initEvents();
