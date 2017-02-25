/**
 * Created by Михаил on 15.01.2017.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");
gulp.task("default", function () {
    return gulp.src("./index.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});