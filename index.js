const images = [
  {
    "id": 1,
    "name": "image1",
    "url": "images/craft-1.png",
    "description": "Nordic Chair",
    "price": "$50.00"
  },
  {
    "id": 2,
    "name": "image2",
    "url": "images/craft-2.png",
    "description": "Wingback Chair",
    "price": "$65.00"
  },
  {
    "id": 3,
    "name": "image3",
    "url": "images/craft-3.png",
    "description": "Accent Chair",
    "price": "$70.00"
  },
  {
    "id": 4,
    "name": "image4",
    "url": "https://tse2.mm.bing.net/th?id=OIP.MNXsdsdmaUvSJuh4g_F5ywHaHa&pid=Api&P=0&h=220",
    "description": "This is image4",
    "price": "$400"
  },
  {
    "id": 5,
    "name": "image5",
    "url": "https://tse1.mm.bing.net/th?id=OIP.DIQbDbo6GIWt09mv8v1ZnAHaHa&pid=Api&P=0&h=220",
    "description": "This is image5",
    "price": "$500"
  },
  {
    "id": 6,
    "name": "image6",
    "url": "https://tse3.mm.bing.net/th?id=OIP.V3lBgGrcxHRHo01x2bs3xgHaGk&pid=Api&P=0&h=220",
    "description": "This is image6",
    "price": "$600"
  }
];

let currentIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');

// Function to display three images with descriptions and prices
function updateImage() {
  imageDisplay.innerHTML = '';  // Clear current images

  // Display three images, wrapping around if necessary
  for (let i = 0; i < 3; i++) {
    let imgIndex = (currentIndex + i) % images.length;  // Wrap around with modulo

    // Create a div to hold image, description, and price
    let container = document.createElement('div');
    container.classList.add('image-container');

    // Create and append the image element
    let imgElement = document.createElement('img');
    imgElement.src = images[imgIndex].url;
    imgElement.alt = images[imgIndex].description;
    container.appendChild(imgElement);

    // Create and append the description paragraph
    let descElement = document.createElement('p');
    descElement.textContent = images[imgIndex].description;
    container.appendChild(descElement);

    // Create and append the price paragraph
    let priceElement = document.createElement('h2');
    priceElement.textContent = images[imgIndex].price;
    container.appendChild(priceElement);

    // Append the whole container to the imageDisplay div
    imageDisplay.appendChild(container);
  }
  
}

// Event listener for next button
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;  // Increment index and wrap around
  updateImage();  // Update the displayed images
});

const prevButton = document.getElementById('prev');
prevButton.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

updateImage();

const Employee = [
  {
    "description": "Working with them was an absolute pleasure! Their modern design expertise completely transformed my home into a contemporary haven. I now have a space that not only looks stunning but also feels incredibly comfortable. I couldn't be happier with the result.",
    "url": "images/profile-pic-1.jpg",
    "name": "Sam William",
    "id": "CEO, Co-founder",
  },
  {
    "description": "Their modern design expertise was remarkable! The entire team was professional and efficient.",
    "url": "images/profile-pic-2.jpg",
    "name": "John Smith",
    "id": "Head Designer",
  },
  {
    "description": "They completely transformed my space with their innovative design approach. I would highly recommend them!",
    "url": "images/profile-pic-3.jpg",
    "name": "Jane Doe",
    "id": "Marketing Lead",
  },
  {
    "description": "They completely transformed my space with their innovative design approach. I would highly recommend them!",
    "url": "images/profile-pic-4.jpg",
    "name": "Jane Doe",
    "id": "Marketing Lead",
  },
];

let currentIndexEmlp = 0;
const employeeContainer = document.querySelector('.Employeer');
const dots = Array.from(document.querySelectorAll('.fourDots .dot1')); // Updated to get individual dots

// Track the initial position for swipe/drag functionality
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

function updateEmployee() {
  employeeContainer.innerHTML = '';

  // Calculate the current employee index
  const employeeIndex = currentIndexEmlp % Employee.length;

  // Create and append elements directly to employeeContainer
  const description = document.createElement('p');
  description.textContent = Employee[employeeIndex].description;
  employeeContainer.appendChild(description);

  const image = document.createElement('img');
  image.src = Employee[employeeIndex].url;
  image.classList.add('personal-image');
  employeeContainer.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = Employee[employeeIndex].name;
  employeeContainer.appendChild(name);

  const position = document.createElement('p');
  position.textContent = Employee[employeeIndex].id;
  employeeContainer.appendChild(position);

  // Highlight the current dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === employeeIndex); // Highlight the current dot
  });
}

// Function to show a specific slide
function showSlide(index) {
  currentIndexEmlp = index;
  updateEmployee();
}

// Add click event listeners to dots
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Function for next slide
function nextSlide() {
  currentIndexEmlp = (currentIndexEmlp + 1) % Employee.length;
  updateEmployee();
}

// Function for previous slide
function prevSlide() {
  currentIndexEmlp = (currentIndexEmlp - 1 + Employee.length) % Employee.length;
  updateEmployee();
}

// Handle swipe/drag start (mouse or touch)
employeeContainer.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  startY = e.clientY;
});
employeeContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

// Handle swipe/drag end (mouse or touch)
employeeContainer.addEventListener('mouseup', (e) => {
  endX = e.clientX;
  endY = e.clientY;
  handleSwipe();
});
employeeContainer.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;
  handleSwipe();
});

// Detect the swipe direction and update the slide accordingly
function handleSwipe() {
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      // Swipe right -> previous employee
      prevSlide();
    } else {
      // Swipe left -> next employee
      nextSlide();
    }
  }
}

// Initial employee display
updateEmployee();


