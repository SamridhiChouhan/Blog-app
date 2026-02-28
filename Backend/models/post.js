const mongoose = require("mongoose");
const { Schema } = mongoose;

// const passportLocalMongoose = require("passport-local-mongoose");

const postSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  Author: {
    type: String,
  },
  likes: {
    type: Number,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
