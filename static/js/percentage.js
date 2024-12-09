// Wait for the DOM and styles to fully load
window.addEventListener("load", function () {
    // Select the section to observe
    const technologiesSection = document.querySelector(".technologies-section");
    const skillBars = document.querySelectorAll(".skill-bar-fill");

    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation when 70% or more of the section is visible
                skillBars.forEach(bar => {
                    // Use a small timeout to ensure styles are applied first
                    setTimeout(() => {
                        const targetWidth = bar.getAttribute("data-percentage"); // Get the percentage from the HTML
                        bar.style.width = targetWidth; // Animate the width to the target percentage
                    }, 200); // Slight delay ensures CSS is fully rendered
                });

                // Stop observing once the animation is triggered
                observer.unobserve(technologiesSection);
            }
        });
    }, { threshold: 0.7 }); // Trigger when 70% of the section is visible

    // Observe the technologies section
    observer.observe(technologiesSection);
});