import { styled } from "styled-components";
import {
  commonBorder,
  glassBackground,
  outterBorderRadius,
} from "../../styles/commonStyles";

export const CardContainer = styled.div`
  ${commonBorder}
  ${outterBorderRadius}
  ${glassBackground}

width: 250px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;

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

export const StatusText = styled.div`
  width: fit-content;
  color: green;
  background-color: lightgreen;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 0 5px;
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
