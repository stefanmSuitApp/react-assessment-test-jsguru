import useGetCommentsWithPostIdQuery from '../../hooks/queries/home/useGetCommentsWithPostIdQuery';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { SingleComment } from '../../components/SingleComment';
import { ContentCenter } from '../../libs/styled-components/Universal';
import { Spinner } from '../../components/Spinner';

type Props = {
  postId: number;
};

const PostCommentSection = ({ postId }: Props) => {
  const { data: comments, isLoading: isLoadingComments } =
    useGetCommentsWithPostIdQuery(postId);

  return (
    <ErrorBoundary>
      {isLoadingComments ? (
        <ContentCenter>
          <Spinner />
        </ContentCenter>
      ) : (
        comments?.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))
      )}
    </ErrorBoundary>
  );
};

export { PostCommentSection };
