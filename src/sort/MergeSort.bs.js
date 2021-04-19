// Generated by Melange
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Invalid_state = /* @__PURE__ */Caml_exceptions.create("MergeSort.Invalid_state");

function sort(compare, array) {
  var aux = function (arr) {
    var len = arr.length;
    if (len === 1) {
      return [arr[0]];
    }
    if (!len) {
      return [];
    }
    var len$1 = arr.length;
    var mid = len$1 / 2 | 0;
    var a = $$Array.sub(arr, 0, mid);
    var b = $$Array.sub(arr, mid, len$1 - mid | 0);
    var a$p = aux(a);
    var b$p = aux(b);
    var a_len = a$p.length;
    var b_len = b$p.length;
    var res = Caml_array.make(a_len + b_len | 0, undefined);
    var aux$1 = function (_a_ind, _b_ind) {
      while(true) {
        var b_ind = _b_ind;
        var a_ind = _a_ind;
        var a$p$1 = a_ind < a_len ? Caml_option.some(Caml_array.get(a$p, a_ind)) : undefined;
        var b$p$1 = b_ind < b_len ? Caml_option.some(Caml_array.get(b$p, b_ind)) : undefined;
        if (a$p$1 !== undefined) {
          if (b$p$1 !== undefined) {
            if (Curry._2(compare, Caml_option.valFromOption(a$p$1), Caml_option.valFromOption(b$p$1))) {
              Caml_array.set(res, a_ind + b_ind | 0, a$p$1);
              _a_ind = a_ind + 1 | 0;
              continue ;
            }
            Caml_array.set(res, a_ind + b_ind | 0, b$p$1);
            _b_ind = b_ind + 1 | 0;
            continue ;
          }
          Caml_array.set(res, a_ind + b_ind | 0, a$p$1);
          _a_ind = a_ind + 1 | 0;
          continue ;
        }
        if (b$p$1 === undefined) {
          return res;
        }
        Caml_array.set(res, a_ind + b_ind | 0, b$p$1);
        _b_ind = b_ind + 1 | 0;
        continue ;
      };
    };
    return $$Array.map((function (e) {
                  if (e !== undefined) {
                    return Caml_option.valFromOption(e);
                  }
                  throw {
                        RE_EXN_ID: Invalid_state,
                        Error: new Error()
                      };
                }), aux$1(0, 0));
  };
  return aux(array);
}

exports.sort = sort;
/* No side effect */