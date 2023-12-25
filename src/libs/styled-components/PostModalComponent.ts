import styled from 'styled-components';

import { barsColor, borderRadius } from './defaultStyles';

export const PostModalContainer = styled.div`
  min-height: 600px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const PostModalHeader = styled.div`
  background-color: ${barsColor};
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: ${borderRadius};
`;

export const PostModalHeaderText = styled.span`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 15px;
`;

export const PostModalTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 30px;
`;

export const PostModalBody = styled.div`
  padding: 20px 0;
  font-size: 1.1rem;
  border-bottom: lightgrey solid 0.1px;
`;

export const PostModalCommentSection = styled.div`
  max-height: 480px;
  overflow-y: auto;
`;
