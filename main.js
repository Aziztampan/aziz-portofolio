import confetti from "canvas-confetti";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const typed = new Typed("#role", {
  strings: ["Product Engineer,", "Full-Stack Engineer,", "Tech Enthusiast."],
  typeSpeed: 100,
});

// handle click
const appreciateBtn = document.getElementById("appreciate");
appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});
