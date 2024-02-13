// Get the canvas element and its 2d drawing context
const canvas2 = document.getElementById('myCanvas2');
const context2 = canvas2.getContext('2d');

// Set initial canvas2 background color to white (or any other color you prefer)
context2.fillStyle = '#8660a9';
context2.fillRect(0, 0, canvas2.width, canvas2.height);

// Flag to indicate if erasing mode is active
let isErasing2 = false;

// Event listener to toggle erasing mode on/off
canvas2.addEventListener('mousedown', () => {
  isErasing2 = true;
});
canvas2.addEventListener('touchstart', () => {
  isErasing2 = true;
});

canvas2.addEventListener('mouseup', () => {
  isErasing2 = false;
  context2.beginPath(); // Start a new path after releasing the mouse button
});
canvas2.addEventListener('touchend', () => {
  isErasing2 = false;
  context2.beginPath(); // Start a new path after releasing touch
});

canvas2.addEventListener('mousemove', (event) => {
  if (isErasing2) {
    const x = event.clientX - canvas2.getBoundingClientRect().left;
    const y = event.clientY - canvas2.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context2.globalCompositeOperation = 'destination-out';
    context2.beginPath();
    context2.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context2.fill();
    context2.closePath();
    context2.globalCompositeOperation = 'source-over';
  }
});
canvas2.addEventListener('touchmove', (event) => {
  if (isErasing2) {
    const x = event.touches[0].clientX - canvas2.getBoundingClientRect().left;
    const y = event.touches[0].clientY - canvas2.getBoundingClientRect().top;

    // Make the pixels within a circular area transparent
    context2.globalCompositeOperation = 'destination-out';
    context2.beginPath();
    context2.arc(x, y, 70, 0, Math.PI * 2); // 40 here is radius of circle
    context2.fill();
    context2.closePath();
    context2.globalCompositeOperation = 'source-over';
  }
});