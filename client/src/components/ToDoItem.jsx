import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  function handleClick() {
    console.log("Hi");
    // props.onChecked(props.id);
  }

  return (
    <div>
      <li onClick={handleClick}>{props.itemName}</li>
    </div>
  );
}

export default ToDoItem;
