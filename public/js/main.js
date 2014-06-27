var changed = false,
	cleared = true,
	n = $('.navbar-background'),
	header = $('.header-image'),
	contain = $('.header-image-contain');


setLogo();
createSlideShow();

$(document).on('scroll', function (e) {

	if($(document).scrollTop() > 100 && !changed){
		changeBG();
		changed = true, cleared = false;
	}else if($(document).scrollTop() < 100 && !cleared){
		changeBG(true);
		changed = false, cleared = true;
	}
})
$(window).on('resize', function () {
	header.find('img').each(function () {
		$(this).width(contain.width());	
	}).end().width($(header.find('img')[0]).width() * header.find('img').length + 100)
	fixLogo();
})




function changeBG (reverse, start) {
	var start = start || 0;

	if(start < 10){
		n.animate({'opacity' : (reverse ? 0 : 1)}, 800);
		if(!reverse)
			$('.logocopy').fadeOut(800);
		else $('.logocopy').fadeIn(800);
	}
}
function setLogo () {
	var logo = $('.logo').clone();
	$('body').append(logo.css({
		position : 'fixed',
		top : 28,
		left : $('.logo').offset().left
	}).addClass('logocopy'));
}
function fixLogo () {
	$('logocopy').css({
		left : $('.logo img').offset().left
	})
}

function createSlideShow () {
		header.find('img').each(function () {
			$(this).width(contain.width());
		});
		header.width($(header.find('img')[0]).width() * header.find('img').length + 100)
			.find('img.none').removeClass('none');



	setTimeout(function () {
		header.animate({
			marginLeft : -contain.width() - 5
		}, 1000, function () {
			$(this).css('margin-left', 0).find('img').first()
			.appendTo(header);
		})

		


		createSlideShow();
	}, 5000)

}