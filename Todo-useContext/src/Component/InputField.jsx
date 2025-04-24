import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export const InputField = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todoMsg: todo, status: false });
    setTodo("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full flex my-4 items-center">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Todo"
          className="w-full border-none outline-none bg-slate-800 text-white pl-10 py-4 rounded-tl-lg rounded-bl-lg"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-4 rounded-tr-lg rounded-br-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
};
