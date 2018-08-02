'use strict';

const logger = require('./support/logger').logger;

const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;
const shell = require('gulp-shell');
const runSequence = require('run-sequence').use(gulp);

gulp.task('eslint', () => {
    logger.info('Checking and fixing code by eslinter');
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'eslint ./ --fix'
        ]));
});

gulp.task('start-webdriver', (done) => {
    logger.info('Starting webdriver');
    gulp.src('*.js', { read: false })
        .pipe(shell([
            'start cmd /k "node_modules\\.bin\\webdriver-manager start"'
        ]));
    setTimeout(() => {
        done();
    }, 10000);
});

gulp.task('run-test', () => {
    logger.info('Running tests');
    return gulp.src('./test/features/*.feature')
        .pipe(protractor({
            configFile: "./test/config/conf.js"
        }))
        .on('error', (er) => {
            logger.error('Error, Tests Failed!', er);
            runSequence('generate-report');
        });
});

gulp.task('generate-report', () => {
    logger.info('Generating tests report');
    return gulp.src('*.js', { read: false })
        .pipe(shell([
            'node ./support/reporter.js'
        ]));
});

gulp.task('default', () => {
    runSequence('start-webdriver', 'run-test', 'generate-report');
});
