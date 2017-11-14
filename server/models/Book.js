const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    author: {
        type: String
    },
    episode: [
        {
            type: String
        }
    ]
});
module.exports = mongoose.model("Book", BookSchema);
