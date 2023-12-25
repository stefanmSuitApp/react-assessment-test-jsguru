import * as React from 'react';

import { ErrorBoundary } from '../components/ErrorBoundary';
import { IPageProps } from '../types/universalTypes';
import { PageHeader, PageTitle } from '../libs/styled-components/Universal';
import { useTranslation } from 'react-i18next';
import { ImageLibrary } from '../features/imageLibrary/ImageLibrary';

type Props = IPageProps & {};

const ImageLibraryPage = ({ pageLabel }: Props) => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <React.Suspense>
        <PageHeader>
          <PageTitle>{t(pageLabel)}</PageTitle>
        </PageHeader>
        <ImageLibrary />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export { ImageLibraryPage };
