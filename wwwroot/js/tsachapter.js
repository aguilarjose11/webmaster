//parallax function for jumbotron and picture
(function(){
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
function checkScreen()
{
	
	if($(window).width()<=991)
	{
		if(!($("#trans-right").hasClass("no-active")))
		{
			$("#trans-right").toggleClass("no-active");
			$("#trans-right").toggleClass("col-xs-4");
			$("#trans-left").toggleClass("active")
		}
	}
	
}
$(window).resize(checkScreen())
});


// smooth scrollong script
$(document).ready(function(){
		  // Add smooth scrolling to all links
		  $("a").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
			  // Prevent default anchor click behavior
			  event.preventDefault();

			  // Store hash
			  var hash = this.hash;

			  // Using jQuery's animate() method to add smooth page scroll
			  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			  $('html, body').animate({
				scrollTop: $(hash).offset().top
			  }, 800, function(){
		   
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			  });
			} // End if
		  });
		});
