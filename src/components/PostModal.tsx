import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from './ErrorBoundary';
import { Modal } from './Modal';
import { IComment, IPost } from '../types/universalTypes';
import { SingleComment } from './SingleComment';
import {
  PostModalBody,
  PostModalCommentSection,
  PostModalContainer,
  PostModalHeader,
  PostModalHeaderText,
  PostModalTitle,
} from '../libs/styled-components/PostModalComponent';

type Props = {
  post: IPost & { author?: string };
  comments?: IComment[];
  icon?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const PostModal = ({ post, comments, icon, isOpen, onClose }: Props) => {
  const { body, title, author } = post;
  const { t } = useTranslation();
  return (
    <ErrorBoundary>
      <Modal isOpen={isOpen} onClose={onClose}>
        <PostModalContainer>
          <PostModalHeader>
            {icon || ''}
            <PostModalHeaderText>
              {author || t('unknownAuthor')}
            </PostModalHeaderText>
          </PostModalHeader>
          <PostModalTitle>{title}</PostModalTitle>
          <PostModalBody>{body}</PostModalBody>
          <PostModalCommentSection>
            {comments?.length
              ? comments.map((comment) => (
                  <SingleComment key={comment.id} comment={comment} />
                ))
              : ''}
          </PostModalCommentSection>
        </PostModalContainer>
      </Modal>
    </ErrorBoundary>
  );
};

export { PostModal };
