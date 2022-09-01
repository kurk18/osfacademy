const doc = document;
const currentImg = doc.querySelector('.active-img');
const imgs = doc.querySelectorAll('.resimmm img');
const imgOpacity = 1;

// Set the first image opacity
imgs[0].style.opacity = imgOpacity;

// A pointer to last selected thumbnail image
let thumbPointer = imgs[0];

// Loop through the images and add a click event
imgs.forEach(img => img.addEventListener("click", clickImage));

function clickImage(e) {

  // In case the same picture is selected again.
  if (e.target === thumbPointer) return;

  // Change current image to src of clicked image
  currentImg.src = e.target.src;

  // Change the opacity
  e.target.style.opacity = imgOpacity;

  // Reset the opacity of last thumbnail
  thumbPointer.style.opacity = 0.5;

  // Update thumb Pointer
  thumbPointer = e.target;
}

const fullPage = document.querySelector('#fullpage');

currentImg.addEventListener('click', function() {
  fullPage.style.backgroundImage = 'url(' + currentImg.src + ')';
  fullPage.style.display = 'block';
});
