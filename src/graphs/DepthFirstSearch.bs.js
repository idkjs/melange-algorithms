// Generated by Melange
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Hashtbl = require("bs-platform/lib/js/hashtbl.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Not_found = /* @__PURE__ */Caml_exceptions.create("DepthFirstSearch.Not_found");

function parseAdjList(adj_list) {
  var adj_tbl = Hashtbl.create(undefined, List.length(adj_list));
  var insert = function (param) {
    return Hashtbl.add(adj_tbl, param.id, param.neighbours);
  };
  List.iter(insert, adj_list);
  var validateNeighbours = function (node) {
    return List.iter((function (neighbour) {
                  if (Hashtbl.mem(adj_tbl, neighbour)) {
                    return ;
                  }
                  throw {
                        RE_EXN_ID: Not_found,
                        _1: neighbour,
                        Error: new Error()
                      };
                }), node.neighbours);
  };
  List.iter(validateNeighbours, adj_list);
  return adj_tbl;
}

function visit(node_id, adj_tbl, level, parent, current_level) {
  if (Hashtbl.mem(level, node_id)) {
    return ;
  }
  Hashtbl.add(level, node_id, current_level);
  var neighbours = Hashtbl.find(adj_tbl, node_id);
  var markParent = function (neighbour_id) {
    if (!Hashtbl.mem(parent, neighbour_id)) {
      return Hashtbl.add(parent, neighbour_id, Caml_option.some(node_id));
    }
    
  };
  var markParentAndVisit = function (neighbour_id) {
    markParent(neighbour_id);
    return visit(neighbour_id, adj_tbl, level, parent, current_level + 1 | 0);
  };
  return List.iter(markParentAndVisit, neighbours);
}

function search(adj_list, root_id) {
  var num_nodes = List.length(adj_list);
  var level = Hashtbl.create(undefined, num_nodes);
  var parent = Hashtbl.create(undefined, num_nodes);
  Hashtbl.add(parent, root_id, undefined);
  var adj_tbl = parseAdjList(adj_list);
  visit(root_id, adj_tbl, level, parent, 0);
  var markNodeIfUnvisited = function (param) {
    return function (param$1) {
      if (!Hashtbl.mem(level, param)) {
        Hashtbl.add(level, param, undefined);
        return Hashtbl.add(parent, param, undefined);
      }
      
    };
  };
  Hashtbl.iter(markNodeIfUnvisited, adj_tbl);
  return {
          level: level,
          parent: parent
        };
}

exports.search = search;
/* Hashtbl Not a pure module */