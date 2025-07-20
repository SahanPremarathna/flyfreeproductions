
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



// body bg img change when hovering

const wild = document.getElementById("wild-exp-bg");
const waterfall = document.getElementById("waterfall-exp-bg");
const beach = document.getElementById("beach-exp-bg");
const topImg = document.getElementById("top-img");


const fader1 = document.getElementById('bg-fader-1');
const fader2 = document.getElementById('bg-fader-2');

let activeFader = fader1;

function crossfadeBackground(imageUrl) {
  const nextFader = activeFader === fader1 ? fader2 : fader1;

  nextFader.style.backgroundImage = imageUrl
    ? `url('${imageUrl}')`
    : 'linear-gradient(135deg, #f0f0f0, #ffffff)';

  nextFader.style.opacity = '1';
  activeFader.style.opacity = '0';

  activeFader = nextFader;
}

function clearBackground() {
  fader1.style.opacity = '0';
  fader2.style.opacity = '0';
}

wild.addEventListener("mouseenter", () => crossfadeBackground('/images/explore/wild.webp'));
waterfall.addEventListener("mouseenter", () => crossfadeBackground('/images/explore/waterfall.webp'));
beach.addEventListener("mouseenter", () => crossfadeBackground('/images/explore/beach.webp'));



// mobile body bg changing js

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

topImg.addEventListener("mouseenter", () => {
  if (isMobile) {
    crossfadeBackground('/images/explore/sl-yala-tall.webp');
  } else {
    crossfadeBackground();
  }
});


// screen top default bg

if (isMobile) {
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      crossfadeBackground('/images/explore/sl-yala-tall.webp');
    }
  });
}



