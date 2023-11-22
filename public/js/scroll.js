const bgHeaders = document.querySelectorAll(".background__text__inner");

window.addEventListener("scroll", function () {
  const triggerHeader = window.innerHeight * 0.6;

  bgHeaders.forEach((bgHeader) => {
    const bgHeaderTop = bgHeader.getBoundingClientRect().top;
	console.log('Trigger: '+triggerHeader);
	console.log('Top: '+bgHeaderTop);
	if (bgHeaderTop > triggerHeader) {
		bgHeader.classList.remove('background__text__gradient')
		bgHeader.classList.add('background__text__stroke')
	} else {
		bgHeader.classList.remove('background__text__stroke')
		bgHeader.classList.add('background__text__gradient')
	}
  });
});
