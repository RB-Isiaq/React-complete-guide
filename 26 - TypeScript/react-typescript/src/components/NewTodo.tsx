import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (arg: string) => void }> = (props) => {
  const textInput = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInput.current!.value;
    if (!enteredText) {
      alert("Enter a text");
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={textInput} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
