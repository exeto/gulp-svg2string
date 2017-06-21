'use strict';

var path    = require('path');
var gutil   = require('gulp-util');
var through = require('through2');

module.exports = function (options) {
  var opts = options || {variableName: 'SVG_SPRITE'};

  return through.obj(function (file, enc, cb) {
    var re;
    var newFile;

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-svg2string', 'Streaming not supported'));
      return;
    }

    try {
      re = new RegExp(path.extname(file.path) + '$');
      file.path = file.path.replace(re, '.js');

      newFile = file.contents.toString().replace(/'/g, "\\'");
      newFile = newFile.replace(/>\s+</g, '><').trim();
      newFile = "window." + opts.variableName + " = '" + newFile + "';";

      file.contents = new Buffer(newFile);
      this.push(file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-svg2string', err));
    }

    cb();
  });
};
