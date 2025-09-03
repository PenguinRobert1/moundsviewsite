// This file is intentionally left blank.
// Create an image element
const img = document.createElement('img');

// Set the image source and alt text
img.src = 'images/Crazy_Penguin_Logo.png'; // Replace with your image path
img.alt = 'Crazy_Penguin_Logo';

// Style the image for positioning
img.style.position = 'absolute';
img.style.top = '15px'; // Moved 5px down
img.style.left = '15px'; // Moved 5px to the right
img.style.width = '75px'; // Reduced size
img.style.height = 'auto';
img.style.borderRadius = '10px'; // Curved edges
img.style.zIndex = '2000'; // Increased z-index to ensure it appears above the footer

// Append the image to the body
document.body.appendChild(img);