const slides = document.getElementsByClassName('slide');
let currentSlideIndex = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

showSlide(currentSlideIndex);

prevBtn.addEventListener('click', () => {
  navigateSlides(-1);
});

nextBtn.addEventListener('click', () => {
  navigateSlides(1);
});

function navigateSlides(direction) {
  const newSlideIndex = currentSlideIndex + direction;
  if (newSlideIndex >= 0 && newSlideIndex < slides.length) {
    showSlide(newSlideIndex);
  }
}

function showSlide(slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[slideIndex].classList.add('active');
  currentSlideIndex = slideIndex;

  prevBtn.disabled = slideIndex === 0;
  nextBtn.disabled = slideIndex === slides.length - 1;
}
