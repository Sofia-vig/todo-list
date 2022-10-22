import styled from "styled-components";

export const TodoItem = styled.li`
  padding-left: 1em;
  cursor: pointer;
  overflow-wrap: break-word;
  &:before {
    content: "";
  }
`;
