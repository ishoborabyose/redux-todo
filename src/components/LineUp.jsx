import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeTodo, doneTodo } from "../features/todo";
import { useDispatch } from "react-redux";

const LineUp = () => {
  const todos = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, id) => {
        return (
          <div key={id} className="pt-8 border-b-2">
            <input
              checked={todo.completed}
              onClick={() => dispatch(doneTodo(id))}
              className="mr-2"
              type="checkbox"
            />

            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.newTodo}
            </span>

            <button
              onClick={() => dispatch(removeTodo(id))}
              className="float-right"
            >
              <MdDelete className="text-red-500 bg-[#f2f3f5]  rounded-full p-[2px] h-6 w-6" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LineUp;
