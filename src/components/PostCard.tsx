import * as React from 'react';

import { useTranslation } from 'react-i18next';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5';

import { ErrorBoundary } from './ErrorBoundary';
import {
  Card,
  CardBody,
  CardExpandButton,
  CardExpandedContent,
  CardExpansionFallback,
  CardFooter,
  CardHeader,
  CardHeaderActionLink,
  CardHeaderMain,
  CardHeaderText,
  CardTitle,
} from '../libs/styled-components/CardComponent';
import { IPost } from '../types/universalTypes';

type Props = {
  post: IPost & { author?: string };
  icon?: React.ReactNode;
  canExpand?: boolean;
  expansionText?: string;
  contractionText?: string;
  expandedContent?: React.ReactNode;
  actionLinkText?: string;
  onActionLinkClick?: (id: number) => void;
};

const PostCard = ({
  post,
  icon,
  canExpand,
  expansionText,
  contractionText,
  expandedContent,
  actionLinkText,
  onActionLinkClick,
}: Props) => {
  const { id, body, title, author } = post;

  const [hoverArrow, setHoverArrow] = React.useState('');
  const [expanded, setExpanded] = React.useState(false);

  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <Card>
        <CardHeader>
          <CardHeaderMain>
            {icon || ''}
            <CardHeaderText>{author || t('unknownAuthor')}</CardHeaderText>
          </CardHeaderMain>
          <CardHeaderActionLink
            className="unselectable"
            onClick={() => onActionLinkClick && onActionLinkClick(id)}
          >
            {actionLinkText || t('showPost')}
          </CardHeaderActionLink>
        </CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
        {canExpand ? (
          <CardFooter>
            {expanded ? (
              <>
                {(
                  <CardExpandedContent>{expandedContent}</CardExpandedContent>
                ) || (
                  <CardExpansionFallback>
                    {t('noComments')}
                  </CardExpansionFallback>
                )}
              </>
            ) : (
              ''
            )}
            <CardExpandButton
              $expanded={expanded}
              className="unselectable"
              onMouseEnter={() => setHoverArrow('animate-bounce-arrow')}
              onMouseLeave={() => setHoverArrow('')}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  <span>{contractionText || t('showLess')}</span>
                  <IoArrowUp className={hoverArrow} />
                </>
              ) : (
                <>
                  <span>{expansionText || t('showMore')}</span>
                  <IoArrowDown className={hoverArrow} />
                </>
              )}
            </CardExpandButton>
          </CardFooter>
        ) : (
          ''
        )}
      </Card>
    </ErrorBoundary>
  );
};

export { PostCard };
