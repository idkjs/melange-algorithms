// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Exceptions = require("../../Exceptions.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var CamlListCore = require("../CamlListCore.bs.js");
var FeatureFrontCommon = require("./FeatureFrontCommon.bs.js");

var Default_fastGetFirst = FeatureFrontCommon.Default.fastGetFirst;

var Default_fastDropFirst = FeatureFrontCommon.Default.fastDropFirst;

var Default = {
  fastGetFirst: Default_fastGetFirst,
  fastDropFirst: Default_fastDropFirst,
  fastAddFirst: /* SlowAddFirst */0,
  fastRemoveFirst: /* SlowRemoveFirst */0
};

function Add(Config) {
  var include = FeatureFrontCommon.Add(Config);
  var addFirst = Config.fastAddFirst;
  var addFirst$1 = addFirst ? addFirst._0 : (function (el, ds) {
        var list = Curry._1(Config.toList, ds);
        return Curry._1(Config.fromList, {
                    hd: el,
                    tl: list
                  });
      });
  var removeFirstExn = Config.fastRemoveFirst;
  var removeFirstExn$1 = removeFirstExn ? removeFirstExn._0 : (function (ds) {
        var list = Curry._1(Config.toList, ds);
        if (list) {
          return Curry._1(Config.fromList, list.tl);
        }
        throw {
              RE_EXN_ID: Exceptions.Empty,
              _1: "FeatureFront.removeFirstExn",
              Error: new Error()
            };
      });
  var removeFirstExn$2 = Config.fastRemoveFirst;
  var removeFirstNExn;
  if (removeFirstExn$2) {
    var removeFirstExn$3 = removeFirstExn$2._0;
    removeFirstNExn = (function (count, ds) {
        var ds$1 = ds;
        for(var _i = 0; _i < count; ++_i){
          ds$1 = Curry._1(removeFirstExn$3, ds$1);
        }
        return ds$1;
      });
  } else {
    removeFirstNExn = (function (count, ds) {
        var list = Curry._1(Config.toList, ds);
        var list$1 = list;
        for(var _i = 0; _i < count; ++_i){
          list$1 = CamlListCore.dropFirstExn(list$1);
        }
        return Curry._1(Config.fromList, list$1);
      });
  }
  var removeFirstN = function (count, ds) {
    try {
      return Caml_option.some(Curry._2(removeFirstNExn, count, ds));
    }
    catch (exn){
      return ;
    }
  };
  var removeFirst = function (ds) {
    try {
      return Caml_option.some(Curry._1(removeFirstExn$1, ds));
    }
    catch (exn){
      return ;
    }
  };
  var match = Config.fastGetFirst;
  var match$1 = Config.fastAddFirst;
  var match$2 = Config.fastRemoveFirst;
  var updateFirstExn;
  var exit = 0;
  if (match && match$1 && match$2) {
    var removeFirstExn$4 = match$2._0;
    var addFirst$2 = match$1._0;
    var getFirstExn = match._0;
    updateFirstExn = (function (fn, ds) {
        if (Curry._1(Config.isEmpty, ds)) {
          throw {
                RE_EXN_ID: Exceptions.Empty,
                _1: "FeatureFront.updateFirstExn",
                Error: new Error()
              };
        }
        var first = Curry._1(getFirstExn, ds);
        var rest = Curry._1(removeFirstExn$4, ds);
        var newFirst = Curry._1(fn, first);
        return Curry._2(addFirst$2, newFirst, rest);
      });
  } else {
    exit = 1;
  }
  if (exit === 1) {
    updateFirstExn = (function (fn, ds) {
        var list = Curry._1(Config.toList, ds);
        if (list) {
          return Curry._1(Config.fromList, {
                      hd: Curry._1(fn, list.hd),
                      tl: list.tl
                    });
        }
        throw {
              RE_EXN_ID: Exceptions.Empty,
              _1: "FeatureFront.updateFirstExn",
              Error: new Error()
            };
      });
  }
  var updateFirst = function (fn, ds) {
    try {
      return Caml_option.some(Curry._2(updateFirstExn, fn, ds));
    }
    catch (exn){
      return ;
    }
  };
  return {
          getFirst: include.getFirst,
          getFirstExn: include.getFirstExn,
          getFirstN: include.getFirstN,
          getFirstNExn: include.getFirstNExn,
          dropFirst: include.dropFirst,
          dropFirstExn: include.dropFirstExn,
          dropFirstN: include.dropFirstN,
          dropFirstNExn: include.dropFirstNExn,
          match1Exn: include.match1Exn,
          match2Exn: include.match2Exn,
          match3Exn: include.match3Exn,
          match4Exn: include.match4Exn,
          match5Exn: include.match5Exn,
          match6Exn: include.match6Exn,
          match7Exn: include.match7Exn,
          match1: include.match1,
          match2: include.match2,
          match3: include.match3,
          match4: include.match4,
          match5: include.match5,
          match6: include.match6,
          match7: include.match7,
          addFirst: addFirst$1,
          removeFirst: removeFirst,
          removeFirstExn: removeFirstExn$1,
          removeFirstN: removeFirstN,
          removeFirstNExn: removeFirstNExn,
          updateFirst: updateFirst,
          updateFirstExn: updateFirstExn
        };
}

exports.Default = Default;
exports.Add = Add;
/* No side effect */
