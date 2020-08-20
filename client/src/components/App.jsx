import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  /*****************************************************************API Requests*************************************************************/
  function fetchData() {
    const itemsApi = "http://localhost:5000/items";
    const getCustomer = axios
      .get(itemsApi)
      .then(function (response) {
        const itemsData = response;
        itemsData.data.forEach((element) => {
          setItems((prevItems) => {
            return [...prevItems, element.name];
          });
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  /*****************************************************************Local Changes**************************************************************/
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    axios.post("http://localhost:5000/addItems", { inputText }).then((res) => {
      console.log(res);
      console.log(res.config.data);
    });
  }

  // function deleteItem(id) {
  //   setItems((preV) => {
  //     return preV.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  //   axios
  //     .delete("http://localhost:5000/delete", { data: id })
  //     .then
  //     // Observe the data keyword this time. Very important
  //     // payload is the request body
  //     // Do something
  //     ();
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea buttonClicked={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} itemName={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
      <button>Post Request</button>
    </div>
  );
}

export default App;
