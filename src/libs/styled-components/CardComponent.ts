import styled from 'styled-components';

import { barsColor, borderRadius, primaryColor } from './defaultStyles';

export const Card = styled.div`
  background-color: #fff;
  border-radius: ${borderRadius};
  min-height: 145px;
  min-width: 200px;
  max-width: 1200px;
  padding: 15px;
  margin: 20px auto;
  box-shadow: 0 0 2px 0 ${barsColor};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardHeaderMain = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CardHeaderText = styled.span`
  font-weight: 500;
`;

export const CardHeaderActionLink = styled.span`
  color: ${primaryColor};
  cursor: pointer;
`;

export const CardTitle = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
`;

export const CardBody = styled.div`
  margin: 25px 0;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  border-top: lightgrey solid 0.1px;
`;

export const CardExpandedContent = styled.span`
  max-height: 750px;
  overflow-y: auto;
`;

export const CardExpansionFallback = styled.span`
  color: #cccccc;
  margin: 25px 0;
  font-weight: 500;
`;

export const CardExpandButton = styled.div<{ $expanded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  gap: 10px;
  padding-top: 15px;
  border-top: ${(props) => (props.$expanded ? 'lightgrey solid 0.1px' : '')};
  &:hover {
    font-weight: 500;
  }
`;
