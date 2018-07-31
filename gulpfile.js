var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
const shell = require('gulp-shell');

gulp.task('eslint', () => {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'eslint ./ --fix'
        ]));
});

gulp.task('start-webdriver', (done) => {
    gulp.src('*.js', { read: false })
        .pipe(shell([
            'npm run start-webdriver'
        ]));
    setTimeout(() => {
        done();
    }, 7000);
});

gulp.task('tests', () => {
    return gulp.src('./test/features/*.feature')
        .pipe(protractor({
            configFile: "./test/config/conf.js"
        }))
        .on('error', (er) => {
            throw er;
        });
});

gulp.task('generate-report', () => {
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'node ./support/reporter.js'
        ]));
});

// gulp.task('default', gulp.series('eslint', 'start-webdriver', 'tests', 'generate-report'));
gulp.task('default', gulp.series('start-webdriver', 'lint'));