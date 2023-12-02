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

const arrowsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("arrow__bounce");
        return;
      }
      entry.target.classList.remove("arrow__bounce");
    });
  }
);

arrows.forEach((element) => {
  arrowsObserver.observe(element);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

const sectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          let id = link.getAttribute("href").replace("#", "");
          if (id === entry.target.id) {
            link.classList.add("nav__link__active");
          } else {
            link.classList.remove("nav__link__active");
          }
        });
      }
    });
  },
  {
    threshold: 0.35,
  }
);

sections.forEach((element) => {
  sectionsObserver.observe(element);
});