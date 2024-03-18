import styled from "styled-components";
import { orangeRed } from "../../styles/colorPalette";
import {
  commonBorder,
  glassBackground,
  innerBorderRadius,
} from "../../styles/commonStyles";

export const Container = styled.div<{ $choosedBgColor?: string }>`
  ${glassBackground}
  ${commonBorder}
  ${innerBorderRadius}
  background-color: ${(props) =>
    props.$choosedBgColor && `rgba(${props.$choosedBgColor},0.25)`};
  padding: 0 15px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 15px;
`;

export const IndexNumber = styled.span`
  font-size: 18px;
`;

export const TempButton = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  width: 50px;
  padding: 0;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    color: ${orangeRed.hex};
  }
`;
