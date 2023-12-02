const contactForms = document.querySelectorAll('.contact-form');

contactForms.forEach(form => {
	form.addEventListener('submit', function(event) {
		event.preventDefault();
	});
});