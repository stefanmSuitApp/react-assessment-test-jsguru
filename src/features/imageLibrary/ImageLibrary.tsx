import * as React from 'react';
import debounce from 'lodash.debounce';

import useGetPhotosQuery from '../../hooks/queries/imageLibrary/useGetPhotosQuery';

import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { ImageGridView } from '../../components/ImageGridView';
import { ContentCenter } from '../../libs/styled-components/Universal';
import { Pagination } from '../../components/Pagination';
import { FloatingContainer } from '../../libs/styled-components/FloatingComponent';
import { Spinner } from '../../components/Spinner';

const ImageLibrary = () => {
  const [limit, setLimit] = React.useState<number | undefined>(25);
  const [page, setPage] = React.useState<number>(1);
  const { data: photos, isLoading: isLoadingPhotos } = useGetPhotosQuery({
    _limit: limit,
    _page: page,
  });

  const { t } = useTranslation();

  const handleItemsPerPageChange = debounce((limit: number | undefined) => {
    setLimit(limit);
  }, 200);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const memoizedTotalCount = React.useMemo(
    () => photos?.totalCount,
    [photos?.totalCount],
  );

  return (
    <ErrorBoundary>
      {!isLoadingPhotos ? (
        photos?.data?.length === 0 ? (
          <ContentCenter>{t('noPhotos')}</ContentCenter>
        ) : (
          <ImageGridView photos={photos?.data} />
        )
      ) : (
        <ContentCenter>
          <Spinner />
        </ContentCenter>
      )}
      <FloatingContainer>
        <Pagination
          currentPage={page}
          itemsPerPage={limit}
          totalPages={memoizedTotalCount}
          onItemsPerPageChange={handleItemsPerPageChange}
          onPageChange={handlePageChange}
          limitText={t('imagesPerPage')}
        />
      </FloatingContainer>
    </ErrorBoundary>
  );
};

export { ImageLibrary };
