(() => {
  // Variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const menu = document.querySelector("#menu");
  const hamburger = document.querySelector("#burger-icon");
  const closeButton = document.querySelector("#close");
  const menuLinks = document.querySelectorAll("#menu ul a");

  const infoBoxes = [
    { title: 'Smart Connection', 
      text: "The status light lets you know when you're connected via Bluetooth and whether it's time for a quick charge—making your listening experience hassle-free.", 
      image: 'images/hotspot1-connect.jpg' },
    { title: 'Weatherproof Audio', text: "Designed to withstand sweat and rain, making these earbuds perfect for any workout or weather condition.", image: 'images/hotspot2-water.jpg' },
    { title: 'Lasting Power', text: "Get the freedom to listen, talk, and move without interruptions, thanks to an ultra-long battery life.", image: 'images/hotspot3-battery.jpg' },
    { title: 'Supreme Comfort', text: "The ultra-soft silicone ear tips provide a comfortable, secure fit for a superior listening experience.", image: 'images/hotspot4-comfort.jpg' },
    { title: 'Immersive Sound', text: "Whether you're blocking out distractions with noise cancellation, enjoying ambient sound, or taking calls with clarity, the audio automatically adjusts for each situation.", image: 'images/hotspot5-sound.jpg' },
  ];

  // Function to toggle menu visibility and hamburger icon animation
  function toggleMenu() {
    menu.classList.toggle("open"); // Toggle the menu's open state
    hamburger.classList.toggle("open"); // Toggle the hamburger icon animation
  }

  // Load information for hotspots (if necessary)
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const hotspotTitle = document.createElement('h2');
      hotspotTitle.textContent = infoBox.title;

      const hotspotText = document.createElement('p');
      hotspotText.textContent = infoBox.text;

      const hotspotImage = document.createElement('img');
      hotspotImage.src = infoBox.image;

      selected.appendChild(hotspotImage);
      selected.appendChild(hotspotTitle);
      selected.appendChild(hotspotText);
    });
  }

  // Event listeners for opening/closing the menu
  hamburger.addEventListener("click", toggleMenu);  // Toggle hamburger icon and menu
  closeButton.addEventListener("click", toggleMenu); // Close menu when close button is clicked

  // Close menu if a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

  // Event listener for model loading (if necessary)
  model.addEventListener("load", loadInfo);
})();
