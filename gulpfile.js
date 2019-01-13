const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const tinypng = require('gulp-tinypng');


gulp.task('autoprefixer', function () {
    gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
} );

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprite/*.png')
        .pipe(spritesmith({ // Настройка спрайта
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: '../img/sprite.png'
        }));

    var imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));

    var cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));

    return merge(imgStream, cssStream);
});

gulp.task('tinypng', function () {
    gulp.src([
        'src/img/**/*.jpg',
        'src/img/**/*.png'
    ])
<<<<<<< HEAD
    .pipe(tinypng('Wk9bCQCit0T-LgoU3O6dqSULozXUvjZX'))
=======
    .pipe(tinypng('fBxZpCv46E8ORLRfeAPCi6BLttNlJh75'))
>>>>>>> dev
    .pipe(gulp.dest('app/img/'));
});

gulp.task('watch', ['autoprefixer', 'sprite', 'tinypng'], function () {

    gulp.watch( 'src/css/**/*.css', ['autoprefixer'] );
    gulp.watch( 'src/sprite/*.png', ['sprite'] );
    gulp.watch( 'src/img/**/*', ['tinypng'] );

});

gulp.task('default', ['watch']);