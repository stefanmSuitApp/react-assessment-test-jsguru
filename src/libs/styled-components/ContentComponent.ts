import styled from 'styled-components';

import { backgroundColor, contentCenter } from './defaultStyles';

export const ContentContainer = styled.div`
  background-color: ${backgroundColor};
  height: ${contentCenter};
  padding: 20px;
  overflow-y: auto;
`;
