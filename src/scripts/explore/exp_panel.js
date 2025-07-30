

// export function loadExploreSections() {
//   const container = document.getElementById("exploreContainer");

//   exploreSections.forEach((section, index) => {
//     const sectionDiv = document.createElement("div");
//     sectionDiv.classList.add("category-section");

//     const title = document.createElement("h2");
//     title.textContent = section.title;
//     sectionDiv.appendChild(title);

//     const scrollWrapper = document.createElement("div");
//     scrollWrapper.className = "scroll-wrapper";

//     const leftBtn = document.createElement("button");
//     leftBtn.textContent = "◀";
//     leftBtn.className = "scroll-btn left-btn";

//     const rightBtn = document.createElement("button");
//     rightBtn.textContent = "▶";
//     rightBtn.className = "scroll-btn right-btn";

//     const scrollArea = document.createElement("div");
//     scrollArea.className = "scroll-area";
//     scrollArea.id = `scrollArea-${index}`;

//     section.items.forEach(item => {
//       const card = document.createElement("a");
//       card.className = "explore-card";
//       card.href = item.link;
//       card.style.backgroundImage = `url("${item.image}")`;

//       const cardTitle = document.createElement("div");
//       cardTitle.className = "card-title";
//       cardTitle.textContent = item.title;

//       card.appendChild(cardTitle);
//       scrollArea.appendChild(card);
//     });

//     leftBtn.onclick = () => scrollArea.scrollBy({ left: -300, behavior: 'smooth' });
//     rightBtn.onclick = () => scrollArea.scrollBy({ left: 300, behavior: 'smooth' });

//     scrollWrapper.appendChild(leftBtn);
//     scrollWrapper.appendChild(scrollArea);
//     scrollWrapper.appendChild(rightBtn);

//     sectionDiv.appendChild(scrollWrapper);
//     container.appendChild(sectionDiv);
//   });
// }