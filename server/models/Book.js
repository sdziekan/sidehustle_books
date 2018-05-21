const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const BookSchema = new Schema({
    bTitle: {
        type: String
    },
    bEpNumber: {
        type: String
    },
    bEpName: {
        type: String
    },
    bGuest: {
        type: String
    },
    bShowNotes: {
        type: String
    },
    bAuthor: {
        type: String
    },
    bUrl:
    {
        type: String
    }

});
module.exports = mongoose.model("Book", BookSchema);
