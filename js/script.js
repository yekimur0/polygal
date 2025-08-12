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

const selectLength = document.getElementById('greenHouseLength');
const selectHeight = document.getElementById('greenHouseHeight');
const modelsImg = document.querySelectorAll('.carousel-container img');
const valuesLength = [
  {
    id: 'default',
    path: 'models'
  },
  {
    id: '2',
    path: '2'
  },
  {
    id: '3',
    path: '3'
  },
  {
    id: '4',
    path: '4'
  },
  {
    id: '5',
    path: '5'
  },
  {
    id: '6',
    path: '6'
  },
  {
    id: '7',
    path: '7'
  },
  {
    id: '8',
    path: '8'
  },
]

selectLength.addEventListener('change', (e) => {
  let value = e.target.value;
  
  valuesLength.forEach((item) => {
    const path = item.path;

    if (value == path) {
      changeImages(path);
    }
  })
})

function changeImages(path) {
  modelsImg.forEach((img, index) => {
    path === 'models' ? img.src = `./image/models/${index + 1}.webp` :  img.src = `./image/${path}/${index + 1}.webp`;
  })
}

