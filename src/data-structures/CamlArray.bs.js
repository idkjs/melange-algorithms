// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var FeatureBack = require("./features/FeatureBack.bs.js");
var CamlArrayCore = require("./CamlArrayCore.bs.js");
var FeatureIndexed = require("./features/FeatureIndexed.bs.js");
var FeatureSequence = require("./features/FeatureSequence.bs.js");
var FeatureMutableSyntax = require("./features/FeatureMutableSyntax.bs.js");
var FeatureFrontImmutable = require("./features/FeatureFrontImmutable.bs.js");
var FeatureMutableIndexed = require("./features/FeatureMutableIndexed.bs.js");

var get = Caml_array.get;

var set = Caml_array.set;

var include = FeatureMutableSyntax.Add({
      length: CamlArrayCore.length,
      get: get,
      set: set
    });

var SyntaxExn = include.SyntaxExn;

var include$1 = FeatureSequence.Add({
      toList: CamlArrayCore.toList,
      fromList: CamlArrayCore.fromList,
      fastReverse: FeatureSequence.Default.fastReverse
    });

var fastGetFirst = /* GetFirstExn */{
  _0: (function (arr) {
      return Curry._2(SyntaxExn.$$Array.get, arr, 0);
    })
};

var include$2 = FeatureFrontImmutable.Add({
      toList: CamlArrayCore.toList,
      fromList: CamlArrayCore.fromList,
      isEmpty: CamlArrayCore.isEmpty,
      fastGetFirst: fastGetFirst,
      fastDropFirst: FeatureFrontImmutable.Default.fastDropFirst,
      fastAddFirst: FeatureFrontImmutable.Default.fastAddFirst,
      fastRemoveFirst: FeatureFrontImmutable.Default.fastRemoveFirst
    });

var fastGetLast = /* GetLastExn */{
  _0: (function (arr) {
      return Curry._2(SyntaxExn.$$Array.get, arr, CamlArrayCore.length(arr) - 1 | 0);
    })
};

var include$3 = FeatureBack.Add({
      toList: CamlArrayCore.toList,
      fromList: CamlArrayCore.fromList,
      isEmpty: CamlArrayCore.isEmpty,
      fastGetLast: fastGetLast,
      fastAddLast: FeatureBack.Default.fastAddLast,
      fastRemoveLast: FeatureBack.Default.fastRemoveLast
    });

function getIndexExn(i, arr) {
  return Curry._2(SyntaxExn.$$Array.get, arr, i);
}

var include$4 = FeatureIndexed.Add({
      getIndexExn: getIndexExn
    });

function getIndexExn$1(i, arr) {
  return Curry._2(SyntaxExn.$$Array.get, arr, i);
}

function setIndexExn(i, value, arr) {
  return Curry._3(SyntaxExn.$$Array.set, arr, i, value);
}

var include$5 = FeatureMutableIndexed.Add({
      length: CamlArrayCore.length,
      getIndexExn: getIndexExn$1,
      setIndexExn: setIndexExn
    });

var make = CamlArrayCore.make;

var isEmpty = CamlArrayCore.isEmpty;

var length = CamlArrayCore.length;

var init = include$1.init;

var toCamlList = include$1.toCamlList;

var fromCamlList = include$1.fromCamlList;

var toCamlArray = include$1.toCamlArray;

var fromCamlArray = include$1.fromCamlArray;

var toMutableArrayList = include$1.toMutableArrayList;

var fromMutableArrayList = include$1.fromMutableArrayList;

var toDeque = include$1.toDeque;

var fromDeque = include$1.fromDeque;

var every = include$1.every;

var everyi = include$1.everyi;

var forEach = include$1.forEach;

var forEachi = include$1.forEachi;

var none = include$1.none;

var nonei = include$1.nonei;

var some = include$1.some;

var somei = include$1.somei;

var filterDrop = include$1.filterDrop;

var filterDropi = include$1.filterDropi;

var filterKeep = include$1.filterKeep;

var filterKeepi = include$1.filterKeepi;

var map = include$1.map;

var mapi = include$1.mapi;

var reverse = include$1.reverse;

var reduce = include$1.reduce;

var reducei = include$1.reducei;

var reduceReverse = include$1.reduceReverse;

var reduceReversei = include$1.reduceReversei;

var flatten = include$1.flatten;

var concat = include$1.concat;

var concatArray = include$1.concatArray;

var concatList = include$1.concatList;

var getFirst = include$2.getFirst;

var getFirstExn = include$2.getFirstExn;

var getFirstN = include$2.getFirstN;

var getFirstNExn = include$2.getFirstNExn;

var dropFirst = include$2.dropFirst;

var dropFirstExn = include$2.dropFirstExn;

var dropFirstN = include$2.dropFirstN;

var dropFirstNExn = include$2.dropFirstNExn;

var match1Exn = include$2.match1Exn;

var match2Exn = include$2.match2Exn;

var match3Exn = include$2.match3Exn;

var match4Exn = include$2.match4Exn;

