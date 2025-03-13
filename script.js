document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    { src: 'images/project1.png', title: 'Project One' },
    { src: 'images/project2.png', title: 'Project Two' },
    { src: 'images/project3.png', title: 'Project Three' },
    { src: 'images/project4.png', title: 'Project Four' },
    { src: 'images/project5.png', title: 'Project Five' },
    // Add more as needed
  ];
  
  const total = projects.length;
  let currentIndex = 0;
  
  // Box elements
  const boxLeft   = document.querySelector('.box-left');
  const boxCenter = document.querySelector('.box-center');
  const boxRight  = document.querySelector('.box-right');
  
  // Box images & titles
  const leftImg   = boxLeft.querySelector('.box-img');
  const leftTitle = boxLeft.querySelector('.box-title');
  const centerImg = boxCenter.querySelector('.box-img');
  const centerTitle = boxCenter.querySelector('.box-title');
  const rightImg  = boxRight.querySelector('.box-img');
  const rightTitle = boxRight.querySelector('.box-title');
  
  // Nav buttons
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  // Wrap index in [0, total)
  function wrapIndex(i) {
    return (i + total) % total;
  }
  
  // Update the content of each box
  function updateBoxes() {
    const leftIndex   = wrapIndex(currentIndex - 1);
    const centerIndex = wrapIndex(currentIndex);
    const rightIndex  = wrapIndex(currentIndex + 1);
    
    leftImg.src   = projects[leftIndex].src;
    leftTitle.textContent = projects[leftIndex].title;
    
    centerImg.src = projects[centerIndex].src;
    centerTitle.textContent = projects[centerIndex].title;
    
    rightImg.src  = projects[rightIndex].src;
    rightTitle.textContent = projects[rightIndex].title;
  }
  
  // Initialize
  updateBoxes();
  
  // 3D Roll Animation
  function rollNext() {
    // Animate center box rolling out to the left
    boxCenter.classList.add('roll-out-left');
    
    // Animate right box rolling in from the right
    boxRight.classList.add('roll-in-right');
    
    // After animation (0.7s), update index & reset classes
    setTimeout(() => {
      currentIndex = wrapIndex(currentIndex + 1);
      updateBoxes();
      
      // Remove animation classes
      boxCenter.classList.remove('roll-out-left');
      boxRight.classList.remove('roll-in-right');
    }, 700);
  }
  
  function rollPrev() {
    // Animate center box rolling out to the right
    boxCenter.classList.add('roll-out-right');
    
    // Animate left box rolling in from the left
    boxLeft.classList.add('roll-in-left');
    
    // After animation, update index & reset classes
    setTimeout(() => {
      currentIndex = wrapIndex(currentIndex - 1);
      updateBoxes();
      
      // Remove animation classes
      boxCenter.classList.remove('roll-out-right');
      boxLeft.classList.remove('roll-in-left');
    }, 700);
  }
  
  // Button listeners
  nextBtn.addEventListener('click', rollNext);
  prevBtn.addEventListener('click', rollPrev);
});
