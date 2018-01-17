// jquery jscript

//parallax function for jumbotron and picture
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(){
    parallax();
});

//transitional function for pictures logos 
 function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

	$(window).scroll(function(){
		
        if (isScrolledIntoView('.tsa') === true) {
            $('.tsa').addClass('in-view')
        }
		if (isScrolledIntoView('.ft') === true) {
            $('.ft').addClass('in-view')
        }
		if (isScrolledIntoView('.csa') === true) {
            $('.csa').addClass('in-view')
        }

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

//function for intro text transition
function showText(id, delay) {
    var elem = document.getElementById(id);
    setTimeout(function () {
        elem.style.opacity = 1;
    }, delay * 1000)
}
$(window).scroll(function(){//*move into a unique method declaration*
    if (isScrolledIntoView('#t-1') === true) {
        showText('t-1', .5);
		showText('t-2', 2);
    }
	if (isScrolledIntoView('#past-desc') === true && isScrolledIntoView('#pre-desc') === true) {
        showText('past-desc', 1);
		showText('pre-desc', 1);
    }
});


//on hover function for text
/*$(document).ready(function(){
    $('.right-box-2, .left-box-2').hover(function(){
        $('.desc').css("opacity", "1");
        }, function(){
        $('.desc').css("opacity", "0");
    });
});
*/
$(document).ready(function(){$('.desc').css("opacity", "0");});


$('.carousel').carousel();