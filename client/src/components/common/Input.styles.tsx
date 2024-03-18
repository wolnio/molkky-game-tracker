import styled from "styled-components";
import { taupe } from "../../styles/colorPalette";

const borderColor = (isError: boolean) =>
  isError ? "rgba(255, 0, 0, 0.54)" : "rgba(255, 255, 255, 0.54)";

export const Input = styled.input<{ $isError?: boolean }>`
  background-color: transparent;
  border: 3px solid rgba(255, 255, 255, 0);
  border-bottom: solid 1px ${taupe.hex};
  /* border-bottom: 3px solid
    ${(props) =>
    props.$isError
      ? borderColor(props.$isError)
      : "rgba(255, 255, 255, 0.54)"}; */
  font-size: 22px;
  padding: 4px 8px;
  font-family: "Lato";
  //width: 150px;

  &:focus-visible {
    outline: none;
    border-bottom: solid 3px ${taupe.hex};
  }
`;
