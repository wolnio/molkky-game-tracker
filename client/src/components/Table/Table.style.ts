import styled from "styled-components";

export const StyledTable = styled.table`
  background: rgba(255, 255, 255, 0.25);
  //border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 3px solid rgba(255, 255, 255, 0.54);

  border-spacing: 0;
  border-collapse: collapse;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  & td {
    padding: 5px;
    text-align: center;
  }
  & tbody td {
    max-width: 160px;
    font-weight: 300;
    border: solid 1px rgba(255, 255, 255, 0.54);
  }
  & tr th {
    background: rgba(255, 255, 255, 0.5);
    padding: 5px 10px;
  }
  & tr {
    height: 15px;
  }
`;

export const PointOutline = styled.div`
  padding: 1px;
  margin: 1px;
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
  border-radius: 100%;
  font-size: 15px;
`;
