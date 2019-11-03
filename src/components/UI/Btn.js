import React from "react";

const Btn = props => (
  <button
    className="btn-global"
    // disabled={props.disabled}
    // className={[classes.Button, classes[props.btnType]].join(" ")}

    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Btn;
