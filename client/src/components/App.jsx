import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  /*****************************************************************API Requests*************************************************************/
  function fetchData() {
    const itemsApi = "http://localhost:5000/list";
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
    axios.post("http://localhost:5000/list", { inputText }).then((res) => {
      console.log(res);
      console.log(res.config.data);
    });
  }

  function deleteItem(itemName) {
    console.log(itemName);
    setItems((preV) => {
      console.log(preV);
      return preV.filter((item, index) => {
        console.log(item + itemName);
        return item !== itemName;
      });
    });

    axios
      .delete("http://localhost:5000/list", { data: { itemName } })
      .then((res) => {
        console.log(res.config.data);
      });
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
            <ToDoItem
              key={index}
              id={index}
              itemName={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
