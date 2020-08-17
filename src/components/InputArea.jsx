import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function reset() {
    setInputText("");
  }

  function doThis() {
    props.buttonClicked(inputText);
    reset();
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          console.log("hi2");
          doThis();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
