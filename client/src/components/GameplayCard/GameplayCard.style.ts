import { css, styled } from "styled-components";
import {
  commonBorder,
  glassBackground,
  outterBorderRadius,
} from "../../styles/commonStyles";
import { GameplayStatus } from "../Table/TableData.interface";

export const CardContainer = styled.div`
  ${commonBorder}
  ${outterBorderRadius}
  ${glassBackground}

width: 250px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;

  &:hover {
    cursor: pointer;
    background: rgba(155, 165, 162, 0.3);
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: 800;
  margin: 0;
`;

export const StatusText = styled.div<{ $status: GameplayStatus }>`
  width: fit-content;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 0 5px;

  ${(props) =>
    props.$status === GameplayStatus.RUNNING
      ? css`
          color: green;
          background-color: lightgreen;
        `
      : css`
          color: red;
          background-color: lightpink;
        `}
`;

export const CreatedText = styled.span`
  color: gray;
  font-weight: 400;
`;

export const ServerInfo = styled.div`
  display: flex;
  margin: 10px 0;
  font-size: 12px;
  font-weight: 600;
  gap: 20px;
`;

export const PlayersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & span {
    padding: 0 15px;
    font-size: 18px;
  }
`;
