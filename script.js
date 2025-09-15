// -------------------- TYPEWRITER --------------------
const words = [
  "Creamos experiencias digitales únicas",
  "Desarrollamos software a medida",
  "Transformamos tus ideas en realidad",
];
let i = 0,
  j = 0,
  currentWord = "",
  isDeleting = false;
const speed = 100;

function type() {
  currentWord = words[i];
  document.getElementById("typewriter").textContent = currentWord.substring(
    0,
    j
  );
  if (!isDeleting && j < currentWord.length) j++;
  else if (isDeleting && j > 0) j--;
  if (j === currentWord.length) isDeleting = true;
  else if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? speed / 2 : speed);
}
type();

// -------------------- PARTICLES CON PARALLAX --------------------
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function Particle(x, y, layer) {
  this.x = x;
  this.y = y;
  this.vx = Math.random() * 2 - 1;
  this.vy = Math.random() * 2 - 1;
  this.size = 1 + layer; // diferentes capas
  this.layer = layer;
}
Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255,255,255,${0.2 + 0.15 * this.layer})`;
  ctx.fill();
};

function createParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) {
    let layer = Math.floor(Math.random() * 3) + 1;
    particles.push(
      new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        layer
      )
    );
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.x += p.vx * p.layer * 0.3; // parallax
    p.y += p.vy * p.layer * 0.3;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
createParticles();
animateParticles();

// -------------------- SCROLLREVEAL --------------------
ScrollReveal().reveal("h3, h4, p, .swiper, a", {
  delay: 200,
  distance: "40px",
  origin: "bottom",
  duration: 1000,
});

// -------------------- SWIPER --------------------
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: { el: ".swiper-pagination", clickable: true },
});

// -------------------- GSAP ANIMATIONS --------------------
gsap.from(".service-card", {
  scrollTrigger: ".service-card",
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});
gsap.from("#typewriter", {
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: "power2.out",
});
gsap.from(".btn-modern", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power2.out",
});
gsap.from("#quienes-somos img", {
  scrollTrigger: "#quienes-somos",
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});
gsap.from("#quienes-somos p", {
  scrollTrigger: "#quienes-somos",
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});
