// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
        svgSprive: `${buildFolder}/img/`
    },
    src: {
        js: `${ srcFolder }/js/app.js`,
        images: `${ srcFolder }/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${ srcFolder }/scss/style.scss`,
        html: `${ srcFolder }/pug/pages/*.pug`, //.html
        files: `${ srcFolder }/files/**/*.*`,
        svgSprive: `${srcFolder}/img/sprite/*.svg`,
    },
    watch: {
        js: `${ srcFolder }/js/**/*.js`,
        scss: `${ srcFolder }/scss/**/*.scss`,
        html: `${ srcFolder }/pug/**/*.pug`, //.html
        images: `${ srcFolder }/img/**/*.{jpg, jpeg, png, svg, gif, ico, webp}`,
        files: `${ srcFolder }/files/**/*.*`,
        svgSprive: `${srcFolder}/img/sprite/*.svg`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}