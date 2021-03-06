// Generated by Melange
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function max(array) {
  var aux = function (current_max, value) {
    if (current_max === undefined) {
      return Caml_option.some(value);
    }
    var current_max$1 = Caml_option.valFromOption(current_max);
    return Caml_option.some(Caml_obj.caml_lessthan(current_max$1, value) ? value : current_max$1);
  };
  return $$Array.fold_left(aux, undefined, array);
}

function count(array, max) {
  var counters = Caml_array.make(max + 1 | 0, 0);
  var increment_counter = function (counters, value) {
    var counter = Caml_array.get(counters, value);
    Caml_array.set(counters, value, counter + 1 | 0);
    return counters;
  };
  return $$Array.fold_left(increment_counter, counters, array);
}

function sort(array) {
  var max$1 = max(array);
  if (max$1 !== undefined) {
    var counts = count(array, max$1);
    var repeated = $$Array.mapi((function (value, count) {
            return Caml_array.make(count, value);
          }), counts);
    return $$Array.concat($$Array.to_list(repeated));
  } else {
    return [];
  }
}

exports.sort = sort;
/* No side effect */
