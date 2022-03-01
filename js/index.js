console.log("JS Connected!");

const NavBarLinks = document.querySelectorAll(".numbered-nav");
const NavBarCtrl = document.querySelector("[aria-controls='main-nav']");
const NavBar = document.querySelector("#main-nav");

function toggleNav(e) {
  // Dropdown icons
  NavBarCtrl.firstElementChild.classList.toggle("hidden");
  NavBarCtrl.lastElementChild.classList.toggle("hidden");

  NavBar.classList.toggle("translate-x-full");
  NavBar.classList.toggle("translate-x-0");
}

// Active Nav Link
function getActiveLink() {
  const currRoute = window.location.pathname;

  NavBarLinks.forEach(function (el) {
    const elSlug = el.getAttribute("href");

    // sets every link to false
    el.dataset.isActive = "false";

    if (elSlug === currRoute || elSlug + "/" === currRoute) {
      el.dataset.isActive = "true";
    }
  });
}

NavBarCtrl.addEventListener("click", toggleNav);

getActiveLink();
