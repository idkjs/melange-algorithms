// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var MergeSort$Algorithms = require("../src/sort/MergeSort.bs.js");
var RadixSort$Algorithms = require("../src/sort/integer_sort/RadixSort.bs.js");
var CountingSort$Algorithms = require("../src/sort/integer_sort/CountingSort.bs.js");
var InsertionSort$Algorithms = require("../src/sort/InsertionSort.bs.js");

Jest.describe("Merge Sort", (function (param) {
        return Jest.test("sort", (function (param) {
                      var arr = [
                        7,
                        4,
                        5,
                        8,
                        3,
                        1,
                        2,
                        9,
                        0,
                        6
                      ];
                      var expected = [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ];
                      var result = MergeSort$Algorithms.sort((function (prim, prim$1) {
                              return prim < prim$1;
                            }), arr);
                      return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
                    }));
      }));

Jest.describe("Insertion Sort", (function (param) {
        return Jest.test("sort", (function (param) {
                      var arr = [
                        7,
                        4,
                        5,
                        8,
                        3,
                        1,
                        2,
                        9,
                        0,
                        6
                      ];
                      var expected = [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ];
                      var result = InsertionSort$Algorithms.sort((function (prim, prim$1) {
                              return prim < prim$1;
                            }), arr);
                      return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
                    }));
      }));

Jest.describe("Counting Sort", (function (param) {
        Jest.test("sort", (function (param) {
                var arr = [
                  7,
                  4,
                  5,
                  8,
                  3,
                  1,
                  2,
                  9,
                  0,
                  6
                ];
                var expected = [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ];
                var result = CountingSort$Algorithms.sort(arr);
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
              }));
        return Jest.test("sort should handle duplicate elements", (function (param) {
                      var arr = [
                        4,
                        4,
                        4,
                        4,
                        1,
                        3,
                        3,
                        3,
                        2,
                        2
                      ];
                      var expected = [
                        1,
                        2,
                        2,
                        3,
                        3,
                        3,
                        4,
                        4,
                        4,
                        4
                      ];
                      var result = CountingSort$Algorithms.sort(arr);
                      return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
                    }));
      }));

Jest.describe("Radix Sort", (function (param) {
        Jest.test("sort", (function (param) {
                var arr = [
                  7,
                  4,
                  5,
                  8,
                  3,
                  1,
                  2,
                  9,
                  0,
                  6
                ];
                var expected = [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ];
                var result = RadixSort$Algorithms.sort(arr, 10);
                return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
              }));
        return Jest.test("sort should handle duplicate elements", (function (param) {
                      var arr = [
                        4,
                        4,
                        4,
                        4,
                        1,
                        3,
                        3,
                        3,
                        2,
                        2
                      ];
                      var expected = [
                        1,
                        2,
                        2,
                        3,
                        3,
                        3,
                        4,
                        4,
                        4,
                        4
                      ];
                      var result = RadixSort$Algorithms.sort(arr, 10);
                      return Jest.Expect.toEqual(expected, Jest.Expect.expect(result));
                    }));
      }));

/*  Not a pure module */
