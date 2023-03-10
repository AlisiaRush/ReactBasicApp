import React from "react"; // manditory in older React Apps only. Good practice to include anyway

function Button(props) {
  return <button className="btn btn-primary">{props.children}</button>;
}

export default Button;
