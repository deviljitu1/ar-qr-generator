document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector('h1');
    heading.style.opacity = 0;
    heading.style.transition = 'opacity 1s ease-in-out';
  
    setTimeout(() => {
      heading.style.opacity = 1;
    }, 200); // Make the heading fade in after 200ms
  });
  