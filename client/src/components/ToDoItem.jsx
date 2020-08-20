import React, { useState, useEffect } from "react";
import axios from "axios";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  function handleClick() {
    props.onChecked(props.itemName);
  }

  return (
    <div>
      <li onClick={handleClick}>{props.itemName}</li>
    </div>
  );
}

export default ToDoItem;
