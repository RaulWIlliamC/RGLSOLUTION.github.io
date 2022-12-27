$(window).on('load', function(){
  "use strict";

  /* ========================================================== */
	/*   Demo Request                                             */
	/* ========================================================== */

	$('.demo__container .demo__form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.demo__success').show();
					});
				});
				e.preventDefault();
			}
		});
	});

  /* ========================================================== */
	/*   Newsletter - Mailchimp                                   */
	/* ========================================================== */

	var form = $('#mach-form');

    if (form.length) {
      form.ajaxChimp({
        callback: mailchimpCallback,
        // Replace the URL above with your mailchimp URL (put your URL inside '').
        url: 'mailchimp-url'
      });
    }

    // callback function when the form submitted, show the notification box
    function mailchimpCallback(resp) {
      var messageContainer = $('#message-newsletter');
      messageContainer.removeClass('error');

      form.find('.form-group').removeClass('error');
      if (resp.result === 'error') {
        form.find('.input-group').addClass('error');
        messageContainer.addClass('error');
      } else {
        form.find('.form-control').fadeIn().val('');
      }

      messageContainer.slideDown('slow', 'swing');

      setTimeout(function () {
        messageContainer.slideUp('slow', 'swing');
      }, 10000);
    }


	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */

  $('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'subject':$('input[name="contact_subject"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

  /* ========================================================== */
  /*   Navigation Background Color                              */
  /* ========================================================== */

	$(window).on('scroll', function() {
		if($(this).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('nav-fixed-bg');
		} else {
			$('.navbar-fixed-top').removeClass('nav-fixed-bg');
		}
	});

  /* ========================================================== */
  /*   Owl Carousel For ScreenShots                             */
  /* ========================================================== */

  $("#screens__slider").owlCarousel({
    loop: true,
		nav: true,
		center: true,
		dots: false,
		autoplay: true,
    autoplayTimeout: 3000,
		autoplayHoverPause:false,
    smartSpeed: 450,
  	responsiveClass: true,
  	responsive: {
  			0: {
  					items: 1,
  			},
  			600: {
  					items: 1,
  			},
  			1000: {
  					items: 2,
  			}
  	}
  });

  /* ========================================================== */
  /*   Owl Carousel For Testimonial                             */
  /* ========================================================== */

  $("#testimon__slider").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 5000,
  	loop: true,
  	margin: 10,
  	nav: false,
  	pagination: false,
  	dots: true,
  	responsiveClass: true,
  	responsive: {
  			0: {
  					items: 1,
  			},
  			600: {
  					items: 2,
  			},
  			1000: {
  					items: 3,
  			}
  	}
  });

  /* ========================================================== */
  /*   Owl Carousel For Team Members                            */
  /* ========================================================== */

  $("#team__slider").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 5000,
  	loop: true,
  	margin: 10,
  	nav: true,
  	pagination: false,
  	dots: false,
  	responsiveClass: true,
  	responsive: {
  			0: {
  					items: 1,
  			},
  			600: {
  					items: 2,
  			},
  			1000: {
  					items: 3,
  			}
  	}
  });

  /* ========================================================== */
	/*   Countdown                                                */
	/* ========================================================== */

  var countdown = $('.countdown[data-countdown]');

	if (countdown.length > 0) {
	  countdown.each(function() {
	    var $countdown = $(this),
	      finalDate = $countdown.data('countdown');
	    $countdown.countdown(finalDate, function(event) {
	      $countdown.html(event.strftime(
	        '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
	      ));
	    });
	  });
	}

});

  /* ========================================================== */
	/*   WoW Animations When Scroll                               */
	/* ========================================================== */

	wow = new WOW(
		{
		animateClass: 'animated',
		offset:       100,
		mobile:       false,       // trigger animations on mobile devices (default is true)

		}
	);
	wow.init();

/* ========================================================== */
/*   OnePage Navigation                                       */
/* ========================================================== */

$('#nav').onePageNav({
	filter: ':not(.external)'
});


/* ========================================================== */
/*   Google Map                                               */
/* ========================================================== */

if ($('#googleMap').length) {
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 15,
      scrollwheel: false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(31.127150, 29.782484), // City Name

      // This is where you would paste any style found on Snazzy Maps.
      styles:[{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},
              {"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},
              {"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
              {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},
              {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]},
              {"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#d6e4e9"},{"lightness": 20}]},
              {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#d6e4e9"},{"lightness": 21}]},
              {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#9de8ff"},{"lightness": 21}]},
              {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},
              {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},
              {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},
              {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},
              {"featureType": "transit","elementType": "geometry","stylers": [{"color": "#9de8ff"},{"lightness": 19}]},
              {"featureType": "water","elementType": "geometry","stylers": [{"color": "#a3ccff"},{"lightness": 17}]}]};

      // Get the HTML DOM element that will contain your map
      var mapElement = document.getElementById('googleMap');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(31.126843, 29.782445),
          map: map,
          title: 'Snazzy!'
      });
  }
}

/* ========================================================== */
/*   Preloader                                                */
/* ========================================================== */

$(window).load(function()
{
  $(".preloader").fadeOut(600);
	$(".preloader .sk-cube-grid").fadeOut(600);
});

/* ========================================================== */
/*   Counter                                                  */
/* ========================================================== */

var counter = false,
    statisticsCounter = $('.timer');

function startCounter() {
  if (statisticsCounter.length && !counter) {
    var windowScroll = $(window).scrollTop(),
      timerPosition = statisticsCounter.offset().top,
      windowHeight = $(window).height();
    if (windowScroll - timerPosition + windowHeight >= 0) {
      counter = statisticsCounter.countTo();
    }
  }
}
startCounter();

$(window).on("scroll", function () {
  startCounter();
});
