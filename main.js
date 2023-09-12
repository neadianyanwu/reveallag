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
        setTimeout(automaticSlide, 3000); // Change image every 3 seconds
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

const scriptURL = 'https://script.google.com/macros/s/AKfycbwmrjDYL2R-P0sTkr4cWxjprDPE_BblT7fUiD5plKfQZXrBS5RsmiDzYRX5Pn98nGwd/exec'
    const form = document.forms['submit-to-google-sheet']
    const messages = document.getElementById("messages")

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            messages.innerHTML = "Message sent successfully"
            setTimeout(function() {
                messages.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


