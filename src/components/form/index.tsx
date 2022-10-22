import { v4 as uuidv4 } from "uuid";
import { TextField } from "./styled";
import { addTodo, getTodos } from "src/lib/helpers";

export const Form = ({ setTodos }: any) => {
  const addTaskHandler = (e: any) => {
    e.preventDefault();
    const text = e.target.task.value;
    if (text) {
      addTodo({ text, id: uuidv4(), completed: false });
      setTodos(getTodos());
      e.target.task.value = "";
    }
  };

  return (
    <>
      <form onSubmit={addTaskHandler}>
        <TextField className="form-group">
          <input
            type="text"
            placeholder="New Todo"
            id="paperInputs1"
            name="task"
          />
          <button className="btn-small">Add</button>
        </TextField>
      </form>
    </>
  );
};
