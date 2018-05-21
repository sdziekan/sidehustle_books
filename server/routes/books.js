var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongoose://localhost/tf-books");

var Book = require("../models/Book.js");
var Episode = require("../models/Episode.js");
var Guest = require("../models/Guest.js");


router.get("/", (req, res, next) => {
  Book.find().then(books => {
    res.json(books);
  });
});

router.get("/:bookID", (req, res, next) => {
  var bookId = req.params.bookID;
  Book.findById(bookId, (err, book) => {
    if (err) next(err);
    else res.json(book);
  });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
