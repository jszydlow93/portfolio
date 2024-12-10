document.addEventListener("DOMContentLoaded", () => {
  // Animate Project Items
  const projectItems = document.querySelectorAll(".project-item");
  const contactForm = document.querySelector(".contact-form");
  const technologiesSection = document.querySelector(".technologies-section");
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  const aboutContent = document.querySelector(".about-content");
  const skillsSection = document.querySelector(".skills-section");
  const skillItems = document.querySelectorAll(".skill-item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Handle animations for different sections
          if (entry.target.classList.contains("project-item")) {
            entry.target.classList.add("animate");
          } else if (entry.target === contactForm) {
            contactForm.classList.add("animate");
          } else if (entry.target === technologiesSection) {
            skillBars.forEach(bar => {
              setTimeout(() => {
                const targetWidth = bar.getAttribute("data-percentage");
                bar.style.width = targetWidth;
              }, 200);
            });
          } else if (entry.target === aboutContent) {
            aboutContent.classList.add("visible");
          } else if (entry.target === skillsSection) {
            skillsSection.querySelector(".skills-grid").classList.add("visible");
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 200);
            });
          }

          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    },
    { threshold: 0.2 } // Adjust threshold for different animations
  );

  // Observe elements
  projectItems.forEach(item => observer.observe(item));
  if (contactForm) observer.observe(contactForm);
  if (technologiesSection) observer.observe(technologiesSection);
  if (aboutContent) observer.observe(aboutContent);
  if (skillsSection) observer.observe(skillsSection);

  // Loader and Navbar visibility
  window.onload = function () {
    setTimeout(function () {
      document.body.classList.add("loaded"); // Remove loader and show content
      const navbar = document.querySelector(".navbar");
      if (navbar) navbar.classList.add("visible"); // Make the navbar visible
    }, 2000); // Adjust this timeout to control loader visibility duration
  };
});
