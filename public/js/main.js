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

function changeBG (reverse, start) {
	var start = start || 0;
	console.log(start);
	if(start < 8){
		n.css('background' , 'rgba(48, 9, 5, 0.' + (reverse ? 6 - start : start) + ')');
		start++;
		setTimeout(function(){changeBG(reverse, start)}, 70);
	}
}