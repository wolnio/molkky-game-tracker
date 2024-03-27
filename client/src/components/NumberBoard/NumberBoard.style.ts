import styled from "styled-components";
import {
  commonBorder,
  glassBackground,
  innerBorderRadius,
  outterBorderRadius,
} from "../../styles/commonStyles";

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 35px);
  grid-template-rows: repeat(4, 60px);
  grid-column-gap: 5px;
  grid-row-gap: 10px;

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
  ${commonBorder}
  ${outterBorderRadius}

  position:relative;
  padding: 10px;
  margin: 25px 0;
  width: 100%;
  box-sizing: border-box;

  & p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const Numbers = styled.p`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  min-height: 40px;
`;

export const MissedButton = styled.button`
  ${glassBackground}
  ${commonBorder}
  ${innerBorderRadius}


  background: rgba(249, 87, 56, 0.35);
  border-color: rgba(249, 87, 56, 0.7);
  width: 70px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 5px;

  font-size: 17px;
  font-weight: 300;
  font-family: "Lato";

  &:hover {
    background: rgba(249, 87, 56, 0.55);
    cursor: pointer;
  }
`;
