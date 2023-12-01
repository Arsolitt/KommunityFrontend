const bgHeaders = document.querySelectorAll(".background__text");
bgHeaders.forEach((bgHeader) => {
  bgHeaderStroke(bgHeader, 1);
});

window.addEventListener("scroll", () => {
  changeBgHeaderOpacity();
});

function changeBgHeaderOpacity() {
  bgHeaders.forEach((bgHeader) => {
    const bgHeaderHeight = bgHeader.offsetHeight;
    const bgHeaderOffset =
      bgHeader.getBoundingClientRect().top + window.scrollY;
    const currentScrollY = window.scrollY + bgHeaderHeight + 200;
    if (
      currentScrollY >= bgHeaderOffset &&
      currentScrollY <= bgHeaderOffset + bgHeaderHeight
    ) {
      const opacity = 1 - (currentScrollY - bgHeaderOffset) / bgHeaderHeight;
      bgHeaderStroke(bgHeader, opacity);
    }
  });
}

function bgHeaderStroke(bgHeader, opacity) {
  return (bgHeader.style.WebkitTextStroke = `1px rgba(43, 25, 64, ${opacity})`);
}
