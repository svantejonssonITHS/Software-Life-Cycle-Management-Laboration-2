const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const port = 3000;
//vi skulle inte ha statisk port nummer eller?
let db;

mongo.connect(
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
    foods = db.collection("posts");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("public"));
app.listen(port);
