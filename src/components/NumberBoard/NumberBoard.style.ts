import styled from "styled-components";

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
