import "./SingleTodo.css";

const SingleTodo: React.FC<{
  id: string;
  text: string;
  onDelete: (id: any) => void;
}> = (props) => {
  return (
    <li className="item" onClick={props.onDelete} id={props.id}>
      {props.text}
    </li>
  );
};

export default SingleTodo;
