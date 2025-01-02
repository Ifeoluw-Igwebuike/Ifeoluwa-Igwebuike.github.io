// JavaScript to trigger animation on scrolling to #service section
document.addEventListener("DOMContentLoaded", function () {
  const serviceSection = document.getElementById("service");

  // Function to add the animation class
  const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              serviceSection.classList.add("animate");
              observer.unobserve(entry.target); // Stop observing once animation has started
          }
      });
  };

  // Creating an Intersection Observer
  const observer = new IntersectionObserver(animateOnScroll, {
      root: null, // null means observing viewport
      threshold: 0.1 // Trigger when 10% of the element is in view
  });

  observer.observe(serviceSection);
});

//about
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about");
  const firstProgressFile = aboutSection.querySelector(".progress-file");

  const animateOnScroll = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              aboutSection.classList.add("animate");
              observer.unobserve(entry.target); // Stop observing after animation starts
          }
      });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      threshold: 0.1
  });

  observer.observe(firstProgressFile); // Observe the first .progress-file element
});

//typewriter effect
document.addEventListener("DOMContentLoaded", function () {
  const spaceContainer = document.querySelector(".space-container");
  const typewriterText = spaceContainer.querySelectorAll(".typewriter span");

  const animateTypewriter = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              typewriterText.forEach((span, index) => {
                  setTimeout(() => {
                      span.classList.add("start-typewriter");
                  }, index * 500); // Delay each line by 500ms
              });
              observer.unobserve(entry.target); // Stop observing after animation starts
          }
      });
  };

  const observer = new IntersectionObserver(animateTypewriter, {
      root: null,
      threshold: 0.1
  });

  observer.observe(spaceContainer); // Observe the .space-container element
});


//progressbar

document.addEventListener("DOMContentLoaded", function () {
  const spaceContainer = document.querySelector(".space-container");
  const progressBars = document.querySelectorAll(".w3-container");

  const handleProgressBarAnimation = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              progressBars.forEach(bar => {
                  const width = bar.getAttribute("data-width");
                  bar.style.width = width;
              });
              observer.unobserve(entry.target); // Stop observing after animation starts
          }
      });
  };

  const observer = new IntersectionObserver(handleProgressBarAnimation, {
      root: null,
      threshold: 0.1
  });

  observer.observe(spaceContainer);
});


