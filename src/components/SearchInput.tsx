import * as React from 'react';

import { GoSearch } from 'react-icons/go';

import { ErrorBoundary } from './ErrorBoundary';
import {
  MagnifierIcon,
  SearchInputContainer,
  SearchInputStyled,
} from '../libs/styled-components/SearchInputComponent';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {};

const SearchInput = (props: Props) => {
  return (
    <ErrorBoundary>
      <SearchInputContainer>
        <MagnifierIcon>
          <GoSearch />
        </MagnifierIcon>
        <SearchInputStyled type="text" {...props} />
      </SearchInputContainer>
    </ErrorBoundary>
  );
};

export { SearchInput };
