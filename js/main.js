(() => {

  (() => {
    // color selector 
    const earbuds = document.querySelector("#ear-buds");
    const buttons = document.querySelectorAll("#color-buttons button");
  
    function swapColor(e) {
      const selected = e.currentTarget.id;
      earbuds.src = `images/product-${selected}.jpg`;
    }
  
    buttons.forEach(button => {
      button.addEventListener("click", swapColor);
    });
  })();
  
  // xray
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {

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

      const hotspotTitle = document.createElement('h3');
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


  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  // scrub animation
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
      markers: false,
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
  const menuLinks = document.querySelectorAll("#menu ul a");

  function toggleMenu() {
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
  }

  hamburger.addEventListener("click", toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

})();

(() => {

  // GSAP ScrollTrigger Animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#model-info, #model, #mobile-info").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      }
    });
  });

  gsap.utils.toArray("#color-info, #color-image, #feature-sound, #footer-promotion, #xray-wrapper").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      duration: .5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 75%",
        scrub: true,
      }
    });
  });

  //Staggered cards
gsap.set("#features-con .feature-cards", { opacity: 0, y: 50 });

gsap.to("#features-con .feature-cards", {
  scrollTrigger: {
    trigger: "#features-con .feature-cards",
    start: "top 90%",
    end: "bottom 75%",
    toggleActions: "play none none reverse",
    scrub: true,
  },
  opacity: 1,
  y: 0,            
  duration: 1,      
  ease: "power3.out",
  stagger: 0.3,         
});


})();
