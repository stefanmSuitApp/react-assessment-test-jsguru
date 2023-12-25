import styled from 'styled-components';

import {
  barsColor,
  borderRadius,
  headerHeight,
  footerHeight,
} from './defaultStyles';

export const ImageCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  background-color: #fff;
  border-radius: ${borderRadius};
  min-height: calc(100% - ${headerHeight} - ${footerHeight} - 28px);
  padding: 15px;
  margin: 15px auto;
  box-shadow: 0 0 2px 0 ${barsColor};
`;

export const ImageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

export const Image = styled.img<{ $loading?: boolean }>`
  display: ${(props) => (props.$loading ? 'none' : 'block')};
  margin-bottom: 15px;
  object-fit: cover;
  transition: ease-in-out 300ms;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ImageTitle = styled.span`
  text-align: center;
  font-weight: 500;
`;

export const ImageLoaderConatiner = styled.div`
  background-color: white;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
