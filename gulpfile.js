var gulp = require('gulp');
var ngdocs = require('gulp-ngdocs');

// Add standard tasks    
require('pip-webui-tasks').all();

// Define build tasks        
gulp.task('build', ['build-dev', 'build-prod']);
gulp.task('rebuild', ['build-dev']);
gulp.task('clean', ['build-clean']);
gulp.task('watch', ['build-watch']);
gulp.task('jshint', ['test-jshint']);
gulp.task('launch', ['samples-launch']);
gulp.task('publish', ['samples-publish']);

gulp.task('docgen', function() {
    var options = {
        title: "API Reference",
        html5Mode: true
    };
    return gulp.src('./src/**/*.js')
        .pipe(ngdocs.process(options))
        .pipe(gulp.dest('./doc/api'));
});

// Set default task
gulp.task('default', ['build']);