import Todo from "../models/todo";
import SingleTodo from "./SingleTodo";
import "./Todos.css";

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  const deleteTodoHandler = (e: React.ChangeEvent) => {
    props.onDeleteTodo(e.target.id);
  };
  return (
    <ul className="todos">
      {props.items.map((item) => (
        <SingleTodo
          key={item.id}
          text={item.text}
          onDelete={deleteTodoHandler}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
