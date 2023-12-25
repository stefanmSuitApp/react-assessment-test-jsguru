import * as React from 'react';

import { ErrorBoundary } from '../../../ErrorBoundary';
import { ContentContainer } from '../../../../libs/styled-components/ContentComponent';

export type ContentProps = {
  children: React.ReactNode;
  pageLabel: string;
};

const Content = ({ children }: ContentProps) => {
  return (
    <ErrorBoundary>
      <ContentContainer>{children}</ContentContainer>
    </ErrorBoundary>
  );
};

export { Content };
