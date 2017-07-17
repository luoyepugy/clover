
define(['jquery'], function ($) {
	$(function() {
		var audio = $("#audio")[0];  

	    $('.j-sound').click(function() {
	        $(this).toggleClass('soundOff');
	        if(audio.paused) {
	        	audio.play();  
	        } else {
	        	audio.pause();  
	        }
	    });

	    var route = window.location.pathname;
	    $('.nav ul').find('a[href="' + route + '"]').parent().addClass('active').siblings('li').removeClass('active');

	    $('.loading').css('width', '100%').one("webkitTransitionEnd otransitionend transitionend",function(){
			$(this).hide();
		});
	});
});