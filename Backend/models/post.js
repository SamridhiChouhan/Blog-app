const mongoose = require("mongoose");
const { Schema } = mongoose;

// const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: Number,
  },
  username: {
    type: String,
  },
  role: {
    type: String,
    default: "User",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
