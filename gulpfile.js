const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);/* изменения в HTML будут также обновлять страницу */
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)") /* будет компиляция css и sass файлов */
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))/* запустили компилятор sass с особыми условиями:какой стиль будет в итоге,сжатие.А вторая часть покажет нам ошибку,если найдем таковую */
        .pipe(rename({suffix: '.min', prefix: ''}))/* после этой команды он станет .min,а был .css */
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))/* после префиксов наш файл будет очищаться */
        .pipe(gulp.dest("src/css")) /* путь куда будут сохранятся наши измененные файлы */
        .pipe(browserSync.stream()); /* после всех действий страничка обновится */
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles')); /* будет следить за обновлениями файлов, и когда мы их сохраним,то запустится команда styles и обновит страницу */
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));/* будут паралельно запускаться 3 команды,которые мы написали ранее */