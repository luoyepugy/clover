define(["jquery"],function(a){a(function(){var n=a("#audio")[0];a(".j-sound").click(function(){a(this).toggleClass("soundOff"),n.paused?n.play():n.pause()});var i=window.location.pathname;a(".nav ul").find('a[href="'+i+'"]').parent().addClass("active").siblings("li").removeClass("active")})});