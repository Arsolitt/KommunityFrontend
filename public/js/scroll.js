const bgHeaders = document.querySelectorAll(".background__text");
bgHeaders.forEach((bgHeader) => {
  bgHeaderStroke(bgHeader, 1);
});
const pageArrows = document.querySelectorAll(".arrow");

window.addEventListener("scroll", () => {
  changeBgHeaderOpacity();
  changeArrowPosition();
});

function changeBgHeaderOpacity() {
  bgHeaders.forEach((bgHeader) => {
    const bgHeaderHeight = bgHeader.offsetHeight;
    const bgHeaderOffset =
      bgHeader.getBoundingClientRect().top + window.scrollY;
    const currentScrollY = window.scrollY + bgHeaderHeight + 100;
    if (
      window.scrollY + bgHeaderHeight + 150 >= bgHeaderOffset &&
      currentScrollY <= bgHeaderOffset + bgHeaderHeight
    ) {
      const opacity = 1 - (currentScrollY - bgHeaderOffset) / bgHeaderHeight;
      bgHeaderStroke(bgHeader, opacity);
    }
  });
}

function changeArrowPosition() {

}

function bgHeaderStroke(bgHeader, opacity) {
  return (bgHeader.style.WebkitTextStroke = `1px rgba(43, 25, 64, ${opacity})`);
}
