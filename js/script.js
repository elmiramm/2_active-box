$(function () {

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $('#navToggle');

	checkScroll(scrollPos, introH);

	// Fixed header

	$(window).on("scroll resize", function () {
		scrollPos = $(this).scrollTop();
		introH = intro.innerHeight();

		checkScroll(scrollPos, introH);

	})

	function checkScroll(scrollPos, introH) {

		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// smooth Scroll

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700)

	})

	// navToggle 


	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	})


	// Reviews  https://kenwheeler.github.io/slick/

	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: true,
		arrows: false
	});
});