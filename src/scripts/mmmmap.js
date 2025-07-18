document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([7.8731, 80.7718], 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const locations = [
    {
      title: "Anawilundawa Bird Sanctuary",
      desc: "A hidden gem for birdwatching in the wetlands.",
      coords: [7.6033, 79.8343],
      link: "/explore/anawilundawa"
    },
    {
      title: "Vankalei Lagoon - Mannar",
      desc: "Tranquil lagoon scenes with early morning birdlife.",
      coords: [8.3636, 80.0952],
      link: "/explore/vankalei"
    },
    {
      title: "Flamingos - Mannar",
      desc: "Large flocks of migratory flamingos grace the shore.",
      coords: [8.3636, 80.0952],
      link: "/explore/flamingos-2025"
    }
  ];

  const markers = [];
  const resultPanel = document.getElementById('resultPanel');

  function clearMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers.length = 0;
  }

  function addMarkers(filteredLocations) {
    clearMarkers();
    resultPanel.innerHTML = '';

    filteredLocations.forEach(loc => {
      const marker = L.marker(loc.coords).addTo(map);
      marker.bindPopup(`<strong>${loc.title}</strong><br>${loc.desc}`);
      markers.push(marker);

      // Add to result panel
      resultPanel.innerHTML += `
        <div style="padding: 10px; background: #f3f3f3; margin-bottom: 10px; border-radius: 6px;">
          <h4 style="margin: 0 0 6px;">${loc.title}</h4>
          <p style="margin: 0 0 8px;">${loc.desc}</p>
          <a href="${loc.link}" style="text-decoration: none;">
            <button style="
              background-color: #007bff;
              color: white;
              padding: 6px 12px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            ">
              View Story
            </button>
          </a>
        </div>
      `;
    });

    if (filteredLocations.length > 0) {
      map.flyTo(filteredLocations[0].coords, 9);
    }
  }

  // Initial load: show all
  addMarkers(locations);

  // Search functionality
  const searchBox = document.getElementById('searchBox');
  searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    const filtered = locations.filter(loc =>
      loc.title.toLowerCase().includes(query) ||
      loc.desc.toLowerCase().includes(query)
    );
    addMarkers(filtered);
    resultPanel.innerHTML = '<p>Testing panel update</p>';
  });
});
