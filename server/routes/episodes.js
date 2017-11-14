var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongoose://localhost/tf-books");

var Book = require("../models/Book.js");
var Episode = require("../models/Episode.js");
var Guest = require("../models/Guest.js");


router.get("/", (req, res, next) => {
    Episode.find().then(episodes => {
        res.json(episodes);
    });
});

router.get("/:episodeID", (req, res, next) => {
    var episodeId = req.params.episodeID;
    Episode.findById(episodeId, (err, episode) => {
        if (err) next(err);
        else res.json(episode);
    });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
