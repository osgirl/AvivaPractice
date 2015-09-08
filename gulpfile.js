'use strict';

var gulp    = require('gulp'),
    gls     = require('gulp-live-server'),
    cordova = require('gulp-cordova');



// serve via local web server
gulp.task('serve', function() {
  var server = gls.static(['www']);
  server.start();
});


//build iOS project
gulp.task('ios', function() {
  gulp.src('./cordovaconfig.json')
    .pipe(cordova());
});


//build iOS project
// gulp.task('android', function() {
//   gulp.src('./cordovaconfig.json')
//     .pipe(cordova(['build android']));
// });
