const track = document.getElementById('carouselTrack');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    let currentIndex = 0;

    function updateCarousel() {
      const total = slides.length;
      const visible = 3;

      // prevent overflow
      leftBtn.disabled = currentIndex <= 0;
      rightBtn.disabled = currentIndex >= total - 1;

      // Calculate offset so that the currentIndex image is centered
      let offsetIndex = Math.max(0, currentIndex - 1);
      track.style.transform = `translateX(-${offsetIndex * (100 / visible)}%)`;

      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
          slide.classList.add('active');
        }
      });
    }

    function slideLeft() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }

    function slideRight() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    }

    leftBtn.addEventListener('click', slideLeft);
    rightBtn.addEventListener('click', slideRight);

    // Add click & hover events to each slide
    slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        // if you want click to slide
        // currentIndex = index;
        // updateCarousel();
    });

    // Optional: make hover also activate
    slide.addEventListener('mouseenter', () => {
        // only if you want hover to slide
        currentIndex = index;
        updateCarousel();
    });
    });


    updateCarousel();