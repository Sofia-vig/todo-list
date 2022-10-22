import { TodoItem } from "./styled";
import { Todo } from "src/lib/helpers";

export const Item = ({ todo, onClick }: { todo: Todo; onClick: any }) => {
  const { completed, text } = todo;
  return (
    <TodoItem
      className={
        "padding-small margin-small " +
        (completed ? "background-primary" : "shadow shadow-hover")
      }
      style={completed ? { textDecoration: "line-through" } : {}}
      onClick={onClick}
    >
      {text}
    </TodoItem>
  );
};
