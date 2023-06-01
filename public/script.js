var navTop = document.querySelector(".nav-top-wrapper");
var hMenuIcon = document.querySelector(".hm-icon");
var hmClose = document.querySelector(".hm-close");
var hMenuModal = document.querySelector(".h-menu-modal");
var headerHmIcon = document.querySelector(".header-hm-icon");

function showNavTop() {
  if (window.scrollY > 475) {
    navTop.style.display = "block";
  } else {
    navTop.style.display = "none";
  }
  // console.log(window.scrollY);
}

function openHmMenu() {
  hMenuModal.style.display = "flex";
  body.style.overflowY = "hidden";
}
function closeHmMenu() {
  hMenuModal.style.display = "none";
  body.style.overflowY = "scroll";
}

window.onclick = function (e) {
  if (e.target == hMenuModal) {
    hMenuModal.style.display = "none";
  }
};

hMenuIcon.addEventListener("click", openHmMenu);
hmClose.addEventListener("click", closeHmMenu);
headerHmIcon.addEventListener("click", openHmMenu);
window.addEventListener("scroll", showNavTop);
