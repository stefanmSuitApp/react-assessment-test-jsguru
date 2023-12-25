import * as React from 'react';

import useGetPostsQuery from '../../hooks/queries/home/useGetPostsQuery';
import useGetUserNamesQuery from '../../hooks/queries/home/useGetUserNamesQuery';

import { PiUserCircleDuotone } from 'react-icons/pi';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { PostCard } from '../../components/PostCard';
import { PostCommentSection } from './PostCommentSection';
import { HomePostModal } from './HomePostModal';
import { ContentCenter } from '../../libs/styled-components/Universal';
import { Spinner } from '../../components/Spinner';
import {
  getUserIdWithAuthorName,
  mapPostsToPostsWithAuthors,
} from './homeHelpers';

type Props = {
  search: string;
};

const PostsList = ({ search }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [postId, setPostId] = React.useState<number | null>(null);

  const observer = React.useRef<IntersectionObserver | null>(null);

  const { data: users, isLoading: isLoadingUsers } = useGetUserNamesQuery();

  const searchedAuthorIds = getUserIdWithAuthorName(users, search);

  const {
    data: posts,
    isLoading: isLoadingPosts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetPostsQuery({
    userIds: searchedAuthorIds,
  });

  const { t } = useTranslation();

  const flattenedPosts = posts ? posts.pages.flatMap((page) => page) : [];

  const postsWithAuthors = mapPostsToPostsWithAuthors(flattenedPosts, users);

  const handleActionLinkClick = (postId: number) => {
    setIsModalOpen(true);
    setPostId(postId);
  };

  const lastPostRef = React.useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  const isLoading = isLoadingPosts || isLoadingUsers;

  if (isLoading) {
    return (
      <ContentCenter>
        <Spinner />
      </ContentCenter>
    );
  }
  if (postsWithAuthors?.length === 0) {
    return <ContentCenter>{t('noPosts')}</ContentCenter>;
  }

  return (
    <ErrorBoundary>
      {postsWithAuthors?.map((post, index) => (
        <div key={post.id}>
          {index == postsWithAuthors.length - 1 ? (
            <div ref={lastPostRef} />
          ) : null}
          <PostCard
            icon={
              <IconContext.Provider value={{ size: '60px' }}>
                <PiUserCircleDuotone />
              </IconContext.Provider>
            }
            post={post}
            canExpand={true}
            expansionText={t('showComments')}
            contractionText={t('hideComments')}
            onActionLinkClick={handleActionLinkClick}
            expandedContent={<PostCommentSection postId={post.id} />}
          />
        </div>
      ))}
      {isModalOpen ? (
        <HomePostModal
          postId={postId}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        ''
      )}
    </ErrorBoundary>
  );
};

export { PostsList };
