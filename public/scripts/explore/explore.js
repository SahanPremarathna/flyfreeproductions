
// this is for the flyfreebanner width control

window.addEventListener('scroll', () => {
        const heading = document.querySelector('.img-br-line h2');
        const scrollTop = window.scrollY;
        const maxScroll = 600;

        // Calculate scroll progress (0 to 1)
        let progress = scrollTop / maxScroll;
        progress = Math.min(progress, 1);

        // Interpolate between 400px and 100% (based on parent width)
        const wrapperWidth = heading.parentElement.offsetWidth;
        const targetWidth = 400 + (wrapperWidth - 400) * progress;

        heading.style.width = targetWidth + 'px';
        });


// this is for the explore image opacity control

window.addEventListener('scroll', () => {
        const image = document.getElementById('scrollImage');
        const scrollTop = window.scrollY;
        const maxScroll = 500; // Adjust based on when you want full transparency

        // Calculate opacity: 1 when at top, 0 when scrolled down maxScroll
        let opacity = 1 - (scrollTop / maxScroll);
        opacity = Math.max(opacity, 0); // Don't go below 0

        image.style.opacity = opacity;
        });



// parent bg img change when hovering

const wild = document.getElementById("wild-exp-bg");
const waterfall = document.getElementById("waterfall-exp-bg");
const beach = document.getElementById("beach-exp-bg");

const fader1 = document.getElementById('bg-fader-1');
const fader2 = document.getElementById('bg-fader-2');

let activeFader = fader1;

function crossfadeBackground(imageUrl) {
  const nextFader = activeFader === fader1 ? fader2 : fader1;

  // Set new image on hidden fader
  nextFader.style.backgroundImage = `url('${imageUrl}')`;
  nextFader.style.opacity = '1';

  // Fade out old one
  activeFader.style.opacity = '0';

  // Swap references
  activeFader = nextFader;
}

function clearBackground() {
  fader1.style.opacity = '0';
  fader2.style.opacity = '0';
}
wild.addEventListener("mouseenter", () => crossfadeBackground('/images/explore/sl-yala.jpg'));
wild.addEventListener("mouseleave", clearBackground);

waterfall.addEventListener("mouseenter", () => crossfadeBackground('/images/explore/waterfall.webp'));
waterfall.addEventListener("mouseleave", clearBackground);

beach.addEventListener("mouseenter", () => crossfadeBackground('/images/explore/beach.jpg'));
beach.addEventListener("mouseleave", clearBackground);






// const wild = document.getElementById("wild");
// const waterfall = document.getElementById("waterfalls");
// const beach = document.getElementById("beach");
// const allPanel = document.getElementById("all-panel");

// function setBackground(image) {
//   allPanel.style.backgroundImage = `url('${image}')`;
//   allPanel.style.backgroundSize = "cover";
//   allPanel.style.backgroundPosition = "center";
//   allPanel.style.transition = "background-image 0.5s ease";
// }

// function clearBackground() {
//   allPanel.style.backgroundImage = "none";
// }

// // Events for wild
// wild.addEventListener("mouseenter", () => setBackground('/images/bg1.webp'));
// wild.addEventListener("mouseleave", clearBackground);
// wild.addEventListener("touchstart", () => setBackground('/images/bg1.webp'));
// wild.addEventListener("touchend", clearBackground);

// // Events for waterfall
// waterfall.addEventListener("mouseenter", () => setBackground('/images/bg2.webp'));
// waterfall.addEventListener("mouseleave", clearBackground);
// waterfall.addEventListener("touchstart", () => setBackground('/images/bg2.webp'));
// waterfall.addEventListener("touchend", clearBackground);

// // Events for beach
// beach.addEventListener("mouseenter", () => setBackground('/images/bg3.webp'));
// beach.addEventListener("mouseleave", clearBackground);
// beach.addEventListener("touchstart", () => setBackground('/images/bg3.webp'));
// beach.addEventListener("touchend", clearBackground);


