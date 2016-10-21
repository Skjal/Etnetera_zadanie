$(function() {

  // VARIABLES
  var carouselWrapper = $('.carousel__wrapper'),
      column =          $('[class*="column--round"'),
      nav =             $('nav ul'),
      burgerMenu =      $('.collapse'),
      arrowLeft =       $('.arrow--left'),
      arrowRight =      $('.arrow--right');

  // FUNCTIONS
  // carousel arrows functionality
  function arrow(margin, arrowType) {
    var carouselContent = $('.carousel__content');
    if (carouselWrapper.is(':animated')) {
      return false;
    }
    else {
      carouselWrapper
        .animate({
          marginLeft: margin
          }, 500, function() {
          $(this)
            .removeAttr('style');
          if (arrowType === 'left') {
            carouselContent
              .last()
              .insertBefore(carouselContent.first());
          } else {
            carouselContent
              .first()
              .insertAfter(carouselContent.last());
          }
        });
    }
  }

  // mobile menu toggle
  function toggler(element) {
    if (element.is(':hidden')) {
      element.show();
    }
    else {
      element.removeAttr('style');
    }
  }

  // APPS
  arrowLeft
    .on('click', function() {
      arrow("+=1300", "left");
    });

  arrowRight
    .on('click', function() {
      arrow("-=1300", "right");
    });

  // graph columns interaction
  column
    .on('mouseover', function() {
    var getHeight = $(this).height() + 10;
    $(this)
      .css('height', getHeight);

    })
    .on('mouseout', function() {
      $(this)
        .removeAttr('style');
    });

  burgerMenu
    .on('click', function() {
      toggler(nav);
    });
});
