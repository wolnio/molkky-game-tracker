import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 200px;
  margin-left: 50px;
`;

export const Color = styled.div<{ $colorValue: string; $isDisabled: boolean }>`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.$colorValue};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
  border-radius: 3px;
  filter: ${(props) => props.$isDisabled && "brightness(50%)"};

  &:hover {
    cursor: pointer;
  }
`;
