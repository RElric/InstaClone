var gulp = require('gulp'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    ts = require('gulp-typescript'),
    injectPartials = require('gulp-inject-partials');

gulp.task('compass', function() {
  gulp.src('./src/assets/sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './app/assets/css',
      sass: './src/assets/sass'
    }))
    .pipe(gulp.dest('app/assets/css'));
});

gulp.task('ts', function () {
  return gulp.src('src/assets/ts/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'assets/js/script.js'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(injectPartials())
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/assets/sass/*.scss', ['compass']);
  gulp.watch('src/assets/sass/*/*.scss', ['compass']);
  gulp.watch('src/assets/ts/*.ts', ['ts']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/parts/*.html', ['html']);
});

gulp.task('default', [ 'html', 'css', 'js' ]);
