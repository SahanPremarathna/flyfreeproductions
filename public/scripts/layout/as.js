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



// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.body;
//     body.classList.add("page-transition");
    
//     requestAnimationFrame(() => {
//       body.classList.add("page-visible"); // triggers fade-in
//     });

//     // Add transition to links
//     const links = document.querySelectorAll("a[href]");
//     links.forEach(link => {
//       link.addEventListener("click", (e) => {
//         const href = link.getAttribute("href");
//         if (
//           href.startsWith("http") ||
//           href.startsWith("#") ||
//           link.target === "_blank"
//         ) return;

//         e.preventDefault();
//         body.classList.remove("page-visible"); // triggers fade-out

//         setTimeout(() => {
//           window.location = href;
//         }, 400); // slightly longer than transition
//       });
//     });
//   });