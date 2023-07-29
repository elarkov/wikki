import svgmin from 'gulp-svgmin';
import svgStore from 'gulp-svgstore';

export const svgSprive = () => {
  return app.gulp.src(`${app.path.src.svgSprive}`, {})
    .pipe(svgmin({
      plugins: [
        {
          name: 'removeViewBox',
          active: false
        },
        'removeDimensions',
        'removeXMLNS',
        'removeRasterImages',
        'removeStyleElement',
      ]
    }))
    .pipe(svgStore())
    .pipe(app.gulp.dest(`${app.path.build.images}`))
}