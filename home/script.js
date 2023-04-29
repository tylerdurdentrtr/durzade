let homeImage = document.querySelector(".home-image");

let images = [
  "./images/home-header/1.jpg",
  "./images/home-header/2.jpg",
  "./images/home-header/3.jpg",
];

let number = 0;

setInterval(() => {
  number++;
  if (number >= images.length) number = 0;
  homeImage.style.backgroundImage = `url("${images[number]}")`;
}, 3000);
