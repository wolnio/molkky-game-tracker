import styled, { css } from "styled-components";
import { taupe } from "../../styles/colorPalette";
import { glassBackground, innerBorderRadius } from "../../styles/commonStyles";

const disabledBg = css`
  background: rgba(223, 223, 222, 1);
  color: rgba(139, 140, 137, 1);
`;

export const StyledTable = styled.table`
  ${innerBorderRadius}
  display:block;
  max-height: 700px;
  overflow: auto;
  overflow-x: hidden;

  border-collapse: separate;
  border-spacing: 1px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 1px 0;

  & td {
    padding: 5px;
    text-align: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & thead {
    position: sticky;
    top: 0;
    height: 40px;
    font-size: 18px;
    & tr th {
      ${glassBackground}
      backdrop-filter: none;
      background: rgba(221, 228, 226, 1);
      box-shadow: 0 0 0 1px black;
      padding: 5px 10px;
      min-width: 120px;
      font-weight: 800;
      &:first-child {
        min-width: 50px;
      }

      &:first-child {
        border-radius: 10px 0 0 10px;
      }
      &:last-child {
        border-radius: 0 10px 10px 0;
      }

      &[data-isDisabled="true"] {
        ${disabledBg}
      }

      &[data-active="true"] {
        text-decoration: underline;
      }
    }
  }

  & tbody {
    &::before,
    &::after {
      height: 0.4em;
      display: table-row;
      content: "";
    }

    & tr td {
      ${glassBackground}
      backdrop-filter: none;
      box-shadow: 0 0 0 1px black;
      max-width: 160px;
      font-weight: 400;

      &[data-isDisabled="true"] {
        ${disabledBg}
      }
    }

    & :first-child {
      & td:first-child {
        border-radius: 10px 0 0 0;
      }
      & td:last-child {
        border-radius: 0 10px 0 0;
      }
    }

    & :last-child {
      & td:first-child {
        border-radius: 0 0 0 10px;
      }
      & td:last-child {
        border-radius: 0 0 10px 0;
      }
    }
  }

  & tfoot {
    position: sticky;
    bottom: 0;
    height: 40px;
    font-size: 18px;
    & tr th,
    td {
      ${glassBackground}
      background: rgba(221, 228, 226, 1);
      backdrop-filter: none;
      box-shadow: 0 0 0 1px black;
      font-weight: 800;
      &:first-child {
        border-radius: 10px 0 0 10px;
      }
      &:last-child {
        border-radius: 0 10px 10px 0;
      }

      &[data-isDisabled="true"] {
        ${disabledBg}
      }
    }
  }
`;

export const PointOutline = styled.div<{ disabled: boolean }>`
  padding: 1px;
  margin: 1px;
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${taupe.hex};
  border-radius: 100%;
  font-size: 15px;

  border-color: ${(props) => props.disabled && "rgba(139, 140, 137, 1)"};
`;
