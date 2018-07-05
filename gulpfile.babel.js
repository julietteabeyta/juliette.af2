import gulp from "gulp";
import sass from "gulp-sass";

const scssPaths = ["./scss/*.scss", "./scss/**/*.scss"];

gulp.task("sass", () => {
	gulp.src(scssPaths)
		.pipe(sass())
		.pipe(gulp.dest("./build/css"));
});

gulp.task("localsass", () => {
	gulp.src(scssPaths)
		.pipe(sass())
		.pipe(gulp.dest("./css"));
});

gulp.task("html", function () {
	return gulp.src('./index.html')
		.pipe(gulp.dest("./build/"))
});

gulp.task("fonts", function () {
	return gulp.src('./fonts/Salome/*')
		.pipe(gulp.dest("./build/fonts/Salome/"))
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

gulp.task("build", ["sass", "fonts", "localsass", "js", "html", "images"]);

gulp.task("default", ["build"]);