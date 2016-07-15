var gulp = require("gulp");

var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("ts:compile", function () {
    return tsProject.src()
        .pipe(tsc(tsProject))
        .pipe(gulp.dest("./app/"));
});

const Builder = require("systemjs-builder");
gulp.task("js:bundle:deps", ["ts:compile"], function() {
    var builder = new Builder("./", "config.js");
    return builder.bundle("./app/main.js - [./app/**/*]", 
        "./app/deps.bundle.js", 
        { 
            minify: false, 
            mangle: false 
        }
    )
    .catch(function(err) {
        console.log("Lib bundle build error");
        console.log(err);
    });
});

gulp.task("js:bundle:app", ["js:bundle:deps"], function() {
    var builder = new Builder("./", "config.js");
    return builder.bundle("./app/main.js - ./app/deps.bundle.js", 
        "./app/app.bundle.js", 
        { 
            minify: false, 
            mangle: false 
        }
    )
    .catch(function(err) {
        console.log("App bundle build error");
        console.log(err);
    });
});

gulp.task("default", ["js:bundle:deps", "js:bundle:app"], function(){
});