const gulp = require('gulp');
const concat = require('gulp-concat');

function style() {
    return gulp.src([
        'node_modules/bootstrap/compiler/bootstrap.css',
        'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        'style.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'));
}

function script() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
}

function webfonts() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('dist/webfonts'));
}

exports.all = gulp.series(style, script, webfonts);
