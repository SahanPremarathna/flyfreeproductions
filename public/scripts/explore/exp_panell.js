import { exploreSections } from './exp_list.js';





export function loadExploreSections() {
  console.log("loadExploreSections() called");
  const container = document.getElementById("exploreContainer");
  console.log("Container found:", container);

  exploreSections.forEach((section, index) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("category-section");

    // const title = document.createElement("h2");
    // title.textContent = section.title;
    // sectionDiv.appendChild(title);
    const title = document.createElement("h2");
    title.textContent = section.title;

    // Generate a clean ID for anchor navigation
    const sectionId = section.title.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '');
    title.id = sectionId;

    sectionDiv.appendChild(title);

    const message = document.createElement("p");
    message.textContent = section.msg;
    sectionDiv.appendChild(message);


    const scrollWrapper = document.createElement("div");
    scrollWrapper.className = "scroll-wrapper";

    const leftBtn = document.createElement("button");
    leftBtn.textContent = "◀";
    leftBtn.className = "scroll-btn left-btn";

    const rightBtn = document.createElement("button");
    rightBtn.textContent = "▶";
    rightBtn.className = "scroll-btn right-btn";

    const scrollArea = document.createElement("div");
    scrollArea.className = "scroll-area";
    scrollArea.id = `scrollArea-${index}`;

    section.items.forEach(item => {
      const card = document.createElement("a");
      card.className = "explore-card";
      card.href = item.link;
      card.style.backgroundImage = `url("${item.image}")`;

      const cardTitle = document.createElement("div");
      cardTitle.className = "card-title";
      cardTitle.textContent = item.title;

      card.appendChild(cardTitle);
      scrollArea.appendChild(card);
    });

    leftBtn.onclick = () => scrollArea.scrollBy({ left: -300, behavior: 'smooth' });
    rightBtn.onclick = () => scrollArea.scrollBy({ left: 300, behavior: 'smooth' });

    scrollWrapper.appendChild(leftBtn);
    scrollWrapper.appendChild(scrollArea);
    scrollWrapper.appendChild(rightBtn);

    sectionDiv.appendChild(scrollWrapper);
    container.appendChild(sectionDiv);
  });
}