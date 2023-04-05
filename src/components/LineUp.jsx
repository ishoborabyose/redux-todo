import { useState } from "react";
import { useSelector } from "react-redux";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import { removeTodo, doneTodo, EditTodo } from "../service/todo";
import { useDispatch } from "react-redux";

const LineUp = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditSubmit = (event, id) => {
    event.preventDefault();
    dispatch(EditTodo({ id: id, newTodo: editValue }));
    setEditValue("");
    setEditId(null);
  };

  return (
    <div>
      {todos.map((todo, id) => {
        return (
          <div key={id} className="pt-8 border-b-2">
            {editId === id ? (
              <form
                onSubmit={(event) => handleEditSubmit(event, id)}
                className="flext text-center"
              >
                <input
                  className="bg-white w-full px-4 py-5 rounded-full outline-none placeholder:text-base placeholder:text-gray-800"
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  required
                />
                <button type="submit" className="cursor-pointer float-right">
                  <MdSave className="w-7 h-10 text-green-500" />
                </button>
              </form>
            ) : (
              <div>
                <input
                  checked={todo.completed}
                  onClick={() => dispatch(doneTodo(id))}
                  className="mr-2"
                  type="checkbox"
                />
                <span
                  onClick={() => {
                    setEditId(id);
                    setEditValue(todo.newTodo);
                  }}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "",
                  }}
                >
                  {todo.newTodo}
                </span>
                <div>
                  <button
                    onClick={() => dispatch(removeTodo(id))}
                    className="float-right"
                  >
                    <MdDelete className="text-red-500 bg-[#f2f3f5] rounded-full p-[2px] h-6 w-6" />
                  </button>
                  <button
                    onClick={() => {
                      setEditId(id);
                      setEditValue(todo.newTodo);
                    }}
                    className="float-right mr-2"
                  >
                    <MdEdit className="text-blue-500 bg-[#f2f3f5] rounded-full p-[2px] h-6 w-6" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LineUp;
