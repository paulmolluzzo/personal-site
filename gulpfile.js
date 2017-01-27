'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const inlinesource = require('gulp-inline-source');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', () => {
  return gulp.src('_site/css/*.css')
  .pipe(autoprefixer({
    remove: false,
    browsers: ['last 2 versions', '> 5%', 'iOS 7'],
    cascade: false
  }))
  .pipe(gulp.dest('_site/css/'));
});

gulp.task('minify', () => {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
  return gulp.src('assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['prefix', 'minify', 'assets'], () => {
  return;
});
