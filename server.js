const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
/************************************Setting up Database*****************************************/
mongoose.connect("mongodb://localhost:27017/myToDoListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const testItem = new Item({
  name: "Buy Milk",
});

// testItem.save();

/***********************************HTTP Requests************************************************/
app.get("/items", (req, res) => {
  console.log("get request attempt");

  Item.find((err, databaseItems) => {
    if (err) {
      console.log(err);
    } else {
      res.send(databaseItems);
    }
  });
});

// app.post("/posts", (req, res) => {
//   console.log(req.body.name);
//   console.log("You have posted");
// });

app.listen(port, (req, res) => console.log("Server started on port" + port));
