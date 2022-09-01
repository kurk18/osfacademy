var autoPlayIntervals = [
  5000,
  5000,
  5000,
  5000,
  5000,
];

var $carousel = $('.second').flickity({
  autoPlay: autoPlayIntervals[0],
});
var flkty = $carousel.data('flickity');

$carousel.on( 'select.flickity', function() {
  // set custom autoPlay interval
  // default is 1500ms
  flkty.options.autoPlay = 5000;
});