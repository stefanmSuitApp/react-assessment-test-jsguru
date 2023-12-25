import * as React from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { IPhoto } from '../types/universalTypes';
import {
  Image,
  ImageCardContainer,
  ImageLoaderConatiner,
  ImageTitle,
} from '../libs/styled-components/ImageLibraryComponent';
import { ImageModal } from './ImageModal';
import { Spinner } from './Spinner';

type Props = {
  photo: IPhoto;
};

const ImageCard = ({ photo }: Props) => {
  const { thumbnailUrl, title } = photo;

  const [isLoadingImage, setIsLoadingImage] = React.useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoadingImage(false);
  };

  return (
    <ErrorBoundary>
      <ImageCardContainer>
        {isLoadingImage && (
          <ImageLoaderConatiner>
            <Spinner />
          </ImageLoaderConatiner>
        )}
        <Image
          $loading={isLoadingImage}
          onLoad={handleImageLoad}
          onClick={() => setIsModalOpen(true)}
          src={thumbnailUrl}
          title={title}
          alt={title}
        />
        <ImageTitle>{title}</ImageTitle>
      </ImageCardContainer>
      {isModalOpen ? (
        <ImageModal
          photo={photo}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        ''
      )}
    </ErrorBoundary>
  );
};

export { ImageCard };
