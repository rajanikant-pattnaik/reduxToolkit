import React from "react";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-white border rounded p-4 shadow-md">
            <p className="font-bold text-gray-800">{todo.text}</p>
            <p className="text-gray-600">ID: {todo.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
