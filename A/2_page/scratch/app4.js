// Get the canvas element and its 2d drawing context
const canvas4 = document.getElementById('myCanvas4');
const context4 = canvas4.getContext('2d');

// Set initial canvas4 background color to white (or any other color you prefer)
context4.fillStyle = '#8660a9';
context4.fillRect(0, 0, canvas4.width, canvas4.height);

// Flag to indicate if erasing mode is active
let isErasing4 = false;

// Event listener to toggle erasing mode on/off
canvas4.addEventListener('mousedown', () => {
  isErasing4 = true;
});
canvas4.addEventListener('touchstart', () => {
  isErasing4 = true;
});

canvas4.addEventListener('mouseup', () => {
  isErasing4 = false;
  context4.beginPath(); // Start a new path after releasing the mouse button
});
canvas4.addEventListener('touchend', () => {
  isErasing4 = false;
  context4.beginPath(); // Start a new path after releasing touch
});

canvas4.addEventListener('mousemove', (event) => {
  if (isErasing4) {
    const x = event.clientX - canvas4.getBoundingClientRect().left;
    const y = event.clientY - canvas4.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context4.globalCompositeOperation = 'destination-out';
    context4.beginPath();
    context4.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context4.fill();
    context4.closePath();
    context4.globalCompositeOperation = 'source-over';
  }
});
canvas4.addEventListener('touchmove', (event) => {
  if (isErasing4) {
    const x = event.touches[0].clientX - canvas4.getBoundingClientRect().left;
    const y = event.touches[0].clientY - canvas4.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context4.globalCompositeOperation = 'destination-out';
    context4.beginPath();
    context4.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context4.fill();
    context4.closePath();
    context4.globalCompositeOperation = 'source-over';
  }
});