const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
    epTitle: {
        type: String,
        required: [true, "epTitle is required"]
    },
    epUrl: {
        type: String,
        required: [true, "epUrl is required"]
    },
    epGuest: [
        {
            type: String,
            required: [true, "epGuest is required"]
        }
    ],
    date: {
        type: Date
    }
});
module.exports = mongoose.model("Episode", EpisodeSchema);
