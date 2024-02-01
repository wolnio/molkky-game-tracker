import styled from "styled-components";
import { glassBackground } from "../../styles/commonStyles";

export const Container = styled.div<{ $choosedBgColor?: string }>`
  ${glassBackground}
  background-color: ${(props) =>
    props.$choosedBgColor && `rgba(${props.$choosedBgColor},0.25)`};
  padding-left: 15px;
  width: 600px;
  height: 90px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const TempButton = styled.button``;
