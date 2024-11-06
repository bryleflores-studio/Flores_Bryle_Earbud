(() => {
    console.log("IIFE Fired");
    
  //1 variables first selecting all classes
    const hotspots = document.querySelectorAll(".Hotspot");
    console.log(hotspots);
  //2 will show all nodes in console (how many buttons)
  
  //3 there are many variables so I need a loop (for each)
  
  //5 functions
    // function showInfo() {
    //   //check if working
    //   console.log("showInfo called"); 
    // }
  
    function showInfo(e) {
      console.log(e.currentTarget.slot); 
      //e will show x and y axis
      //currentTarget will show html line
      //slot will show directly the element
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      //button[slot="hotspot-4" > div]
      gsap.to(selected, 1, {autoAlpha: 1});
      //copy to hide info
  
      let name = "Bryle";
      //old string syntax
      console.log("Hello my name is" + name);
      //es6 template litereals (for spacing)
      console.log(`
        Hello my
         name is
          ${name}`);
  
    }
  
    function hideInfo(e) {
      console.log("hideInfo called");
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      gsap.to(selected, 1, {autoAlpha: 0});
    }
  
    //5a  add element inside parenthesis ('e') or any
  
  //4 event listeners
  
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  })
  
  //4a  hotspot = temporary placeholder then add function =>
  //4b  hotspot name can be any but has to match hotspot.addEventListener
  
  })();