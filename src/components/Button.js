import React from "react"; // manditory in older React Apps only. Good practice to include anyway

function btnClickEventHandler() {
  console.log("button clicked");
}

function Button(props) {
  return (
    <button onClick={btnClickEventHandler} className="btn btn-primary">
      {props.children}
    </button>
  );
}

export default Button;
