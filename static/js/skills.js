window.onload = function () {
  setTimeout(function () {
    document.body.classList.add('loaded'); // Remove loader and show content
    const navbar = document.querySelector('.navbar'); // Select the navbar
    navbar.classList.add('visible'); // Make the navbar visible
  }, 2000); // Adjust this timeout to control how long the loader stays visible
};

document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills-section");
    const skillItems = document.querySelectorAll(".skill-item");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes
          skillsSection.querySelector(".skills-grid").classList.add("visible");
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, index * 200); // Delay each item for a staggered effect
          });
          observer.unobserve(skillsSection); // Unobserve after triggering
        }
      });
    }, { threshold: 0.2 });
  
    observer.observe(skillsSection);
  });