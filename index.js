const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let currentImageIndex = 0;

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const image = document.querySelector("#image");

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length - 1) {
    nextBtn.disabled = true;
  }
  prevBtn.disabled = false;
  image.src = `./images/${images[currentImageIndex]}`;
}

function showPrevImage() {
  currentImageIndex--;
  if (currentImageIndex <= 0) {
    prevBtn.disabled = true;
    currentImageIndex = 0;
  } else {
    nextBtn.disabled = false;
  }
  image.src = `./images/${images[currentImageIndex]}`;
}