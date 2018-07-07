var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tf-books");

var Book = require("../models/Book.js");
var Episode = require("../models/Episode.js");
var Guest = require("../models/Guest.js");


router.get("/", (req, res, next) => {
    Guest.find().then(guests => {
        res.json(guests);
    });
});

router.get("/:guestID", (req, res, next) => {
    var guestId = req.params.guestID;
    Guest.findById(guestId, (err, guest) => {
        if (err) next(err);
        else res.json(guest);
    });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
