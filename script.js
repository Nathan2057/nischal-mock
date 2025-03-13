document.addEventListener('DOMContentLoaded', () => {
  // Example project data
  const projects = [
    { src: 'images/project1.jpg', title: 'Project One' },
    { src: 'images/project2.jpg', title: 'Project Two' },
    { src: 'images/project3.jpg', title: 'Project Three' },
    { src: 'images/project4.jpg', title: 'Project Four' },
    { src: 'images/project5.jpg', title: 'Project Five' }
  ];
  
  const leftBoxImg = document.querySelector('.box-left .box-img');
  const leftBoxTitle = document.querySelector('.box-left .box-title');
  const centerBoxImg = document.querySelector('.box-center .box-img');
  const centerBoxTitle = document.querySelector('.box-center .box-title');
  const rightBoxImg = document.querySelector('.box-right .box-img');
  const rightBoxTitle = document.querySelector('.box-right .box-title');
  
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  let currentIndex = 0;
  const total = projects.length;
  
  // Helper to wrap around index
  function wrapIndex(i) {
    return (i + total) % total;
  }
  
  // Update images/titles in each box
  function updateBoxes() {
    const leftIndex = wrapIndex(currentIndex - 1);
    const rightIndex = wrapIndex(currentIndex + 1);
    
    // Left Box
    leftBoxImg.src = projects[leftIndex].src;
    leftBoxTitle.textContent = projects[leftIndex].title;
    
    // Center Box
    centerBoxImg.src = projects[currentIndex].src;
    centerBoxTitle.textContent = projects[currentIndex].title;
    
    // Right Box
    rightBoxImg.src = projects[rightIndex].src;
    rightBoxTitle.textContent = projects[rightIndex].title;
  }
  
  // Initial load
  updateBoxes();
  
  // Button Listeners
  prevBtn.addEventListener('click', () => {
    currentIndex = wrapIndex(currentIndex - 1);
    updateBoxes();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = wrapIndex(currentIndex + 1);
    updateBoxes();
  });
});
