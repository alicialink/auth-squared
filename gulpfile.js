const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

// Don't use the **/*js glob here so it doesn't descend into node_modules
const jsFiles = ['routes/*.js', 'seeds/*.js', 'migrations/*.js', '*.js']

gulp.task('lint', function () {
  return gulp.src(jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('watch', function () {
  gulp.watch(jsFiles, ['lint'])
})

function foo() {
  // Blah goes here
}

// gulp.task('default', ['lint'])
gulp.task('default', ['watch'])

