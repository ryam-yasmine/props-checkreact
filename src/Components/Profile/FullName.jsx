import "./style.css";
import React from "react";
function FullName(props) {
  //alert(props.name);
  return (
    <div className="full-name">
      <p className="first">{props.name}</p>
      {props.children}
    </div>
  );
}

export default FullName;
