import * as React from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { Modal } from './Modal';
import { IPhoto } from '../types/universalTypes';
import {
  ImageModalContainer,
  ImageModalLoaderConatiner,
  ImageModalPhoto,
  ImageModalTitle,
} from '../libs/styled-components/ImageModalComponent';
import { Spinner } from './Spinner';

type Props = {
  photo: IPhoto;
  isOpen: boolean;
  onClose: () => void;
};

const ImageModal = ({ photo, isOpen, onClose }: Props) => {
  const { title, url } = photo;

  const [isLoadingImage, setIsLoadingImage] = React.useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoadingImage(false);
  };

  return (
    <ErrorBoundary>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ImageModalContainer>
          {isLoadingImage && (
            <ImageModalLoaderConatiner>
              <Spinner />
            </ImageModalLoaderConatiner>
          )}
          <ImageModalPhoto
            $loading={isLoadingImage}
            onLoad={handleImageLoad}
            src={url}
            title={title}
            alt={title}
          />
          <ImageModalTitle>{title}</ImageModalTitle>
        </ImageModalContainer>
      </Modal>
    </ErrorBoundary>
  );
};

export { ImageModal };
