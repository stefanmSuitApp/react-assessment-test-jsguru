import * as React from 'react';

import { Footer, FooterProps } from './components/Footer';
import { Header, HeaderProps } from './components/Header';
import { Content, ContentProps } from './components/Content';

class Layout extends React.Component<{ children: React.ReactNode }> {
  static Header = ({ logo, navItems, logoPath }: HeaderProps) => (
    <Header logo={logo} logoPath={logoPath} navItems={navItems} />
  );
  static Content = ({ children, pageLabel }: ContentProps) => (
    <Content pageLabel={pageLabel}>{children}</Content>
  );
  static Footer = ({ footerText }: FooterProps) => (
    <Footer footerText={footerText} />
  );

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export { Layout };
