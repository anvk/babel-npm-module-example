var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('es6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('es5/'));
});

gulp.task('watch', function() {
  gulp.watch('*.js', ['default']);
});