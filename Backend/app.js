const express = require("express");
let app = express();
const port = 2020;
const path = require("path");
const ejsMate = require("ejs-mate");

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

app.get("/", (req, res) => {
  // res.render("index");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
