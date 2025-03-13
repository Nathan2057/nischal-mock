document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.slider button.prev');
  const nextBtn = document.querySelector('.slider button.next');
  let currentIndex = 0;
  const total = slides.length;
  
  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'next', 'hidden');
      if (i === currentIndex) {
        slide.classList.add('active');
      } else if (i === (currentIndex - 1 + total) % total) {
        slide.classList.add('prev');
      } else if (i === (currentIndex + 1) % total) {
        slide.classList.add('next');
      } else {
        slide.classList.add('hidden');
      }
    });
  }
  
  updateSlides();
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlides();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    updateSlides();
  });
});
