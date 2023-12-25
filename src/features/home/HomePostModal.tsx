import useGetPostWithPostIdQuery from '../../hooks/queries/home/useGetPostWithPostIdQuery';
import useGetUserNameWithUserIdQuery from '../../hooks/queries/home/useGetUserNameWithUserIdQuery';
import useGetCommentsWithPostIdQuery from '../../hooks/queries/home/useGetCommentsWithPostIdQuery';

import { IconContext } from 'react-icons';
import { PiUserCircleDuotone } from 'react-icons/pi';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { mapPostToPostWithAuthor } from './homeHelpers';
import { PostModal } from '../../components/PostModal';
import { Spinner } from '../../components/Spinner';
import { Modal } from '../../components/Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  postId: number | null;
};

const HomePostModal = ({ isOpen, onClose, postId }: Props) => {
  const { data: post, isLoading: isLoadingPost } =
    useGetPostWithPostIdQuery(postId);
  const { data: user, isLoading: isLoadingUser } =
    useGetUserNameWithUserIdQuery(post?.userId);
  const { data: comments, isLoading: isLoadingComments } =
    useGetCommentsWithPostIdQuery(post?.id);

  const postWithAuthor = mapPostToPostWithAuthor(post, user);

  const isLoading = isLoadingPost || isLoadingUser || isLoadingComments;

  return (
    <ErrorBoundary>
      {!isLoading && postWithAuthor ? (
        <PostModal
          post={postWithAuthor}
          comments={comments}
          isOpen={isOpen}
          onClose={onClose}
          icon={
            <IconContext.Provider value={{ size: '100px', color: '#fff' }}>
              <PiUserCircleDuotone />
            </IconContext.Provider>
          }
        />
      ) : (
        <Modal isOpen={isOpen} onClose={onClose}>
          <Spinner />
        </Modal>
      )}
    </ErrorBoundary>
  );
};

export { HomePostModal };
