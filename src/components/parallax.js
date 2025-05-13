import SimpleParallax from "simple-parallax-js/vanilla";

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("#parallax-image");


  if (image) {
    new SimpleParallax(image, {
      scale: 1.8,
      orientation: "up-down",
      delay: 0.5,
      transition: "cubic-bezier(0,0,0,1)",
      
    });
  }
});
