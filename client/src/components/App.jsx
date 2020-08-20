import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  /*****************************************************************API Requests*************************************************************/
  function fetchData() {
    const itemsApi = "http://localhost:5000/items";
    console.log("fetching data");
    const getCustomer = axios
      .get(itemsApi)
      .then(function (response) {
        const itemsData = response;
        itemsData.data.forEach((element) => {
          setItems((prevItems) => {
            return [...prevItems, element];
          });
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log("fetching data1");
    fetchData();
  }, []);

  /*****************************************************************Local Changes**************************************************************/
  function addItem(inputText) {
    setItems((prevItems) => {
      console.log(prevItems);
      return [...prevItems, inputText];
    });
    console.log("adding text");
  }

  function deleteItem(id) {
    // setItems((preV) => {
    //   return preV.filter((item, index) => {
    //     return index !== id;
    //   });
    // });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea buttonClicked={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem key={index} itemName={item.name} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
      <button>Post Request</button>
    </div>
  );
}

export default App;
