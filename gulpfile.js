'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const inlinesource = require('gulp-inline-source');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('minify', () => {
  return gulp.src('_site/*.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'));
});

gulp.task('assets', () => {
  return gulp.src('assets/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['minify', 'assets'], () => {
  return;
});
