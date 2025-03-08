const images = [
    "./images/cloud1.jpg",
    "./images/cloud2.jpg",
    "./images/cloud3.jpg",
    "./images/saas-concept-collage.jpg",
    "/images/saas-concept-collage (1).jpg"
];
let currentIndex = 0;
const slider = document.getElementById("slider");
function updateImage() {
    slider.src = images[currentIndex];
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
updateImage();
