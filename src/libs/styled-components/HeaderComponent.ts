import styled from 'styled-components';

import { barsColor, primaryColor } from './defaultStyles';

export const HeaderContainer = styled.header`
  background-color: ${barsColor};
  color: #fff;
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 10px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 40px;
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  height: 100%;
  gap: 25px;
`;

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavItemText = styled.span<{ selected: boolean }>`
  color: ${(props) => (props.selected ? primaryColor : 'white')};
`;
