import styled from "styled-components";
import { glassBackground } from "../../styles/commonStyles";

export const SubmitButton = styled.button`
  ${glassBackground}

  background: rgba(113, 255, 120, 0.4);
  border: 3px solid rgba(113, 255, 120, 0.6);
  &:hover {
    background: rgba(113, 255, 120, 0.7);
  }
  &:disabled {
    background: rgba(145, 145, 145, 0.43);
    border: 3px solid rgba(145, 145, 145, 0.6);
  }

  font-size: 20px;
  font-weight: 600;
  font-family: "Lato";

  width: 100%;
  height: 40px;
  margin-top: 10px;
`;
