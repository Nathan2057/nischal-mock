document.addEventListener('DOMContentLoaded', () => {
  // Example data: multiple images + titles
  const projects = [
    { src: 'images/project1.png', title: 'Project One' },
    { src: 'images/project2.png', title: 'Project Two' },
    { src: 'images/project3.png', title: 'Project Three' },
    { src: 'images/project4.png', title: 'Project Four' },
    { src: 'images/project5.png', title: 'Project Five' },
    // Add more if needed
  ];
  
  // Box references
  const leftBoxImg = document.querySelector('.box-left .box-img');
  const leftBoxTitle = document.querySelector('.box-left .box-title');
  const centerBoxImg = document.querySelector('.box-center .box-img');
  const centerBoxTitle = document.querySelector('.box-center .box-title');
  const rightBoxImg = document.querySelector('.box-right .box-img');
  const rightBoxTitle = document.querySelector('.box-right .box-title');
  
  // Box containers (for fade effect)
  const boxLeft = document.querySelector('.box-left');
  const boxCenter = document.querySelector('.box-center');
  const boxRight = document.querySelector('.box-right');
  
  // Buttons
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  let currentIndex = 0;
  const total = projects.length;
  
  // Helper to wrap index
  function wrapIndex(i) {
    return (i + total) % total;
  }
  
  // Updates images/titles for each box
  function updateBoxes() {
    const leftIndex = wrapIndex(currentIndex - 1);
    const rightIndex = wrapIndex(currentIndex + 1);
    
    leftBoxImg.src = projects[leftIndex].src;
    leftBoxTitle.textContent = projects[leftIndex].title;
    
    centerBoxImg.src = projects[currentIndex].src;
    centerBoxTitle.textContent = projects[currentIndex].title;
    
    rightBoxImg.src = projects[rightIndex].src;
    rightBoxTitle.textContent = projects[rightIndex].title;
  }
  
  // Initial load
  updateBoxes();
  
  // Applies fade animation, updates content at midpoint
  function fadeTransition(isNext) {
    // Add fade-change class to each box
    boxLeft.classList.add('fade-change');
    boxCenter.classList.add('fade-change');
    boxRight.classList.add('fade-change');
    
    // Wait ~half of animation (350ms) -> update images
    setTimeout(() => {
      if (isNext) {
        currentIndex = wrapIndex(currentIndex + 1);
      } else {
        currentIndex = wrapIndex(currentIndex - 1);
      }
      updateBoxes();
    }, 350);
    
    // Remove fade-change class after animation ends (700ms)
    setTimeout(() => {
      boxLeft.classList.remove('fade-change');
      boxCenter.classList.remove('fade-change');
      boxRight.classList.remove('fade-change');
    }, 700);
  }
  
  // Button Listeners
  prevBtn.addEventListener('click', () => {
    fadeTransition(false);
  });
  
  nextBtn.addEventListener('click', () => {
    fadeTransition(true);
  });
});
