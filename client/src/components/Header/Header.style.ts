import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { orangeRed, taupe } from "../../styles/colorPalette";
import {
  glassBackground,
  commonBorder,
  outterBorderRadius,
  innerBorderRadius,
} from "../../styles/commonStyles";

export const Wrapper = styled.div`
  ${commonBorder}
  ${outterBorderRadius}
  ${glassBackground}

  height: 60px;
  margin: 10px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-family: "Rowdies";
  font-weight: 700;
  font-size: 40px;
`;

export const ActionSection = styled.div`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: space-between;
`;

export const HeaderLinks = styled.ul`
  display: flex;
  gap: 30px;
  padding: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: inherit;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 17px;
  text-decoration: none;
  color: ${taupe.hex};

  &.active {
    color: ${orangeRed.hex};
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const LogoutBtn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  background: none;
  border: solid 1px ${taupe.hex};
  ${innerBorderRadius};

  &:hover {
    cursor: pointer;
    background: ${orangeRed.hex};
  }
`;
