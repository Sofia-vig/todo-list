import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CardStyled = styled.div`
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
