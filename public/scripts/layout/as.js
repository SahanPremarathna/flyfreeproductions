const header = document.querySelector("header");
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

window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  // Select all nav links in both desktop and mobile navs
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Check if the current URL matches the link's href
    if (
      currentPath === linkPath ||
      (linkPath !== "/" && currentPath.startsWith(linkPath))
    ) {
      link.classList.add("active");
    }
  });
});