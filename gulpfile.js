(function() {
    'use strict';
    
    var gulp        = require('gulp'),
        jshint      = require('gulp-jshint'),
        recess      = require('gulp-recess'),
        test        = require('./test/test.js'),
        
        LIB         = './lib/',
        LIB_CLIENT  =  LIB + 'client/',
        Src         = [
            './*.js',
            LIB + '*/*.js',
            LIB_CLIENT + 'storage/*.js',
            '!' + LIB + 'diff/diff-match-patch.js',
            '!' + LIB_CLIENT + 'jquery.js'
        ];
    
    gulp.task('jshint', function() {
        gulp.src(Src)
            .pipe(jshint())
            .pipe(jshint.reporter())
            .on('error', onError);
    });
    
   
    gulp.task('recess', function () {
        gulp.src('css/*.css')
            .pipe(recess())
            .on('error', onError);
    });
    
    gulp.task('test', function() {
       test.check();
    });
    
    gulp.task('default', ['jshint', 'recess', 'test']);
    
    function onError(params) {
        console.log(params.message);
    }
    
})();
