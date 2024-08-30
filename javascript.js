const images = document.querySelectorAll('.image-grid img');

images.forEach((image) => {
  let isLarge = false;
  image.addEventListener('click', () => {
    if (!isLarge) {
      image.style.transform = 'scale(1.5)';
      image.style.transition = 'transform 0.5s ease-in-out';
      isLarge = true;
    } else {
      image.style.transform = 'scale(1)';
      image.style.transition = 'transform 0.5s ease-in-out';
      isLarge = false;
    }
  });
});