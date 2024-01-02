export function renderSliderPagination(currentClass, totalClass) {
	return function (currentClass, totalClass) {
		return (
			'<span class="' +
			currentClass +
			'" style="vertical-align: sub; font-weight: 600; font-size: 16px"></span>' +
			`\\` +
			'<span class="' +
			totalClass +
			'" style="vertical-align: super; font-weight: 400; font-size: 14px"></span>'
		);
	};
}
