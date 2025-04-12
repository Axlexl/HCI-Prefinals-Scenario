let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const container = document.querySelector(".carousel-container");

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
}


setInterval(() => moveSlide(1), 4000);


const toggleButton = document.getElementById("toggle-mode");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  sunIcon.style.display = document.body.classList.contains("dark-mode") ? "none" : "inline";
  moonIcon.style.display = document.body.classList.contains("dark-mode") ? "inline" : "none";
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message Sent! Thank you for contacting us.');
  this.reset();
});
