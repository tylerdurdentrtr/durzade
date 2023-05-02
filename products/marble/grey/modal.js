const images = document.querySelectorAll(".pic");
var modal = document.querySelector(".modal");
var left = document.querySelector(".modal-left");
var right = document.querySelector(".modal-right");
var modalImg = document.querySelector(".modal-img");
var number = 0;
var currentSrc;
var src;
const imgSources = [];

images.forEach((image) => {
  const imgElement = image.querySelector("img");
  if (imgElement) {
    imgSources.push(imgElement.getAttribute("src"));
  }
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    let child = image.childNodes[1].childNodes[1].childNodes[3];
    src = child.getAttribute("src");
    modalImg.setAttribute("src", src);
    currentSrc = modalImg.getAttribute("src");
    number = imgSources.indexOf(currentSrc);
  });
});

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

left.addEventListener("click", () => {
  number--;
  if (number === -1) number = imgSources.length - 1;
  modalImg.setAttribute("src", imgSources[number]);
  console.log(number);
});

right.addEventListener("click", () => {
  number++;
  if (number === 40) number = 0;
  modalImg.setAttribute("src", imgSources[number]);
});
