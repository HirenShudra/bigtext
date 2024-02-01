let ham = document.getElementById("hamburgerBtn");
ham.addEventListener("click", showNavbar);

let cross = document.getElementById("crossBtn");
cross.addEventListener("click", hideNavbar);

let navbar = document.getElementById("navLinksBar");

function showNavbar() {
  navbar.style.display = "block";
}
function hideNavbar() {
  navbar.style.display = "none";
}
