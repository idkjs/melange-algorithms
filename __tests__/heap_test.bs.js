// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Heap$Algorithms = require("../src/basic/Heap.bs.js");

Jest.describe("Heap", (function (param) {
        var gen_keys = function (n) {
          var gen = function (n) {
            if (n !== -1) {
              return {
                      hd: n,
                      tl: gen(n - 1 | 0)
                    };
            } else {
              return /* [] */0;
            }
          };
          return gen(n - 1 | 0);
        };
        var keys = gen_keys(30);
        var setup = function (param) {
          var heap = Heap$Algorithms.create(function (a, b) {
                return a < b;
              });
          List.iter((function (key) {
                  return Heap$Algorithms.add(heap, key, String(key));
                }), keys);
          return heap;
        };
        Jest.test("size", (function (param) {
                var heap = setup(undefined);
                var heap_size = Heap$Algorithms.size(heap);
                return Jest.Expect.toBe(30, Jest.Expect.expect(heap_size));
              }));
        Jest.test("head", (function (param) {
                var heap = setup(undefined);
                var head = Heap$Algorithms.head(heap);
                return Jest.Expect.toBe("0", Jest.Expect.expect(head));
              }));
        Jest.test("decrease_root_priority", (function (param) {
                var heap = setup(undefined);
                Heap$Algorithms.decrease_root_priority(heap, 500);
                Heap$Algorithms.decrease_root_priority(heap, 501);
                Heap$Algorithms.decrease_root_priority(heap, 502);
                var head = Heap$Algorithms.head(heap);
                return Jest.Expect.toBe("3", Jest.Expect.expect(head));
              }));
        Jest.test("remove", (function (param) {
                var heap = setup(undefined);
                var removeSmallestN = function (n) {
                  var _x = n - 1 | 0;
                  while(true) {
                    var x = _x;
                    if (x === -1) {
                      return ;
                    }
                    var value = String(x);
                    Heap$Algorithms.remove(heap, (function(value){
                        return function (param) {
                          return function (param) {
                            return Caml_obj.caml_equal(param, value);
                          };
                        }
                        }(value)));
                    _x = x - 1 | 0;
                    continue ;
                  };
                };
                removeSmallestN(10);
                var res1 = Heap$Algorithms.extract(heap);
                var res2 = Heap$Algorithms.extract(heap);
                var res3 = Heap$Algorithms.extract(heap);
                return Jest.Expect.toEqual([
                            "10",
                            "11",
                            "12"
                          ], Jest.Expect.expect([
                                res1,
                                res2,
                                res3
                              ]));
              }));
        Jest.test("update", (function (param) {
                var heap = setup(undefined);
                var decrementSmallestN = function (n) {
                  var _x = n - 1 | 0;
                  while(true) {
                    var x = _x;
                    if (x === -1) {
                      return ;
                    }
                    var value = String(x);
                    Heap$Algorithms.update(heap, (function(value){
                        return function (param) {
                          return function (param) {
                            return Caml_obj.caml_equal(param, value);
                          };
                        }
                        }(value)), x - 1 | 0, String(x - 1 | 0));
                    _x = x - 1 | 0;
                    continue ;
                  };
                };
                decrementSmallestN(10);
                var res1 = Heap$Algorithms.extract(heap);
                var res2 = Heap$Algorithms.extract(heap);
                var res3 = Heap$Algorithms.extract(heap);
                return Jest.Expect.toEqual([
                            "-1",
                            "0",
                            "1"
                          ], Jest.Expect.expect([
                                res1,
                                res2,
                                res3
                              ]));
              }));
        return Jest.test("heap sort", (function (param) {
                      var heap = setup(undefined);
                      var expected = List.map((function (key) {
                              return String(key);
                            }), List.rev(keys));
                      var result = List.map((function (_key) {
                              return Heap$Algorithms.extract(heap);
                            }), keys);
                      return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
                    }));
      }));

/*  Not a pure module */
