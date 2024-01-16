import styled from "styled-components";

export const StyledTable = styled.table`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 3px solid rgba(255, 255, 255, 0.54);

  border-spacing: 0px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  & td {
    padding: 10px;
  }
  & tr th {
    background: rgba(255, 255, 255, 0.5);
    padding: 5px 10px;
  }
  & tr {
    height: 15px;
  }
`;
