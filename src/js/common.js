
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
	});
});