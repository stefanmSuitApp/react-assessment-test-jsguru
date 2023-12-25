import { ErrorBoundary } from '../../../ErrorBoundary';
import { FooterContainer } from '../../../../libs/styled-components/FooterComponent';

export type FooterProps = {
  footerText: React.ReactNode | string;
};

const Footer = ({ footerText }: FooterProps) => {
  return (
    <ErrorBoundary>
      <FooterContainer>{footerText}</FooterContainer>
    </ErrorBoundary>
  );
};

export { Footer };
