import * as React from 'react';

import navItems from './navItemsData';
import logo from '../../assets/jsguru-logo.webp';

import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { IPageProps } from '../../types/universalTypes';
import { Layout } from '../../components/PageLayout';
import { Link } from '../../libs/styled-components/Universal';
import { FooterSpan } from '../../libs/styled-components/FooterComponent';

type Props = IPageProps & {
  element: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  > | null;
};

const PageLayout = ({ element: children, pageLabel }: Props) => {
  const { t } = useTranslation();
  const { Header, Content, Footer } = Layout;

  const FooterText = () => {
    return (
      <>
        <FooterSpan>{t('layout.footerText')}</FooterSpan>
        <Link href={import.meta.env.VITE_APP_LINKEDIN}>{t('author')}</Link>
      </>
    );
  };

  return (
    <ErrorBoundary>
      <Layout>
        <Header logo={logo} logoPath="/" navItems={navItems} />
        <Content pageLabel={pageLabel} children={children} />
        <Footer footerText={<FooterText />} />
      </Layout>
    </ErrorBoundary>
  );
};

export { PageLayout };
