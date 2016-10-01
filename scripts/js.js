$(function() {

  var carouselWrapper = $('#carousel-wrapper');
  var column = $('.column-round');

  $('#arrow-left').on('click', function() {

    if (carouselWrapper.is(':animated')) {
      return false;
    } else {
      carouselWrapper.animate({
        marginLeft: '+=1300'
      }, 500, function() {
        $(this).removeAttr('style');
        $('.carousel-content').last().insertBefore($('.carousel-content').first());
      });
    }
  });

  $('#arrow-right').on('click', function() {

    if (carouselWrapper.is(':animated')) {
      return false;
    } else {
      carouselWrapper.animate({
        marginLeft: '-=1300'
      }, 500, function() {
        $(this).removeAttr('style');
        $('.carousel-content').first().insertAfter($('.carousel-content').last());
      });
    }
  });

  column.on('mouseover', function() {

    var getHeight = $(this).height() + 10;
    $(this).css('height', getHeight);
  });

  column.on('mouseout', function() {

    $(this).removeAttr('style');
  });

  $('#collapse').on('click', function () {
    var nav = $('nav ul');

    if (nav.is(':hidden')) {
      nav.show();
    } else {
      nav.removeAttr('style');
    }
  });
});
