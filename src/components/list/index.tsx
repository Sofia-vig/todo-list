import { TodoList } from "./styled";
import { Item } from "src/components/item";
import { Todo, updateTodo, getTodos } from "src/lib/helpers";

export const List = ({ todos, setTodos }: { todos: Todo[]; setTodos: any }) => {
  const handleClick = (id: string) => {
    updateTodo(id);
    setTodos(getTodos());
  };

  return (
    <>
      {todos.length ? (
        <TodoList className="child-borders">
          {todos.map((todo: Todo) => {
            return (
              <Item
                todo={todo}
                key={todo.id}
                onClick={() => {
                  handleClick(todo.id);
                }}
              />
            );
          })}
        </TodoList>
      ) : (
        <h4>No tienes ninguna tarea!</h4>
      )}
    </>
  );
};
