(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {title: 'Test1', text: 'testing 123', image: 'images/ar_hand_prompt.png'},
    {title: 'Test2', text: 'testing 123', image: 'images/test.png'},
    {title: 'Test3', text: 'testing 123', image: 'images/test.png'},
    {title: 'Test4', text: 'testing 123', image: 'images/test.png'},
    {title: 'Test5', text: 'testing 123', image: 'images/test.png'},
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
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

