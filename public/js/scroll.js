const bgHeaders = document.querySelectorAll(".background__text");

window.addEventListener("scroll", () => {
  bgHeaders.forEach((bgHeader) => {
    const bgHeaderHeight = bgHeader.offsetHeight;
    const bgHeaderOffset = bgHeader.getBoundingClientRect().top + window.scrollY;
	const currentScrollY = window.scrollY + bgHeaderHeight + 100
    if ((window.scrollY + bgHeaderHeight + 100 >= bgHeaderOffset) && (currentScrollY <= bgHeaderOffset + bgHeaderHeight)) {
    	const opacity = 1 - (currentScrollY - bgHeaderOffset) / bgHeaderHeight;
		bgHeader.style.WebkitTextStroke = `1px rgba(77, 38, 129, ${opacity})`;
    }
  });
});
