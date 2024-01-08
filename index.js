// variabile publice
var activePage = "home";

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
  var prevlink = document.querySelector("a[data-page=" + activePage + "]");
  prevlink.classList.remove('active');
  hide(activePage);

  var nextLink = document.querySelector("a[data-page=" + id + "]");
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  console.info("toolbar", toolbar);
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.innerHTML.toLowerCase();
      console.warn("event", page);
      showPage(page);
    }
  });
}

// executii
showPage(activePage);
initEvents();
