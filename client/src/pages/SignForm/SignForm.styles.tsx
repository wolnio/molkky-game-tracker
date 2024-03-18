import { css, styled } from "styled-components";
import { Input } from "../../components/common/Input.styles";
import { celadon, taupe } from "../../styles/colorPalette";
import {
  glassBackground,
  commonBorder,
  outterBorderRadius,
} from "../../styles/commonStyles";

export const Container = styled.div`
  ${commonBorder}
  ${glassBackground}
  ${outterBorderRadius}

  margin: 0 auto;
  width: 400px;
  padding: 30px;

  & h2 {
    margin: 0;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const LabelInputContainer = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
`;

export const Label = styled.label`
  width: 95px;
  margin-left: 15px;
  font-size: 15px;
`;

export const InputErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignInput = styled(Input)``;

export const ValidationMessage = styled.span`
  color: red;
  display: block;
  margin: 0;
  font-size: 13px;
  right: 0;
`;

export const HeaderTabs = styled.div`
  display: flex;
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 40px;
  text-align: center;
  border-bottom: 1px solid ${taupe.hex};
  box-sizing: border-box;
  cursor: default;
  font-size: 23px;

  ${(props) =>
    props.$isActive
      ? css`
          border-bottom: 4px solid ${celadon.hex};
          font-weight: 700;
        `
      : css`
          &:hover {
            cursor: pointer;
          }
        `}
`;
