import styled from 'styled-components';

import { primaryColor, verticalCenter } from './defaultStyles';

export const Link = styled.a`
  text-decoration: none;
  color: ${primaryColor};
`;

export const PageTitle = styled.h1`
  margin: 0 20px 0 0;
  color: ${primaryColor};
  opacity: 0.5;
`;

export const PageHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContentCenter = styled.div`
  height: ${verticalCenter};
  display: flex;
  justify-content: center;
  align-items: center;
`;
