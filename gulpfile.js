import gulp from 'gulp';
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plagins.js'

import {copy} from './gulp/tasks/copy.js';
import {reset} from './gulp/tasks/reset.js';
import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {scss} from './gulp/tasks/scss.js'; 
import {js} from './gulp/tasks/js.js';
import {images} from './gulp/tasks/images.js' 


// import ghPages from 'gulp-gh-pages';

// const deploy = () => {
//     return app.gulp.src('./dist/**/*')
//     .pipe(ghPages());
// }

// const publish = () => {
//     return app.gulp.src('./dist/**/*')
//     .pipe(ghPages(
//         { 
//             remoteUrl: "https://veronadracula.github.io/test/",
//             branch: "gh-pages"
//         }
//     ));
// }

// gulp.task('deploy', function() {
//     return gulp.src('./dist/**/*.*')
//       .pipe(ghPages());
//   });

// gulp.task('deploy', function() {
//     return gulp.src('./dist/**/*')
//       .pipe(ghPages({
//         remoteUrl: 'https://github.com/VeronaDracula/test.git'
//       }
       
//       ));
//   });

global.app = { 
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watcher () {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}


const mainTasks = gulp.parallel(copy, html, scss, js, images)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
// const deploy = gulp.series(build, publish);


export {dev}
export {build}
// export {deploy}

gulp.task('default', dev);