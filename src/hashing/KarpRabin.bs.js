// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var RollingHash = require("./RollingHash.bs.js");

function ord(prim) {
  return prim;
}

var CRH = RollingHash.Make({
      size: 256,
      ord: ord
    });

function find(s, e, f) {
  var _i = s;
  while(true) {
    var i = _i;
    if (i >= e) {
      return ;
    }
    if (Curry._1(f, i)) {
      return i;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function search(pattern, text) {
  var pattern_length = pattern.length;
  var rp = Curry._1(CRH.create, 101);
  $$String.iter(Curry._1(CRH.append, rp), pattern);
  var rt = Curry._1(CRH.create, 101);
  $$String.iter(Curry._1(CRH.append, rt), $$String.sub(text, 0, pattern_length));
  if (Curry._2(CRH.compare, rp, rt) && pattern === $$String.sub(text, 0, pattern_length)) {
    return 0;
  }
  var f = function (ind) {
    Curry._2(CRH.skip, rt, Caml_string.get(text, ind - pattern_length | 0));
    Curry._2(CRH.append, rt, Caml_string.get(text, ind));
    if (Curry._2(CRH.compare, rt, rp)) {
      return pattern === $$String.sub(text, (ind - pattern_length | 0) + 1 | 0, pattern_length);
    } else {
      return false;
    }
  };
  var index = find(pattern_length, text.length - pattern_length | 0, f);
  if (index !== undefined) {
    return (index - pattern_length | 0) + 1 | 0;
  }
  
}

var p = 101;

exports.CRH = CRH;
exports.p = p;
exports.find = find;
exports.search = search;
/* CRH Not a pure module */