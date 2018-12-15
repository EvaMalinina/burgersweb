const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const plugins = [
  autoprefixer({browsers: ['last 2 version']}),
  cssnano()
];

function styles() {
  return src('CSS/main.scss', { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(postcss(plugins))
    .pipe(dest('CSS/main.css', { sourcemaps: true }));
};

exports.styles = styles;