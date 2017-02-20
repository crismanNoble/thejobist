var gulp = require('gulp');
var rename = require('gulp-rename');
var csv2json = require('gulp-csv2json');
var remoteSrc = require('gulp-remote-src');
var convert = require('gulp-convert');

gulp.task('buildJSON', function(callback){
  remoteSrc(['pub?output=csv'], {
    base: 'https://docs.google.com/spreadsheets/d/1UzlskeBPhbNLJ1KOGJ_2OHiZAO84-twWXGy4sqV6hi0/'
  })
  .pipe(convert({
    from: 'csv',
    to: 'json'
   }))
  .pipe(rename({
    basename: 'sites',
    extname: '.json'
  }))
  .pipe(gulp.dest('./dist/data'));
});

gulp.task('default', ['buildJSON'], function(callback){
  console.log('everything has been built');
  callback();
});