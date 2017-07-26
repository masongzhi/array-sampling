(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.sampling = {})));
}(this, (function (exports) { 'use strict';

var systematicSample = function systematicSample(array, k) {
  if (!Array.isArray(array)) return console.info(array + " is not a array");
  if (!k || !Number.isInteger(k)) return console.info(k + " is undefined or not a integer");
  var count = 0;
  var result = array.filter(function (it, index) {
    if (index >= count) {
      count += k;
      return it;
    }
  });
  return result;
};

var sampling = { systematicSample: systematicSample };

exports.systematicSample = systematicSample;
exports['default'] = sampling;

Object.defineProperty(exports, '__esModule', { value: true });

})));
