// List all available tasks

const src = 'src';
const dest = 'dist';
const path = require('path');

const organiser = require('gulp-organiser');
organiser.registerAll('./tasks', {
  sass: {
    src: path.join(src, 'styles/**/*.scss'),
    dest: path.join(dest, 'styles'),
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['sass', 'copy-static'], // reload page when these tasks happen
    startPath: 'index.html',
    baseDir: './',
  },
  'copy-static': {
    src: path.join(src, '**/*'),
    dest,
  },
});
