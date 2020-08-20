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

app.post("/addItems", (req, res) => {
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
});

// app.delete("/delete", (req, res) => {
//   const itemID = req.body.id;
//   console.log(itemID);
//   Item.findByIdAndRemove(itemID, (err) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Succesfully deleted");
//     }
//   });
// });
app.listen(port, (req, res) => console.log("Server started on port" + port));
