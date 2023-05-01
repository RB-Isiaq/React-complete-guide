import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [new Todo("learn React"), new Todo("learn TypeScript")];

  const addTodoHandler = (todoText: string) => {
    const newTodos = new Todo(todoText);

    setTodos((previousTodos) => [newTodos, ...previousTodos]);
  };

  const deleteHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteHandler} />
    </div>
  );
}

export default App;
