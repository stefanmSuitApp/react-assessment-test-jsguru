import { useNavigate } from 'react-router-dom';

import { ErrorBoundary } from '../../../ErrorBoundary';
import { INavItem } from '../../../../types/universalTypes';
import {
  HeaderContainer,
  Logo,
  NavContainer,
} from '../../../../libs/styled-components/HeaderComponent';
import { NavItem } from './components/NavItem';

export type HeaderProps = {
  logo: string;
  navItems: INavItem[];
  logoPath: string;
};

const Header = ({ logo, navItems, logoPath }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <HeaderContainer>
        <Logo onClick={() => navigate(logoPath)} src={logo} />
        <NavContainer>
          {navItems.map((navItem) => {
            const { name, path } = navItem;

            return (
              <NavItem
                key={path}
                name={name}
                path={path}
                onClick={(path) => navigate(path)}
              />
            );
          })}
        </NavContainer>
      </HeaderContainer>
    </ErrorBoundary>
  );
};

export { Header };
