window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  let lastScrollY = window.scrollY;


  if (currentScrollY > lastScrollY && currentScrollY > 0) {
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
  } else {
    header.style.opacity = "1";
    header.style.pointerEvents = "auto";
  }

  lastScrollY = currentScrollY;
});