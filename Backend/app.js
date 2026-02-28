const express = require("express");
let app = express();
const port = 2020;
const path = require("path");
const ejsMate = require("ejs-mate");
const Post = require("./models/post");
const mongoose = require("mongoose");

app.set("view engine", "ejs");

app.engine("ejs", ejsMate);
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); // for form data

// const dbUrl = process.env.MONGO_ATLAS;
const dbUrl = "mongodb://127.0.0.1:27017/Blog";
async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then((res) => {
    console.log(res, "connection successfull");
  })
  .catch((err) => console.log(err));

const postData = [
  {
    title: "First Post",
    description: "This is the first sample post description.",
    image: "https://example.com/images/post1.jpg",
    Author: "john_doe",
    likes: 12,
  },
  {
    title: "Learning MERN",
    description: "Sharing my journey of learning the MERN stack.",
    image: "https://example.com/images/post2.jpg",
    Author: "alice_w",
    likes: 25,
  },
  {
    title: "React Tips",
    description: "Useful tips for beginners in React.",
    image: "https://example.com/images/post3.jpg",
    Author: "bobby",
    likes: 18,
  },
  {
    title: "Node.js Basics",
    description: "Understanding the basics of Node.js and backend.",
    image: "https://example.com/images/post4.jpg",
    Author: "emma_21",
    likes: 30,
  },
  {
    title: "MongoDB Guide",
    description: "A simple guide to MongoDB for beginners.",
    image: "https://example.com/images/post5.jpg",
    Author: "mike_dev",
    likes: 22,
  },
];

app.get("/", async (req, res) => {
  // res.render("index");
  const add = await Post.insertMany(postData);
  // console.log(Post);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
