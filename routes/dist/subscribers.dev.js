"use strict";

var express = require("express");

var router = express.Router();

var Subscriber = require("../models/subcribers");

router.get("/", function _callee(req, res) {
  var subscribers;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Subscriber.find());

        case 3:
          subscribers = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
router.get("/:id", function (req, res) {
  res.send(req.params.id);
});
router.post("/", function (req, res) {});
router.patch("/:id", function (req, res) {});
router["delete"]("/:id", function (req, res) {});
module.exports = router;