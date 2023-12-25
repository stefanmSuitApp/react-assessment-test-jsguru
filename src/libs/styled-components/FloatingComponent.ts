import styled from 'styled-components';

export const FloatingContainer = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 15px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 997;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all ease-in-out 200ms;

  &:hover {
    outline: none;
    opacity: 0.95;
  }
`;
