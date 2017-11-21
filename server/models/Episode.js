const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
    eNumber: {
        type: String
    },
    eName: {
        type: String
    },
    eDescription:
    {
        type: String
    },
    eDate: {
        type: Date
    },
    eGuest: {
        type: String
    },
    eEpisode: {
        type: String
    },
    eURL: {
        type: String
    },
    eBooks: [
        {
            type: String
        }
    ]
});
module.exports = mongoose.model("Episode", EpisodeSchema);
