// variabile publice
var activePage = "projects";

// functii publice
function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar a");
  console.info("toolbar", toolbar);
  toolbar.addEventListener("click", function (e) {
    var page = e.target.innerHTML.toLowerCase();
    console.warn("event", page);
    showPage(page);
  });
}

// executii
showPage(activePage);
initEvents();
