/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!
$('body').prepend('<a href="#top" class="back-to-top">Back to Top</a>');
var amountScrolled = 200;
$(window).scroll(function() {
if ( $(window).scrollTop() > amountScrolled ) {
$('a.back-to-top').fadeIn('slow');
} else {
$('a.back-to-top').fadeOut('slow');
}
});
$('a.back-to-top, a.simple-back-to-top').click(function() {
$('html, body').animate({
scrollTop: 0
}, 700);
return false;
});