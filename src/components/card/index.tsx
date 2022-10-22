import { useState } from "react";
import { Form } from "src/components/form";
import { List } from "src/components/list";
import { Root, CardStyled, Title, Footer } from "./styled";
import { getTodos, clearTodos } from "src/lib/helpers";

export const Card = () => {
  const [todos, setTodos] = useState(getTodos());

  const handleClear = () => {
    clearTodos();
    setTodos([]);
  };

  return (
    <Root>
      <CardStyled className="border border-primary padding-large margin-large no-responsive">
        <Title>PaperTodo</Title>
        <Form setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
        <Footer>
          <button
            className="btn-small"
            onClick={handleClear}
            style={todos.length ? {} : { display: "none" }}
          >
            Clear
          </button>
        </Footer>
      </CardStyled>
    </Root>
  );
};
