const gulp = require('gulp')
const sass = require('gulp-sass')
const input = './public/scss/**/*.scss'

gulp.task('default', () => {
  gulp.watch(input, ['sass'])
})

gulp.task('watch', () => {
  return gulp
        .watch(input, ['sass'])
        .on('change', (ev) => {
          console.log('File ' + ev.path + ' was ' + ev.type + ', running tasks...')
        })
})

gulp.task('sass', () => {
  gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
})
