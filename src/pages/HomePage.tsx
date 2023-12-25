import * as React from 'react';

import { ErrorBoundary } from '../components/ErrorBoundary';
import { IPageProps } from '../types/universalTypes';
import { PostsList } from '../features/home/PostsList';
import { useTranslation } from 'react-i18next';
import { PageHeader, PageTitle } from '../libs/styled-components/Universal';
import { SearchInput } from '../components/SearchInput';
import debounce from 'lodash.debounce';

type Props = IPageProps & {};

const HomePage = ({ pageLabel }: Props) => {
  const { t } = useTranslation();

  const [search, setSearch] = React.useState<string>('');

  return (
    <ErrorBoundary>
      <React.Suspense>
        <PageHeader>
          <PageTitle>{t(pageLabel)}</PageTitle>
          <SearchInput
            placeholder={t('searchByAuthor')}
            onChange={debounce((event) => setSearch(event?.target?.value), 200)}
          />
        </PageHeader>
        <PostsList search={search} />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export { HomePage };
