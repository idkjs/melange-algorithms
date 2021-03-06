// Generated by Melange
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

function create(init_sizeOpt, pre_hash, hash, param) {
  var init_size = init_sizeOpt !== undefined ? init_sizeOpt : 1;
  return {
          pre_hash: pre_hash,
          hash: hash,
          table: {
            contents: Caml_array.make(init_size, /* Empty */0)
          },
          num_bindings: {
            contents: 0
          },
          load: 0.25
        };
}

var Key_not_found = /* @__PURE__ */Caml_exceptions.create("HashtblWithOpenAddressing.Key_not_found");

var Inconsistent_state = /* @__PURE__ */Caml_exceptions.create("HashtblWithOpenAddressing.Inconsistent_state");

function length(map) {
  return map.num_bindings.contents;
}

function find_index(map, key) {
  var table = map.table.contents;
  var num_slots = table.length;
  var hash = Curry._2(map.hash, num_slots, Curry._1(map.pre_hash, key));
  var _iter = 0;
  while(true) {
    var iter = _iter;
    if (iter === num_slots) {
      throw {
            RE_EXN_ID: Key_not_found,
            Error: new Error()
          };
    }
    var index = Curry._1(hash, iter);
    var slot = Caml_array.get(table, index);
    if (typeof slot === "number") {
      if (slot) {
        _iter = iter + 1 | 0;
        continue ;
      }
      throw {
            RE_EXN_ID: Key_not_found,
            Error: new Error()
          };
    }
    if (Caml_obj.caml_equal(slot._0.key, key)) {
      return index;
    }
    _iter = iter + 1 | 0;
    continue ;
  };
}

function find(map, key) {
  var index = find_index(map, key);
  var slot = Caml_array.get(map.table.contents, index);
  if (typeof slot === "number") {
    throw {
          RE_EXN_ID: Inconsistent_state,
          Error: new Error()
        };
  }
  return slot._0.value;
}

function iter(f, map) {
  var f$1 = function (binding) {
    if (typeof binding === "number") {
      return ;
    }
    var binding$1 = binding._0;
    return Curry._2(f, binding$1.key, binding$1.value);
  };
  return $$Array.iter(f$1, map.table.contents);
}

function expected_num_slots(map) {
  var num_slots = map.table.contents.length;
  var load = map.num_bindings.contents / num_slots;
  if (load > map.load * 2) {
    return (num_slots << 1);
  } else if (load < map.load / 2 && num_slots > 1) {
    return num_slots / 2 | 0;
  } else {
    return num_slots;
  }
}

function insert(param) {
  var num_bindings = param.num_bindings;
  var pre_hash = param.pre_hash;
  var table = param.table.contents;
  var num_slots = table.length;
  var hash = Curry._1(param.hash, num_slots);
  return function (key, value) {
    var hash$1 = Curry._1(hash, Curry._1(pre_hash, key));
    var _iter = 0;
    while(true) {
      var iter = _iter;
      if (iter === num_slots) {
        throw {
              RE_EXN_ID: Key_not_found,
              Error: new Error()
            };
      }
      var index = Curry._1(hash$1, iter);
      var slot = Caml_array.get(table, index);
      if (typeof slot === "number") {
        Caml_array.set(table, index, /* Filled */{
              _0: {
                key: key,
                value: value
              }
            });
        num_bindings.contents = num_bindings.contents + 1 | 0;
        return ;
      }
      if (Caml_obj.caml_equal(slot._0.key, key)) {
        return Caml_array.set(table, index, /* Filled */{
                    _0: {
                      key: key,
                      value: value
                    }
                  });
      }
      _iter = iter + 1 | 0;
      continue ;
    };
  };
}

function maybe_rehash(map) {
  var num_slots = map.table.contents.length;
  var expected_num_slots$1 = expected_num_slots(map);
  if (num_slots !== expected_num_slots$1) {
    var temp_map = create(expected_num_slots$1, map.pre_hash, map.hash, undefined);
    var populate = insert(temp_map);
    iter(populate, map);
    map.table.contents = temp_map.table.contents;
    return ;
  }
  
}

function add(map, key, value) {
  insert(map)(key, value);
  return maybe_rehash(map);
}

function remove(map, key) {
  var index = find_index(map, key);
  Caml_array.set(map.table.contents, index, /* Deleted */1);
  map.num_bindings.contents = map.num_bindings.contents - 1 | 0;
  return maybe_rehash(map);
}

exports.create = create;
exports.Key_not_found = Key_not_found;
exports.Inconsistent_state = Inconsistent_state;
exports.find = find;
exports.add = add;
exports.remove = remove;
exports.iter = iter;
exports.length = length;
/* No side effect */
