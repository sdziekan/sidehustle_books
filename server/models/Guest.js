const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const GuestSchema = new Schema({
    gName: {
        type: String,
        required: [true, "gName is required"]
    },
    gEpisode: [
        {
            type: String
        }
    ],
    gBooks: [
        {
            type: String
        }
    ]
});
module.exports = mongoose.model("Guest", GuestSchema);
