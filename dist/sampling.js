(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.sampling = {})));
}(this, (function (exports) { 'use strict';

var mathUtil = require('./util/math_util');
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
var systematicSample = function systematicSample(array, k) {
  var gutter = void 0;
  if (!Array.isArray(array)) return console.error(array + ' is not a array');
  if (k && Number.isInteger(k)) {
    gutter = Math.floor(array.length / k);
  }
  var count = 0;
  var result = array.filter(function (it, index) {
    if (index >= count) {
      count += gutter;
      return it;
    }
  });
  return result;
};

var simpleRandomSampling = function simpleRandomSampling(array, k, _ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'repeat' : _ref$type;

  if (!Array.isArray(array)) return console.error(array + ' is not a array');
  if (!k || !Number.isInteger(k)) return console.error(k + ' is undefined or not a integer');
  var numbers = [];
  switch (type) {
    case 'repeat':
      for (var n in k) {
        numbers.push(mathUtil.getRandomInt(0, array.length));
      }
      break;
    case 'noRepeat':
      for (var _n in k) {
        numbers.push(mathUtil.getRandomInt(0, array.length));
      }
      break;
  }
  return numbers.map(function (index) {
    return array[index];
  });
};

var sampling = {
  systematicSample: systematicSample,
  simpleRandomSampling: simpleRandomSampling
};

exports.systematicSample = systematicSample;
exports.simpleRandomSampling = simpleRandomSampling;
exports['default'] = sampling;

Object.defineProperty(exports, '__esModule', { value: true });

})));
