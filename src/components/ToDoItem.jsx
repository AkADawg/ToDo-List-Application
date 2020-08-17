import React from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  //   setIsDone((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <div>
      <li onClick={() => console.log("hi")}>{props.itemName}</li>
    </div>
  );
}

export default ToDoItem;
