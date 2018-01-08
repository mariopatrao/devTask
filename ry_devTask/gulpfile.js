/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";

var gulp = require('gulp'),
    gp_uglify = require('gulp-uglify'),
    gp_cleanCSS = require('gulp-clean-css'),
    gp_imagein = require('gulp-imagemin'),
    pump = require('pump');

var init_script = 'scripts/*.js',
    init_css = 'css/*.css',
    init_img = 'Media/*/*',
    dist_script = 'exports/uglyJS/',
    dist_css = 'exports/cleanCSS/',
    dist_img = 'exports/Media/';

gulp.task('ugly-js', function (cb) {
    pump([
        gulp.src(init_script),
        gp_uglify(),
        gulp.dest(dist_script)
    ],
        cb
    );
});

gulp.task('minify-css', function (cb) {
    pump([
        gulp.src(init_css),
        gp_cleanCSS({ debug: true, compatibility: 'ie8' }, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }),
        gulp.dest(dist_css)
    ],
        cb
    );
});

gulp.task('optimize-images', function (cb) {
    pump([
        gulp.src(init_img),
        gp_imagein(),
        gulp.dest(dist_img)
    ],
        cb
    );
});