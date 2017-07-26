const babel = require('rollup-plugin-babel')
const del = require('del')
const gulp = require('gulp')
const rename = require('gulp-rename')
const Rollup = require('rollup')
const rollup = require('gulp-rollup')
const run = require('run-sequence')
const size = require('gulp-size')
const uglify = require('rollup-plugin-uglify')

gulp.task('clean', () => del(['./dist']))

const rollupConfig = minimize => ({
  rollup: Rollup,
  entry: './src/sampling.js',
  moduleName: 'sampling',
  format: 'umd',
  exports: 'named',
  plugins: [babel({ exclude: 'node_modules/**' })].concat(
    minimize
      ? [
        uglify({
          compress: { warnings: false },
          mangle: true,
          sourceMap: false
        })
      ]
      : []
  )
})

gulp.task('script', () => {
  gulp.src('./src/*.js')
    .pipe(rollup(rollupConfig(false)))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest('./dist'))

  gulp.src('./src/*.js')
    .pipe(rollup(rollupConfig(true)))
    .pipe(rename('sampling.min.js'))
    .pipe(size({ showFiles: true }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['clean'], () => {
  run('script')
  gulp.watch('./src/sampling.js', ['script'])
})
