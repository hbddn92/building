var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var connect = require('gulp-connect');
var open = require('gulp-open');
var plumber = require('gulp-plumber');
var clean   = require('gulp-clean');
var notify = require("gulp-notify");

var config = {
		port: 8001,
		url: 'http://localhost',
		html: 'index.html',
	}

gulp.task('clean', function() {
  gulp.src( 'dist/', {read: false} )
        .pipe(plumber())
        .pipe(clean())
})

gulp.task('connect', function() {
  console.log('connect')
  connect.server(
  	{
  		port: config.port,
  		base: config.url,
  		livereload: true
  	});
});

gulp.task('watch', function() {

  var b = browserify({
    entries: ['source/index.js'],
    extensions: ['.jsx'],
    cache: {}, packageCache: {},
    plugin: ['watchify']
  });

  b.on('update', makeBundle);

  function makeBundle() {
  	console.log('has build')
    b.transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', function(err) {
        return notify().write(err);
    })
    .pipe(plumber())
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
  }

  makeBundle();
  return b;
});

gulp.task('open', ['connect'], function() {
	gulp.src('index.html')
		.pipe(open({ uri: config.url + ':' + config.port + '/'}));
});

gulp.task('default', ['clean', 'watch', 'open'])
