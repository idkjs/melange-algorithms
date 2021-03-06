// Generated by Melange
'use strict';

var FeatureBack = require("./features/FeatureBack.bs.js");
var FeatureFront = require("./features/FeatureFront.bs.js");
var FeatureIndexed = require("./features/FeatureIndexed.bs.js");
var FeatureSequence = require("./features/FeatureSequence.bs.js");
var FeatureMutableSyntax = require("./features/FeatureMutableSyntax.bs.js");
var MutableArrayListCore = require("./MutableArrayListCore.bs.js");
var FeatureMutableIndexed = require("./features/FeatureMutableIndexed.bs.js");

var include = FeatureSequence.Add({
      toList: MutableArrayListCore.toList,
      fromList: MutableArrayListCore.fromList,
      fastReverse: FeatureSequence.Default.fastReverse
    });

function get(ds, index) {
  return MutableArrayListCore.getIndexExn(index, ds);
}

function set(ds, index, el) {
  return MutableArrayListCore.setIndexExn(index, el, ds);
}

var include$1 = FeatureMutableSyntax.Add({
      length: MutableArrayListCore.length,
      get: get,
      set: set
    });

var fastGetFirst = /* GetFirstExn */{
  _0: (function (ds) {
      return MutableArrayListCore.getIndexExn(0, ds);
    })
};

var fastAddFirst = /* AddFirst */{
  _0: MutableArrayListCore.addFirst
};

var fastRemoveFirst = /* RemoveFirstExn */{
  _0: MutableArrayListCore.removeFirstExn
};

var include$2 = FeatureFront.Add({
      toList: MutableArrayListCore.toList,
      fromList: MutableArrayListCore.fromList,
      isEmpty: MutableArrayListCore.isEmpty,
      fastGetFirst: fastGetFirst,
      fastAddFirst: fastAddFirst,
      fastRemoveFirst: fastRemoveFirst
    });

var fastGetLast = /* GetLastExn */{
  _0: (function (ds) {
      return MutableArrayListCore.getIndexExn(MutableArrayListCore.length(ds) - 1 | 0, ds);
    })
};

var fastAddLast = /* AddLast */{
  _0: MutableArrayListCore.addLast
};

var fastRemoveLast = /* RemoveLastExn */{
  _0: MutableArrayListCore.removeLastExn
};

var include$3 = FeatureBack.Add({
      toList: MutableArrayListCore.toList,
      fromList: MutableArrayListCore.fromList,
      isEmpty: MutableArrayListCore.isEmpty,
      fastGetLast: fastGetLast,
      fastAddLast: fastAddLast,
      fastRemoveLast: fastRemoveLast
    });

var include$4 = FeatureIndexed.Add({
      getIndexExn: MutableArrayListCore.getIndexExn
    });

var include$5 = FeatureMutableIndexed.Add({
      length: MutableArrayListCore.length,
      getIndexExn: MutableArrayListCore.getIndexExn,
      setIndexExn: MutableArrayListCore.setIndexExn
    });

var make = MutableArrayListCore.make;

var isEmpty = MutableArrayListCore.isEmpty;

var length = MutableArrayListCore.length;

var init = include.init;

var toCamlList = include.toCamlList;

var fromCamlList = include.fromCamlList;

var toCamlArray = include.toCamlArray;

var fromCamlArray = include.fromCamlArray;

var toMutableArrayList = include.toMutableArrayList;

var fromMutableArrayList = include.fromMutableArrayList;

var toDeque = include.toDeque;

var fromDeque = include.fromDeque;

var every = include.every;

var everyi = include.everyi;

var forEach = include.forEach;

var forEachi = include.forEachi;

var none = include.none;

var nonei = include.nonei;

var some = include.some;

var somei = include.somei;

var filterDrop = include.filterDrop;

var filterDropi = include.filterDropi;

var filterKeep = include.filterKeep;

var filterKeepi = include.filterKeepi;

var map = include.map;

var mapi = include.mapi;

var reverse = include.reverse;

var reduce = include.reduce;

var reducei = include.reducei;

var reduceReverse = include.reduceReverse;

var reduceReversei = include.reduceReversei;

var flatten = include.flatten;

var concat = include.concat;

var concatArray = include.concatArray;

var concatList = include.concatList;

var getFirst = include$2.getFirst;

var getFirstExn = include$2.getFirstExn;

var getFirstN = include$2.getFirstN;

var getFirstNExn = include$2.getFirstNExn;

var addFirst = include$2.addFirst;

var removeFirst = include$2.removeFirst;

var removeFirstExn = include$2.removeFirstExn;

var removeFirstN = include$2.removeFirstN;

var removeFirstNExn = include$2.removeFirstNExn;

var updateFirst = include$2.updateFirst;

var updateFirstExn = include$2.updateFirstExn;

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

var getIndexExn = include$4.getIndexExn;

var setIndex = include$5.setIndex;

var setIndexExn = include$5.setIndexExn;

var updateIndex = include$5.updateIndex;

var updateIndexExn = include$5.updateIndexExn;

var swap = include$5.swap;

var swapExn = include$5.swapExn;

var Syntax = include$1.Syntax;

var SyntaxNested = include$1.SyntaxNested;

var SyntaxExn = include$1.SyntaxExn;

var SyntaxReset = include$1.SyntaxReset;

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
exports.addFirst = addFirst;
exports.removeFirst = removeFirst;
exports.removeFirstExn = removeFirstExn;
exports.removeFirstN = removeFirstN;
exports.removeFirstNExn = removeFirstNExn;
exports.updateFirst = updateFirst;
exports.updateFirstExn = updateFirstExn;
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
exports.getIndexExn = getIndexExn;
exports.setIndex = setIndex;
exports.setIndexExn = setIndexExn;
exports.updateIndex = updateIndex;
exports.updateIndexExn = updateIndexExn;
exports.swap = swap;
exports.swapExn = swapExn;
exports.Syntax = Syntax;
exports.SyntaxNested = SyntaxNested;
exports.SyntaxExn = SyntaxExn;
exports.SyntaxReset = SyntaxReset;
/* include Not a pure module */
