/**
 * Basic imports
 */
import React from "react";
import "./styles.css";
/**
 * React icons imports
 */
import { IoMdAddCircle } from "react-icons/io";

type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const { todo, setTodo, handleAdd } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="input-box"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input-submit" type="submit">
        <IoMdAddCircle className="add-icon" />
      </button>
    </form>
  );
};

export default InputField;
