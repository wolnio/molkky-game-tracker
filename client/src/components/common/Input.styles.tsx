import styled from "styled-components";
import { taupe } from "../../styles/colorPalette";

export const Input = styled.input<{ $isError?: boolean }>`
  background-color: transparent;
  border: 3px solid rgba(255, 255, 255, 0);
  border-bottom: solid 1px ${taupe.hex};
  font-size: 22px;
  padding: 4px 8px;
  font-family: "Lato";

  &:focus-visible {
    outline: none;
    border-bottom: solid 3px ${taupe.hex};
  }
`;
