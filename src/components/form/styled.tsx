import styled from "styled-components";

export const TextField = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
