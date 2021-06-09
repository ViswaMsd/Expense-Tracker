import React from "react";
import './Button.css';

function Button(props) {
  const classes = "btn " + props.className;
  return (
    <button className={classes} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
