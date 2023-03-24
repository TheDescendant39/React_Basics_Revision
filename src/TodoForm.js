import React, { useState } from "react";
import TodoItem from "./TodoItem";
function TodoForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUserInput = (e) => {
    console.log(e);
  };
  const [userInput, setUserInput] = useState();
  const [todoList, setTodoList] = useState([]);

  const deleteItem = (i) => {
    console.log("deleting: " + i + "->" + todoList[i]);
    let newList = [...todoList];
    newList = newList.filter((item, index) => index !== i);
    setTodoList(newList);
  };

  const handleClick = () => {
    if (userInput.length > 0) setTodoList([...todoList, userInput]);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="itemInput"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="addItemButton" onClick={handleClick}>
        Add Item
      </button>
      <ul className="list-group">
        {todoList.length > 0
          ? todoList.map((listitem, index) => {
              return (
                <li>
                  <TodoItem
                    data={listitem}
                    index={index}
                    key={listitem}
                    handleDelete={deleteItem}
                  />
                </li>
              );
            })
          : ""}
      </ul>
    </form>
  );
}

export default TodoForm;
