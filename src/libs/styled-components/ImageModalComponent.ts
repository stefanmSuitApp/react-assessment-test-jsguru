import styled from 'styled-components';

export const ImageModalContainer = styled.div`
  width: 600px;
`;

export const ImageModalPhoto = styled.img<{ $loading?: boolean }>`
  display: ${(props) => (props.$loading ? 'none' : 'block')};
`;

export const ImageModalTitle = styled.h3`
  margin: 0 auto;
  text-align: center;
`;

export const ImageModalLoaderConatiner = styled.div`
  background-color: white;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
