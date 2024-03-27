import styled, { css } from "styled-components";
import { Input } from "../../components/common/Input.styles";
import { SubmitButton } from "../../components/common/SubmitButton.styles";
import {
  commonBorder,
  glassBackground,
  outterBorderRadius,
  Wrapper,
} from "../../styles/commonStyles";

export const PlayersContainer = styled.div`
  ${glassBackground}
  ${commonBorder}
  ${outterBorderRadius}

  padding: 15px;
  display: flex;
`;

export const GridContainer = styled.div<{ $shouldDisplayTwoColumns: boolean }>`
  @media (min-width: 1150px) {
    ${(props) =>
      props.$shouldDisplayTwoColumns &&
      css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 15px;
      `}
  }
`;

export const AddNewPlayerButton = styled(SubmitButton)`
  ${outterBorderRadius}

  width: 400px;
  height: 60px;
  font-size: 25px;
`;

export const CreateGameBtn = styled(AddNewPlayerButton)`
  background: #c4eece;
`;

export const ColumnWrapper = styled(Wrapper)`
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const TitleContainer = styled.div`
  ${glassBackground}
  ${commonBorder}
  ${outterBorderRadius}

  padding: 10px 30px;
  display: flex;
  justify-content: center;
`;

export const TitleInput = styled(Input)`
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  padding: 0;
  padding-bottom: 5px;
  width: 400px;
`;
