const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let mouseX = 0;
let isDragging = false;

updateCarousel();

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  mouseX = e.clientX;
  container.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const deltaX = e.clientX - mouseX;
  
  
  if (deltaX > 30) { 
    prevModel(); 
    mouseX = e.clientX;
  } else if (deltaX < -30) { 
    nextModel();
    mouseX = e.clientX;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab'; 
});

function nextModel() {
  if (currentIndex < items.length - 1) { 
    currentIndex++;
    updateCarousel();
  } else {
    container.classList.add('shake');
    setTimeout(() => container.classList.remove('shake'), 500);
  }
}

function prevModel() {
  if (currentIndex > 0) { 
    currentIndex--;
    updateCarousel();
  } 
}

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
  
  container.style.transform = 'translateX(10px)'
  setTimeout(() => {
    container.style.transform = 'translateX(0)';
  }, 300);
}