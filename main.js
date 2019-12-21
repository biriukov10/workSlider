$(document).ready(function () {
  $('.ba-slider').slick({
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    centerPadding: '75px',
  });
  $('a').on('click', function (e) {
    e.preventDefault();
  });
});
