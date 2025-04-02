let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  if (index < 0 || index >= dots.length) return; // Impede valores inválidos

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
}



// let currentSlide = 3;
