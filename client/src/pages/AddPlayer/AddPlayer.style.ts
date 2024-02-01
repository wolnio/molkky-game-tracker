import styled, { css } from "styled-components";
import { glassBackground } from "../../styles/commonStyles";

export const Container = styled.div`
  ${glassBackground}

  //width: 100%;
  padding: 15px;
  //height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div<{ $shouldDisplayTwoColumns: boolean }>`
  ${(props) =>
    props.$shouldDisplayTwoColumns &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 15px;
    `}
`;

export const AddNewPlayerButton = styled.button`
  ${glassBackground}

  width: 600px;
  height: 90px;
  font-family: "Lato";
  font-size: 25px;

  &:hover {
    cursor: pointer;
    background: rgba(140, 140, 140, 0.25);
  }
`;
