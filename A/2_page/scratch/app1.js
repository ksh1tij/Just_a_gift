// Get the canvas element and its 2d drawing context
const canvas = document.getElementById('myCanvas1');
const context = canvas.getContext('2d');

// Set initial canvas background color to white (or any other color you prefer)
context.fillStyle = '#8660a9';
context.fillRect(0, 0, canvas.width, canvas.height);

// Flag to indicate if erasing mode is active
let isErasing = false;

// Event listener to toggle erasing mode on/off
canvas.addEventListener('mousedown', () => {
  isErasing = true;
});
canvas.addEventListener('touchstart', () => {
  isErasing = true;
});

canvas.addEventListener('mouseup', () => {
  isErasing = false;
  context.beginPath(); // Start a new path after releasing the mouse button
});
canvas.addEventListener('touchend', () => {
  isErasing = false;
  context.beginPath(); // Start a new path after releasing touch
});

canvas.addEventListener('mousemove', (event) => {
  if (isErasing) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context.globalCompositeOperation = 'destination-out';
    context.beginPath();
    context.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context.fill();
    context.closePath();
    context.globalCompositeOperation = 'source-over';
  }
});
canvas.addEventListener('touchmove', (event) => {
  if (isErasing) {
    const x = event.touches[0].clientX - canvas.getBoundingClientRect().left;
    const y = event.touches[0].clientY - canvas.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context.globalCompositeOperation = 'destination-out';
    context.beginPath();
    context.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context.fill();
    context.closePath();
    context.globalCompositeOperation = 'source-over';
  }
});