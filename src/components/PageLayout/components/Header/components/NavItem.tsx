import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { ErrorBoundary } from '../../../../ErrorBoundary';
import { INavItem } from '../../../../../types/universalTypes';
import {
  NavItemContainer,
  NavItemText,
} from '../../../../../libs/styled-components/HeaderComponent';

type Props = INavItem & {
  onClick: (path: string) => void;
};

const NavItem = ({ name, path, onClick }: Props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <ErrorBoundary>
      <NavItemContainer onClick={() => onClick(path)}>
        <NavItemText
          className="unselectable"
          selected={Boolean(pathname === path)}
        >
          {t(name)}
        </NavItemText>
      </NavItemContainer>
    </ErrorBoundary>
  );
};

export { NavItem };
