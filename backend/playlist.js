const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
  },
  playlistURL: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("playlists",playlistSchema) ;