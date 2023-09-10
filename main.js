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


// Back to Top 

const backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to the top of the document when the button is clicked
backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

