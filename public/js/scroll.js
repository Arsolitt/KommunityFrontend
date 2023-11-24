// const bgHeaders = document.querySelectorAll(".background__text__inner");

// window.addEventListener("scroll", function () {
//   const triggerHeader = window.innerHeight * 0.6;

//   bgHeaders.forEach((bgHeader) => {
//     const bgHeaderTop = bgHeader.getBoundingClientRect().top;
// 	console.log('Trigger: '+triggerHeader);
// 	console.log('Top: '+bgHeaderTop);
// 	if (bgHeaderTop > triggerHeader) {
// 		bgHeader.classList.remove('background__text__gradient')
// 		bgHeader.classList.add('background__text__stroke')
// 	} else {
// 		bgHeader.classList.remove('background__text__stroke')
// 		bgHeader.classList.add('background__text__gradient')
// 	}
//   });
// });

const header = document.querySelector(".background__text");

window.addEventListener("scroll", () => {
  const t =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  header.style.WebkitTextStroke = `2px rgba(77, 38, 129, ${1 - t})`;
});
// ${-t * 100}% 0

// $(window).scroll(function() {
// 	var scrollTop = $(this).scrollTop();

// 	$('.background__text').css({
// 	  opacity: function() {
// 		var elementHeight = $(this).height();
// 		return 1 - (elementHeight - scrollTop) / elementHeight;
// 	  }
// 	});
//   });

function bgHeaderStyles() {
  return `
	background: linear-gradient(to right, #984989, #7b7680, #7b7680);
	background-color:rgba(0, 0, 0, 0.1);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-stroke: 3px rgba(77, 38, 129, 1);
	`;
}
