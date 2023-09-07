// Animation Slide
var currentImage = 0;

const images = document.querySelectorAll(".slides img");

function automaticSlide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    currentImage++;
        if (currentImage >= images.length) {
            currentImage = 0;
        }

        images[currentImage].style.display = "block";
        setTimeout(automaticSlide, 5000); // Change image every 5 seconds
    }
automaticSlide(); // Start the automatic slideshow
    
// MenuBar
const menuBar = document.querySelector(".menubar");
const navLinks = document.querySelector("ul");

menuBar.addEventListener("click", () => {
    navLinks.classList.toggle('active');
    menuBar.classList.toggle('active');
});
