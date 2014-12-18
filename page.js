$(function() {
	$( window ).scroll(function() {
		var dist = window.pageYOffset || document.documentElement.scrollTop;
		console.log(dist)

		if (dist > 70) {
			$(".header").addClass("small");
		} else {
			$(".header").removeClass("small");
		}
	});
})