import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSidebarWrapper = styled.div`
  border-right: 1px solid orange;
  border-radius: 12px;
  width: 200px;
  height: 100vh;
`;

export const StyledItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  height: 40px;
  cursor: pointer;

  &:hover {
    color: orange;
    border-top: 1px solid green;
    border-bottom: 1px solid green;
    border-radius: 12px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
  width: 100%;
  color: white;
  text-decoration: none;
  display: flex;

  &:hover {
    color: orange;
  }
`;
