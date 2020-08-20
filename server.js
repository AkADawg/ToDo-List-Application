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
app.use(bodyParser.json());

app.use(cors());
/************************************Setting up Database*****************************************/
mongoose.connect("mongodb://localhost:27017/myToDoListDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
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

app
  .route("/list")
  .get((req, res) => {
    console.log("get request attempt");

    Item.find((err, databaseItems) => {
      if (err) {
        console.log(err);
      } else {
        res.send(databaseItems);
      }
    });
  })

  .post((req, res) => {
    const newItem = new Item({
      name: req.body.inputText,
    });

    newItem.save(function (err) {
      if (!err) {
        res.send("Succesfully added ");
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    const itemName = req.body.itemName;
    console.log("hold up im tryna delete");
    console.log(req.body.itemName);
    Item.deleteOne({ name: itemName }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully deleted");
      }
    });
  });

app.listen(port, (req, res) => console.log("Server started on port" + port));
