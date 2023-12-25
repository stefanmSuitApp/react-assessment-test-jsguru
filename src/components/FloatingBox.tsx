import * as React from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { FloatingContainer } from '../libs/styled-components/FloatingComponent';

type Props = React.HTMLProps<HTMLDivElement> & {};

const FloatingBox = ({ children, ...rest }: Props) => {
  return (
    <ErrorBoundary>
      <FloatingContainer {...rest}>{children}</FloatingContainer>
    </ErrorBoundary>
  );
};

export { FloatingBox };
