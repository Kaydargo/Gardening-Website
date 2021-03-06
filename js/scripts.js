
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}
jQuery(document).ready(function() {
	/*
	    Navigation
	*/
	$('footer').backstretch("images/footer.jpg");
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

   if ( window.location.pathname.includes("index.php")) {
    $('.top-content').backstretch("images/IMG_0460-min.jpg");   
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
	}
	else if ( window.location.pathname.includes("plantInfo.php")){
		$('.top-content').backstretch("images/PlantInfoHero.jpg");
	   
		$('#top-navbar-1').on('shown.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
		$('#top-navbar-1').on('hidden.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
	}
	else if (window.location.pathname.includes("how-to.php")){
		$('.top-content').backstretch("images/HowToHero-min.jpg");
		$('.call-to-action-container').backstretch("images/HowToHero-min.jpg");
		$('.testimonials-container').backstretch("images/HowToHero-min.jpg");
		
		$('#top-navbar-1').on('shown.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
		$('#top-navbar-1').on('hidden.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
	}

	else if (window.location.pathname.includes("plants.php")){
		$('.top-content').backstretch("images/plants_3-min.jpg");
    
		$('#top-navbar-1').on('shown.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
		$('#top-navbar-1').on('hidden.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
	}
	else if (window.location.pathname.includes("plantInfo.php")){
		$('.top-content').backstretch("images/PlantInfoHero-min.jpg");
    
		$('#top-navbar-1').on('shown.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
		$('#top-navbar-1').on('hidden.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
	}
	else if (window.location.pathname.includes('beeHelpful.php')){
		$('.top-content').backstretch("images/BeeHero.jpg");
    
		$('#top-navbar-1').on('shown.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
		$('#top-navbar-1').on('hidden.bs.collapse', function(){
			$('.top-content').backstretch("resize");
		});
	}
	// else if (window.location.pathname.includes('planner.php')){
	// 	$('.top-content').backstretch("images/IMG_0305-min.jpg");
    
	// 	$('#top-navbar-1').on('shown.bs.collapse', function(){
	// 		$('.top-content').backstretch("resize");
	// 	});
	// 	$('#top-navbar-1').on('hidden.bs.collapse', function(){
	// 		$('.top-content').backstretch("resize");
	// 	});
	// }
	else if (window.location.pathname.includes('login.php')){

	}

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
	
});


jQuery(window).load(function() {
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

var btn = document.querySelector(".button");

btn.addEventListener("mouseover", function() {
  this.textContent = "Unfavourite";
  document.getElementById('myButton').style.backgroundColor="#ff1c14";
  document.getElementById('myButton').style.borderColor="#ff1c14";
})
btn.addEventListener("mouseout", function() {
  this.textContent = "Favourited";
  document.getElementById('myButton').style.backgroundColor="#55a635";
  document.getElementById('myButton').style.borderColor="#55a635";
})

//username val
	function checkUsernameStrength() {
		if($('#username').val().length<6) {
		$('#username-status').removeClass();
		$('#username-status').addClass('weak-username');
		$('#username-status').html("Atleast 6 characters required");
		} else {
		$('#username-status').removeClass();
		$('#username-status').addClass('valid-username');
		$('#username-status').html("Valid Username");
		}
	}

	function checkPasswordStrength() {
		var number = /([0-9])/;
		var alphabets = /([a-zA-Z])/;
		var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
		if($('#password').val().length<8) {
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('weak-password');
		$('#password-strength-status').html("Weak: Should be atleast 8 characters");
		} else {  	
		if($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {            
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('strong-password');
		$('#password-strength-status').html("Strong");
		} else {
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('medium-password');
		$('#password-strength-status').html("Medium: Uppercase, Lowercase, Numbers & Special characters required");
		}}}