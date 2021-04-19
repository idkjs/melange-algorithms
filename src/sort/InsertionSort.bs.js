// Generated by Melange
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function insert(compare, array, index) {
  var _index = index;
  while(true) {
    var index$1 = _index;
    if (0 >= index$1) {
      return ;
    }
    var n = Caml_array.get(array, index$1);
    var p = Caml_array.get(array, index$1 - 1 | 0);
    if (!Curry._2(compare, n, p)) {
      return ;
    }
    Caml_array.set(array, index$1, p);
    Caml_array.set(array, index$1 - 1 | 0, n);
    _index = index$1 - 1 | 0;
    continue ;
  };
}

function sort(compare, array) {
  var array$1 = $$Array.copy(array);
  var length = array$1.length;
  var aux = function (_index) {
    while(true) {
      var index = _index;
      if (index >= length) {
        return ;
      }
      insert(compare, array$1, index);
      _index = index + 1 | 0;
      continue ;
    };
  };
  aux(1);
  return array$1;
}

exports.sort = sort;
/* No side effect */