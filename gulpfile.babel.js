import gulp from "gulp";
import sass from "gulp-sass";

const scssPaths = ["./scss/*.scss", "./scss/**/*.scss"];

gulp.task("default", () =>{
	console.log('SOME SHIIIITTTTTTTT');
});

gulp.task("sass", () => {
	gulp.src(scssPaths)
		.pipe(sass())
		.pipe(gulp.dest("./build/css"));
});

gulp.task("html", function () {
	return gulp.src('./index.html')
		.pipe(gulp.dest("./build/"))
});

gulp.task("images", function () {
	return gulp.src(["./images/*"])
		.pipe(gulp.dest("./build/images/"));
});

gulp.task("js", function () {
	return gulp.src(["./js/*"])
		.pipe(gulp.dest("./build/js/"));
});

gulp.task("watch", () => {
	gulp.watch(scssPaths, ["sass"]);
});

gulp.task("build", ["sass", "js", "html", "images"]);