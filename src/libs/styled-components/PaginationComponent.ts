import styled from 'styled-components';

import { primaryColor, secondaryColor } from './defaultStyles';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  min-width: 300px;
`;

export const PaginationPageButton = styled.button`
  background-color: ${secondaryColor};
  color: #fff;
  border: none;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 20px;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PaginationLimitInput = styled.input`
  width: 60px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-left: 10px;
  outline: none;

  &:focus {
    border-color: ${primaryColor};
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;
