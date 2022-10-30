$(function () {

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	// Fixed header

	$(window).on("scroll load resize", function () {
		scrollPos = $(this).scrollTop();

		introH = intro.innerHeight();

		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	})

	// smooth Scroll

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700)

	})


});