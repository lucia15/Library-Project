(function (){
    'use strict';
    var gulp = require('gulp');
    var gutil = require('gulp-util');
    var uglify = require('gulp-uglify');
    var clean = require('gulp-clean');
    var browserify = require('browserify');
    var watchify = require('watchify');
    var cssify = require('cssify');
    var reactify = require('reactify');
    var source = require("vinyl-source-stream");

    var config = {
        src: './',
        dest: './build'

    };

    gulp.task('default', ['clean'], function () {
        gulp.start('copy-index-html', 'scripts');
    });

    // Cleans the destination folder.
    gulp.task('clean', function () {
      return gulp.src(config.dest, {read: false})
        .pipe(clean({force: true}));
    });


    // Copy and process all the script files.
    gulp.task('scripts', function () {

        var bundler = browserify({
            entries: [config.src + 'js/app.jsx'],
            transform: [cssify, reactify],
            extensions: ['.js', '.jsx'],
            debug: true,
            insertGlobals: false, 
            cache: {},
            packageCache: {},
            fullPaths: true
        });
        var watcher = watchify(bundler, {poll:true});

        return watcher.on('update', function (){
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle()
                .on('error', gutil.log.bind(gutil, "Browserify Error"))
                .pipe(source('app.min.js'))
                .pipe(gulp.dest(config.dest));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
            .bundle()
            .on('error', gutil.log.bind(gutil, "Browserify Error"))
            .pipe(source('app.min.js'))
            .pipe(gulp.dest(config.dest));

    });

    // Copy the index.html
    gulp.task('copy-index-html', function() {
        gulp.src(config.src + 'index.html')
            .pipe(gulp.dest(config.dest));
    });

}());
