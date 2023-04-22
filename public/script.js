var navTop = document.querySelector(".nav-top-wrapper");

console.log(window.scrollY);

function showNavTop() {
  if (window.scrollY > 475) {
    navTop.style.display = "block";
  } else {
    navTop.style.display = "none";
  }
  console.log(window.scrollY);
}

window.addEventListener("scroll", showNavTop);
