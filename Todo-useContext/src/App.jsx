import { useEffect, useState } from "react";
import "./App.css";
import { InputField } from "./Component/InputField";
import { Todolist } from "./Component/Todolist";
import { TodoContextProvider } from "./Context/TodoContext";
function App() {
  const [myTodos, setMyTodos] = useState([]);

  const addTodo = (todo) => {
    //set the todo data in myTodos array.
    setMyTodos((prev) => [{ ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    //first finding is of each todo then check for the requested id and updata the toto msg.
    setMyTodos((prev) => prev.map((data) => (data.id === id ? todo : data)));
  };
  const deleteTodo = (id) => {
    //set the todo data in the array except the provided id.
    setMyTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleStatus = (id) => {
    setMyTodos((prev) =>
      //toggle the status of todos object with rest of the object data
      prev.map((data) =>
        data.id === id ? { ...data, status: !data.status } : data
      )
    );
  };
  useEffect(() => {
    //localstorage store the data in string format
    // need to parse the json data(array,object)
    const todoData = JSON.parse(localStorage.getItem("myTodos"));
    if (todoData && todoData.length > 0) {
      setMyTodos(todoData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(myTodos));
    console.log("Updated Todos:", myTodos);
  }, [myTodos]);
  return (
    <>
      {console.log("todo array", myTodos)}
      <TodoContextProvider
        value={{ myTodos, addTodo, updateTodo, deleteTodo, toggleStatus }}
      >
        <div className="w-180 mx-auto mt-10">
          <h1 className="text-3xl font-bold text-center">Manage Todo</h1>
          <InputField />
          {myTodos.map((todo) => (
            <div key={todo.id} className="w-full">
              <Todolist todo={todo} />
            </div>
          ))}
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
