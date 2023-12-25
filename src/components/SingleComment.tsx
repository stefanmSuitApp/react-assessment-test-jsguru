import { ErrorBoundary } from './ErrorBoundary';
import { IComment } from '../types/universalTypes';
import {
  CommentBody,
  CommentContainer,
  CommentHeader,
  CommentTitle,
} from '../libs/styled-components/CommentComponent';

type Props = {
  comment: IComment;
};

const SingleComment = ({ comment }: Props) => {
  const { body, email, name } = comment;

  return (
    <ErrorBoundary>
      <CommentContainer>
        <CommentHeader>{email}</CommentHeader>
        <CommentTitle>{name}</CommentTitle>
        <CommentBody>{body}</CommentBody>
      </CommentContainer>
    </ErrorBoundary>
  );
};

export { SingleComment };
