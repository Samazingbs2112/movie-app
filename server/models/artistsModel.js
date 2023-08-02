const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    debutYear: {
        type: Number,
        required: true
    },
    debutMovie: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }
    
}, 
{timestamps: true}
);

const Artists = mongoose.model("artists", artistsSchema);

module.exports = Artists;

