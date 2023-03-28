import { MdAddCircle } from "react-icons/md";
import { addTodo } from "../features/todo";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Form = () => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex rounded-full justify-center shadow-box"
      >
        <input
          onChange={handleChange}
          value={newTodo}
          type="text"
          className="bg-white w-full px-4 py-5 rounded-full outline-none placeholder:text-base placeholder:text-black"
          placeholder="Add todo..."
        />
        <button className="pr-5" type="submit">
          <MdAddCircle className="text-[#61C7C6] w-7 h-10" />
        </button>
      </form>
    </div>
  );
};

export default Form;