var match5Exn = include$2.match5Exn;

var match6Exn = include$2.match6Exn;

var match7Exn = include$2.match7Exn;

var match1 = include$2.match1;

var match2 = include$2.match2;

var match3 = include$2.match3;

var match4 = include$2.match4;

var match5 = include$2.match5;

var match6 = include$2.match6;

var match7 = include$2.match7;

var addFirst = include$2.addFirst;

var removeFirst = include$2.removeFirst;

var removeFirstExn = include$2.removeFirstExn;

var removeFirstN = include$2.removeFirstN;

var removeFirstNExn = include$2.removeFirstNExn;

var updateFirst = include$2.updateFirst;

var updateFirstExn = include$2.updateFirstExn;

var getLast = include$3.getLast;

var getLastExn = include$3.getLastExn;

var getLastN = include$3.getLastN;

var getLastNExn = include$3.getLastNExn;

var addLast = include$3.addLast;

var removeLast = include$3.removeLast;

var removeLastExn = include$3.removeLastExn;

var removeLastN = include$3.removeLastN;

var removeLastNExn = include$3.removeLastNExn;

var updateLast = include$3.updateLast;

var updateLastExn = include$3.updateLastExn;

var getIndex = include$4.getIndex;

var getIndexExn$2 = include$4.getIndexExn;

var setIndex = include$5.setIndex;

var setIndexExn$1 = include$5.setIndexExn;

var updateIndex = include$5.updateIndex;

var updateIndexExn = include$5.updateIndexExn;

var swap = include$5.swap;

var swapExn = include$5.swapExn;

var Syntax = include.Syntax;

var SyntaxNested = include.SyntaxNested;

var SyntaxReset = include.SyntaxReset;

exports.make = make;
exports.isEmpty = isEmpty;
exports.length = length;
exports.init = init;
exports.toCamlList = toCamlList;
exports.fromCamlList = fromCamlList;
exports.toCamlArray = toCamlArray;
exports.fromCamlArray = fromCamlArray;
exports.toMutableArrayList = toMutableArrayList;
exports.fromMutableArrayList = fromMutableArrayList;
exports.toDeque = toDeque;
exports.fromDeque = fromDeque;
exports.every = every;
exports.everyi = everyi;
exports.forEach = forEach;
exports.forEachi = forEachi;
exports.none = none;
exports.nonei = nonei;
exports.some = some;
exports.somei = somei;
exports.filterDrop = filterDrop;
exports.filterDropi = filterDropi;
exports.filterKeep = filterKeep;
exports.filterKeepi = filterKeepi;
exports.map = map;
exports.mapi = mapi;
exports.reverse = reverse;
exports.reduce = reduce;
exports.reducei = reducei;
exports.reduceReverse = reduceReverse;
exports.reduceReversei = reduceReversei;
exports.flatten = flatten;
exports.concat = concat;
exports.concatArray = concatArray;
exports.concatList = concatList;
exports.getFirst = getFirst;
exports.getFirstExn = getFirstExn;
exports.getFirstN = getFirstN;
exports.getFirstNExn = getFirstNExn;
exports.dropFirst = dropFirst;
exports.dropFirstExn = dropFirstExn;
exports.dropFirstN = dropFirstN;
exports.dropFirstNExn = dropFirstNExn;
exports.match1Exn = match1Exn;
exports.match2Exn = match2Exn;
exports.match3Exn = match3Exn;
exports.match4Exn = match4Exn;
exports.match5Exn = match5Exn;
exports.match6Exn = match6Exn;
exports.match7Exn = match7Exn;
exports.match1 = match1;
exports.match2 = match2;
exports.match3 = match3;
exports.match4 = match4;
exports.match5 = match5;
exports.match6 = match6;
exports.match7 = match7;
exports.addFirst = addFirst;
exports.removeFirst = removeFirst;
exports.removeFirstExn = removeFirstExn;
exports.removeFirstN = removeFirstN;
exports.removeFirstNExn = removeFirstNExn;
exports.updateFirst = updateFirst;
exports.updateFirstExn = updateFirstExn;
exports.getLast = getLast;
exports.getLastExn = getLastExn;
exports.getLastN = getLastN;
exports.getLastNExn = getLastNExn;
exports.addLast = addLast;
exports.removeLast = removeLast;
exports.removeLastExn = removeLastExn;
exports.removeLastN = removeLastN;
exports.removeLastNExn = removeLastNExn;
exports.updateLast = updateLast;
exports.updateLastExn = updateLastExn;
exports.getIndex = getIndex;
exports.getIndexExn = getIndexExn$2;
exports.setIndex = setIndex;
exports.setIndexExn = setIndexExn$1;
exports.updateIndex = updateIndex;
exports.updateIndexExn = updateIndexExn;
exports.swap = swap;
exports.swapExn = swapExn;
exports.Syntax = Syntax;
exports.SyntaxNested = SyntaxNested;
exports.SyntaxExn = SyntaxExn;
exports.SyntaxReset = SyntaxReset;
/* include Not a pure module */