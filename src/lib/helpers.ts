export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export const addTodo = (data: Todo) => {
  const todos = getTodos();
  todos.push(data);
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodos = () => {
  const todos: any = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export const updateTodo = (id: string) => {
  const todos = getTodos();
  let modifiedTodos = todos.map((todo: Todo) => {
    if (todo.id === id)
      return Object.assign({}, todo, { completed: !todo.completed });
    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(modifiedTodos));
};

export const clearTodos = () => {
  localStorage.clear();
};
