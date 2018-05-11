'use strict';

var errors = require('./index');

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  return function (req, res, next) {
    var url = req.url;

    var message = 'Page not found' + (verbose ? ': ' + url : '');
    next(new errors.NotFound(message, { url: url }));
  };
};