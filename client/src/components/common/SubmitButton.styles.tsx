import styled from "styled-components";
import { celadon } from "../../styles/colorPalette";
import {
  glassBackground,
  commonBorder,
  innerBorderRadius,
} from "../../styles/commonStyles";

export const SubmitButton = styled.button`
  ${glassBackground}
  ${commonBorder}
  ${innerBorderRadius}

  background: rgba(255, 255, 255, 0.8);
  &:hover {
    background: ${celadon.hex};
    cursor: pointer;
  }
  &:disabled {
    background: rgba(145, 145, 145, 0.43);
    border: 1px solid rgba(145, 145, 145, 0.6);
    cursor: not-allowed;
  }

  font-size: 20px;
  font-weight: 600;
  font-family: "Lato";

  width: 100%;
  height: 40px;
`;
