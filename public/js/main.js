var changed = false,
	cleared = true,
	n = $('.navbar-background'),
	header = $('.header-image'),
	contain = $('.header-image-contain'),
	initSlideShow = false,
	sliderTimer;


setLogo();
setSliderContainHeight();
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
	fixSliderSizes();
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
		fixSliderSizes();

	if(!initSlideShow){
		header.find('img.none').removeClass('none');


		// Slider Events
		$('.sliderArrows i').on('click', slide);

		initSlideShow = true;
	}



	sliderTimer = setTimeout(function () {
		slideLeft();

		createSlideShow();
	}, 5000);

}
function slide () {
	if($(this).parent().hasClass('left'))
		slideRight(true);
	else slideLeft(true);
}
function setSliderContainHeight (){
	contain.height($(window).height());
}
function fixSliderSizes () {
	header.find('img').each(function () {
		$(this).width(contain.width()).height(contain.height());
	}).end().width($(header.find('img')[0]).width() * header.find('img').length + 100)

}
function slideLeft (restartTimer) {
	header.animate({
		marginLeft : -contain.width() - 5
	}, function () {
		$(this).css('margin-left', 0).find('img').first()
		.appendTo(header);
	})
	if(restartTimer)restartTimerNow();
}
function slideRight (restartTimer) {
	header.find('img').last().prependTo(header);
	header.css('margin-left' , -contain.width())
		.animate({
			marginLeft : 0
		})
	if(restartTimer)restartTimerNow();
}
function restartTimerNow () {
	clearTimeout(sliderTimer);
	createSlideShow();
}