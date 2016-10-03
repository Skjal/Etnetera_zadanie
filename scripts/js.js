$(function() {

  var carouselWrapper = $('.carousel__wrapper');
  var column = $('[class*="column--round"');

  // carousel arrows functionality
  function arrow(margin, arrowType) {
    var carouselContent = $('.carousel__wrapper__content');

    if (carouselWrapper.is(':animated')) {
      return false;
    } else {
      carouselWrapper.animate({
        marginLeft: margin
      }, 500, function() {
        $(this).removeAttr('style');
        if (arrowType === 'left') {
          carouselContent.last().insertBefore(carouselContent.first());
        } else {
          carouselContent.first().insertAfter(carouselContent.last());
        }
      });
    }
  }

  $('.arrow--left').on('click', function() {
    arrow("+=1300", "left");
  });

  $('.arrow--right').on('click', function() {
    arrow("-=1300", "right");
  });

  // graph columns interaction
  column
    .on('mouseover', function() {
    var getHeight = $(this).height() + 10;

    $(this).css('height', getHeight);

    })
    .on('mouseout', function() {
      $(this).removeAttr('style');

    });

  $('.collapse').on('click', function () {
    var nav = $('nav ul');

    if (nav.is(':hidden')) {
      nav.show();
    } else {
      nav.removeAttr('style');
    }
  });
});
