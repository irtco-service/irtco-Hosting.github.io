(function() {
  "use strict";

  /**  
   * Testimonials slider
   */
   new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})();

// brands carousel
 $('.owl-brands-theme').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:3
        },
        450:{
            items:5
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
  });

// Domain Carousel

 $('.owl-domain-theme').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:3
        },
        450:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
  });

 // Apps Including

  $('.owl-including').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:2
        },
        450:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

/*------------------
    back to top
------------------*/
$(document).on('click', '.back-to-top', function() {
    $("html,body").animate({
        scrollTop: 0
    }, 2000);
});

$(window).on('load', function() {
    /*-----------------
        back to top
    ------------------*/
    var backtoTop = $('.back-to-top')
    backtoTop.fadeOut();

});


//define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
});