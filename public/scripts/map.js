document.addEventListener('DOMContentLoaded', () => {
  // Initialize map
  const map = L.map('map').setView([7.8731, 80.7718], 7); // Centered on Sri Lanka

  // Add OpenStreetMap layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Updated locations with multiple stories per location
  const locations = [
    {
      name: "Anawilundawa Bird Sanctuary",
      coords: [7.6033, 79.8343],
      stories: [
        {
          title: "Wetland Birds – Anawilundawa",
          link: "/explore/anawilundawa"
        }
      ]
    },
    {
      name: "Mannar",
      coords: [8.3636, 80.0952],
      stories: [
        {
          title: "Vankalei Lagoon",
          link: "/explore/vankalei"
        },
        {
          title: "Flamingos 2025",
          link: "/explore/flamingos-2025"
        }
      ]
    }
  ];

  // Add markers and popup panels
  locations.forEach(loc => {
    const marker = L.marker(loc.coords).addTo(map);

    let popupContent = `<div style="padding: 10px;">`;
    popupContent += `<h3 style="margin-bottom: 10px;">${loc.name}</h3>`;

    loc.stories.forEach(story => {
      popupContent += `
        <a href="${story.link}" style="text-decoration: none;">
          <button style="
            background-color: #007bff;
            color: white;
            padding: 8px 14px;
            border: none;
            border-radius: 6px;
            margin-bottom: 6px;
            width: 100%;
            cursor: pointer;
          ">
            ${story.title}
          </button>
        </a>
      `;
    });

    popupContent += `</div>`;

    marker.bindPopup(popupContent);
  });
});
