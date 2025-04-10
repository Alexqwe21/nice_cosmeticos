let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  if (index < 0 || index >= dots.length) return;

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
}

// Autoplay
function startAutoplay() {
  setInterval(() => {
    const dots = document.querySelectorAll('.dot');
    let nextSlide = (currentSlide + 1) % dots.length;
    showSlide(nextSlide);
  }, 3000); // muda a cada 3 segundos
}

// Inicia o autoplay quando a página carregar
window.addEventListener('load', () => {
  showSlide(0); // Mostra o primeiro slide
  startAutoplay(); // Inicia o autoplay
});

