import styled from 'styled-components';

import { borderRadius } from './defaultStyles';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  padding: 10px;
  border: lightgrey solid 0.1px;
  border-radius: ${borderRadius};
`;

export const CommentHeader = styled.span`
  font-weight: 500;
`;

export const CommentBody = styled.span`
  margin-top: 5px;
`;

export const CommentTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 15px 0 5px 0;
`;
