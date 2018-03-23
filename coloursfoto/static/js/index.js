$(".multiple-items").slick({
	infinite: true,
	slidesToShow: 5,
	dots: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				infinite: true,
				dots: true
			}

		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 3,
				infinite: true,
				dots: true
			}

		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 2,
				infinite: true,
				dots: true
			}

		},
		{
			breakpoint: 350,
			settings: {
				slidesToShow: 1,
				infinite: true,
				dots: true
			}

		}

	]
});

window.onload = function(event) {
	document.body.style.paddingTop = document.getElementById('navibar').clientHeight + "px";
};
window.onresize = function(event) {
	document.body.style.paddingTop = document.getElementById('navibar').clientHeight + "px";
};