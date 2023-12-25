import styled, { keyframes } from 'styled-components';

import { ISpinnerProps } from '../../types/universalTypes';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div<ISpinnerProps>`
  display: inline-block;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border: ${(props) => props.$borderSize}px solid ${(props) => props.$color};
  border-top: ${(props) => props.$borderSize}px solid transparent;
  border-radius: 50%;
  animation: ${spin} ${(props) => props.$speed}s linear infinite;
`;
