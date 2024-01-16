import styled from "styled-components";
import { glassBackground } from "../../styles/commonStyles";

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 35px);
  grid-template-rows: repeat(4, 60px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  & .div1 {
    grid-area: 4 / 3;
  }
  & .div2 {
    grid-area: 4 / 5;
  }
  .div3 {
    grid-area: 3 / 2;
  }
  .div4 {
    grid-area: 3 / 4;
  }
  .div5 {
    grid-area: 3 / 6;
  }
  .div6 {
    grid-area: 2 / 1;
  }
  .div7 {
    grid-area: 2 / 3;
  }
  .div8 {
    grid-area: 2 / 5;
  }
  .div9 {
    grid-area: 2 / 7;
  }
  .div10 {
    grid-area: 1 / 2;
  }
  .div11 {
    grid-area: 1 / 4;
  }
  .div12 {
    grid-area: 1 / 6;
  }
`;

export const ClickedPins = styled.div`
  ${glassBackground}

  padding: 5px;
  margin-top: 10px;
  width: 100%;

  & p {
    margin: 0;
  }
`;

export const Numbers = styled.p`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  height: 40px;
`;

export const SubmitButton = styled.button`
  ${glassBackground}

  background: rgba(113, 255, 120, 0.4);
  border: 3px solid rgba(113, 255, 120, 0.6);
  &:hover {
    background: rgba(113, 255, 120, 0.7);
  }
  &:disabled {
    background: rgba(145, 145, 145, 0.43);
    border: 3px solid rgba(145, 145, 145, 0.6);
  }

  font-size: 20px;
  font-weight: 600;
  font-family: "Lato";

  width: 100%;
  height: 40px;
  margin-top: 10px;
`;
