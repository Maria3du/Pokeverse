let slideIndex = 0;

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  slideIndex += direcao;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;

  slides.style.transform = `translateX(-${slideIndex * 600}px)`;
}
