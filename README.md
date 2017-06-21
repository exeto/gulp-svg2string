# gulp-svg2string [![Dependency Status][depstat-image]][depstat-url]

> Convert SVG file to JavaScript string.

## Install

```
$ npm install --save-dev gulp-svg2string
```

## Usage

```js
var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svg2string = require('gulp-svg2string');

gulp.task('default', function () {
  return gulp.src('src/**/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(svg2string())
    .pipe(gulp.dest('dest'));
});
```
```html
<!doctype html>
<html lang="en">
  <head>
    <script src="sprite.js"></script>
  </head>
  <body>
    <!-- SVG sprite include -->
    <div class="svg-placeholder"
      style="border: 0; clip: rect(0 0 0 0); height: 1px;
        margin: -1px; overflow: hidden; padding: 0;
        position: absolute; width: 1px;"></div>
    <script>
      document.querySelector('.svg-placeholder').innerHTML = SVG_SPRITE;
    </script>
    <!-- end SVG sprite include -->

    <svg xmlns="http://www.w3.org/2000/svg">
      <use xlink:href="#icon"></use>
    </svg>
  </body>
</html>
```

## Options
The ```variableName``` specifies the name of the sprite variable.

```js
svg2string({
    variableName: 'MY_SVG_SPRITE'
})
```

```html
<script>
  document.querySelector('.svg-placeholder').innerHTML = MY_SVG_SPRITE;
</script>
```


## License

[MIT](LICENSE.md) © [Timofey Dergachev](http://exeto.me/)

[depstat-url]: https://david-dm.org/exeto/gulp-svg2string
[depstat-image]: https://david-dm.org/exeto/gulp-svg2string.svg
