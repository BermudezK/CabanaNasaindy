const gulp = require('gulp');
const browserSync = require('browser-sync').create('server');


// NOTE: recarga el navegador actualizando los cambios realizados [.css y html]
function defaultTask() {
    browserSync.init({
        server: 'src'
    });

    
}
function watchTask(){
    gulp.watch("src/css/*.css").on('change', browserSync.reload);

    gulp.watch("src/index.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
    gulp.watch("img/*.*").on('change', browserSync.reload);
}

exports.default = defaultTask()
exports.watch = watchTask()