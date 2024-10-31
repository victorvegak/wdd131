let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Loop to reset slideIndex if it goes out of range
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides and remove active class from dots
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the current slide and activate the corresponding dot
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

// Auto-play slides
setInterval(() => {
    plusSlides(1);
}, 5000); // 