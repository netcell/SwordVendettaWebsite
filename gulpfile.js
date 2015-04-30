var properties = require('./js/game/config/properties');
var loadFiles  = require('./js/game/config/preloadBootList');

var _           = require('lodash');
var gulp        = require('gulp');
var clean       = require('gulp-clean');
var browserSync = require('browser-sync');
var source      = require('vinyl-source-stream');
var watchify    = require('watchify');
var browserify  = require('browserify');
var notifier    = require('node-notifier');
var notify      = require('gulp-notify');
var jade        = require('gulp-jade');
var stylus      = require('gulp-stylus');
var zip         = require('gulp-zip');
var fs          = require('fs');
var runSequence = require('run-sequence');
var babelify    = require('babelify');

var NAME = properties.title;

gulp.task('server', function() {
	browserSync({
		server       : { baseDir: '../dist' },
		browser      : 'google chrome',
		open         : true
		// files        : '../dist/**',
		// watchOptions : { debounceDelay: 1000 }
    });
});

watchify.args.debug = true;
var bundler = watchify(browserify('./js/game/app.js', watchify.args));
	bundler.transform(babelify.configure({
		ignore: /phaser/,
		optional: ["es7.classProperties"]
	}));
	bundler.transform('browserify-shim');
	bundler.transform('rfolderify');
	bundler.transform('brfs');

function rebundle() {
	return bundler.bundle()
	.on('error', function(err) {
		message = err.toString();
		notifier.notify({
			title   : 'BUILD FAILED',
			sound   : true,
			wait    : true,
			message : message
		});
		console.log('= ERROR =');
		console.log(message);
		console.log('---------');
	})
	.pipe(source('main.js'))
	.pipe(gulp.dest('../dist'))
	.pipe(notify({
		title   : NAME,
		message : 'Javascript Rebundled.',
		sound   : true
	}))
	.pipe(browserSync.reload({stream:true}));
}

gulp.task('watchify', function() {
	bundler.on('update', rebundle);
	return rebundle();
});

gulp.task('browserify', rebundle);

gulp.task('clean-static', function () {
	return gulp.src([
		'../dist/index.html',
		'../dist/index.css'
	], {read: false}).pipe(clean({force: true}));
});

gulp.task('templates', function() {
	return gulp.src('./templates/index.jade')
	.pipe(jade({ data: { properties : properties } }))
	.pipe(gulp.dest('../dist'));
});

gulp.task('stylus', function () {
	return gulp.src('./style/index.styl')
	.pipe(stylus({ compress: true }))
	.pipe(gulp.dest('../dist'));
});

gulp.task('static', function(callback){
	runSequence(
		['clean-static'],
		['templates', 'stylus'],
	function(){
		notifier.notify({
			title: NAME,
			message: 'Static files built',
			sound: true
		});
		browserSync.reload();
		callback();
	});
});

gulp.task('assets', function(callback){
	var srcAsset  = ['./fonts/**/*.*'];
	_.each(loadFiles, function(files) {
		_.each(files, function(file) {
			if (file.link) srcAsset.push('./'+file.link);
			if (file.data) srcAsset.push('./'+file.data);
		});
	});
	return gulp.src(srcAsset, { base: './' })
	.pipe(gulp.dest('../build'));
});

gulp.task('watch', function () {
	gulp.watch([
		'style/**/*.styl',
		'templates/**/*.jade'
	],['static']);
});

gulp.task('default', function(callback){
  runSequence(
    ['static','watchify'],['server','watch'],
  callback);
});

gulp.task('clean-build', function(){
	return gulp.src('../build/**/*.*', { read: false })
	.pipe(clean({force: true}));
})

gulp.task('build-file', function(){
	gulp.src([
		'../dist/index.html',
		'../dist/index.css',
		'../dist/main.js'
	])
	.pipe(gulp.dest('../build'));
});

gulp.task('zip', function(){
	return gulp.src('../build/**/*.*', { base: '../build/' })
	.pipe(zip('index.zip'))
	.pipe(gulp.dest('../build'))
	.pipe(notify({
		title   : NAME,
		message: 'Build completed',
		sound   : true
	}));
})

gulp.task('cocoon', function(){
	return gulp.src('../build/**/*.*', { base: '../build/' })
	.pipe(zip('index.zip'))
	.pipe(gulp.dest("/Volumes/Tuan\ Anh\'s\ iPad\ Documents\ (1)/"))
	.pipe(notify({
		title   : NAME,
		message: 'Build completed',
		sound   : true
	}));
})

gulp.task('build', function(callback){
	runSequence(
		['clean-build', 'static', 'browserify'],
		['assets', 'build-file'],
		['zip'],
	function(){
		process.kill(0);
	});
});

gulp.task('otg-build', function(callback){
	runSequence(
		['clean-build'],
		['assets', 'build-file'],
		['zip'],
	function(){
		process.kill(0);
	});
});

gulp.task('cocoon-build', function(callback){
	runSequence(
		['clean-build'],
		['assets', 'build-file'],
		['cocoon'],
	function(){
		process.kill(0);
	});
});