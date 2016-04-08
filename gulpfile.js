//Core gulp
var gulp = require("gulp")
var clean = require("gulp-clean")
var rename = require("gulp-rename")
var del = require("del")
var live = require("gulp-livereload")

//CSS preprocessing
var sass = require("gulp-sass")
var maps = require("gulp-sourcemaps")
var minify = require("gulp-clean-css")

//JS preprocessing
var uglify = require("gulp-uglify")
var concat = require("gulp-concat")

//Paths
var baseDir = "public"
var cssDir = baseDir + "/css"
var sassDir = baseDir + "/sass"
var sassIn = baseDir + "/sass/style.scss"
var jsDir = baseDir + "/js"
var jsIn = jsDir + "/angular/**/*.js"
var jsOut = "scripts.js"
var jsFileList = [
  "/vendor/jquery/jquery-1.12.2.js",
  "/vendor/bootstrap/bootstrap.js",
  "/vendor/angular-1.5.3/angular.js",
  "/vendor/angular-1.5.3/angular-resource.js",
  "/vendor/angular-1.5.3/angular-route.js",
  "/angular/app.js",
  "/angular/**/*.js"
]
var jsFiles = jsFileList.map(function(file){
  return jsDir + file
})

//CSS tasks
gulp.task("sass", function(){
    return gulp.src(sassIn)
      .pipe(maps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(maps.write("./"))
      .pipe(gulp.dest(cssDir))
      //Currently returning a broken @import error in bootstrap
      //.pipe(minify())
      //.pipe(rename({ extname: ".min.css" }))
      //.pipe(gulp.dest(cssDir))
      .pipe(live())
})

gulp.task("sass:watch", function(){
  gulp.watch(sassDir + "/**/*.scss", ["sass"])
})

//JS tasks
gulp.task("js", function(){
  return gulp.src(jsFiles)
    .pipe(maps.init())
    .pipe(concat(jsOut))
    .pipe(gulp.dest(jsDir))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(maps.write("./"))
    .pipe(gulp.dest(jsDir))
    .pipe(live())
})

gulp.task("js:watch", function(){
  gulp.watch(jsIn, ["js"])
})

//Cleanup
gulp.task("clean", function(){
  return del([
    cssDir + "/style.*",
    jsDir + "/*.js"
  ])
})

//Watch tasks
gulp.task("listen", function(){
  live.listen()
})

gulp.task("watch", ["listen", "js:watch", "sass:watch"])

//Default tasks
gulp.task("default", ["clean", "js", "sass"])
