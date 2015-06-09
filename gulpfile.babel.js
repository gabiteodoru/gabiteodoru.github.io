import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import gulp from 'gulp';
import source from 'vinyl-source-stream';

function js() {
	const bundler = browserify({
		entries: './app/script.js',
		debug: true,
		transform: [babelify]
	});

	bundler.bundle()
		.pipe(source('script.js'))
		.pipe(gulp.dest('./app/build'));
}

gulp.task(js);
gulp.task('default', gulp.series('js'));

if (process.argv.includes('--watch')) {
	const files = [
		'./app/index.html',
		'./app/build/*.js'
	];

	browserSync.init(files, {
		server: {
			baseDir: './app'
		}
	});

	gulp.watch('./app/*.js', js);
}
