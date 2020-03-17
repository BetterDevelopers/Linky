import React from "react";

export default function URLParams(props) {
  return (
    <div>
      <h1>Hello!</h1>
      <h3>ID from router: {props.params}</h3>
    </div>
  );
}
