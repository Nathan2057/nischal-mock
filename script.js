document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.slider button.prev');
  const nextBtn = document.querySelector('.slider button.next');
  const total = slides.length;
  let currentIndex = 0;
  
  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'left', 'right', 'hidden');
      // Calculate offset relative to currentIndex (wrap-around handled below)
      let offset = i - currentIndex;
      
      // Wrap-around: if offset is less than -Math.floor(total/2), add total.
      if (offset < -Math.floor(total / 2)) {
        offset += total;
      }
      if (offset > Math.floor(total / 2)) {
        offset -= total;
      }
      
      if (offset === 0) {
        slide.classList.add('active');
      } else if (offset === -1) {
        slide.classList.add('left');
      } else if (offset === 1) {
        slide.classList.add('right');
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
