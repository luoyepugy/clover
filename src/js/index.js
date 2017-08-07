define(['jquery', '../jq.slider'], function($, Slider) {
    $(function() {

        $('#sliderBox').Slider({
            'isAutoRun': true,
            'isHoverPause': true,
            'isThough': false,
            'showArrow': true,
            'showDots': true,
            'dotsClass': '',
            'className': '',
            'animateType': 'translate'
        });

        // var $sliderItem = $('.slider-item'),
        // 	$sliderBox = $('#sliderBox');

        // var active = 0,			// 当前索引
        // 	next = 1,			// 下一个索引
        // 	activeZIndex = 1,	// 当前z-index的值
        // 	nextZIndex = 2,		// 下一个z-index的值
        // 	activeOpacity = 0,
        // 	nextOpacity = 1,
        // 	len = $sliderItem.length - 1;

        // // 初次加载动画
        // $sliderItem.eq(0).addClass('active');

        // var animateTime = function(type) {
        // 	type = type || null;

        // 	active = $sliderBox.find('.slider-item.active').index();
        // 	next = (type == 'prev') ? active - 1 : Number(active) + 1;
        // 	next = (next > len) ? 0 : next;
        // 	next = (next < 0) ? len : next;

        // 	$sliderItem.eq(next).animate({opacity: 1}, 1000, function() {
        // 		$(this).css('z-index', 2).addClass('active').siblings('.slider-item').css('z-index', 1).removeClass('active');
        // 	}).end().eq(active).animate({opacity: 0}, 1000);
        // };

        // // 循环slider动画
        // var timer = setInterval(animateTime, 6000);

        // // 上下箭头点击事件触发动画
        // $sliderBox.on('click', '.prev', function() {
        // 	clearInterval(timer);
        // 	animateTime('prev');
        // 	timer = setInterval(animateTime, 6000);
        // })
        // .on('click', '.next', function() {
        // 	clearInterval(timer);
        // 	animateTime('next');
        // 	timer = setInterval(animateTime, 6000);
        // });

    });
});