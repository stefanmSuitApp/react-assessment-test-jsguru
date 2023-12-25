import styled from 'styled-components';

import { primaryColor } from './defaultStyles';

export const SearchInputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MagnifierIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const SearchInputStyled = styled.input`
  width: calc(100% - 66px);
  padding: 8px 30px 8px 35px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  min-width: 80px;

  &:focus {
    border-color: ${primaryColor};
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;
