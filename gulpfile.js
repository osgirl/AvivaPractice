'use strict';

var gulp = require('gulp'),
    gls  = require('gulp-live-server');


gulp.task('serve', function() {
  var server = gls.static(['www']);
  server.start();
});
