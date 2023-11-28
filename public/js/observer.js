const bounced = document.querySelectorAll(".bounced");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bounce");
      return;
    }
    entry.target.classList.remove("bounce");
  });
});

bounced.forEach((element) => {
  observer.observe(element);
});
