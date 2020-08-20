import React from "react";
import AddIcon from "@material-ui/icons/Add";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    console.log(inputText);
  }

  function doThis() {
    props.buttonClicked(inputText);
    setInputText("");
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.buttonClicked(inputText);
          setInputText("");
        }}
      >
        <span>
          <AddIcon />
        </span>
      </button>
    </div>
  );
}

export default InputArea;
