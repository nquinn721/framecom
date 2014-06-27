var changed = false,
	cleared = true,
	n = $('.navbar-background');

$(document).on('scroll', function (e) {

	if($(document).scrollTop() > 100 && !changed){
		changeBG();
		changed = true, cleared = false;
	}else if($(document).scrollTop() < 100 && !cleared){
		changeBG(true);
		changed = false, cleared = true;
	}
})

var logo = $('.logo').clone();
$('body').append(logo.css({
	position : 'fixed',
	top : 28,
	left : $('.logo').offset().left
}).addClass('logocopy'));


function changeBG (reverse, start) {
	var start = start || 0;

	if(start < 10){
		n.animate({'opacity' : (reverse ? 0 : 1)}, 800);
		if(!reverse)
			$('.logocopy').fadeOut(800);
		else $('.logocopy').fadeIn(800);
	}
}