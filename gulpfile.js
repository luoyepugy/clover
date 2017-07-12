var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp-spritesmith'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


// css
gulp.task('css',function (){
    return gulp.src("./src/scss/*.scss")
        .pipe(plugins.sass({
          errLogToConsole: true,
          outputStyle: 'compressed'
        }))
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions','safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
            cascade: false,
            remove:true
        }))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest("./public/styles/"));
});


// js
gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.uglify())
    // .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./public/js/'));
});


// 图片压缩
gulp.task('images', function () {
    return gulp.src('./src/images/**/*')
        .pipe(plugins.imagemin({
            progressive: true,                      //类型：Boolean 默认：false 无损压缩jpg图片
            svgoPlugins: [{removeViewBox: false}],  //不要移除svg的viewbox属性
            use: [pngquant()]                       //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('./public/images/'));
});

// 雪碧图
gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('./src/images/sprite/*') // source path of the sprite images
            .pipe(spritesmith({
                imagesName: 'sprite.png',
                cssName: 'sprite.css',
        }));

    spriteData.images.pipe(gulp.dest('./public/styles/sprite/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./public/styles/sprite/')); // output path for the CSS
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['public/styles/', 'public/js/', 'public/images/'], {read: false})
        .pipe(plugins.clean());
});

// node
gulp.task('node', function () {
  nodemon({
    script: './bin/www'
  , ext: 'js ejs html'
  , env: { 'NODE_ENV': 'development' }
  })
});

// 监听
gulp.task('serve', ['images', 'css', 'js', 'node'], function() {

    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/images/**.*', ['images']);

    var files = [
      'views/**/*.ejs',
      'public/**/**/*.*'
    ];

    browserSync.init(files, {
      // server: {
      //    baseDir: './'
      // }
      proxy: 'http://localhost:3000',
      browser: 'google chrome',
      port: 3002,
      notify: true
    });

    gulp.watch(files).on("change", reload);
    
});

// 默认任务
gulp.task('default', ['watch']);
gulp.task('cssprite', ['icon','sprite']);




