const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const obs2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showCar");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const carElements = document.querySelectorAll(".carHidden");
hiddenElements.forEach((el) => observer.observe(el));
carElements.forEach((el) => obs2.observe(el));
