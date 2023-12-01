const drops = document.querySelectorAll(".drop__bounced");

const dropsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("drop__bounce");
      return;
    }
    entry.target.classList.remove("drop__bounce");
  });
});

drops.forEach((element) => {
  dropsObserver.observe(element);
});

const arrows = document.querySelectorAll(".arrow__bounced");

const arrowsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("arrow__bounce");
      return;
    }
    entry.target.classList.remove("arrow__bounce");
  });
});

arrows.forEach((element) => {
  arrowsObserver.observe(element);
});
