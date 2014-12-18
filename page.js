$(function() {
	$( window ).scroll(function() {
		var dist = window.pageYOffset || document.documentElement.scrollTop;

		if (dist > 60) {
			$(".header").addClass("small");
		} else {
			$(".header").removeClass("small");
		}

		$("#test1").text(window.height)
		$("#test2").text($(window).height())
		$("#test3").text($(window).innerHeight())

	});

	var makeHeight = function() {
		if ($window.width() < 600) {

		}
	}
	makeHeight();
})


$(document).ready(function(){
   // cache the window object
   $window = $(window);


   if ($window.width() > 600) {
	   $('[data-type="background"]').each(function(){
	     // declare the variable to affect the defined data-type
	     var $scroll = $(this);
	                     
	      $(window).scroll(function() {
	        // HTML5 proves useful for helping with creating JS functions!
	        // also, negative value because we're scrolling upwards                             
	        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
	         
	        // background position
	        var coords = '50% '+ yPos + 'px';
	 
	        // move the background
	        $scroll.css({ backgroundPosition: coords });    
	      }); // end window scroll
	   });  // end section function
	}
}); // close out script