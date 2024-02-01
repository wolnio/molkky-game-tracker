import styled from "styled-components";

const borderColor = (isError: boolean) =>
  isError ? "rgba(255, 0, 0, 0.54)" : "rgba(255, 255, 255, 0.54)";

export const Input = styled.input<{ $isError?: boolean }>`
  background-color: transparent;
  border: 3px solid rgba(255, 255, 255, 0);
  border-bottom: 3px solid
    ${(props) =>
      props.$isError
        ? borderColor(props.$isError)
        : "rgba(255, 255, 255, 0.54)"};
  font-size: 22px;
  padding: 4px 8px;
  font-family: "Lato";
  width: 150px;

  &:focus-visible {
    outline: none;
    border: 3px solid rgba(255, 255, 255, 0.54);
    border-color: ${(props) => props.$isError && borderColor(props.$isError)};
  }
`;
