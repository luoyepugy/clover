define(["imagesloaded","masonry"],function(i,t){$(function(){var e=document.querySelector("#grid");i(e,function(){new t(e,{itemSelector:".grid-item",gutter:15})});var n=$(".grid-item");n.hover(function(){$(this).siblings(".grid-item").css("opacity",".5")},function(){$(this).siblings(".grid-item").css("opacity","1")})})});