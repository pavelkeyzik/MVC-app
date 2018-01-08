'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');

const paths = {
  scripts: ['./models/*.js', './views/*.js', './controllers/*.js', './main.js']
};

gulp.task('build', function() {
  return gulp.src(paths.scripts)
      .pipe(concat('build.js'))
      .pipe(gulp.dest('./js/'));
});
