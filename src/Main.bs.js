// Generated by Melange
'use strict';

var MergeSort = require("./sort/MergeSort.bs.js");

console.log("Hello world");

var arr = [
  7,
  4,
  5,
  8,
  3,
  1,
  2,
  9,
  0,
  6
];

var expected = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
];

var result = MergeSort.sort((function (prim0, prim1) {
        return prim0 < prim1;
      }), arr);

console.log("Sort", result);

exports.arr = arr;
exports.expected = expected;
exports.result = result;
/*  Not a pure module */
