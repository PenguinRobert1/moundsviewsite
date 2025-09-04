// Create an anchor element to wrap the image and make it clickable
const buttonLink = document.createElement('a');

// Set the link's destination to index.html
buttonLink.href = 'index.html'; 

// Create an image element
const img = document.createElement('img');

// Set the image source and alt text
img.src = 'images/Crazy_Penguin_Logo.png'; 
img.alt = 'Crazy_Penguin_Logo';

// Style the image for positioning and cursor
img.style.position = 'absolute';
img.style.top = '15px';
img.style.left = '15px';
img.style.width = '75px';
img.style.height = 'auto';
img.style.borderRadius = '10px';
img.style.zIndex = '2000';
img.style.cursor = 'pointer'; // Indicates the image is clickable

// Append the image to the anchor tag
buttonLink.appendChild(img);

// Append the anchor (which now contains the image) to the body
document.body.appendChild(buttonLink);
