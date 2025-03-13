document.addEventListener('DOMContentLoaded', function() {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.slider button.prev');
  const nextButton = document.querySelector('.slider button.next');
  const totalSlides = slides.length;
  let currentIndex = 0;
  
  function updateSlider() {
    slidesContainer.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
  }
  
  prevButton.addEventListener('click', function() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
  });
  
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });
});
