var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");
// var mocha = require('gulp-mocha');
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
// var bump = require('gulp-bump');
// var del = require('del');
// var shell = require('gulp-shell');

var paths = {
    readme: ['./README.md'],
    tests: ['tests/*.test.js', 'tests/*.tests.js'],
    docable: ['js/*.js', './README.md'],
    transients:['./docs/*', '!./docs/README.org']
};

// Bundle together
gulp.task('default', function(cb) {
    browserify('../js/phenogrid.js')
    .bundle()
    .pipe(source('../js/phenogrid.js'))
    .pipe(rename('phenogrid-byo-require.js'))
    .pipe(gulp.dest('../dist/'))
    .on('end', cb);
});
