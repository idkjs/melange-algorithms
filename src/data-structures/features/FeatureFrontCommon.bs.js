// Generated by Melange
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Exceptions = require("../../Exceptions.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var CamlListCore = require("../CamlListCore.bs.js");

var Default = {
  fastGetFirst: /* SlowGetFirst */0,
  fastDropFirst: /* SlowDropFirst */0
};

function Add(Config) {
  var getFirstExn = Config.fastGetFirst;
  var getFirstExn$1 = getFirstExn ? getFirstExn._0 : (function (ds) {
        return CamlListCore.getFirstExn(Curry._1(Config.toList, ds));
      });
  var getFirst = function (ds) {
    try {
      return Caml_option.some(Curry._1(getFirstExn$1, ds));
    }
    catch (exn){
      return ;
    }
  };
  var match = Config.fastGetFirst;
  var match$1 = Config.fastDropFirst;
  var getFirstNExn;
  var exit = 0;
  if (match && match$1) {
    var dropFirstExn = match$1._0;
    var getFirstExn$2 = match._0;
    getFirstNExn = (function (count, ds) {
        var ds$1 = ds;
        var result = /* [] */0;
        for(var _i = 0; _i < count; ++_i){
          result = {
            hd: Curry._1(getFirstExn$2, ds$1),
            tl: result
          };
          ds$1 = Curry._1(dropFirstExn, ds$1);
        }
        return Curry._1(Config.fromList, List.rev(result));
      });
  } else {
    exit = 1;
  }
  if (exit === 1) {
    getFirstNExn = (function (count, ds) {
        var list = Curry._1(Config.toList, ds);
        var list$1 = list;
        var result = /* [] */0;
        for(var _i = 0; _i < count; ++_i){
          result = {
            hd: CamlListCore.getFirstExn(list$1),
            tl: result
          };
          list$1 = CamlListCore.dropFirstExn(list$1);
        }
        return Curry._1(Config.fromList, List.rev(result));
      });
  }
  var getFirstN = function (count, ds) {
    try {
      return Caml_option.some(Curry._2(getFirstNExn, count, ds));
    }
    catch (exn){
      return ;
    }
  };
  var dropFirstExn$1 = Config.fastDropFirst;
  var dropFirstExn$2 = dropFirstExn$1 ? dropFirstExn$1._0 : (function (ds) {
        var list = Curry._1(Config.toList, ds);
        if (list) {
          return Curry._1(Config.fromList, list.tl);
        }
        throw {
              RE_EXN_ID: Exceptions.Empty,
              _1: "FeatureFront.dropFirstExn",
              Error: new Error()
            };
      });
  var dropFirstExn$3 = Config.fastDropFirst;
  var dropFirstNExn;
  if (dropFirstExn$3) {
    var dropFirstExn$4 = dropFirstExn$3._0;
    dropFirstNExn = (function (count, ds) {
        var ds$1 = ds;
        for(var _i = 0; _i < count; ++_i){
          ds$1 = Curry._1(dropFirstExn$4, ds$1);
        }
        return ds$1;
      });
  } else {
    dropFirstNExn = (function (count, ds) {
        var list = Curry._1(Config.toList, ds);
        var list$1 = list;
        for(var _i = 0; _i < count; ++_i){
          list$1 = CamlListCore.dropFirstExn(list$1);
        }
        return Curry._1(Config.fromList, list$1);
      });
  }
  var dropFirstN = function (count, ds) {
    try {
      return Caml_option.some(Curry._2(dropFirstNExn, count, ds));
    }
    catch (exn){
      return ;
    }
  };
  var dropFirst = function (ds) {
    try {
      return Caml_option.some(Curry._1(dropFirstExn$2, ds));
    }
    catch (exn){
      return ;
    }
  };
  var match1Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 1, ds));
    var rest = Curry._2(dropFirstNExn, 1, ds);
    if (front) {
      if (front.tl) {
        throw {
              RE_EXN_ID: Exceptions.InternalError,
              _1: "FeatureFront.matchNExn",
              Error: new Error()
            };
      }
      return [
              front.hd,
              rest
            ];
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match2Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 2, ds));
    var rest = Curry._2(dropFirstNExn, 2, ds);
    if (front) {
      var match = front.tl;
      if (match) {
        if (match.tl) {
          throw {
                RE_EXN_ID: Exceptions.InternalError,
                _1: "FeatureFront.matchNExn",
                Error: new Error()
              };
        }
        return [
                front.hd,
                match.hd,
                rest
              ];
      }
      throw {
            RE_EXN_ID: Exceptions.InternalError,
            _1: "FeatureFront.matchNExn",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match3Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 3, ds));
    var rest = Curry._2(dropFirstNExn, 3, ds);
    if (front) {
      var match = front.tl;
      if (match) {
        var match$1 = match.tl;
        if (match$1) {
          if (match$1.tl) {
            throw {
                  RE_EXN_ID: Exceptions.InternalError,
                  _1: "FeatureFront.matchNExn",
                  Error: new Error()
                };
          }
          return [
                  front.hd,
                  match.hd,
                  match$1.hd,
                  rest
                ];
        }
        throw {
              RE_EXN_ID: Exceptions.InternalError,
              _1: "FeatureFront.matchNExn",
              Error: new Error()
            };
      }
      throw {
            RE_EXN_ID: Exceptions.InternalError,
            _1: "FeatureFront.matchNExn",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match4Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 4, ds));
    var rest = Curry._2(dropFirstNExn, 4, ds);
    if (front) {
      var match = front.tl;
      if (match) {
        var match$1 = match.tl;
        if (match$1) {
          var match$2 = match$1.tl;
          if (match$2) {
            if (match$2.tl) {
              throw {
                    RE_EXN_ID: Exceptions.InternalError,
                    _1: "FeatureFront.matchNExn",
                    Error: new Error()
                  };
            }
            return [
                    front.hd,
                    match.hd,
                    match$1.hd,
                    match$2.hd,
                    rest
                  ];
          }
          throw {
                RE_EXN_ID: Exceptions.InternalError,
                _1: "FeatureFront.matchNExn",
                Error: new Error()
              };
        }
        throw {
              RE_EXN_ID: Exceptions.InternalError,
              _1: "FeatureFront.matchNExn",
              Error: new Error()
            };
      }
      throw {
            RE_EXN_ID: Exceptions.InternalError,
            _1: "FeatureFront.matchNExn",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match5Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 5, ds));
    var rest = Curry._2(dropFirstNExn, 5, ds);
    if (front) {
      var match = front.tl;
      if (match) {
        var match$1 = match.tl;
        if (match$1) {
          var match$2 = match$1.tl;
          if (match$2) {
            var match$3 = match$2.tl;
            if (match$3) {
              if (match$3.tl) {
                throw {
                      RE_EXN_ID: Exceptions.InternalError,
                      _1: "FeatureFront.matchNExn",
                      Error: new Error()
                    };
              }
              return [
                      front.hd,
                      match.hd,
                      match$1.hd,
                      match$2.hd,
                      match$3.hd,
                      rest
                    ];
            }
            throw {
                  RE_EXN_ID: Exceptions.InternalError,
                  _1: "FeatureFront.matchNExn",
                  Error: new Error()
                };
          }
          throw {
                RE_EXN_ID: Exceptions.InternalError,
                _1: "FeatureFront.matchNExn",
                Error: new Error()
              };
        }
        throw {
              RE_EXN_ID: Exceptions.InternalError,
              _1: "FeatureFront.matchNExn",
              Error: new Error()
            };
      }
      throw {
            RE_EXN_ID: Exceptions.InternalError,
            _1: "FeatureFront.matchNExn",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match6Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 6, ds));
    var rest = Curry._2(dropFirstNExn, 6, ds);
    if (front) {
      var match = front.tl;
      if (match) {
        var match$1 = match.tl;
        if (match$1) {
          var match$2 = match$1.tl;
          if (match$2) {
            var match$3 = match$2.tl;
            if (match$3) {
              var match$4 = match$3.tl;
              if (match$4) {
                if (match$4.tl) {
                  throw {
                        RE_EXN_ID: Exceptions.InternalError,
                        _1: "FeatureFront.matchNExn",
                        Error: new Error()
                      };
                }
                return [
                        front.hd,
                        match.hd,
                        match$1.hd,
                        match$2.hd,
                        match$3.hd,
                        match$4.hd,
                        rest
                      ];
              }
              throw {
                    RE_EXN_ID: Exceptions.InternalError,
                    _1: "FeatureFront.matchNExn",
                    Error: new Error()
                  };
            }
            throw {
                  RE_EXN_ID: Exceptions.InternalError,
                  _1: "FeatureFront.matchNExn",
                  Error: new Error()
                };
          }
          throw {
                RE_EXN_ID: Exceptions.InternalError,
                _1: "FeatureFront.matchNExn",
                Error: new Error()
              };
        }
        throw {
              RE_EXN_ID: Exceptions.InternalError,
              _1: "FeatureFront.matchNExn",
              Error: new Error()
            };
      }
      throw {
            RE_EXN_ID: Exceptions.InternalError,
            _1: "FeatureFront.matchNExn",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match7Exn = function (ds) {
    var front = Curry._1(Config.toList, Curry._2(getFirstNExn, 7, ds));
    var rest = Curry._2(dropFirstNExn, 7, ds);
    if (front) {
      var match = front.tl;
      if (match) {
        var match$1 = match.tl;
        if (match$1) {
          var match$2 = match$1.tl;
          if (match$2) {
            var match$3 = match$2.tl;
            if (match$3) {
              var match$4 = match$3.tl;
              if (match$4) {
                var match$5 = match$4.tl;
                if (match$5) {
                  if (match$5.tl) {
                    throw {
                          RE_EXN_ID: Exceptions.InternalError,
                          _1: "FeatureFront.matchNExn",
                          Error: new Error()
                        };
                  }
                  return [
                          front.hd,
                          match.hd,
                          match$1.hd,
                          match$2.hd,
                          match$3.hd,
                          match$4.hd,
                          match$5.hd,
                          rest
                        ];
                }
                throw {
                      RE_EXN_ID: Exceptions.InternalError,
                      _1: "FeatureFront.matchNExn",
                      Error: new Error()
                    };
              }
              throw {
                    RE_EXN_ID: Exceptions.InternalError,
                    _1: "FeatureFront.matchNExn",
                    Error: new Error()
                  };
            }
            throw {
                  RE_EXN_ID: Exceptions.InternalError,
                  _1: "FeatureFront.matchNExn",
                  Error: new Error()
                };
          }
          throw {
                RE_EXN_ID: Exceptions.InternalError,
                _1: "FeatureFront.matchNExn",
                Error: new Error()
              };
        }
        throw {
              RE_EXN_ID: Exceptions.InternalError,
              _1: "FeatureFront.matchNExn",
              Error: new Error()
            };
      }
      throw {
            RE_EXN_ID: Exceptions.InternalError,
            _1: "FeatureFront.matchNExn",
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: Exceptions.InternalError,
          _1: "FeatureFront.matchNExn",
          Error: new Error()
        };
  };
  var match1 = function (ds) {
    try {
      return match1Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  var match2 = function (ds) {
    try {
      return match2Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  var match3 = function (ds) {
    try {
      return match3Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  var match4 = function (ds) {
    try {
      return match4Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  var match5 = function (ds) {
    try {
      return match5Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  var match6 = function (ds) {
    try {
      return match6Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  var match7 = function (ds) {
    try {
      return match7Exn(ds);
    }
    catch (exn){
      return ;
    }
  };
  return {
          getFirst: getFirst,
          getFirstExn: getFirstExn$1,
          getFirstN: getFirstN,
          getFirstNExn: getFirstNExn,
          dropFirst: dropFirst,
          dropFirstExn: dropFirstExn$2,
          dropFirstN: dropFirstN,
          dropFirstNExn: dropFirstNExn,
          match1Exn: match1Exn,
          match2Exn: match2Exn,
          match3Exn: match3Exn,
          match4Exn: match4Exn,
          match5Exn: match5Exn,
          match6Exn: match6Exn,
          match7Exn: match7Exn,
          match1: match1,
          match2: match2,
          match3: match3,
          match4: match4,
          match5: match5,
          match6: match6,
          match7: match7
        };
}

exports.Default = Default;
exports.Add = Add;
/* No side effect */
