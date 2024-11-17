(() => {

  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    // console.log("moveDivisor is called");
    console.log(slider.value);
    // divisor.style.width = slider.value+"%";
    divisor.style.width = `${slider.value}%`;
  }


  slider.addEventListener("input", moveDivisor);

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    { title: 'Smart Connection', text: "The status light lets you know when you're connected via Bluetooth and whether it's time for a quick charge.", image: 'images/hotspot1-connect.jpg' },
    { title: 'Weatherproof Audio', text: "Designed to withstand sweat and rain, perfect for workouts or any weather condition.", image: 'images/hotspot2-water.jpg' },
    { title: 'Lasting Power', text: "Enjoy uninterrupted listening with an ultra-long battery life.", image: 'images/hotspot3-battery.jpg' },
    { title: 'Supreme Comfort', text: "Soft silicone ear tips for a comfortable, secure fit.", image: 'images/hotspot4-comfort.jpg' },
    { title: 'Immersive Sound', text: "Adaptive audio that adjusts for noise cancellation, ambient sound, or clear calls.", image: 'images/hotspot5-sound.jpg' },
  ];

  // hotspot function
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      const selected = document.querySelector(`#hotspot-${index + 1}`);

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

  // hotspot hover
  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }
  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  model.addEventListener("load", loadInfo);

  // hotspot event listener
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  // scrub Animation
  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 600;
  const images = [];

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/explode_${(i + 1).toString().padStart(4, '0')}.webp`;
    images.push(img);
  }

  const buds = { frame: 25 };


  gsap.to(buds, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 30,
      markers: true,
      start: "top top",
      end: `+=${frameCount * 5}px`,
    },
    onUpdate: render
  });

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
  }

  // menu
  const menu = document.querySelector("#menu");
  const hamburger = document.querySelector("#burger-icon");
  const closeButton = document.querySelector("#close");
  const menuLinks = document.querySelectorAll("#menu ul a");

  // menu function
  function toggleMenu() {
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
  }

  // event listener toggle
  hamburger.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);
  menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

})();


