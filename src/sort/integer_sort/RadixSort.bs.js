// Generated by Melange
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Inconsistent_state = /* @__PURE__ */Caml_exceptions.create("RadixSort.Inconsistent_state");

function pow(n, p) {
  if (p !== 0) {
    return Math.imul(n, pow(n, p - 1 | 0));
  } else {
    return 1;
  }
}

function upto(fromOpt, num) {
  var from = fromOpt !== undefined ? fromOpt : 0;
  var aux = function (it) {
    if (it < num) {
      return {
              hd: it,
              tl: aux(it + 1 | 0)
            };
    } else {
      return /* [] */0;
    }
  };
  return aux(from);
}

function num_digits(num, base) {
  var _num = num;
  var _count = 0;
  while(true) {
    var count = _count;
    var num$1 = _num;
    var num$2 = Caml_int32.div(num$1, base);
    if (num$2 === 0) {
      return count + 1 | 0;
    }
    _count = count + 1 | 0;
    _num = num$2;
    continue ;
  };
}

function max(list) {
  return List.fold_left((function (cur_max, num) {
                if (cur_max === undefined) {
                  return Caml_option.some(num);
                }
                var cur_max$1 = Caml_option.valFromOption(cur_max);
                return Caml_option.some(Caml_obj.caml_lessthan(cur_max$1, num) ? num : cur_max$1);
              }), undefined, list);
}

function list_to_bucket(list, base, iteration) {
  var buckets = Caml_array.make(base, /* [] */0);
  var aux = function (num) {
    var bucket_index = Caml_int32.mod_(Caml_int32.div(num, pow(base, iteration)), base);
    var bucket = Caml_array.get(buckets, bucket_index);
    return Caml_array.set(buckets, bucket_index, {
                hd: num,
                tl: bucket
              });
  };
  List.iter(aux, list);
  return buckets;
}

function sort(array, base) {
  var list = $$Array.to_list(array);
  var max$1 = max(list);
  if (max$1 === undefined) {
    return [];
  }
  var max_num_digits = num_digits(max$1, base);
  var digit_indices_from_right = upto(undefined, max_num_digits);
  var aux = function (list, it) {
    var buckets = list_to_bucket(list, base, it);
    return $$Array.fold_left((function (bucket, list) {
                  return List.append(list, bucket);
                }), /* [] */0, buckets);
  };
  var list$1 = List.fold_left(aux, list, digit_indices_from_right);
  var list$2 = List.rev(list$1);
  var length = List.length(list$2);
  var array$1 = Caml_array.make(length, undefined);
  List.iteri((function (ind, e) {
          return Caml_array.set(array$1, ind, Caml_option.some(e));
        }), list$2);
  return $$Array.map((function (e) {
                if (e !== undefined) {
                  return Caml_option.valFromOption(e);
                }
                throw {
                      RE_EXN_ID: Inconsistent_state,
                      Error: new Error()
                    };
              }), array$1);
}

exports.sort = sort;
/* No side effect */
