var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-Replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

var imagemin = require('gulp-imagemin');

gulp.task('default',function(){
	var jsFilter = filter('**/*.js',{restore: true});
	var cssFilter = filter('**/*.css',{restore: true});
	var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore: true});

	return gulp.src('src/index.html')
		.pipe(useref())
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(cssFilter)
		.pipe(csso())
		.pipe(cssFilter.restore)
		.pipe(indexHtmlFilter)
		.pipe(rev())
		.pipe(indexHtmlFilter.restore)
		.pipe(revReplace())
		.pipe(gulp.dest('dist'));

})



// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
// 1. 找到图片
gulp.src('src/img/*.*')
// 2. 压缩图片
.pipe(imagemin({
progressive: true
}))
// 3. 另存图片
.pipe(gulp.dest('dist/img'))
});