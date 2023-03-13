import React from "react"; // manditory in older React Apps only. Good practice to include anyway

function Button(props) {
  console.log("Button Component executed!"); // Checking for useState hook.
  return (
    <button onClick={props.eventHandler} className="btn btn-primary">
      {props.children}
    </button>
  );
}

export default Button;
