const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const GuestSchema = new Schema({
    gName: {
        type: String
    },
    gEpisode: [
        {
            type: String
        }
    ],
    gEpisodeNum: [
        {
            type: String
        }
    ]
});
module.exports = mongoose.model("Guest", GuestSchema);
