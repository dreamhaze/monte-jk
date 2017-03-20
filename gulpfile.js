// 1. выполнить команду jekyll build 
const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task ('jekyll:build', function(done) {
    exec('jekyll build', function (error, stdout, stderr){
        if(error) {
            console.log(`exec error ${error}`);
            return;
        }
        console.log(`exec stdout ${stdout}`);
        console.log(`exec stderr ${stderr}`);
        done();
    });
});
// 2. Запустить локальный сервер из папки _site
gulp.task('browser-sync', function (){
    bs.init({
        server: {
            baseDir: "_site"
        }
    })
})
// 3. Следить за исполнениями исходных файлов и перезапускать сервер и сборкку нашего сайта