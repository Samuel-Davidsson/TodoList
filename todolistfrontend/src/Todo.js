import React from "react";

export default props => (
  <div className="div-table">
    <div style={{ display: "flex", justifyContent: "right" }}>
      <div
        className="div-text"
        style={{
          textDecoration: props.todo.done ? "line-through" : "",
          textDecorationColor: props.todo.done ? "red" : ""
        }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <div className="div-button">
        <button className="x-button" onClick={props.onDelete}>
          x
        </button>
      </div>
    </div>
  </div>
);
