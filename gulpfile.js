// Here be Dragons!
var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');

/* ------------------> gulp & browserSync functions. <--------------------*/
/**
 * function to recompile changed files and update them in the static server (browserSync)
 */
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.sass']) // gets the files to be compiled. (bootstrap.css & any .sass files)
        .pipe(sass())                                                                  // calls sass compiler.
        .pipe(gulp.dest("src/css"))                                                    // sets the destination folder.
        .pipe(browserSync.stream());                                                   // updates the browserSync to restart the static server and show the changes.
});


/**
 * function to move javascript files from the node.js modules into the JavaScript folder (/src/js)
 */
gulp.task('js', function() {
    // gets the files to be moved.
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
        .pipe(gulp.dest("src/js"))          // sets the destination folder for the selected files.
        .pipe(browserSync.stream());        // updates and restarts the static server.
});



/**
 *  function for static server & watch sass & html files for changes.
 */
gulp.task('serve', ['sass'], function() {
    // begins the static server.
    browserSync.init({
        server: "./src"  // serves "wwwroot"
    });

    //watches for any changes:
    // + changes on sass files?
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.sass'], ['sass']); // calls the sass compiler on changed files.
    // + changes on html files?
    gulp.watch("src/*.html").on('change', browserSync.reload); // reloads the entire static server.
});

gulp.task('default', ['js', 'serve']); // sets the default task for gulp (move the js files and run the static server ->browserSync<-)
