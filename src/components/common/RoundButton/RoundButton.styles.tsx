import styled from "styled-components";

export const RoundButton = styled.button<{ $isActive: boolean }>`
  border: 2px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 25px;
  background: ${(props) =>
    props.$isActive ? "rgb(173, 173, 173)" : "transparent"};

  &:hover {
    background-color: rgb(173, 173, 173, 0.5);
  }
`;
