import gulp from "gulp";
import sass from "gulp-sass";

const scssPaths = ["./scss/*.scss", "./scss/**/*.scss"];

gulp.task("default", () =>{
	console.log('SOME SHIIIITTTTTTTT');
});

gulp.task("sass", () => {
	gulp.src(scssPaths)
		.pipe(sass())
		.pipe(gulp.dest("./css"));
})

gulp.task("watch", () => {
	gulp.watch(scssPaths, ["sass"]);
})