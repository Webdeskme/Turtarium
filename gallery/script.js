// script.js
let slideIndex = 1;
let imageArray = [
    "./art/bellhorn.png",
    "./art/brinemaw.png",
    "./art/cavewood.png",
    "./art/clearstall.png",
    "./art/dip.png",
    "./art/lift.png",
    "./art/tavern.png",
    "./art/ocean.png",
    "./art/title.png"
];

// Randomize the order of the array
imageArray = shuffleArray(imageArray);

showSlides(slideIndex);

// Change image every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {slideIndex = 1}
    if (n < 1) {slideIndex = imageArray.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    document.getElementById("slide-image").src = imageArray[slideIndex-1];
    slides[0].style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
