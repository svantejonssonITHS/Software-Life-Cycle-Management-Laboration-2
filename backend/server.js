// Configuring dotenv
require("dotenv").config();

import post from "./schema";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose").MongoClient;

const url = "mongodb://localhost:27017";
const port = 3000;
let db;

// Connect to MongoDB
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
    db = client.db("postsDatabase");
    posts = db.collection("posts");
  }
);

// Configure express with body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure express for CORS
app.use(cors());

//Configure static directory for express
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/", (req, res) => {
  let postContent = req.body.content;
  post.create({ content: postContent });
  res.status(200).send("Post submitted");
});

//Start express server
app.listen(port, () => console.log(`Server started on port ${port}`));

//Export app for vercel hosting
module.exports = app;
