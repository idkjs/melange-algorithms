// Generated by Melange
'use strict';


function make(param) {
  return [
          0,
          /* Empty */0
        ];
}

function makeOne(el) {
  return [
          1,
          {
            TAG: /* Leaf */0,
            _0: el
          }
        ];
}

function length(ds) {
  return ds[0];
}

function isEmpty(ds) {
  return length(ds) === 0;
}

function concat(ds1, ds2) {
  var dl2 = ds2[1];
  var dl1 = ds1[1];
  if (typeof dl1 === "number") {
    if (typeof dl2 === "number") {
      return [
              0,
              /* Empty */0
            ];
    } else {
      return ds2;
    }
  } else if (typeof dl2 === "number") {
    return ds1;
  } else {
    return [
            ds1[0] + ds2[0] | 0,
            {
              TAG: /* Branch */1,
              _0: dl1,
              _1: dl2
            }
          ];
  }
}

function addFirst(el, ds) {
  return concat([
              1,
              {
                TAG: /* Leaf */0,
                _0: el
              }
            ], ds);
}

function addLast(el, ds) {
  return concat(ds, [
              1,
              {
                TAG: /* Leaf */0,
                _0: el
              }
            ]);
}

exports.make = make;
exports.makeOne = makeOne;
exports.length = length;
exports.isEmpty = isEmpty;
exports.concat = concat;
exports.addFirst = addFirst;
exports.addLast = addLast;
/* No side effect */