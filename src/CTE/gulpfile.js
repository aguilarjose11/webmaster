// Here be Dragons!

/* Dependency declaration */
var gulp            = require('gulp');                  // Script & enviroment manager.
var browserSync     = require('browser-sync').create(); // Front-end Development tool.
var sass            = require('gulp-sass');             // SASS 2 CSS Compiler.

/* Task declarations */

/**
 * function to recompile changed files and update them in the-
 * static server (browserSync) to facilitate front-end development.
 */
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss']) // gets the files to be compiled. (bootstrap.css & any .sass files)
        .pipe(sass().on('error', sass.logError))                                       // calls sass compiler & stablishes a error handling function.
        .pipe(gulp.dest("src/css"))                                                    // sets the destination folder.
        .pipe(browserSync.stream());                                                   // updates the browserSync to restart the static server and show the changes.
});

/**
 * function to move javascript files from the node.js modules
 * into the JavaScript folder (/src/js)
 */
gulp.task('js', function() {
    // gets the files to be moved.
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.js'])
        .pipe(gulp.dest("src/js"))          // sets the destination folder for the selected files (Js).
        .pipe(browserSync.stream());        // updates and restarts the static server.
});

/**
 *  function for static server & watch sass & html files for changes.
 */
gulp.task('serve', ['sass'], function() {
    // begins the static server.
    browserSync.init({
        server: "./src"  // Change if the code folder path changes!
    });


    // Change if the SASS-containing folder name &| path changes.
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    // Change if code folder path changes
    gulp.watch("src/*.html").on('change', browserSync.reload); // reloads the entire static server.
});

/**
  * Default task that is run when the gulp command is called.
  * The task will run the js and serve tasks, see above for more info.
  */
gulp.task('default', ['js', 'serve']);
