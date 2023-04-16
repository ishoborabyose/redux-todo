import Form from "./Form";
import LineUp from "./LineUp";

const Todo = () => {
  return (
    <div className="max-w-3xl mx-auto pt-11 px-4">
      <h1 className="text-[#ececec] my-9 text-9xl font-normal text-center">
        todos
      </h1>
      <Form />
      <LineUp />
    </div>
  );
};

export default Todo;
