var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css-es6', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-html-es6', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', ['build-html-es6', 'build-css-es6'], function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-css-commonjs', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-html-commonjs', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-commonjs', ['build-html-commonjs', 'build-css-commonjs'], function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'common'})))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-css-amd', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-html-amd', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-amd', ['build-html-amd', 'build-css-amd'], function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions, {modules:'amd'})))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-css-system', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-html-system', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-system', ['build-html-system', 'build-css-system'], function () {
  return gulp.src(paths.source)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('demo', function (callback) {
  return runSequence('build', ['copy-demo-html', 'copy-demo-js', 'copy-demo-css'], callback);
});

gulp.task('copy-demo-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.demo));
});

gulp.task('copy-demo-js', function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.demo));
});

gulp.task('copy-demo-css', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.demo));
});

gulp.task('jade', function () {
  return gulp.src(paths.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('src/.'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'jade',
    ['build-es6', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
