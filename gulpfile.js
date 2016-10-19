var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	runSequence = require('run-sequence'),
	del = require('del'),
	connect = require('gulp-connect'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	babel = require('babelify');
/**

**/



function compile(watch) {
  var bundler = watchify(browserify('./src/main.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}



gulp.task('build', function() { return compile(); });
gulp.task('watch_js', function() { return compile(true); });


/**

**/
gulp.task('clean', function() {
	return del(['dist/*', '!dist']);
});

gulp.task('html', function(){
	return gulp.src( ['src/**/*.html'])
	.pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
		root: './dist/'
  });
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.html'], ['html']);
});

gulp.task('default', function() {
	runSequence('clean', ['watch_js', 'html','connect', 'watch']);
});