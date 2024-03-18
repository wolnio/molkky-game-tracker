import styled, { css } from "styled-components";
import { taupe } from "./colorPalette";

export const outterBorderRadius = css`
  border-radius: 20px;
`;
export const innerBorderRadius = css`
  border-radius: 10px;
`;

export const glassBackground = css`
  background: rgba(221, 228, 226, 0.55);
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

export const commonBorder = css`
  border: solid 1px ${taupe.hex};
`;

export const noisyBg = css`
  filter: #dde4e2;
`;

export const Wrapper = styled.div`
  margin: 3rem auto 0;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 80vh;
  overflow: auto;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
