function show(id) {
  console.info("show" id)

  var page = document.getElementById(id)
  console.info("page", page);
  page.style.display = "block";
}

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("skills");
  hide("projects");
  hide("languages");

  function show() {
  var page = document.getElementById("home");
  page.style.display = "block";
}
show("home");
}

function showSkills() {
  hide("home");
  hide("projects");
  hide("languages");

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjects() {
  hide("home");
  hide("skills");
  hide("languages");

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  hide("home");
  hide("skills");
  hide("projects");

  var page = document.getElementById("languages");
  page.style.display = "block";
}
