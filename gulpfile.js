var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

gulp.task("start", () => {
    return gulp.src([])
        .pipe(protractor({
            configFile: "./test/config/conf.js"
        }))
        .on('error', (er) => {
            throw er;
        });
}
);