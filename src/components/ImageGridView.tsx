import { ErrorBoundary } from './ErrorBoundary';
import { ImageCard } from './ImageCard';
import { ImageCardsContainer } from '../libs/styled-components/ImageLibraryComponent';
import { IPhoto } from '../types/universalTypes';

type Props = {
  photos: IPhoto[] | undefined;
};

const ImageGridView = ({ photos }: Props) => {
  return (
    <ErrorBoundary>
      <ImageCardsContainer>
        {photos?.map((photo) => (
          <ImageCard key={photo.id} photo={photo} />
        ))}
      </ImageCardsContainer>
    </ErrorBoundary>
  );
};

export { ImageGridView };
