import React, { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
export const Todolist = ({ todo }) => {
  const { updateTodo, deleteTodo, toggleStatus } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState(todo.todoMsg);
  const [isTodoEditable, setIsTodoEditable] = useState(null);
  const editTodo = () => {
    // update only todo msg
    // todo is indivisual todo object
    updateTodo(todo.id, { ...todo, todoMsg: todoTitle });
    setIsTodoEditable(false);
  };
  const toggleBtn = () => {
    toggleStatus(todo.id);
  };
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg my-4 ${
        todo.status ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5"
        checked={todo.status}
        onChange={toggleBtn}
      />
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        checked={todo.status}
        readOnly={!isTodoEditable}
        className={`px-4 border-none outline-none w-full${
          todo.status ? "line-through" : ""
        } `}
      />
      <button
        className="px-2 bg-white rounded-lg "
        onClick={() =>
          // if(Todolist.status) return;
          isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev)
        }
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="mx-2 px-2 bg-white rounded-lg"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};
