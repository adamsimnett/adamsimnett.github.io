const blobs = [
  { el: document.getElementById("up"), strength: 20, speed: 0.2 },
  { el: document.getElementById("down"), strength: 25, speed: 0.15 },
  { el: document.getElementById("left"), strength: 30, speed: 0.1 },
  { el: document.getElementById("right"), strength: 35, speed: 0.12 }
];

let mouseX = 0;
let mouseY = 0;
let scrollY = 0;
let time = 0;

/* Track mouse */
window.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5);
  mouseY = (e.clientY / window.innerHeight - 0.5);
});

/* Track scroll */
window.addEventListener("scroll", () => {
  scrollY = window.scrollY;
});

/* Smooth animation loop */
function animate() {
  time += 0.01;

  blobs.forEach(({ el, strength, speed }, i) => {
    if (!el) return;

    const floatX = Math.sin(time * speed + i) * 60;
    const floatY = Math.cos(time * speed + i) * 50;

    const mouseOffsetX = mouseX * strength;
    const mouseOffsetY = mouseY * strength;

    const scrollOffset = scrollY * (0.03 + i * 0.01);

    el.style.transform = `
      translate(-50%, -50%)
      translate(${floatX + mouseOffsetX}px, ${floatY + mouseOffsetY + scrollOffset}px)
      scale(1.05)
    `;
  });

  requestAnimationFrame(animate);
}

animate();