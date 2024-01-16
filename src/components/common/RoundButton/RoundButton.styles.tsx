import styled from "styled-components";
import { glassBackground } from "../../../styles/commonStyles";

export const RoundButton = styled.button<{ $isActive: boolean }>`
  ${glassBackground}

  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-family: "Lato";
  font-weight: 300;
  background: ${(props) => props.$isActive && " rgba(255, 255, 255, 0.60);"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
