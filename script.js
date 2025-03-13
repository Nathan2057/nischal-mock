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
  
  const leftImg = document.querySelector('.box-left .box-img');
  const leftTitle = document.querySelector('.box-left .box-title');
  const centerImg = document.querySelector('.box-center .box-img');
  const centerTitle = document.querySelector('.box-center .box-title');
  const rightImg = document.querySelector('.box-right .box-img');
  const rightTitle = document.querySelector('.box-right .box-title');
  
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  let currentIndex = 0;
  const total = projects.length;
  
  function wrapIndex(i) {
    return (i + total) % total;
  }
  
  // Update each box's image/title based on currentIndex
  function updateBoxes() {
    // The left box is (currentIndex - 1)
    const leftIndex = wrapIndex(currentIndex - 1);
    leftImg.src = projects[leftIndex].src;
    leftTitle.textContent = projects[leftIndex].title;
    
    // The center box is (currentIndex)
    centerImg.src = projects[currentIndex].src;
    centerTitle.textContent = projects[currentIndex].title;
    
    // The right box is (currentIndex + 1)
    const rightIndex = wrapIndex(currentIndex + 1);
    rightImg.src = projects[rightIndex].src;
    rightTitle.textContent = projects[rightIndex].title;
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
