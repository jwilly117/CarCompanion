//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";

// ================================================================
//         CONTAINER COMPONENT
// ================================================================



//Write a function to make the container holding the images
function Container(props) {
  return <main className="container">{props.children}</main>;
}


//Export Said container
export default Container;
