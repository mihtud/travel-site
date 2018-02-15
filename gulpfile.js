require("./gulp/tasks/styles");
require("./gulp/tasks/watch");
// ////////////////////////////////////
// //THIS IS THE gulpfile.js in your root directory
//
// //here you load the gulp modules from your downloaded package
// var gulp = require("gulp"),
//   watch = require("gulp-watch"),
//   postcss = require("gulp-postcss"),
//   autoprefixer = require("autoprefixer"),
//   cssvars = require("postcss-simple-vars"),
//   nested = require("postcss-nested"),
//   cssImport = require("postcss-import"),
//   browserSync = require("browser-sync").create();
//
// //here you make a default task
// gulp.task("default", function() {
//   console.log("Holla!")
// })
//
// //here you make a html task
// gulp.task("html", function() {
//   console.log("hahahahahahahaha");
// });
//
// //here you make a css task
// gulp.task("styles", function() {
//   return gulp.src("./app/assets/styles/styles.css")
//     .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
//     .pipe(gulp.dest("./app/temp/styles"));
// });
//
// //here you make a WATCH function to watch over your files live for changes
// //and run the function inside
// gulp.task('watch', function() {
//
//   browserSync.init({
//     notify: false,
//     server: {
//       baseDir: "app"
//     }
//   });
//
//   watch("./app/index.html", function() {
//     browserSync.reload();
//   });
//
//   watch("./app/assets/styles/**/*.css", function() {
//     gulp.start("cssInject");
//   });
// });
//
// gulp.task("cssInject", ["styles"],function(){
//   return gulp.src("./app/temp/styles/styles.css")
//   .pipe(browserSync.stream());
// });
// ////////////////////////////////////////////////
