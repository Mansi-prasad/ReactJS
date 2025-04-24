import React, { Children, createContext, useContext } from "react";

// React Context API
// whole system React provides to share state/data across the component tree without prop drilling.
// It includes:
// React.createContext() – to create a context
// <Context.Provider> – to provide the data
// <Context.Consumer> – to consume it (older way)
// useContext() – the modern hook to consume it

const ContextData = {
  todos: [
    {
      id: 1,
      todoMsg: "Todo msg",
      status: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleStatus: (id) => {},
};
export const TodoContext = createContext(ContextData);

export const TodoContextProvider = TodoContext.Provider;
// export const useContext = () => {
//   return useContext(TodoContext);
// };
