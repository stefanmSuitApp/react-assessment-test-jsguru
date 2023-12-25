import styled from 'styled-components';

import { barsColor, footerHeight } from './defaultStyles';

export const FooterContainer = styled.footer`
  background-color: ${barsColor};
  color: #fff;
  height: ${footerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSpan = styled.span`
  margin-right: 5px;
`;
