window.addEventListener("load", () => {
  // Check if intro was already shown
  if (sessionStorage.getItem("flyfreeIntroPlayed")) {
    document.getElementById("intro-screen").remove();
    return; // Skip animation
  }

  // Mark intro as played
  sessionStorage.setItem("flyfreeIntroPlayed", "true");

  // Animation sequence
  setTimeout(() => {
    const intro = document.getElementById("intro-screen");
    intro.style.transition = "transform 1s ease, opacity 0.8s ease";
    intro.style.transform = "translateY(-100%)";
    intro.style.opacity = "0";

    setTimeout(() => intro.remove(), 1200);
  }, 4000);
});



let currentSlide = 0;
const slider = document.querySelector('.hero-slider');
const totalSlides = document.querySelectorAll('.hero-panel').length;

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Move to previous panel (slide left)
function slideLeft() {
  currentSlide = (currentSlide + 1) % totalSlides;  // increment for slide left
  updateSlide();
}

// Move to next panel (slide right)
function slideRight() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // decrement for slide right
  updateSlide();
}

// Auto-slide every 3 seconds (move panel left — next)
let autoSlide = setInterval(slideLeft, 4600);

// Left button: move panel left (previous slide)
document.querySelector('.slide-btn.left').addEventListener('click', () => {
  clearInterval(autoSlide);
  slideLeft();
  autoSlide = setInterval(slideLeft, 4600);
});

// Right button: move panel right (next slide)
document.querySelector('.slide-btn.right').addEventListener('click', () => {
  clearInterval(autoSlide);
  slideRight();
  autoSlide = setInterval(slideLeft, 4600);
});
