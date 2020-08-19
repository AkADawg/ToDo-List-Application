import React from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  function handleClick() {
    console.log("Hi");
    props.onChecked(props.id);
  }
  return (
    <div>
      <li onClick={handleClick}>{props.itemName}</li>
    </div>
  );
}

export default ToDoItem;
