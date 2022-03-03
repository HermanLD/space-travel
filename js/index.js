const currRoute = window.location.pathname;

//* Navbar & Dropdown
//* -----------------
function toggleNav(e) {
  // Dropdown icons
  NavBarCtrl.firstElementChild.classList.toggle("hidden");
  NavBarCtrl.lastElementChild.classList.toggle("hidden");

  NavBar.classList.toggle("translate-x-full");
  NavBar.classList.toggle("translate-x-0");
}

function getActiveLink() {
  NavBarLinks.forEach(function (el) {
    const elSlug = el.getAttribute("href");

    // sets every link to false
    el.dataset.isActive = "false";

    if (elSlug === currRoute || elSlug + "/" === currRoute) {
      el.dataset.isActive = "true";
    }
  });
}

const NavBarLinks = document.querySelectorAll(".numbered-nav");
const NavBarCtrl = document.querySelector("[aria-controls='main-nav']");
const NavBar = document.querySelector("#main-nav");

NavBarCtrl.addEventListener("click", toggleNav);

getActiveLink();

//* Slider Selection
//* ----------------
function setSelection(cmp, cmpTabs) {
  cmpTabs.forEach(function (el) {
    if (el.control.checked) {
      cmp.dataset.sliderSelected = el.control.value;
    }
  });
}

//? Destination Slider
if (currRoute === "/destinations" || currRoute === "/destinations/") {
  const DestSliderCtrl = document.querySelector(".dest-slider-ctrl");
  const DestSlider = document.querySelector(".dest-slider");
  const DestTabs = document.querySelectorAll(".dest-ctrl-tab");

  DestSliderCtrl.addEventListener("click", function () {
    setSelection(DestSlider, DestTabs);
  });

  setSelection(DestSlider, DestTabs);
}

//? Crew Slider
if (currRoute === "/crew" || currRoute === "/crew/") {
  const CrewSliderCtrl = document.querySelector(".crew-slider-ctrl");
  const CrewSlider = document.querySelector(".crew-slider");
  const CrewTabs = document.querySelectorAll(".crew-ctrl-tab");

  CrewSliderCtrl.addEventListener("click", function () {
    setSelection(CrewSlider, CrewTabs);
  });

  setSelection(CrewSlider, CrewTabs);
}

//? Tech Slider
if (currRoute === "/technology" || currRoute === "/technology/") {
  const TechSliderCtrl = document.querySelector(".tech-slider-ctrl");
  const TechSlider = document.querySelector(".tech-slider");
  const TechTabs = document.querySelectorAll(".tech-ctrl-tab");

  TechSliderCtrl.addEventListener("click", function () {
    setSelection(TechSlider, TechTabs);
  });

  setSelection(TechSlider, TechTabs);
}
