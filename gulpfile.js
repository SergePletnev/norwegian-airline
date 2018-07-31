'use strict';

const logger = require('./support/logger').logger;

const gulp = require('gulp');
const protractor = require("gulp-protractor").protractor;
const runSequence = require('run-sequence').use(gulp);
const shell = require('gulp-shell');

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
            'npm run start-webdriver'
        ]));
    setTimeout(() => {
        done();
    }, 7000);
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