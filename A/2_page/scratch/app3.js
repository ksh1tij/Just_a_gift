// Get the canvas element and its 2d drawing context
const canvas3 = document.getElementById('myCanvas3');
const context3 = canvas3.getContext('2d');

// Set initial canvas3 background color to white (or any other color you prefer)
context3.fillStyle = '#8660a9';
context3.fillRect(0, 0, canvas3.width, canvas3.height);

// Flag to indicate if erasing mode is active
let isErasing3 = false;

// Event listener to toggle erasing mode on/off
canvas3.addEventListener('mousedown', () => {
  isErasing3 = true;
});
canvas3.addEventListener('touchstart', () => {
  isErasing3 = true;
});

canvas3.addEventListener('mouseup', () => {
  isErasing3 = false;
  context3.beginPath(); // Start a new path after releasing the mouse button
});
canvas3.addEventListener('touchend', () => {
  isErasing3 = false;
  context3.beginPath(); // Start a new path after releasing touch
});

canvas3.addEventListener('mousemove', (event) => {
  if (isErasing3) {
    const x = event.clientX - canvas3.getBoundingClientRect().left;
    const y = event.clientY - canvas3.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context3.globalCompositeOperation = 'destination-out';
    context3.beginPath();
    context3.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context3.fill();
    context3.closePath();
    context3.globalCompositeOperation = 'source-over';
  }
});
canvas3.addEventListener('touchmove', (event) => {
  if (isErasing3) {
    const x = event.touches[0].clientX - canvas3.getBoundingClientRect().left;
    const y = event.touches[0].clientY - canvas3.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context3.globalCompositeOperation = 'destination-out';
    context3.beginPath();
    context3.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context3.fill();
    context3.closePath();
    context3.globalCompositeOperation = 'source-over';
  }
});