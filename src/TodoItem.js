import React, { useState } from "react";

function TodoItem(props) {
  const [style, setStyle] = useState("");
  const [divStyle, setDivStyle] = useState("");
  // const [styleHide, setStyleHide] = useState("");
  // const handleComplete = () =>{
  //   ;
  // }
  const handleRemove = () => {};
  return (
    <div>
      <div className={divStyle}>
        <span className={style}>{props.data}</span>
        <button
          className="markCompleteTodoItem"
          onClick={(e) => {
            setStyle("styleGreen");
          }}
        >
          Complete
        </button>
        <button
          className="removeTodoItem"
          onClick={(e) => {
            props.handleDelete(props.index);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
