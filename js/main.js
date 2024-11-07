(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {title: 'Smart Connection', 
      text: "The status light lets you know when you're connected via Bluetooth and whether it's time for a quick charge—making your listening experience hassle-free.", 
      image: 'images/hotspot1-connect.jpg'},
    {title: 'Weatherproof Audio', text: "Designed to withstand sweat and rain, making these earbuds perfect for any workout or weather condition.", image: 'images/hotspot2-water.jpg'},
    {title: 'Lasting Power', text: "Get the freedom to listen, talk, and move without interruptions, thanks to an ultra-long battery life.", image: 'images/hotspot3-battery.jpg'},
    {title: 'Supreme Comfort', text: "The ultra-soft silicone ear tips provide a comfortable, secure fit for a superior listening experience.", image: 'images/hotspot4-comfort.jpg'},
    {title: 'Immersive Sound', text: "Whether you're blocking out distractions with noise cancellation, enjoying ambient sound, or taking calls with clarity, the audio automatically adjusts for each situation.", image: 'images/hotspot5-sound.jpg'},
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=> {

      let selected = document.querySelector(`#hotspot-${index+1}`);

      hotspotTitle = document.createElement('h2');
      hotspotTitle.textContent = infoBox.title;

      hotspotText = document.createElement('p');
      hotspotText.textContent = infoBox.text;

      hotspotImage = document.createElement('img');
      hotspotImage.src = infoBox.image;

      selected.appendChild(hotspotImage);
      selected.appendChild(hotspotTitle);
      selected.appendChild(hotspotText);


    });
  }

  // loadInfo();
  function modelLoaded() {
    loadInfo();
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 0.5, { autoAlpha: 1, scale: 1 }); 
  }
  
  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 0.5, { autoAlpha: 0, scale: 0.8 }); 
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

