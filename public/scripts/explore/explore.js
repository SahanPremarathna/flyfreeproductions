
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




