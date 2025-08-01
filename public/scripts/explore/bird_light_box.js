document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".bird-card");
    const lightbox = document.getElementById("bird-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;
    let birdData = [];

    // Store all birds
    cards.forEach((card, index) => {
        birdData.push({
            img: card.dataset.img,
            name: card.dataset.name,
            desc: card.dataset.desc,
            credit: card.dataset.credit || ""
        });

        card.addEventListener("click", () => {
            currentIndex = index;
            showLightbox(currentIndex);
        });
    });

    function showLightbox(index) {
        const bird = birdData[index];
        lightboxImg.src = bird.img;
        lightboxTitle.textContent = bird.name;
        lightboxDesc.textContent = bird.desc;
        lightboxCredit.innerHTML = bird.credit || "";
        lightbox.style.display = "flex";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    closeBtn.addEventListener("click", closeLightbox);

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + birdData.length) % birdData.length;
        showLightbox(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % birdData.length;
        showLightbox(currentIndex);
    });

    // Close on background click
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    const lightboxCredit = document.getElementById("lightbox-credit");

    // function openLightbox(birdCard) {
    //     // existing code to set img, title, desc
    //     const creditHtml = birdCard.getAttribute("data-credit") || "";
    //     lightboxCredit.innerHTML = creditHtml;

    //     // Show lightbox
    //     lightbox.style.display = "block";
    // }
});