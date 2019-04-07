var gulp = require('gulp');
var saas = require('gulp-sass');
gulp.task('sass', function(){
	gulp.src(styles/main.scss')
	.pipe(saas({style:'expanded'}))
	.on('error', gutil.log)
	.pipe(gulp.dest('assets'))
});