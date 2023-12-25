import { ErrorBoundary } from './ErrorBoundary';
import {
  Backdrop,
  ModalContainer,
} from '../libs/styled-components/ModalComponent';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <ErrorBoundary>
      <Backdrop onClick={onClose} />
      <ModalContainer>{children}</ModalContainer>
    </ErrorBoundary>
  );
};

export { Modal };
