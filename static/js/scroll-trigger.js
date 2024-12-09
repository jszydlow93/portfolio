// Select the about section content
const aboutContent = document.querySelector('.about-content');

// Set up Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add the "visible" class when in view
    }
  });
});

// Observe the about content
observer.observe(aboutContent);

