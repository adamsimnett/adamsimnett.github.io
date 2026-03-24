const blobs = [
  { el: document.getElementById("up"), strength: 20 },
  { el: document.getElementById("down"), strength: 25 },
  { el: document.getElementById("left"), strength: 30 },
  { el: document.getElementById("right"), strength: 35 }
];

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5);
  mouseY = (e.clientY / window.innerHeight - 0.5);
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  blobs.forEach(({ el, strength }, i) => {
    if (!el) return;

    const x = mouseX * strength;
    const y = mouseY * strength;

    const scrollOffset = scrollY * (0.02 + i * 0.01);

    el.style.transform = `
      translate(${x}px, ${y + scrollOffset}px)
      scale(1)
    `;
  });
});