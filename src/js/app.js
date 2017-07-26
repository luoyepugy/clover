
requirejs.config({
    //默认情况下模块所在目录为js/lib
    baseUrl: '../js/libs',
    //当模块id前缀为app时，他便由js/app加载模块文件
    //这里设置的路径是相对与baseUrl的，不要包含.js
    paths: {
        jquery: 'jquery/dist/jquery.min',
        skrollr: 'skrollr/dist/skrollr.min',
        skrollrStyle: 'skrollr-stylesheets/dist/skrollr.stylesheets.min',
        isotope: 'isotope/dist/isotope.pkgd.min',
        imagesloaded: 'imagesloaded/imagesloaded.pkgd.min',
        masonry: 'masonry/dist/masonry.pkgd.min'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        imagesloaded: {
            deps : ['jquery'],
            exports : 'imagesLoaded'
        },
        skrollr: {
            deps: ['skrollrStyle', 'jquery'],
            exports: 'skrollr'
        },
        isotope: {
            deps: ['imagesloaded', 'jquery'],
            exports: 'jQuery.isotope'
        },
        masonry: {
            deps: ['imagesloaded', 'jquery'],
            exports: 'jQuery.masonry'
        }
    }
});

