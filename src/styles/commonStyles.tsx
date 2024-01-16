import styled, { css } from "styled-components";

export const glassBackground = css`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 3px solid rgba(255, 255, 255, 0.54);
`;

export const Wrapper = styled.div`
  margin: 4rem;
  display: flex;
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
