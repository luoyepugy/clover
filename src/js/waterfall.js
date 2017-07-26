
define(['imagesloaded','masonry'], function(imagesLoaded, Masonry) {
	$(function() {
        
        var container = document.querySelector('#grid');
        imagesLoaded(container, function() {
            var msnry = new Masonry( container, {
                itemSelector: '.grid-item',
                gutter: 15
            });
        });

        // var $container = $('#grid').imagesLoaded(function() {
            // $container.isotope({
                // itemSelector: '.grid-item',
                // percentPosition: true,
                // layoutMode: 'masonry',
                // masonry: {
                  // columnWidth: 24,
                  // gutter: 15
                // }
        //     });
        // }); 

        var item = $('.grid-item');
        item.hover(function() {
            $(this).siblings('.grid-item').css('opacity', '.5');
        }, function() {
            $(this).siblings('.grid-item').css('opacity', '1');
        });
    });
});