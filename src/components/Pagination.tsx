import * as React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from './ErrorBoundary';
import {
  PaginationContainer,
  PaginationLimitInput,
  PaginationPageButton,
} from '../libs/styled-components/PaginationComponent';

type Props = {
  currentPage: number;
  itemsPerPage: number | undefined;
  totalPages?: number;
  limitText?: string;
  onItemsPerPageChange: (limit: number | undefined) => void;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalPages,
  limitText,
  onItemsPerPageChange,
  onPageChange,
}: Props) => {
  const { t } = useTranslation();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((totalPages && currentPage < totalPages) || currentPage < 5000) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    const limit = parseInt(value, 10);
    onItemsPerPageChange(isNaN(limit) ? undefined : limit);
  };

  return (
    <ErrorBoundary>
      <PaginationContainer>
        <div>
          <PaginationPageButton onClick={handlePrevPage}>
            <FaChevronLeft />
          </PaginationPageButton>
          <span>{`${t('pageUppercase')} ${currentPage} ${
            totalPages ? `${t('of')} ${totalPages}` : ''
          }`}</span>
          <PaginationPageButton onClick={handleNextPage}>
            <FaChevronRight />
          </PaginationPageButton>
        </div>
        <div>
          <p>{limitText || t('itemsPerPage')}</p>
          <PaginationLimitInput
            type="number"
            min="1"
            maxLength={4}
            value={itemsPerPage as number}
            onChange={handleLimitChange}
          />
        </div>
      </PaginationContainer>
    </ErrorBoundary>
  );
};

export { Pagination };
